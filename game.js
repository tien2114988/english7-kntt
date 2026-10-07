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
    { key: "learn", icon: "📖", label: "Học" },
    { key: "vocab", icon: "📚", label: "Từ vựng" },
    { key: "listen", icon: "🎧", label: "Nghe" },
    { key: "grammar", icon: "📝", label: "Ngữ pháp" },
    { key: "boss", icon: "👑", label: "Boss" },
  ];
  const SAVE_KEY = "eq7_save_v1";
  const XP_PER_LEVEL = 300;

  /* ---------- học liệu phần "Học" (lessons-*.js) ---------- */
  const LESSONS = (function () {
    const F = window.LESSONS_F || {}, A = window.LESSONS_U1 || {}, B = window.LESSONS_U2 || {};
    const f = F.foundation;
    return {
      foundation: f && Array.isArray(f.lessons) && f.lessons.length ? f : null,
      units: Object.assign({}, A.units || {}, B.units || {}),
      quizVi: Object.assign({}, A.quizVi || {}, B.quizVi || {}),
    };
  })();
  const lessonOf = (u) =>
    !u || u.type === "foundation" ? null : LESSONS.units[String(u.id)] || null;
  const hasLesson = (u) =>
    u && u.type === "foundation" ? !!(u.lessons && u.lessons.length) : !!lessonOf(u);

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

  /* chặng "Lớp mất gốc" — đứng đầu bản đồ, dạy từ con số 0 */
  if (LESSONS.foundation) {
    UNITS.unshift({
      id: "F",
      type: "foundation",
      title: LESSONS.foundation.title || "Lớp mất gốc tiếng Anh",
      topic: LESSONS.foundation.subtitle || "Học từ con số 0: từ loại, câu, SVO, thì, mạo từ",
      icon: "🧱",
      color: "#FF8A3D",
      level: 1,
      vocabulary: [], patterns: [], quiz: [], grammar: null,
      lessons: LESSONS.foundation.lessons,
    });
  }

  /* ---------- trạng thái ---------- */
  const fresh = () => ({
    xp: 0,
    stars: {},
    less: {},        /* sao từng bài trong "Lớp mất gốc": {f1:3,...} */
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
  const starsOf = (id) =>
    S.stars[id] || (S.stars[id] = { learn: 0, vocab: 0, listen: 0, grammar: 0, boss: 0 });
  const foundationDone = (u) =>
    (u.lessons || []).every((l) => (S.less[l.id] || 0) >= 1);
  const unitCleared = (u) => {
    if (u.type === "foundation") return foundationDone(u);
    const st = S.stars[u.id];
    if (!st) return false;
    return stageKeysOf(u).every((k) => (st[k] || 0) >= 1);
  };
  /* chặng đầu (Lớp mất gốc) và Unit 1 mở sẵn để em bắt đầu ngay */
  const unitUnlocked = (idx) => idx <= 1 || unitCleared(UNITS[idx - 1]);
  /* sao/ sao-max hiển thị trên bản đồ */
  function mapStars(u) {
    if (u.type === "foundation")
      return (u.lessons || []).reduce((s, l) => s + (S.less[l.id] || 0), 0);
    const st = S.stars[u.id] || {};
    return Object.values(st).reduce((a, b) => a + (b || 0), 0);
  }
  function mapMaxStars(u) {
    if (u.type === "foundation") return (u.lessons || []).length * 3;
    return stageKeysOf(u).length * 3;
  }
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
  let LAST_LV = null;
  function renderHUD() {
    const lvl = Math.floor(S.xp / XP_PER_LEVEL) + 1;
    const into = S.xp % XP_PER_LEVEL;
    if (LAST_LV !== null && lvl > LAST_LV) {
      toast("🎉 Lên cấp " + lvl + "! Giỏi lắm!");
      confetti(60);
      snd.win();
    }
    LAST_LV = lvl;
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
      const hasF = UNITS.some((u) => u.type === "foundation");
      const nU = UNITS.filter((u) => u.type === "unit" || u.type === "review").filter((u) => u.type === "unit").length;
      const nR = UNITS.filter((u) => u.type === "review").length;
      sub.textContent =
        (hasF ? "🧱 Lớp mất gốc · " : "") +
        nU + " Units" + (nR ? " + " + nR + " lần Ôn tập" : "") +
        " · 📖 học · 📚 từ vựng · 🎧 nghe · 📝 ngữ pháp · 👑 Boss";
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
    { id: "u1", ico: "🗺️", n: "Chinh phục Unit 1", d: "Đánh bại Boss Unit 1", t: () => (S.stars[1] || {}).boss >= 1 },
    { id: "ground", ico: "🧱", n: "Vững gốc", d: "Hoàn thành khoá Lớp mất gốc", t: () => { const f = UNITS.find((u) => u.type === "foundation"); return !!f && foundationDone(f); } },
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
    const q = mcq('Từ tiếng Anh nào có nghĩa là "' + w.vi + '"?', null, w.en, others,
      w.en + " = " + w.vi + (w.example ? " — VD: " + w.example : ""));
    q.sentence = w.en;
    q.sentenceVi = "";
    q.example = w.example || "";
    q.exampleVi = w.exVi || "";
    return q;
  }
  function wordToMeaning(w, unit) {
    const others = shuffle((unit.vocabulary || []).filter((x) => x.vi !== w.vi)).map((x) => x.vi);
    const q = mcq("Nghĩa của từ này là gì?", w.en, w.vi, others,
      w.en + " = " + w.vi + (w.ipa ? "  " + w.ipa : ""));
    q.sentence = w.en;
    q.sentenceVi = "";
    q.example = w.example || "";
    q.exampleVi = w.exVi || "";
    return q;
  }
  function listenMeaning(text, correctVi, allEx, explain) {
    const others = shuffle(allEx.filter((x) => x !== correctVi));
    const q = {
      kind: "listen",
      prompt: "Nghe và chọn nghĩa đúng",
      speak: text,
      options: shuffle(uniqOpts(correctVi, others)),
      explain: explain || "",
      sentence: text, sentenceVi: correctVi,
    };
    q.answer = q.options.indexOf(correctVi);
    return q;
  }

  /* 🌐 Dịch câu — 2 chiều, lấy từ câu đã học trong unit */
  function translateQ(p, unit) {
    const toVi = Math.random() < 0.5;
    const exs = (unit.vocabulary || []).filter((w) => w.example);
    if (toVi) {
      const pool = (unit.patterns || []).map((x) => x.vi)
        .concat((unit.vocabulary || []).map((w) => w.exVi || w.vi));
      const opts = shuffle(uniqOpts(p.vi, pool.filter((x) => x && x !== p.vi)));
      return {
        kind: "mcq", tag: { ico: "🌐", label: "Dịch câu" },
        prompt: "Câu này có nghĩa là gì?", display: p.en,
        options: opts, answer: opts.indexOf(p.vi),
        explain: p.en + "  —  " + p.vi,
        sentence: p.en, sentenceVi: p.vi,
      };
    }
    const pool = (unit.patterns || []).map((x) => x.en)
      .concat(exs.map((w) => w.example));
    const opts = shuffle(uniqOpts(p.en, pool.filter((x) => x && x !== p.en)));
    return {
      kind: "mcq", tag: { ico: "🌐", label: "Dịch sang tiếng Anh" },
      prompt: 'Dịch câu này sang tiếng Anh: "' + p.vi + '"',
      options: opts, answer: opts.indexOf(p.en),
      explain: p.vi + "  →  " + p.en,
      sentence: p.en, sentenceVi: p.vi,
    };
  }

  /* 🧩 Dựng câu — đặt câu bằng từ đã học, có nhãn Chủ ngữ / Động từ / Vật ngữ */
  const SLOT_SUBJ = /^(i|you|he|she|it|we|they|there|this|that|these|those)$/i;
  const SLOT_DET = /^(my|your|his|her|its|our|their|a|an|the|some|any|many|much|few|every|each|another|both|one|two|three)$/i;
  const SLOT_AUX = /^(am|is|are|was|were|do|does|did|will|would|should|can|could|must|has|have|had|may|might)$/i;
  const SLOT_ADV = /^(usually|often|always|never|sometimes|rarely|daily|now|already|just|still|also|very|really|quite|too|again|not|n't|only|even|almost|soon|usually)$/i;
  const SLOT_PREP = /^(like|with|of|to|from|for|about|as|and|but|or|because|however|than|into|near|behind|between|under|over|by|up|down|without|at|in|on|during|until)$/i;
  const SLOT_VERB = new RegExp("^(?:" + [
    /* to be */ "am|is|are|was|were|be|been|being",
    /* khứ */ "go|goes|went|come|comes|came|make|makes|made|take|takes|took|get|gets|got|give|gives|gave",
    "say|says|said|tell|tells|told|find|finds|found|know|knows|knew|think|thinks|thought",
    "see|sees|saw|hear|hears|heard|feel|feels|felt|seem|seems|seemed|become|becomes|became",
    "keep|keeps|kept|put|puts|bring|brings|brought|win|wins|won|begin|begins|began|end|ends|ended",
    /* hiện tại */ "like|likes|love|loves|hate|hates|enjoy|enjoys|prefer|prefers|want|wants|need|needs",
    "play|plays|watch|watches|eat|eats|drink|drinks|cook|cooks|clean|cleans|wash|washes",
    "study|studies|read|reads|write|writes|learn|learns|taught|teach|teaches|help|helps",
    "live|lives|work|works|use|uses|show|shows|open|opens|close|closes|start|starts|started",
    "finish|finishes|finished|walk|walks|wait|waits|look|looks|talk|talks|speak|speaks|spoke",
    "listen|listens|draw|draws|drew|sing|sings|sang|dance|dances|run|runs|swim|swims|swam",
    "jump|jumps|sit|sits|stood|stand|stands|visit|visits|buy|buys|bought|sell|sells|sold",
    "travel|travels|drove|drive|drives|ride|rides|rode|drive|try|tries|tried|stay|stays|stayed",
    "pay|pays|paid|call|calls|called|meet|meets|met|ask|asks|asked|answer|answers|answered",
    "check|checks|checked|pack|packs|packed|arrive|arrives|arrived|leave|leaves|left",
    "happen|happens|happened|remember|remembers|remembered|forget|forgets|forgot",
    "decide|decides|decided|hope|hopes|hoped|wish|wishes|wished|join|joins|joined",
    "collect|collects|collected|donate|donates|donated|organise|organises|organised",
    "sound|sounds|sounded|mean|means|meant|cost|costs|taste|tastes|smell|smells|turn|turns|turned",
    "grow|grows|grew|change|changes|changed|let|lets|own|owns|belong|belongs|matter|matters|hurt|hurts",
    /* V-ing */ "going|coming|making|taking|getting|giving|doing|having|living|working|learning",
    "playing|watching|looking|feeling|using|saying|telling|finding|wanting|needing|loving",
    "liking|enjoying|visiting|cooking|cleaning|washing|buying|selling|travelling|driving",
    "riding|running|swimming|jumping|sitting|standing|opening|closing|starting|finishing",
    "reading|writing|drawing|singing|dancing|listening|speaking|talking|eating|drinking",
    "sleeping|studying|helping|waiting|walking|staying|trying|calling|meeting|asking",
    "shopping|jogging|swimming|fishing|camping|hiking|gardening|collecting|singing",
    "saving|protecting|reducing|recycling|producing|generating",
    "protect|protects|protected|reduce|reduces|reduced|recycle|recycles|recycled",
    "produce|produces|produced|generate|generates|generated|save|saves|saved|spend|spends|spent",
    /* quá khứ */ "visited|played|watched|cooked|cleaned|washed|walked|listened|talked|studied",
    "learned|lived|worked|helped|waited|liked|loved|enjoyed|wanted|needed|decided|arrived",
    "stayed|tried|checked|packed|opened|closed|stopped|looked|moved|returned|joined|used",
    "wanted|needed|looked|seemed|felt|wished|hoped|asked|answered|called|met|paid|traveled",
    "planted|watered|picked|carried|borrowed|invented|built|sent|received|invited|chose|wore",
    "rained|snowed|showed|prepared|practised|practiced|reviewed|exercised|jogged|cycled|rowed",
  ].join("|") + ")$", "i");

  const SLOT_QWORD = /^(how|what|when|where|why|which|who|whom|whose)$/i;
  const SLOT_PRON = /^(i|you|he|she|it|we|they)$/i;
  /* tính từ (không phải động từ, không phải vật ngữ riêng) */
  const SLOT_ADJ = /^(new|old|big|small|good|bad|nice|beautiful|kind|famous|modern|delicious|healthy|unhealthy|free|busy|easy|difficult|interesting|popular|tall|short|long|fast|slow|hot|cold|warm|cool|clean|dirty|expensive|cheap|favorite|favourite|different|same|young|early|late|happy|sad|tired|quick|quiet|noisy|wonderful|great|super|cute|friendly|dangerous|safe|important|possible|available|comfortable|keen|sorry|ready|glad|fun|little|high|low|lazy|rich|poor|strong|weak|heavy|light|wide|bright|dark|boring|bored|excited|exciting|angry|careful|careless|polite|brave|clever|smart|hard|soft|round|sorry)$/i;
  /* từ chỉ THỜI GIAN thuần túy (vd: every week, last summer) */
  const SLOT_TIME = /^(every|after|before|last|next|tomorrow|yesterday|today|tonight|then|now|noon|midnight|dawn|morning|afternoon|evening|night|week|weeks|month|months|year|years|day|days|weekend|weekends|holiday|holidays|vacation|summer|winter|spring|autumn|hour|hours|minute|minutes|moment|time|times|monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/i;
  /* từ chỉ ĐỊA ĐIỂM (chỉ tính là ⏱ khi đứng sau at/in/on/to hoặc sau từ thời gian) */
  const SLOT_PLACE = /^(school|home|work|park|yard|town|city|street|class|classes|lessons?|library|market|room|garden|canteen|supermarket|hospital|museum|cinema|office|factory|beach|zoo|shop|store|station|field|castle|stadium|hall)$/i;

  /* at/in/on là ⏱ khi phía sau là thời gian hoặc địa điểm (vd: in the park, on Sunday) */
  function isTimeSlot(tokens, i) {
    const w = tokens[i];
    if (/^(at|in|on)$/i.test(w)) {
      let j = i + 1;
      if (SLOT_DET.test(tokens[j] || "")) j++;
      if (j >= tokens.length) return false;
      return SLOT_PLACE.test(tokens[j]) || SLOT_TIME.test(tokens[j]) || /^\d/.test(tokens[j]);
    }
    if (SLOT_TIME.test(w)) return true;
    if (SLOT_PLACE.test(w)) {
      const pj = tokens[i - 1] || "";
      if (/^(at|in|on|to)$/i.test(pj)) return true;
      if (SLOT_DET.test(pj)) {
        const pp = tokens[i - 2] || "";
        return /^(at|in|on)$/i.test(pp) || SLOT_TIME.test(pp);
      }
      return SLOT_PLACE.test(pj) || SLOT_TIME.test(pj);
    }
    return false;
  }

  /* điền nhãn phía sau động từ: ⏱ (thời gian/địa điểm) và O (vật ngữ) */
  function fillObjects(out, tokens, from) {
    let seenO = false;
    for (let i = from; i < tokens.length; i++) {
      const w = tokens[i];
      if (isTimeSlot(tokens, i)) out[i] = "⏱";
      else if (SLOT_PREP.test(w) || SLOT_DET.test(w) || SLOT_ADJ.test(w) || SLOT_ADV.test(w)) out[i] = "";
      else if (SLOT_VERB.test(w)) out[i] = "";           /* động từ ở đuôi: to be, swimming ... */
      else if (!seenO) { out[i] = "O"; seenO = true; }
      else out[i] = "";
    }
  }

  function slotLabels(tokens) {
    const n = tokens.length;
    const out = tokens.map(() => "");

    /* 1) CHỦ NGỮ ------------------------------------------------ */
    let vi = -1;
    for (let i = 1; i < n; i++) {
      if (SLOT_AUX.test(tokens[i]) || SLOT_VERB.test(tokens[i])) { vi = i; break; }
    }
    const ai = SLOT_AUX.test(tokens[0] || "") ? 0 : -1;   /* câu hỏi: Do/Is/Will + S + V */
    let si = 0;
    if (ai === 0) {
      si = -1;
      for (let i = 1; i < n; i++) {
        const w = tokens[i];
        if (SLOT_SUBJ.test(w)) { si = i; break; }
        if (!SLOT_DET.test(w) && !SLOT_ADV.test(w) && !SLOT_QWORD.test(w) &&
            !SLOT_AUX.test(w) && !SLOT_PREP.test(w)) { si = i; break; }
      }
      if (si < 0) si = Math.min(1, n - 1);
    } else if (vi > 0 && SLOT_AUX.test(tokens[vi]) && SLOT_SUBJ.test(tokens[vi + 1] || "")) {
      si = vi + 1;                       /* How often + do + you + ... */
    } else if (SLOT_QWORD.test(tokens[0] || "")) {
      /* How much is this ... → bỏ qua từ nghi vấn/trạng từ, tìm chủ ngữ */
      si = -1;
      for (let i = 1; i < n; i++) {
        const w = tokens[i];
        if (SLOT_SUBJ.test(w)) { si = i; break; }
        if (!SLOT_DET.test(w) && !SLOT_ADV.test(w) && !SLOT_QWORD.test(w) &&
            !SLOT_AUX.test(w) && !SLOT_PREP.test(w)) { si = i; break; }
      }
      if (si < 0) si = 0;
    } else if (SLOT_DET.test(tokens[0] || "") && n > 1) {
      si = 1;                            /* The children / My brother ... */
    }

    /* 2) ĐỘNG TỪ chính ------------------------------------------ */
    let k = -1;
    for (let i = 0; i < n; i++) {
      if (i !== si && (SLOT_AUX.test(tokens[i]) || SLOT_VERB.test(tokens[i]))) { k = i; break; }
    }
    let auxIdx = -1, vk = -1;
    if (k >= 0) {
      if (SLOT_AUX.test(tokens[k])) {
        /* trợ động từ → tìm động từ chính phía sau, dừng ở mạo từ / giới từ
           (vd: will travel, are saving ... nhưng "is keen on ..." thì is là động từ) */
        for (let i = k + 1; i < n; i++) {
          if (i === si) continue;
          if (SLOT_VERB.test(tokens[i])) { vk = i; break; }
          if (SLOT_PREP.test(tokens[i]) || SLOT_DET.test(tokens[i])) break;
        }
        if (vk >= 0) auxIdx = k; else vk = k;
      } else vk = k;
    }

    /* 3) gắn nhãn ------------------------------------------------ */
    const start = Math.max(vk, auxIdx, si) + 1;
    for (let i = 0; i < start; i++) {
      if (i === si || i === vk || i === auxIdx) continue;
      const w = tokens[i];
      out[i] = SLOT_QWORD.test(w) ? "?"
        : SLOT_ADV.test(w) ? "adv"
        : SLOT_PREP.test(w) || SLOT_DET.test(w) || SLOT_ADJ.test(w) ? "" : "·";
    }
    if (si >= 0 && si < n) out[si] = "S";
    if (vk >= 0) out[vk] = "V";
    if (auxIdx >= 0) out[auxIdx] = "aux";
    fillObjects(out, tokens, start);
    if (!out[0] && si === 0) out[0] = "S";
    return out;
  }

  function buildQ(p, unit) {
    const clean = String(p.en).trim();
    const toks = clean.replace(/[.?!]+$/, "").split(/\s+/).filter(Boolean);
    const pool = [];
    (unit.patterns || []).forEach((x) =>
      String(x.en).replace(/[.?!]+$/, "").split(/\s+/).forEach((w) => pool.push(w)));
    (unit.vocabulary || []).forEach((w) => pool.push(w.en));
    const extra = shuffle(pool.filter((w) => w && toks.indexOf(w) < 0 && w.length > 2)).slice(0, 2);
    return {
      kind: "build",
      tag: { ico: "🧩", label: "Dựng câu" },
      prompt: "Bấm các từ để dựng câu có nghĩa:",
      display: p.vi,
      words: shuffle(toks.concat(extra)),
      answer: toks.join(" "),
      alt: [],
      labels: slotLabels(toks),
      explain: clean + "  —  " + p.vi,
      sentence: clean, sentenceVi: p.vi,
    };
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
      return {
        kind: "mcq", prompt: it.q || "Chọn đáp án đúng",
        options: opts, answer: a, explain: it.explain || "",
        src: it.q || "", sentence: it.q || "",
        sentenceVi: it.vi || "",
      };
    }
    if (it.type === "fill") {
      const alts = [].concat(it.alt || [], [it.answer]).filter(Boolean).map((x) => String(x).trim());
      return {
        kind: "fill",
        prompt: "Điền đáp án vào chỗ trống",
        display: String(it.q).replace(/_{2,}/g, "______"),
        answer: alts[0], alt: alts,
        hint: it.hint || "", explain: it.explain || "",
        src: it.q || "", sentence: String(it.q).replace(/\(([^)]+)\)/g, "______"),
        sentenceVi: it.vi || "",
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
        src: it.q || "", sentence: it.answer, sentenceVi: it.vi || "",
      };
    }
    if (it.type === "match") {
      return null;
    }
    return null;
  }

  /* bộ câu hỏi theo màn */
  function stageKeysOf(u) {
    if (u.type === "foundation") return hasLesson(u) ? ["learn"] : [];
    const ks = [];
    if (hasLesson(u)) ks.push("learn");
    if ((u.vocabulary || []).length) ks.push("vocab");
    if ((u.vocabulary || []).length || (u.patterns || []).length) ks.push("listen");
    if ((u.quiz || []).length || (u.grammar && (u.grammar.examples || []).length)) ks.push("grammar");
    ks.push("boss");
    return ks;
  }

  function vocabQuestions(u) {
    const ws = shuffle(u.vocabulary || []);
    const ps = shuffle(u.patterns || []);
    const qs = [];
    ws.slice(0, 3).forEach((w) => qs.push(wordToMeaning(w, u)));
    ws.slice(3, 6).forEach((w) => qs.push(meaningToWord(w, u)));
    /* 🌐 dịch câu + 🧩 dựng câu: đặt câu bằng từ/câu đã học */
    if (ps[0]) qs.push(translateQ(ps[0], u));
    if (ps[1]) qs.push(buildQ(ps[1], u));
    let i = 6;
    while (qs.length < 8 && i < ws.length) qs.push(wordToMeaning(ws[i++], u));
    if (qs.length < 4) (u.vocabulary || []).forEach((w) => qs.push(wordToMeaning(w, u)));
    return shuffle(qs).slice(0, 8);
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
    const ps = shuffle(u.patterns || []);
    if (ps[0]) qs.push(translateQ(ps[0], u));
    if (ps[1]) qs.push(buildQ(ps[1], u));
    return qs.slice(0, 9);
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
    if (stageKey === "learn") { startLearn(unitIdx); return; }
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

  /* =======================================================
     MÀN "📖 HỌC": bài giảng từng bước + bài tập ngắn
     ======================================================= */
  function startLearn(unitIdx) {
    const u = UNITS[unitIdx];
    if (u.type === "foundation") {
      const ls = u.lessons || [];
      if (!ls.length) { toast("Chưa có bài học nào."); return; }
      /* học hết rồi → mở danh sách chọn bài để ôn lại bài bất kỳ */
      const next = ls.find((l) => (S.less[l.id] || 0) < 1);
      if (next) { beginLearn(u, unitIdx, next); return; }
      startCourse(u, unitIdx);
      return;
    }
    const L = lessonOf(u);
    if (!L) { toast("Chặng này chưa có phần học."); return; }
    beginLearn(u, unitIdx, L);
  }

  /* màn chọn 7 bài của "Lớp mất gốc" */
  function startCourse(u, unitIdx) {
    run = {
      ui: unitIdx, unit: u, key: "learn", phase: "course",
      lesson: null, isFoundation: true,
      qs: [], qi: 0, slides: [], si: 0,
      maxHearts: 5, hearts: 5,
      correct: 0, combo: 0, bestCombo: 0, xp: 0,
      answered: false, finished: false,
    };
    S.started = true;
    touchStreak();
    save();
    renderHUD();
    show("stage");
    renderStageChrome();
    renderCourse();
    snd.click();
  }

  function renderCourse() {
    const u = run.unit;
    const ls = u.lessons || [];
    const doneN = ls.filter((l) => (S.less[l.id] || 0) >= 1).length;
    setBar((doneN / (ls.length || 1)) * 100);
    $("#feedback").innerHTML = "";
    $("#quizArea").innerHTML = `
      <div class="qcard slide">
        <span class="qkind">📚 Chọn bài học</span>
        <h3 class="sl-title">${esc(u.title)} · đã học ${doneN}/${ls.length}</h3>
        <div class="course">
          ${ls.map((l, i) => {
            const s = S.less[l.id] || 0;
            return `<button class="course-item ${s >= 1 ? "is-done" : ""}" data-l="${i}">
              <span class="ci-num">${i + 1}</span>
              <span class="ci-txt"><b>${esc(l.title)}</b><small>${esc(l.goal || "")}</small></span>
              <span class="ci-star">${s ? "⭐".repeat(s) : "○"}</span>
            </button>`;
          }).join("")}
        </div>
        <div class="sl-nav"><div class="sl-btns">
          <button class="btn btn--ghost" id="slMap">🗺️ Về bản đồ</button>
        </div></div>
      </div>`;
    $$("#quizArea .course-item").forEach((b) => b.addEventListener("click", () => {
      snd.click();
      beginLearn(u, run.ui, u.lessons[+b.dataset.l]);
    }));
    const mb = $("#slMap");
    if (mb) mb.addEventListener("click", () => { snd.click(); show("map"); });
  }

  function beginLearn(u, unitIdx, L) {
    const ls = u.lessons || [];
    run = {
      ui: unitIdx, unit: u, key: "learn",
      phase: "learn",
      lesson: L,
      isFoundation: u.type === "foundation",
      lessonNo: u.type === "foundation" ? ls.indexOf(L) + 1 : 1,
      lessonTotal: u.type === "foundation" ? ls.length : 1,
      slides: buildSlides(u, L),
      si: 0,
      qs: (L.checkpoint || []).map(quizItemToQ).filter(Boolean),
      qi: 0,
      maxHearts: 5, hearts: 5,
      correct: 0, combo: 0, bestCombo: 0, xp: 0,
      answered: false, finished: false,
    };
    S.started = true;
    touchStreak();
    save();
    renderHUD();
    show("stage");
    renderStageChrome();
    renderLearn();
    snd.click();
  }

  /* chia explanation thành các đoạn vừa đọc trên điện thoại */
  function chunkText(t) {
    const s = String(t || "").trim();
    if (!s) return [];
    const out = [];
    s.split(/\n+/).map((x) => x.trim()).filter(Boolean).forEach((p) => {
      if (p.length <= 330) { out.push(p); return; }
      const sents = p.match(/[^.!?]+[.!?]*/g) || [p];
      let buf = "";
      sents.forEach((x) => {
        buf += x;
        if (buf.length >= 210) { out.push(buf.trim()); buf = ""; }
      });
      if (buf.trim()) out.push(buf.trim());
    });
    return out;
  }

  function buildSlides(u, L) {
    const ex = (L.examples && L.examples.length) ? L.examples
      : (u.grammar && u.grammar.examples) || [];
    const explain = L.explain || (u.grammar && u.grammar.explain) || "";
    const texts = chunkText(explain);
    if (!texts.length && L.goal) texts.push(L.goal);
    const s = [{ t: "goal" }, { t: "formula" }];
    texts.forEach((p) => s.push({ t: "text", p }));
    if (ex.length) s.push({ t: "examples", items: ex });
    if ((L.mistakes || []).length) s.push({ t: "mistakes", items: L.mistakes });
    return s;
  }

  const SLIDE_LABEL = {
    goal: "🎯 Mục tiêu",
    formula: "📐 Công thức cần nhớ",
    text: "💡 Hiểu vậy là đúng",
    examples: "✨ Ví dụ mẫu — bấm 🔊 để nghe",
    mistakes: "⚠️ Lỗi bạn hay mắc",
  };

  function renderLearn() {
    const s = run.slides[run.si];
    const L = run.lesson;
    const isLast = run.si >= run.slides.length - 1;
    setBar(progressPct());
    $("#feedback").innerHTML = "";

    let body = "";
    if (s.t === "goal") {
      body = `
        <div class="sl-goal">
          <span class="sl-mascot" aria-hidden="true">🦜</span>
          <p class="sl-goal-txt">${esc(L.goal || "")}</p>
          <div class="sl-meta">
            ${run.isFoundation ? `<span class="pill pill--orange">Bài ${run.lessonNo}/${run.lessonTotal}</span>` : ""}
            <span class="pill pill--violet">📖 ${esc(L.title || "")}</span>
          </div>
        </div>`;
    } else if (s.t === "formula") {
      body = `<div class="sl-list">` + (L.formula || []).map((f) => `
        <div class="fcard">
          <span class="fcard-lab">${esc(f.label || "")}</span>
          <code class="fcard-f">${esc(f.f || "")}</code>
          ${f.vi ? `<span class="fcard-vi">${esc(f.vi)}</span>` : ""}
        </div>`).join("") + `</div>`;
    } else if (s.t === "text") {
      body = `<p class="sl-text">${esc(s.p)}</p>`;
    } else if (s.t === "examples") {
      body = `<div class="sl-list">` + s.items.map((e) => `
        <div class="excard">
          <button class="speak-btn" data-say="${esc(e.en)}" aria-label="Nghe câu này">🔊</button>
          <b class="ex-en">${esc(e.en)}</b>
          <span class="ex-vi">${esc(e.exVi || e.vi || "")}</span>
        </div>`).join("") + `</div>`;
    } else if (s.t === "mistakes") {
      body = `<div class="sl-list">` + s.items.map((m) => `
        <div class="mcard">
          <div class="mrow mrow--no"><span>❌</span><span>${esc(m.wrong)}</span></div>
          <div class="mrow mrow--yes"><span>✅</span><span>${esc(m.right)}</span></div>
          <p class="mwhy">${esc(m.why || "")}</p>
        </div>`).join("") + `</div>`;
    }

    $("#quizArea").innerHTML = `
      <div class="qcard slide">
        <span class="qkind">${esc(SLIDE_LABEL[s.t] || "📖 Bài học")}</span>
        ${s.t === "goal" ? "" : `<h3 class="sl-title">${esc(L.title || "")}</h3>`}
        ${body}
        <div class="sl-nav">
          <div class="dots" aria-hidden="true">${run.slides.map((_, i) => `<i class="${i === run.si ? "on" : ""}"></i>`).join("")}</div>
          <div class="sl-btns">
            <button class="btn btn--ghost" id="slPrev" ${run.si === 0 ? "disabled" : ""}>← Trước</button>
            <button class="btn btn--primary" id="slNext">${isLast ? "Bắt đầu làm bài ➜" : "Tiếp →"}</button>
          </div>
        </div>
      </div>`;

    const prev = $("#slPrev"), next = $("#slNext");
    if (prev) prev.addEventListener("click", () => {
      if (run.si <= 0) return;
      run.si--; snd.click(); renderLearn();
    });
    if (next) next.addEventListener("click", () => {
      snd.click();
      if (!isLast) { run.si++; renderLearn(); }
      else if (!run.qs.length) { run.phase = "quiz"; finishStage(); }
      else { run.phase = "quiz"; renderQuestion(); }
    });
  }

  function progressPct() {
    if (!run) return 0;
    if (run.key !== "learn") return (run.qi / (run.qs.length || 1)) * 100;
    const slides = (run.slides ? run.slides.length : 0);
    const total = slides + (run.qs.length || 1);
    const pos = Math.min(run.si + 1, slides) + run.qi;   /* slide đang xem + số câu đã làm */
    return (pos / total) * 100;
  }

  function renderStageChrome() {
    const u = run.unit;
    $("#stageTitle").textContent = u.title;
    const st = starsOf(u.id);
    const keys = stageKeysOf(u);
    $("#stageTabs").innerHTML = STAGES.filter((s) => keys.indexOf(s.key) >= 0)
      .map((s) => {
        const active = run.key === s.key;
        const done = u.type === "foundation" ? foundationDone(u) : (st[s.key] || 0) >= 1;
        const order = keys.indexOf(s.key);
        const beforeDone = keys.slice(0, order).every((k) => (st[k] || 0) >= 1);
        const locked = !active && !beforeDone;
        const stars = u.type === "foundation"
          ? (u.lessons || []).filter((l) => (S.less[l.id] || 0) >= 1).length + "/" + (u.lessons || []).length + " bài"
          : "⭐".repeat(st[s.key] || 0) || "";
        return `<button type="button" class="tab ${active ? "is-active" : ""} ${done && !active ? "is-done" : ""} ${locked ? "is-locked" : ""}"
                  data-key="${s.key}" aria-label="Màn ${esc(s.label)}${locked ? " (chưa mở)" : ""}">
          <span>${s.icon}</span>${esc(s.label)} <span class="tab-star">${stars}</span></button>`;
      }).join("");
    $$("#stageTabs .tab").forEach((t) => {
      t.addEventListener("click", () => {
        const k = t.dataset.key;
        if (k === run.key) return;
        const st = starsOf(run.unit.id);
        const keys = stageKeysOf(run.unit);
        const order = keys.indexOf(k);
        const ok = keys.slice(0, order).every((b) => (st[b] || 0) >= 1);
        if (!ok) { snd.no(); toast("Hãy hoàn thành màn trước đã nhé! 🔒"); return; }
        startStage(run.ui, k);
      });
    });
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
    setBar(progressPct());
    $("#feedback").innerHTML = "";

    const kindLabel = (q.tag && q.tag.label) || {
      mcq: "Chọn đáp án", listen: "Nghe", fill: "Điền chỗ trống",
      reorder: "Xếp câu", build: "Dựng câu", translate: "Dịch câu",
    }[q.kind] || "";
    const kindIcon = (q.tag && q.tag.ico) || {
      mcq: "🎯", listen: "🎧", fill: "✏️", reorder: "🧩", build: "🧩", translate: "🌐",
    }[q.kind] || "❓";
    let body = "";

    if (q.kind === "mcq" || q.kind === "listen" || q.kind === "translate") {
      body = `
        ${q.display ? `<div class="qword">${esc(q.display)}</div>` : ""}
        ${q.kind === "listen" ? `<button class="speak-btn" id="qSay" aria-label="Nghe lại">🔊</button>` : ""}
        ${q.display && /[A-Za-z]{3}/.test(String(q.display)) ? `<button class="say-inline" data-say="${esc(q.display)}" aria-label="Nghe câu">🔊 Nghe</button>` : ""}
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
    } else if (q.kind === "reorder" || q.kind === "build") {
      /* GIỮ chỉ số gốc của từng từ: data-w phải trỏ vào q.words,
         nếu không bấm từ nào cũng lắp ra sai từ (shuffle làm lệch thứ tự). */
      const bank = shuffle(q.words.map((w, i) => ({ w: w, i: i })));
      body = `
        ${q.display ? `<div class="qword qword--vi">${esc(q.display)}</div>` : ""}
        <div class="tray" id="tray" aria-label="Câu của bạn"></div>
        <div class="bank" id="bank">${bank.map((x) => `<button class="chip" data-w="${x.i}">${esc(x.w)}</button>`).join("")}</div>
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
    if (q.kind === "mcq" || q.kind === "listen" || q.kind === "translate") {
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
    if (q.kind === "reorder" || q.kind === "build") initReorder(q);
  }

  function initReorder(q) {
    const bank = $("#bank"), tray = $("#tray");
    run.ord = [];
    bank.addEventListener("click", (e) => {
      const c = e.target.closest(".chip");
      if (!c || run.answered || c.classList.contains("is-used")) return;
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

  /* ---------- panel giải thích chi tiết (hiện MỌI câu, đúng lẫn sai) ---------- */
  const PRAISE = ["Chính xác!", "Quá giỏi!", "Đúng rồi!", "Tuyệt vời!", "Giỏi quá!"];
  const MASCOT_OK = ["🥳", "🎉", "🦜", "🌟", "💪"];
  const MASCOT_NO = ["🤔", "😅", "🦜", "🧐"];

  function vocabInSentence(q, u) {
    const src = String(q.sentence || q.display || q.speak || q.prompt || "").toLowerCase();
    const toks = src.replace(/[^a-zà-ỹ0-9\s]/g, " ").split(/\s+/);
    const seen = {}, out = [];
    (u.vocabulary || []).forEach((w) => {
      const key = String(w.en).toLowerCase().replace(/[^a-zà-ỹ0-9]/g, "");
      if (key && toks.indexOf(key) >= 0 && !seen[key]) { seen[key] = 1; out.push(w); }
    });
    return out.slice(0, 4);
  }

  function translationOf(q, u) {
    if (q.sentenceVi) return String(q.sentenceVi).trim();
    const key = q.src ? u.id + "||" + q.src : "";
    if (key && LESSONS.quizVi[key]) return LESSONS.quizVi[key];
    return "";
  }

  function fbPanel(q, ok) {
    const u = run.unit;
    const L = u.type === "foundation" ? run.lesson : lessonOf(u);
    const rows = [];

    const en = q.sentence || q.display || "";
    const vi = translationOf(q, u);
    if (vi && en && String(en).trim() !== vi.trim()) {
      rows.push(`<div class="fb-row">
        <span class="fb-lab">🌐 Dịch</span>
        <span class="fb-val">${esc(vi)}
          <button class="say-mini" data-say="${esc(en)}" aria-label="Nghe câu">🔊</button></span>
      </div>`);
    }

    /* câu từ vựng → thêm câu ví dụ Anh–Việt để nhớ từ trong ngữ cảnh */
    if (q.example && q.exampleVi && String(q.example).trim()) {
      rows.push(`<div class="fb-row">
        <span class="fb-lab fb-lab--ex">✨ Ví dụ</span>
        <span class="fb-val fb-val--ex">
          <b>${esc(q.example)}</b>
          <span class="fb-ex-vi">${esc(q.exampleVi)}</span>
          <button class="say-mini" data-say="${esc(q.example)}" aria-label="Nghe ví dụ">🔊</button>
        </span>
      </div>`);
    }

    const rule = (u.grammar && u.grammar.rule) || "";
    const f0 = (L && L.formula && L.formula[0]) || null;
    if (rule || f0) {
      rows.push(`<div class="fb-row fb-row--rule">
        <span class="fb-lab">📖 Ngữ pháp</span>
        <span class="fb-val">
          ${rule ? `<b>${esc(rule)}</b>` : ""}
          ${f0 ? `<code>${esc(f0.f)}</code>${f0.vi ? `<i>${esc(f0.vi)}</i>` : ""}` : ""}
        </span>
      </div>`);
    }

    const ws = vocabInSentence(q, u);
    if (ws.length) {
      rows.push(`<div class="fb-row">
        <span class="fb-lab">📚 Từ trong câu</span>
        <span class="fb-chips">${ws.map((w) =>
          `<button class="vchip" data-say="${esc(w.en)}"><b>${esc(w.en)}</b> ${esc(w.vi)} 🔊</button>`).join("")}</span>
      </div>`);
    }

    if (q.labels && q.answer) {
      const tk = String(q.answer).split(/\s+/);
      rows.push(`<div class="fb-row">
        <span class="fb-lab">🧩 Cấu trúc</span>
        <span class="fb-svo">${tk.map((t, i) =>
          q.labels[i]
            ? `<span class="svo"><i>${q.labels[i]}</i>${esc(t)}</span>`
            : `<span class="svo svo--x">${esc(t)}</span>`).join("")}</span>
      </div>`);
    }

    if (!ok) {
      const names = ws.map((w) => w.en).join(", ");
      rows.push(`<div class="fb-should">💡 Nên học lại${rule ? `: <b>${esc(rule)}</b>` : ""}${
        names ? ` · từ cần ôm: <b>${esc(names)}</b>` : ""}.</div>`);
    }

    const canReview = L && run.key !== "learn" && stageKeysOf(u).indexOf("learn") >= 0;
    return `
      ${q.explain ? `<div class="fb-explain">💡 ${esc(q.explain)}</div>` : ""}
      ${rows.join("")}
      ${canReview ? `<div class="fb-act"><button class="btn btn--mini" id="fbLesson">📖 Ôn lại phần học này</button></div>` : ""}`;
  }

  function bindFbLesson() {
    const b = $("#fbLesson");
    if (b) b.addEventListener("click", () => startStage(run.ui, "learn"));
  }

  function resolve(ok, chosenIdx) {
    const q = run.qs[run.qi];
    if (run.answered || run.finished) return;
    run.answered = true;
    /* khoá câu hỏi hiện tại: không bấm được từ bank / ô nhập nữa (tránh hiểu nhầm) */
    const qcNow = $("#quizArea .qcard");
    if (qcNow) qcNow.classList.add("is-answered");
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
      if (run.combo > 0 && run.combo % 5 === 0) confetti(run.combo >= 10 ? 46 : 20);
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
    const ansText = q.options && q.answer != null ? q.options[q.answer] : "";
    if (run.hearts <= 0) {
      fb.innerHTML = `<div class="fb fb--no">
          <div class="fb-head">
            <span class="fb-ico">💔</span>
            <div class="fb-txt">
              <b>Hết tim rồi!</b>
              <small>Đừng nản — học lại một lượt là qua ngay.</small>
              ${ansText ? `<small class="fb-ans">✅ Đáp án đúng: <b>${esc(ansText)}</b></small>` : ""}
            </div>
            <span class="fb-mascot is-sad" aria-hidden="true">🦜</span>
          </div>
          ${fbPanel(q, false)}
          <div class="fb-btns"><button class="btn btn--primary" id="fbRetry">🔁 Thử lại</button></div>
        </div>`;
      $("#fbRetry").addEventListener("click", () => startStage(run.ui, run.key));
      bindFbLesson();
      return;
    }

    const comboLine = ok && run.combo >= 3
      ? `<small class="fb-combo">🔥 Combo x${run.combo}${run.combo >= 10 ? " — QUÁ ĐỈNH!" : run.combo >= 5 ? " — đang lên đồng!" : ""}</small>` : "";

    fb.innerHTML = `<div class="fb ${ok ? "fb--ok" : "fb--no"}">
        <div class="fb-head">
          <span class="fb-ico">${ok ? "🎉" : "💡"}</span>
          <div class="fb-txt">
            <b>${ok ? pick(PRAISE) : "Chưa đúng rồi"}</b>
            ${!ok && ansText ? `<small class="fb-ans">✅ Đáp án đúng: <b>${esc(ansText)}</b></small>` : ""}
            ${comboLine}
          </div>
          <span class="fb-mascot ${ok ? "is-happy" : "is-sad"}" aria-hidden="true">${ok ? pick(MASCOT_OK) : pick(MASCOT_NO)}</span>
        </div>
        ${fbPanel(q, ok)}
        <div class="fb-btns">
          <button class="btn btn--primary" id="fbNext">${run.qi === run.qs.length - 1 ? "Xem kết quả ➜" : "Tiếp tục →"}</button>
        </div>
      </div>`;
    $("#fbNext").addEventListener("click", nextQuestion);
    bindFbLesson();
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
  const stageLabel = (k) => (STAGES.find((s) => s.key === k) || { label: k }).label;
  const stageIcon = (k) => (STAGES.find((s) => s.key === k) || { icon: "" }).icon;
  function nextStageKey(u, key) {
    const ks = stageKeysOf(u);
    const i = ks.indexOf(key);
    return i >= 0 && i < ks.length - 1 ? ks[i + 1] : null;
  }

  function finishStage() {
    if (!run || run.finished) return;
    run.finished = true;
    const total = run.qs.length;
    const acc = total ? run.correct / total : 1;
    const stars = acc >= 0.9 ? 3 : acc >= 0.75 ? 2 : acc >= 0.6 ? 1 : (total ? 0 : 3);
    const st = starsOf(run.unit.id);
    const prev = st[run.key] || 0;
    st[run.key] = Math.max(prev, stars);
    const bonus = stars * 20;
    S.xp += bonus;
    run.xp += bonus;
    S.bestCombo = Math.max(S.bestCombo, run.bestCombo);
    if (run.key === "vocab") markWordsLearned();
    /* "Lớp mất gốc": chấm sao cho TỪNG bài học */
    if (run.isFoundation && run.lesson) {
      S.less[run.lesson.id] = Math.max(S.less[run.lesson.id] || 0, stars);
    }
    save();

    const justClearedBoss = run.key === "boss" && stars >= 1;
    $("#resultStars").innerHTML = stars
      ? [0, 1, 2].slice(0, stars).map(() => "<span>⭐</span>").join("")
      : "<span>💪</span>";
    $("#resultTitle").textContent = stars === 3 ? "Xuất sắc!" : stars === 2 ? "Giỏi lắm!" : stars === 1 ? "Hoàn thành!" : "Thử lại nhé!";
    const lessonPart = run.isFoundation ? " · Bài " + run.lessonNo + "/" + run.lessonTotal : "";
    $("#resultMsg").textContent =
      run.unit.title + lessonPart + " · " + run.correct + "/" + total + " câu đúng" +
      (bonus ? " · Thưởng sao: +" + bonus + " XP" : "");
    $("#resXp").textContent = "+" + run.xp;
    $("#resAcc").textContent = Math.round(acc * 100) + "%";
    $("#resCombo").textContent = run.bestCombo;
    wireResultButtons();
    show("result");
    if (stars >= 1) { confetti(stars === 3 ? 70 : 40); snd.win(); }
    checkAch();
    renderHUD();
  }

  /* nút "Tiếp theo" trên màn kết quả */
  function wireResultButtons() {
    const nb = $("#btnNext");
    if (!nb) return;
    nb.hidden = true;
    nb.onclick = null;
    if (run.isFoundation) {
      const ls = run.unit.lessons || [];
      const left = ls.filter((l) => l.id !== run.lesson.id && (S.less[l.id] || 0) < 1);
      if (left.length) {
        nb.hidden = false;
        nb.textContent = "📚 Bài kế tiếp (" + (ls.length - left.length) + "/" + ls.length + ") →";
        nb.onclick = () => { snd.click(); startStage(run.ui, "learn"); };
      } else if (!foundationDone(run.unit)) {
        nb.hidden = false;
        nb.textContent = "📚 Bài kế tiếp →";
        nb.onclick = () => { snd.click(); startStage(run.ui, "learn"); };
      } else {
        /* đã học hết 7 bài → mở danh sách để ôn lại bất kỳ bài nào */
        nb.hidden = false;
        nb.textContent = "📚 Chọn bài học →";
        nb.onclick = () => { snd.click(); startStage(run.ui, "learn"); };
      }
      return;
    }
    const nk = nextStageKey(run.unit, run.key);
    if (nk) {
      nb.hidden = false;
      nb.textContent = "▶ Tiếp: " + stageIcon(nk) + " " + stageLabel(nk);
      nb.onclick = () => { snd.click(); startStage(run.ui, nk); };
    }
  }

  /* ---------- bản đồ ---------- */
  function renderMap() {
    const host = $("#mapNodes");
    let html = "";
    let currentSet = false;
    UNITS.forEach((u, i) => {
      const unlocked = unitUnlocked(i);
      const sum = mapStars(u);
      const max = mapMaxStars(u);
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
            <span class="node-num">${u.type === "foundation" ? "ABC" : u.type === "review" ? "R" + u.rNo : "U" + u.id}</span>
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
      get lessons() { return LESSONS; },
      answerCurrent() {
        if (!run || run.answered || run.phase === "learn") return;
        const q = run.qs[run.qi];
        if (!q) return;
        if (q.kind === "mcq" || q.kind === "listen" || q.kind === "translate") answer(q.answer);
        else if (q.kind === "fill") answerText(q.answer, (q.alt || []).concat([q.answer]));
        else if (q.kind === "reorder" || q.kind === "build") answerText(q.answer, [q.answer].concat(q.alt || []));
      },
      /* đi hết một màn tự động (kể cả phần bài giảng) */
      runStage(unitIdx, key) {
        startStage(unitIdx, key == null ? "learn" : key);
        let guard = 0;
        const step = () => {
          if (!run || run.finished || guard++ > 200) return;
          if (run.phase === "learn") {
            const b = $("#slNext");
            if (b) b.click();
            setTimeout(step, 5);
            return;
          }
          if (run.answered) { const n = $("#fbNext"); if (n) n.click(); setTimeout(step, 5); return; }
          if (run.hearts <= 0) { const r = $("#fbRetry"); if (r) r.click(); setTimeout(step, 5); return; }
          window.EQ7.answerCurrent();
          setTimeout(step, 5);
        };
        step();
      },
      startStage: startStage,
      startLearn: startLearn,
      _q: { vocab: vocabQuestions, listen: listenQuestions, grammar: grammarQuestions, boss: bossQuestions },
      _S: () => S,
      _UNITS: UNITS,
      _LESSONS: LESSONS,
      render: () => (run && run.phase === "learn" ? renderLearn() : renderQuestion()),
      finish: () => run && finishStage(),
    };
  }
  renderHUD();
  checkAch();
  show("home");
})();
