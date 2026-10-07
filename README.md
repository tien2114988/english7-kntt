# 🦜 English Quest 7 — Game học Tiếng Anh lớp 7

Game **bản đồ phiêu lưu** giúp học sinh lớp 7 (kể cả **mất gốc tiếng Anh**) ôn luyện bám sát
**SGK Tiếng Anh 7 — Kết nối tri thức với cuộc sống** (chương trình GDPT 2018).

🎮 **Chơi online:** https://tien2114988.github.io/english7-kntt/

## Chạy game

Mở trực tiếp file `index.html` bằng trình duyệt (Chrome/Safari/Edge), hoặc chạy server tĩnh:

```bash
cd english7-game
python3 -m http.server 8080
# mở http://localhost:8080
```

Không cần cài đặt gì thêm — game chạy 100% trên trình duyệt, tiến độ lưu trong `localStorage`.

## Cấu trúc

| File | Vai trò |
|---|---|
| `index.html` | Khung giao diện: trang chủ, bản đồ, màn chơi, kết quả, modal |
| `style.css` | Phong cách hoạt hình rực rỡ (bo tròn, bóng đổ cứng, chuyển động) |
| `game.js` | Engine: tiến độ, tạo câu hỏi, bài giảng, tim/XP/sao, TTS, thành tích |
| `data.js` | **Học liệu SGK**: từng unit gồm từ vựng, ngữ pháp, mẫu câu, quiz |
| `lessons-foundation.js` | **🧱 Lớp mất gốc**: 7 bài học từ con số 0 (từ loại → SVO → thì → giao tiếp) |
| `lessons-units1.js` | **📖 Bài học** Unit 1–8: công thức, giải thích, lỗi hay mắc, bài tập ngắn |
| `lessons-units2.js` | **📖 Bài học** Unit 9–12 + Review 1–4, kèm 91 câu dịch Anh–Việt |

## Lộ trình (theo sát SGK)

- **17 chặng** trên bản đồ: 🧱 *Lớp mất gốc* (mở đầu, teach from zero) → 12 Units,
  xen **4 chặng Ôn tập** ngay sau 3 unit mà nó ôn — chỉ mở khi hoàn thành chặng trước.
- Mỗi chặng có **5 màn**: 📖 **Học** (bài giảng) → 📚 Từ vựng → 🎧 Nghe (TTS) → 📝 Ngữ pháp → 👑 Boss.
  (Chặng *Lớp mất gốc* có 7 bài học, mỗi bài: giảng slide + 4 câu bài tập ngắn.)
- **Sao**: ≥90% = ⭐⭐⭐, ≥75% = ⭐⭐, ≥60% = ⭐.
- **Tim**: 5 tim/ màn thường, 3 tim/ Boss. Hết tim → thử lại.
- **XP & cấp độ**: 10 XP/câu đúng + bonus sao; 300 XP = 1 cấp.
- **🔥 Streak**: cộng khi học mỗi ngày.
- **🏅 11 thành tích**, **📖 Sổ từ** tra cứu + nghe phát âm.

## Phần học (điểm khác biệt so với game trắc nghiệm thuần)

1. **📖 Bài giảng trong mỗi chặng** — slide từng bước: 🎯 mục tiêu → 📐 công thức
   (S + V(s/es) + O… có chú thích tiếng Việt) → 💡 giải thích → ✨ ví dụ (bấm 🔊 nghe)
   → ⚠️ lỗi hay mắc → 📝 4 câu bài tập.
2. **Panel giải thích hiện MỌI câu, đúng lẫn sai**: 💡 vì sao · 🌐 dịch câu Anh–Việt ·
   📖 ngữ pháp vừa dùng + công thức · ✨ ví dụ có câu dịch · 📚 từ vựng trong câu (bấm 🔊)
   · 🧩 cấu trúc S–V–O · 💡 "nên học lại phần nào" + nút **📖 Ôn lại phần học này**.
3. **🌐 Dịch câu** và **🧩 Dựng câu** (bấm từ để đặt câu, có nhãn Chủ ngữ/Động từ/Vật ngữ)
   được trộn vào các màn Từ vựng – Ngữ pháp – Boss.

## Dữ liệu học liệu

### `data.js`

```js
window.CURRICULUM = {
  grade: 7,
  book: "Tiếng Anh 7 - Kết nối tri thức với cuộc sống",
  units: [{
    id: 1,
    title: "Unit 1: ...",
    topic: "...", icon: "🌍", color: "#hex", level: "Học kỳ 1",
    vocabulary: [{ en, vi, ipa, example, exVi }],
    grammar:    { rule, explain, examples: [{en, vi}] },
    patterns:   [{ en, vi }],
    quiz: [ {type:"mcq"|"fill"|"reorder", ...} ],
    pronunciation: "..."
  }]
}
```

### `lessons-*.js`

```js
window.LESSONS_F = { foundation: { title, subtitle, lessons: [ /* 7 bài */ ] } };
window.LESSONS_U1 = { units: { "1": {...}, /* … "8" */ }, quizVi: { "1||<câu hỏi gốc>": "bản dịch" } };
window.LESSONS_U2 = { units: { "9": {...}, /* … "16" = Review 1-4 */ }, quizVi: {...} };

// mỗi bài / mỗi unit:
{
  goal: "Sau bài này em sẽ…",
  formula: [{ label: "Khẳng định", f: "S + V(s/es) + O", vi: "Chủ ngữ + Động từ…" }],
  explain: "Giải thích tiếng Việt…",
  mistakes: [{ wrong: "She go…", right: "She goes…", why: "…" }],
  examples: [{ en, exVi }],              // chỉ bài học nền tảng
  checkpoint: [ { type:"mcq"|"fill"|"reorder", ... } ]   // 4 câu
}
```

Đổi/ mở rộng học liệu chỉ cần sửa `data.js` và `lessons-*.js`, không đụng tới code game.

## Kiểm thử

`t.html` là trang tự kiểm tra 51 assertions (load học liệu, bản đồ, unlock, chạy hết 5 màn,
panel giải thích, dạng bài mới, tab, màn chọn bài). Mở `t.html?auto=1` để chạy
(chế độ tự động sẽ xoá tiến độ demo — chỉ dùng khi phát triển).

