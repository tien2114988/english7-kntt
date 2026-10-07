# 🦜 English Quest 7 — Game học Tiếng Anh lớp 7

Game **bản đồ phiêu lưu** giúp học sinh lớp 7 ôn luyện tiếng Anh bám sát
**SGK Tiếng Anh 7 — Kết nối tri thức với cuộc sống** (chương trình GDPT 2018).

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
| `game.js` | Engine: tiến độ, tạo câu hỏi, tim/XP/sao, TTS, âm thanh, thành tích |
| `data.js` | **Học liệu SGK**: từng unit gồm từ vựng, ngữ pháp, mẫu câu, quiz |

## Lộ trình (theo sát SGK)

- Mỗi **Unit = một chặng trên bản đồ**, chỉ mở khi hoàn thành unit trước.
- Mỗi unit có **4 màn**: 📚 Từ vựng (thẻ lật + kiểm tra) → 🎧 Nghe (TTS) → 📝 Ngữ pháp → 👑 Boss.
- **Sao**: ≥90% = ⭐⭐⭐, ≥75% = ⭐⭐, ≥60% = ⭐.
- **Tim**: 5 tim/ màn thường, 3 tim/ Boss. Hết tim → thử lại.
- **XP & cấp độ**: 10 XP/câu đúng + bonus sao; 300 XP = 1 cấp.
- **🔥 Streak**: cộng khi học mỗi ngày.
- **🏅 10 thành tích**, **📖 Sổ từ** tra cứu + nghe phát âm.

## Dữ liệu học liệu (`data.js`)

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

Đổi/ mở rộng học liệu chỉ cần sửa `data.js`, không đụng tới code game.
