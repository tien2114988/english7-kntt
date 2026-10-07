/* =========================================================
   English Quest 7 — engine game bản đồ phiêu lưu
   Học Tiếng Anh 7 (bộ Kết nối tri thức với cuộc sống)
   ========================================================= */
(function () {
  "use strict";

  /* ---------- tiện ích ---------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  const shuffle = (a) => {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  };
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  const STAGES = [
    { key: "vocab", icon: "📚", label: "Từ vựng" },
    { key: "listen", icon: "🎧", label: "Nghe" },
    { key: "grammar", icon: "📝", label: "Ngữ pháp" },
    { key: "boss", icon: "👑", label: "Boss" },
  ];
  const SAVE_KEY = "eq7_save_v1";
  const XP_PER_LEVEL = 300;

  /* ---------- dữ liệu SGK ---------- */
  const DATA = window.CURRICULUM || null;
  if (!DATA || !Array.isArray(DATA.units) || !DATA.units.length) {
    $("#fatal").hidden = false;
    return;
  }
  /* Sắp lộ trình: unit thường + review xen kẽ NGAY SA unit cuối mà nó ôn (theo covers) */
  const UNITS = (function arrange(raw) {
    const listed = raw.filter((u) => Array.isArray(u.vocabulary) || Array.isArray(u.quiz));
    const units = listed.filter((u) => (u.type || "unit") === "unit");
    const reviews = listed.filter((u) => u.type === "review");
    const out = [];
    const pending = reviews.slice();
    units.forEach((u, i) => {
      out.push(u);
      /* review được đặt sau unit có id lớn nhất trong danh sách covers của nó */
      const place = pending.filter((r) => {
        const cs = Array.isArray(r.covers) ? r.covers : [];
        const idxs = cs
          .map((cid) => units.findIndex((x) => x.id === cid))
          .filter((x) => x >= 0);
        return idxs.length ? Math.max.apply(null, idxs) === i : false;
      });
      place.forEach((r) => { pending.splice(pending.indexOf(r), 1); out.push(r); });
    });
    pending.forEach((r) => out.push(r));
    return out;
  })(DATA.units);
  let reviewNo = 0;
  UNITS.forEach((u) => { if (u.type === "review") u.rNo = ++reviewNo; });

  /* ---------- trạng thái ---------- */
  const fresh = () => ({
    xp: 0,
    stars: {},
    learned: {},
    bestCombo: 0,
    totalCorrect: 0,
    sound: true,
    streak: { n: 0, last: "" },
    ach: {},
    started: false,
  });
  let S = fresh();
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) S = Object.assign(fresh(), JSON.parse(raw));
  } catch (e) { /* bỏ qua */ }
  const save = () => {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) { /* bỏ qua */ }
  };
  const starsOf = (id) => S.stars[id] || (S.stars[id] = { vocab: 0, listen: 0, grammar: 0, boss: 0 });
  const unitCleared = (u) => {
    const st = S.stars[u.id];
    if (!st) return false;
    return stageKeysOf(u).every((k) => (st[k] || 0) >= 1);
  };
  const unitUnlocked = (idx) => idx === 0 || unitCleared(UNITS[idx - 1]);
  const totalStars = () =>
    Object.values(S.stars).reduce((s, o) => s + Object.values(o).reduce((a, b) => a + b, 0), 0);

  /* ---------- âm thanh ---------- */
  let AC = null;
  const ac = () => (AC = AC || new (window.AudioContext || window.webkitAudioContext)());
  function tone(freq, dur, type, delay, vol) {
    if (!S.sound) return;
    try {
      const c = ac();
      const o = c.createOscillator(), g = c.createGain();
      const t = c.currentTime + (delay || 0);
      o.type = type || "sine";
      o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol || 0.16, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + (dur || 0.18));
      o.connect(g); g.connect(c.destination);
      o.start(t); o.stop(t + (dur || 0.18) + 0.05);
    } catch (e) { /* bỏ qua */ }
  }
  const snd = {
    click: () => tone(520, 0.07, "triangle", 0, 0.1),
    ok: () => { tone(660, 0.12, "sine", 0); tone(880, 0.16, "sine", 0.1); },
    no: () => { tone(200, 0.2, "sawtooth", 0, 0.12); tone(150, 0.24, "sawtooth", 0.12, 0.1); },
    win: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.22, "triangle", i * 0.12, 0.16)),
    star: () => tone(1200, 0.14, "sine", 0, 0.12),
  };

  /* ---------- phát âm (TTS) ---------- */
  let EN_VOICE = null;
  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices() || [];
    EN_VOICE =
      vs.find((v) => /en[-_]US/i.test(v.lang) && /google|samantha|ava|female/i.test(v.name)) ||
      vs.find((v) => /en[-_]US/i.test(v.lang)) ||
      vs.find((v) => /^en/i.test(v.lang)) || null;
  }
  if ("speechSynthesis" in window) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }
  function speak(text, btn) {
    if (!text || !("speechSynthesis" in window)) return;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(String(text));
      u.lang = "en-US";
      u.rate = 0.9;
      if (EN_VOICE) u.voice = EN_VOICE;
      if (btn) {
        btn.classList.add("is-playing");
        u.onend = u.onerror = () => btn.classList.remove("is-playing");
      }
      speechSynthesis.speak(u);
    } catch (e) { /* bỏ qua */ }
  }

  /* ---------- hiệu ứng ---------- */
  const CONF_COLORS = ["#6C4CF1", "#FF5EA8", "#FFC93C", "#2ED47A", "#8ED8FF", "#FF8A3D"];
  function confetti(n) {
    const box = $("#confetti");
    for (let i = 0; i < (n || 46); i++) {
      const el = document.createElement("i");
      el.className = "conf";
      el.style.left = Math.random() * 100 + "vw";
      el.style.background = pick(CONF_COLORS);
      el.style.animationDuration = 1.4 + Math.random() * 1.4 + "s";
      el.style.animationDelay = Math.random() * 0.4 + "s";
      el.style.width = 8 + Math.random() * 8 + "px";
      el.style.height = 12 + Math.random() * 10 + "px";
      box.appendChild(el);
      setTimeout(() => el.remove(), 3400);
    }
  }
  let toastT = null;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("is-on");
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove("is-on"), 2600);
  }
  function xpPop(n) {
    const el = document.createElement("div");
    el.className = "xp-pop";
    el.textContent = "+" + n + " XP";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }

  /* ---------- màn hình ---------- */
  function show(name) {
    $$(".screen").forEach((s) => s.classList.remove("is-active"));
    $("#screen-" + name).classList.add("is-active");
    document.body.dataset.screen = name;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------- HUD / thống kê ---------- */
  function renderHUD() {
    const lvl = Math.floor(S.xp / XP_PER_LEVEL) + 1;
    const into = S.xp % XP_PER_LEVEL;
    $("#levelBadge").textContent = "Lv " + lvl;
    $("#xpFill").style.width = (into / XP_PER_LEVEL) * 100 + "%";
    $("#xpLabel").textContent = into + "/" + XP_PER_LEVEL + " XP";
    $("#hudStars").textContent = totalStars();
    $("#hudStreak").textContent = S.streak.n;
    $("#btnSound").textContent = S.sound ? "🔊" : "🔇";
    $("#statXp").textContent = S.xp;
    $("#statStars").textContent = totalStars();
    $("#statUnits").textContent = UNITS.filter(unitCleared).length;
    let w = 0;
    Object.keys(S.learned).forEach((k) => { if (S.learned[k]) w++; });
    $("#statWords").textContent = w;
    $("#btnPlay").textContent = S.started ? "▶ Chơi tiếp" : "🚀 Bắt đầu";
    const sub = $("#heroSub");
    if (sub) {
      const nU = UNITS.filter((u) => (u.type || "unit") !== "review").length;
      const nR = UNITS.length - nU;
      sub.textContent =
        "Hành trình chinh phục " + nU + " Units" + (nR ? " + " + nR + " lần Ôn tập" : "") +
        " · từ vựng · nghe · ngữ pháp · Boss";
    }
  }

  function touchStreak() {
    const today = new Date().toISOString().slice(0, 10);
    if (S.streak.last === today) { if (!S.streak.n) S.streak.n = 1; return; }
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    S.streak.n = S.streak.last === y ? S.streak.n + 1 : 1;
    S.streak.last = today;
    if (S.streak.n > 1) toast("🔥 Chuỗi " + S.streak.n + " ngày học liên tiếp!");
  }

  /* ---------- thành tích ---------- */
  const ACH = [
    { id: "start", ico: "🐣", n: "Những bước đầu", d: "Hoàn thành màn đầu tiên", t: () => totalStars() >= 1 },
    { id: "u1", ico: "🗺️", n: "Chinh phục Unit 1", d: "Đánh bại Boss Unit 1", t: () => UNITS.length > 0 && (S.stars[UNITS[0].id] || {}).boss >= 1 },
    { id: "s10", ico: "⭐", n: "10 ngôi sao", d: "Gom 10 sao", t: () => totalStars() >= 10 },
    { id: "s30", ico: "🌟", n: "30 ngôi sao", d: "Gom 30 sao", t: () => totalStars() >= 30 },
    { id: "c10", ico: "🔥", n: "Combo 10", d: "Trả lời đúng 10 câu liên tiếp", t: () => S.bestCombo >= 10 },
    { id: "w25", ico: "📚", n: "25 từ mới", d: "Học chắc 25 từ", t: () => Object.values(S.learned).filter(Boolean).length >= 25 },
    { id: "w60", ico: "🎓", n: "60 từ mới", d: "Học chắc 60 từ", t: () => Object.values(S.learned).filter(Boolean).length >= 60 },
    { id: "x500", ico: "⚡", n: "500 XP", d: "Kiếm 500 XP", t: () => S.xp >= 500 },
    { id: "half", ico: "🧭", n: "Nửa hành trình", d: "Đi qua một nửa lộ trình", t: () => UNITS.filter(unitCleared).length >= Math.ceil(UNITS.length / 2) },
    { id: "all", ico: "🏆", n: "Nhà vô địch", d: "Hoàn thành toàn bộ lộ trình", t: () => UNITS.every(unitCleared) },
  ];
  function checkAch() {
    ACH.forEach((a) => {
      if (!S.ach[a.id] && a.t()) {
        S.ach[a.id] = true;
        toast("🏅 Mở khoá thành tích: " + a.n + "!");
        snd.star();
      }
    });
    save();
  }
  function renderAch() {
    $("#achGrid").innerHTML = ACH.map((a) => {
      const on = !!S.ach[a.id];
      return `<div class="ach ${on ? "is-on" : "is-off"}"><span class="ach-ico">${a.ico}</span><b>${esc(a.n)}</b><span>${esc(a.d)}</span></div>`;
    }).join("");
  }

  /* ---------- từ vựng / sổ từ ---------- */
  function renderWordbook() {
    const kw = ($("#wbSearch").value || "").trim().toLowerCase();
    const rows = [];
    UNITS.forEach((u, i) => {
      if (!unitUnlocked(i)) return;
      (u.vocabulary || []).forEach((w) => {
        const learned = !!S.learned[w.en];
        const hay = (w.en + " " + w.vi).toLowerCase();
        if (kw && hay.indexOf(kw) < 0) return;
        rows.push(
          `<div class="wb-item">
             <div style="min-width:110px">
               <b>${esc(w.en)}</b>
               ${w.ipa ? `<div class="wb-ex">${esc(w.ipa)}</div>` : ""}
             </div>
             <div class="wb-mean">${esc(w.vi)}
               ${w.example ? `<div class="wb-ex">${esc(w.example)}</div>` : ""}
             </div>
             <span class="wb-unit">${learned ? "✓ đã học" : esc("Unit " + u.id)}</span>
             <button class="btn--mini" data-say="${esc(w.en)}" aria-label="Nghe ${esc(w.en)}">🔊</button>
           </div>`
        );
      });
    });
    $("#wbList").innerHTML = rows.length
      ? rows.join("")
      : `<div class="wb-empty">Chưa có từ nào ở đây. Hãy hoàn thành màn 📚 Từ vựng của unit đầu tiên nhé!</div>`;
  }

  /* ---------- tạo câu hỏi ---------- */
  function uniqOpts(correct, others) {
    const seen = new Set([correct]);
    const out = [correct];
    for (const o of others) {
      if (!o || seen.has(o)) continue;
      seen.add(o);
      out.push(o);
      if (out.length === 4) break;
    }
    while (out.length < 4) out.push(correct + out.length);
    return out;
  }
  function mcq(prompt, display, correct, others, explain, opts2) {
    let opts;
    if (opts2) opts = uniqOpts(correct, others).slice(0, 2);
    else opts = shuffle(uniqOpts(correct, others));
    return {
      kind: "mcq",
      prompt, display,
      options: opts,
      answer: opts.indexOf(correct),
      explain: explain || "",
    };
  }
  function meaningToWord(w, unit) {
    const others = shuffle((unit.vocabulary || []).filter((x) => x.en !== w.en)).map((x) => x.en);
    return mcq('Từ tiếng Anh nào có nghĩa là "' + w.vi + '"?', null, w.en, others,
      w.en + " = " + w.vi + (w.example ? " — VD: " + w.example : ""));
  }
  function wordToMeaning(w, unit) {
    const others = shuffle((unit.vocabulary || []).filter((x) => x.vi !== w.vi)).map((x) => x.vi);
    return mcq("Nghĩa của từ này là gì?", w.en, w.vi, others,
      w.en + " = " + w.vi + (w.ipa ? "  " + w.ipa : ""));
  }
  function listenMeaning(text, correctVi, allEx, explain) {
    const others = shuffle(allEx.filter((x) => x !== correctVi));
    const q = {
      kind: "listen",
      prompt: "Nghe và chọn nghĩa đúng",
      speak: text,
      options: shuffle(uniqOpts(correctVi, others)),
      explain: explain || "",
    };
    q.answer = q.options.indexOf(correctVi);
    return q;
  }
  function fillFromExample(ex) {
    const words = String(ex.en).split(/\s+/);
    if (words.length < 4) return null;
    const idx = Math.max(1, words.length - 2);
    const ans = words[idx].replace(/[.,!?]/g, "");
    const shown = words.map((w, i) => (i === idx ? "______" : w)).join(" ");
    return {
      kind: "fill",
      prompt: "Điền từ còn thiếu vào câu",
      display: shown,
      answer: ans,
      alt: [ans],
      explain: ex.en + " — " + (ex.vi || ""),
    };
  }
  function quizItemToQ(it) {
    if (it.type === "mcq" && Array.isArray(it.options)) {
      const opts = it.options.slice();
      const a = typeof it.answer === "number" ? it.answer : opts.indexOf(it.answer);
      return { kind: "mcq", prompt: it.q || "Chọn đáp án đúng", options: opts, answer: a, explain: it.explain || "" };
    }
    if (it.type === "fill") {
      const alts = [].concat(it.alt || [], [it.answer]).filter(Boolean).map((x) => String(x).trim());
      return {
        kind: "fill",
        prompt: "Điền đáp án vào chỗ trống",
        display: String(it.q).replace(/_{2,}/g, "______"),
        answer: alts[0], alt: alts,
        hint: it.hint || "", explain: it.explain || "",
      };
    }
    if (it.type === "reorder") {
      const words = Array.isArray(it.words) ? it.words.slice() : String(it.answer).split(/\s+/);
      return {
        kind: "reorder",
        prompt: it.q || "Sắp xếp thành câu có nghĩa",
        display: it.vi || "",
        words: words,
        answer: String(it.answer).trim(),
        alt: (it.alt || []).map((x) => String(x).trim()),
        explain: it.explain || (it.answer + (it.vi ? " — " + it.vi : "")),
      };
    }
    if (it.type === "match") {
      return null;
    }
    return null;
  }

  /* bộ câu hỏi theo màn */
  function stageKeysOf(u) {
    const ks = [];
    if ((u.vocabulary || []).length) ks.push("vocab");
    if ((u.vocabulary || []).length || (u.patterns || []).length) ks.push("listen");
    if ((u.quiz || []).length || (u.grammar && (u.grammar.examples || []).length)) ks.push("grammar");
    ks.push("boss");
    return ks;
  }

  function vocabQuestions(u) {
    const ws = shuffle(u.vocabulary || []);
    const qs = [];
    ws.slice(0, 4).forEach((w) => qs.push(wordToMeaning(w, u)));
    ws.slice(4, 8).forEach((w) => qs.push(meaningToWord(w, u)));
    if (qs.length < 4) (u.vocabulary || []).forEach((w) => qs.push(wordToMeaning(w, u)));
    return qs.slice(0, 8);
  }
  function listenQuestions(u) {
    const qs = [];
    const ws = shuffle(u.vocabulary || []);
    const sentences = shuffle([].concat(
      (u.vocabulary || []).filter((w) => w.example).map((w) => ({ s: w.example, vi: w.exVi || w.vi, why: w.en + " = " + w.vi })),
      (u.patterns || []).map((p) => ({ s: p.en, vi: p.vi, why: p.en + " — " + p.vi }))
    ));
    const allVi = [].concat(
      (u.vocabulary || []).map((w) => w.vi),
      (u.patterns || []).map((p) => p.vi)
    );
    ws.slice(0, 3).forEach((w) => {
      qs.push(listenMeaning(w.en, w.vi, allVi, w.en + " = " + w.vi));
    });
    sentences.slice(0, 3).forEach((x) => {
      const others = [].concat(
        (u.vocabulary || []).map((w) => w.vi),
        (u.patterns || []).map((p) => p.vi)
      );
      qs.push(listenMeaning(x.s, x.vi, others, x.why));
    });
    return qs;
  }
  function grammarQuestions(u) {
    let qs = (u.quiz || []).map(quizItemToQ).filter(Boolean);
    if (qs.length < 4 && u.grammar && (u.grammar.examples || []).length) {
      const exs = u.grammar.examples.filter((e) => e && e.en && e.vi);
      exs.forEach((ex) => {
        const q = fillFromExample(ex);
        if (q) qs.push(q);
      });
      exs.forEach((ex, i) => {
        const others = exs.filter((e, j) => j !== i).map((e) => e.en);
        if (others.length >= 1) {
          const m = mcq('Câu nào có nghĩa: "' + ex.vi + '"?', null, ex.en, others, ex.en + " — " + ex.vi);
          qs.push(m);
        }
      });
    }
    return qs.slice(0, 8);
  }
  function bossQuestions(u) {
    const v = vocabQuestions(u), l = listenQuestions(u), g = grammarQuestions(u);
    const out = [];
    const take = (arr, n) => shuffle(arr).slice(0, n);
    out.push.apply(out, take(v, 3));
    out.push.apply(out, take(l, 2));
    out.push.apply(out, take(g, 3));
    return out;
  }

  /* ---------- vòng chơi ---------- */
  let run = null;

  function startStage(unitIdx, stageKey) {
    const u = UNITS[unitIdx];
    let qs = [];
    if (stageKey === "vocab") qs = vocabQuestions(u);
    else if (stageKey === "listen") qs = listenQuestions(u);
    else if (stageKey === "grammar") qs = grammarQuestions(u);
    else qs = bossQuestions(u);

    if (!qs.length) {
      toast("Unit này chưa có câu hỏi cho màn này.");
      return;
    }
    run = {
      ui: unitIdx, unit: u, key: stageKey,
      phase: stageKey === "vocab" ? "flash" : "quiz",
      cards: stageKey === "vocab" ? (u.vocabulary || []).slice(0, 10) : [],
      ci: 0,
      qs: qs, qi: 0,
      maxHearts: stageKey === "boss" ? 3 : 5,
      hearts: stageKey === "boss" ? 3 : 5,
      correct: 0, combo: 0, bestCombo: 0, xp: 0,
      answered: false,
    };
    S.started = true;
    touchStreak();
    save();
    renderHUD();
    show("stage");
    renderStageChrome();
    if (run.phase === "flash") renderFlash();
    else renderQuestion();
    snd.click();
  }

  function renderStageChrome() {
    const u = run.unit;
    $("#stageTitle").textContent = u.title;
    const st = starsOf(u.id);
    const keys = stageKeysOf(u);
    $("#stageTabs").innerHTML = STAGES.filter((s) => keys.indexOf(s.key) >= 0)
      .map((s) => {
        const active = run.key === s.key;
        const done = (st[s.key] || 0) >= 1;
        const order = keys.indexOf(s.key);
        const beforeDone = keys.slice(0, order).every((k) => (st[k] || 0) >= 1);
        const locked = !active && !beforeDone;
        const stars = "⭐".repeat(st[s.key] || 0) || "";
        return `<div class="tab ${active ? "is-active" : ""} ${done && !active ? "is-done" : ""} ${locked ? "is-locked" : ""}">
          <span>${s.icon}</span>${esc(s.label)} <span class="tab-star">${stars}</span></div>`;
      }).join("");
    renderHearts();
    $("#feedback").innerHTML = "";
    setBar(run.phase === "flash" ? 0 : 0);
  }
  function setBar(pct) { $("#qProgress").style.width = clamp(pct, 0, 100) + "%"; }
  function renderHearts() {
    let h = "";
    for (let i = 0; i < run.maxHearts; i++) h += `<span class="${i < run.hearts ? "" : "lost"}">❤️</span>`;
    $("#hearts").innerHTML = h;
  }

  /* ----- màn flashcard ----- */
  function renderFlash() {
    const c = run.cards[run.ci];
    const total = run.cards.length;
    setBar((run.ci / total) * 100);
    $("#quizArea").innerHTML = `
      <div class="flash" id="flash">
        <div class="flash__inner">
          <div class="flash__face flash__front">
            <div class="flash__word">${esc(c.en)}</div>
            ${c.ipa ? `<div class="flash__ipa">${esc(c.ipa)}</div>` : ""}
            <button class="speak-btn" id="flashSay" aria-label="Nghe phát âm">🔊</button>
            <div class="flash__tap">Bấm thẻ để xem nghĩa ▸</div>
          </div>
          <div class="flash__face flash__back">
            <div class="flash__mean">${esc(c.vi)}</div>
            ${c.example ? `<div class="flash__ex">${esc(c.example)}${c.exVi ? "<i>" + esc(c.exVi) + "</i>" : ""}</div>` : ""}
            <div class="flash__tap">◂ Bấm để lật lại</div>
          </div>
        </div>
      </div>
      <div class="flash-nav">
        <button class="btn btn--ghost" id="flashPrev" ${run.ci === 0 ? "disabled" : ""}>← Trước</button>
        <span class="flash-count">${run.ci + 1}/${total}</span>
        <button class="btn btn--primary" id="flashNext">${run.ci === total - 1 ? "Kiểm tra ➜" : "Tiếp →"}</button>
      </div>`;
    const fl = $("#flash");
    fl.addEventListener("click", (e) => {
      if (e.target.closest("#flashSay")) return;
      fl.classList.toggle("is-flipped");
      snd.click();
    });
    $("#flashSay").addEventListener("click", (e) => { e.stopPropagation(); speak(c.en, e.currentTarget); });
    $("#flashPrev").addEventListener("click", () => { if (run.ci > 0) { run.ci--; renderFlash(); snd.click(); } });
    $("#flashNext").addEventListener("click", () => {
      snd.click();
      if (run.ci < run.cards.length - 1) { run.ci++; renderFlash(); }
      else {
        run.phase = "quiz";
        markWordsLearned();
        renderStageChrome();
        renderQuestion();
      }
    });
  }
  function markWordsLearned() {
    (run.unit.vocabulary || []).forEach((w) => { if (w.en) S.learned[w.en] = true; });
    save();
  }

  /* ----- màn câu hỏi ----- */
  function renderQuestion() {
    run.answered = false;
    const q = run.qs[run.qi];
    setBar((run.qi / run.qs.length) * 100);
    $("#feedback").innerHTML = "";

    const kindLabel = { mcq: "Chọn đáp án", listen: "Nghe", fill: "Điền chỗ trống", reorder: "Xếp câu" }[q.kind] || "";
    const kindIcon = { mcq: "🎯", listen: "🎧", fill: "✏️", reorder: "🧩" }[q.kind] || "❓";
    let body = "";

    if (q.kind === "mcq" || q.kind === "listen") {
      body = `
        ${q.display ? `<div class="qword">${esc(q.display)}</div>` : ""}
        ${q.kind === "listen" ? `<button class="speak-btn" id="qSay" aria-label="Nghe lại">🔊</button>` : ""}
        <div class="opts opts--2">
          ${q.options.map((o, i) =>
            `<button class="opt" data-i="${i}"><span class="opt-key">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`
          ).join("")}
        </div>`;
    } else if (q.kind === "fill") {
      body = `
        <div class="qword" style="font-size:clamp(1.15rem,4.6vw,1.9rem)">${esc(q.display || q.prompt)}</div>
        ${q.hint ? `<p class="qhint">Gợi ý: ${esc(q.hint)}</p>` : ""}
        <div class="input-row">
          <input id="fillIn" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Nhập đáp án..." aria-label="Nhập đáp án" />
          <button class="btn btn--primary" id="fillGo">Kiểm tra</button>
        </div>`;
    } else if (q.kind === "reorder") {
      const bank = shuffle(q.words);
      body = `
        ${q.display ? `<p class="qhint">Nghĩa: ${esc(q.display)}</p>` : ""}
        <div class="tray" id="tray" aria-label="Câu của bạn"></div>
        <div class="bank" id="bank">${bank.map((w, i) => `<button class="chip" data-w="${i}">${esc(w)}</button>`).join("")}</div>
        <div class="input-row">
          <button class="btn btn--primary" id="ordGo">Kiểm tra</button>
          <button class="btn btn--ghost" id="ordClear">↺ Làm lại</button>
        </div>`;
    }

    $("#quizArea").innerHTML = `
      <div class="qcard">
        <span class="qkind">${kindIcon} ${kindLabel} · ${run.qi + 1}/${run.qs.length}</span>
        <p class="qtext">${esc(q.prompt)}</p>
        ${body}
      </div>`;

    if (q.kind === "listen") {
      const b = $("#qSay");
      setTimeout(() => speak(q.speak, b), 350);
      b.addEventListener("click", () => speak(q.speak, b));
    }
    if (q.kind === "mcq") {
      $$(".opt").forEach((btn) => btn.addEventListener("click", () => answer(parseInt(btn.dataset.i, 10))));
      const onKey = (e) => {
        const k = e.key.toUpperCase();
        const i = "ABCD".indexOf(k);
        if (i >= 0 && i < q.options.length && !run.answered) answer(i);
        if (/^[1-4]$/.test(k) && !run.answered && parseInt(k, 10) <= q.options.length) answer(parseInt(k, 10) - 1);
      };
      document.addEventListener("keydown", onKey, { once: false });
      run._keyHandler = onKey;
    }
    if (q.kind === "fill") {
      const inp = $("#fillIn");
      setTimeout(() => inp && inp.focus(), 120);
      $("#fillGo").addEventListener("click", () => answerFill(inp.value));
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") answerFill(inp.value); });
    }
    if (q.kind === "reorder") initReorder(q);
  }

  function initReorder(q) {
    const bank = $("#bank"), tray = $("#tray");
    run.ord = [];
    bank.addEventListener("click", (e) => {
      const c = e.target.closest(".chip");
      if (!c || run.answered) return;
      snd.click();
      c.classList.add("is-used");
      run.ord.push({ w: q.words[parseInt(c.dataset.w, 10)], el: c });
      drawTray();
    });
    tray.addEventListener("click", (e) => {
      const c = e.target.closest(".chip");
      if (!c || run.answered) return;
      snd.click();
      const i = Array.prototype.indexOf.call(tray.children, c);
      const item = run.ord.splice(i, 1)[0];
      if (item) item.el.classList.remove("is-used");
      drawTray();
    });
    function drawTray() {
      tray.innerHTML = run.ord.map((x) => `<span class="chip">${esc(x.w)}</span>`).join("");
    }
    $("#ordClear").addEventListener("click", () => { run.ord = []; $$("#bank .chip").forEach((c) => c.classList.remove("is-used")); tray.innerHTML = ""; snd.click(); });
    $("#ordGo").addEventListener("click", () => {
      if (!run.ord.length) { toast("Hãy bấm các từ để lắp câu trước nhé!"); return; }
      const built = run.ord.map((x) => x.w).join(" ");
      answerText(built, [q.answer].concat(q.alt || []));
    });
  }

  const norm = (s) =>
    String(s).toLowerCase().replace(/[’']/g, "'").replace(/[.,!?;:]/g, "").replace(/\s+/g, " ").trim();

  function answerFill(val) {
    const q = run.qs[run.qi];
    const v = String(val || "").trim();
    if (!v) { toast("Hãy nhập đáp án trước nhé!"); return; }
    answerText(v, (q.alt || []).concat([q.answer]));
  }
  function answerText(val, acceptList) {
    if (!run || run.answered || run.finished) return;
    const ok = acceptList.some((a) => norm(a) === norm(val));
    resolve(ok, null);
  }

  function answer(i) {
    if (!run || run.answered || run.finished) return;
    const q = run.qs[run.qi];
    resolve(i === q.answer, i);
  }

  function resolve(ok, chosenIdx) {
    const q = run.qs[run.qi];
    if (run.answered || run.finished) return;
    run.answered = true;
    if (run._keyHandler) { document.removeEventListener("keydown", run._keyHandler); run._keyHandler = null; }

    if (chosenIdx != null) {
      $$(".opt").forEach((b, i) => {
        b.disabled = true;
        if (i === q.answer) b.classList.add("is-right");
        else if (i === chosenIdx) b.classList.add("is-wrong");
      });
    }
    if (ok) {
      run.correct++; run.combo++; run.bestCombo = Math.max(run.bestCombo, run.combo);
      run.xp += 10;
      S.xp += 10; S.totalCorrect++;
      snd.ok(); xpPop(10);
      if (run.combo > 0 && run.combo % 5 === 0) confetti(18);
    } else {
      run.combo = 0;
      run.hearts--;
      renderHearts();
      snd.no();
      if (chosenIdx != null) {
        const el = $$(".opt")[q.answer];
        if (el) el.classList.add("is-right");
      }
    }
    save();
    renderHUD();

    const fb = $("#feedback");
    if (run.hearts <= 0) {
      fb.innerHTML = `<div class="fb fb--no">
          <span class="fb__icon">💔</span>
          <span class="fb__txt">Hết tim rồi! Đừng nản — học lại một lượt là qua ngay.
            <small>Đáp án đúng: <b>${esc(q.answer != null && q.options ? q.options[q.answer] : q.answer)}</b>${q.explain ? " · " + esc(q.explain) : ""}</small></span>
          <button class="btn btn--primary" id="fbRetry">🔁 Thử lại</button>
        </div>`;
      $("#fbRetry").addEventListener("click", () => startStage(run.ui, run.key));
      return;
    }
    fb.innerHTML = `<div class="fb ${ok ? "fb--ok" : "fb--no"}">
        <span class="fb__icon">${ok ? "🎉" : "💡"}</span>
        <span class="fb__txt">${ok ? pick(["Chính xác!", "Quá giỏi!", "Đúng rồi!", "Tuyệt vời!"]) : "Chưa đúng rồi"}
          ${q.explain ? `<small>${esc(q.explain)}</small>` : ""}
          ${!ok && q.answer != null ? `<small>Đáp án đúng: <b>${esc(q.options ? q.options[q.answer] : q.answer)}</b></small>` : ""}
          ${ok && run.combo >= 3 ? `<small>🔥 Combo x${run.combo}!</small>` : ""}
        </span>
        <button class="btn btn--primary" id="fbNext">${run.qi === run.qs.length - 1 ? "Xem kết quả ➜" : "Tiếp tục →"}</button>
      </div>`;
    $("#fbNext").addEventListener("click", nextQuestion);
    $("#fbNext").focus({ preventScroll: true });
  }

  function nextQuestion() {
    if (!run || run.finished) return;
    snd.click();
    const btn = $("#fbNext");
    if (btn) btn.disabled = true;
    if (run.qi < run.qs.length - 1) {
      run.qi++;
      renderQuestion();
    } else {
      finishStage();
    }
  }

  /* ---------- kết thúc màn ---------- */
  function finishStage() {
    if (!run || run.finished) return;
    run.finished = true;
    const total = run.qs.length;
    const acc = run.correct / total;
    const stars = acc >= 0.9 ? 3 : acc >= 0.75 ? 2 : acc >= 0.6 ? 1 : 0;
    const st = starsOf(run.unit.id);
    const prev = st[run.key] || 0;
    st[run.key] = Math.max(prev, stars);
    const bonus = stars * 20;
    S.xp += bonus;
    run.xp += bonus;
    S.bestCombo = Math.max(S.bestCombo, run.bestCombo);
    if (run.key === "vocab") markWordsLearned();
    save();

    const justClearedBoss = run.key === "boss" && stars >= 1;
    $("#resultStars").innerHTML = stars
      ? [0, 1, 2].slice(0, stars).map(() => "<span>⭐</span>").join("")
      : "<span>💪</span>";
    $("#resultTitle").textContent = stars === 3 ? "Xuất sắc!" : stars === 2 ? "Giỏi lắm!" : stars === 1 ? "Hoàn thành!" : "Thử lại nhé!";
    $("#resultMsg").textContent =
      run.unit.title + " · " + run.correct + "/" + total + " câu đúng" +
      (bonus ? " · +" + bonus + " bonus sao" : "");
    $("#resXp").textContent = "+" + run.xp;
    $("#resAcc").textContent = Math.round(acc * 100) + "%";
    $("#resCombo").textContent = run.bestCombo;
    show("result");
    if (stars >= 1) { confetti(stars === 3 ? 70 : 40); snd.win(); }
    checkAch();
    renderHUD();
  }

  /* ---------- bản đồ ---------- */
  function renderMap() {
    const host = $("#mapNodes");
    let html = "";
    let currentSet = false;
    UNITS.forEach((u, i) => {
      const unlocked = unitUnlocked(i);
      const st = S.stars[u.id] || {};
      const sum = Object.values(st).reduce((a, b) => a + (b || 0), 0);
      const max = stageKeysOf(u).length * 3;
      const cleared = unitCleared(u);
      const inProgress = unlocked && !cleared && sum > 0;
      const isCurrent = unlocked && !cleared && !currentSet;
      if (isCurrent) currentSet = true;
      const color = u.color || "#6C4CF1";
      const tag = !unlocked
        ? `<span class="node-tag node-tag--lock">🔒 Chưa mở</span>`
        : cleared
          ? `<span class="node-tag node-tag--done">✓ Đã chinh phục</span>`
          : `<span class="node-tag">${inProgress ? "đang học" : "sẵn sàng"}</span>`;
      html += `
        <div class="node-row">
          <button class="node-btn ${unlocked ? "" : "is-locked"} ${isCurrent ? "is-current" : ""}"
                  style="--node:${color}" data-i="${i}" ${unlocked ? "" : "disabled"}
                  aria-label="${esc(u.title)}${unlocked ? "" : " (chưa mở)"}">
            <span class="node-num">${u.type === "review" ? "R" + u.rNo : "U" + u.id}</span>
            <span class="node-icon">${unlocked ? esc(u.icon || "🏝️") : "🔒"}</span>
          </button>
          <div class="node-info ${unlocked ? "" : "is-locked"}">
            ${tag}
            <h3>${esc(u.title)}</h3>
            <p>${esc(u.topic || "")}</p>
            <div class="node-stars">${"⭐".repeat(Math.min(sum, max))}${max && sum < max ? '<span style="opacity:.35">' + "⭐".repeat(max - sum) + "</span>" : ""}</div>
            ${unlocked && !cleared ? `<button class="btn btn--primary" data-play="${i}">${inProgress ? "▶ Chơi tiếp" : "▶ Bắt đầu"}</button>` : ""}
            ${cleared ? `<button class="btn btn--ghost" data-play="${i}">🔁 Ôn lại</button>` : ""}
          </div>
        </div>`;
    });
    host.innerHTML = html;
    $("#mapChapter").textContent =
      "Đã chinh phục " + UNITS.filter(unitCleared).length + "/" + UNITS.length + " chặng · " +
      totalStars() + " sao · " + (DATA.book || "");
    host.querySelectorAll(".node-btn, [data-play]").forEach((el) => {
      el.addEventListener("click", () => {
        const i = parseInt(el.dataset.i != null ? el.dataset.i : el.dataset.play, 10);
        openUnit(i);
      });
    });
    requestAnimationFrame(drawPath);
    setTimeout(drawPath, 250);
  }

  function drawPath() {
    const track = $("#mapTrack");
    const svg = $("#mapSvg");
    const path = $("#mapPath");
    const tr = track.getBoundingClientRect();
    if (!tr.width) return;
    svg.setAttribute("viewBox", `0 0 ${Math.round(tr.width)} ${Math.round(tr.height)}`);
    const btns = $$(".node-btn", track);
    if (btns.length < 2) { path.setAttribute("d", ""); return; }
    const pts = btns.map((b) => {
      const r = b.getBoundingClientRect();
      return { x: r.left - tr.left + r.width / 2, y: r.top - tr.top + r.height / 2 };
    });
    let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for (let i = 1; i < pts.length; i++) {
      const p = pts[i], q = pts[i - 1];
      const my = ((p.y + q.y) / 2).toFixed(1);
      d += ` C ${q.x.toFixed(1)} ${my}, ${p.x.toFixed(1)} ${my}, ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
    }
    path.setAttribute("d", d);
  }
  window.addEventListener("resize", () => { if ($("#screen-map").classList.contains("is-active")) drawPath(); });

  /* mở unit: chọn màn chưa xong tiếp theo */
  function openUnit(i) {
    const u = UNITS[i];
    const st = starsOf(u.id);
    const keys = stageKeysOf(u);
    let next = keys.find((k, idx) => {
      const before = keys.slice(0, idx).every((b) => (st[b] || 0) >= 1);
      return before && (st[k] || 0) < 1;
    });
    if (!next) next = keys.find((k) => (st[k] || 0) < 3) || keys[keys.length - 1];
    startStage(i, next);
  }

  /* ---------- modal ---------- */
  function openModal(id) { $("#" + id).hidden = false; snd.click(); }
  function closeModals() { $$(".modal").forEach((m) => (m.hidden = true)); }
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) closeModals();
    if (e.target.classList.contains("modal")) closeModals();
    const say = e.target.closest("[data-say]");
    if (say) speak(say.dataset.say, say);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModals(); });

  /* ---------- sự kiện tổng ---------- */
  $("#btnPlay").addEventListener("click", () => { snd.click(); show("map"); renderMap(); });
  $("#btnHome").addEventListener("click", () => { snd.click(); renderHUD(); show("home"); });
  $("#btnBack").addEventListener("click", () => {
    snd.click();
    if (run && run.phase === "flash" && run.ci > 0 && !confirm("Rời màn học? Tiến độ sẽ không được lưu."))
      return;
    show("map"); renderMap();
  });
  $("#btnToMap").addEventListener("click", () => { snd.click(); show("map"); renderMap(); });
  $("#btnRetry").addEventListener("click", () => { if (run) startStage(run.ui, run.key); });
  $("#btnHelp").addEventListener("click", () => openModal("modal-help"));
  $("#btnWordbook").addEventListener("click", () => { renderWordbook(); openModal("modal-wordbook"); });
  $("#btnAch").addEventListener("click", () => { renderAch(); openModal("modal-ach"); });
  $("#wbSearch").addEventListener("input", renderWordbook);
  $("#wbSpeakAll").addEventListener("click", (e) => speak("Hello! Let's learn English together!", e.currentTarget));
  $("#btnSound").addEventListener("click", () => {
    S.sound = !S.sound;
    save();
    renderHUD();
    if (S.sound) snd.ok();
    toast(S.sound ? "Đã bật âm thanh 🔊" : "Đã tắt âm thanh 🔇");
  });

  /* ---------- khởi động ---------- */
  if (/[?&]debug=1/.test(location.search)) {
    window.EQ7 = {
      get run() { return run; },
      answerCurrent() {
        if (!run || run.answered) return;
        const q = run.qs[run.qi];
        if (q.kind === "mcq") answer(q.answer);
        else if (q.kind === "listen") answer(q.answer);
        else if (q.kind === "fill") answerText(q.answer, (q.alt || []).concat([q.answer]));
        else if (q.kind === "reorder") answerText(q.answer, [q.answer].concat(q.alt || []));
      },
      startStage: startStage,
      render: () => renderQuestion(),
      finish: () => run && finishStage(),
    };
  }
  renderHUD();
  checkAch();
  show("home");
})();
