/* lessons-units1.js — phần "📖 Học" cho Unit 1-8 */
window.LESSONS_U1 = {
  units: {
    "1": {
      goal: "Sau bài này em tự kể được sở thích và thói quen hằng ngày bằng thì hiện tại đơn, kể cả câu phủ định và câu hỏi.",
      formula: [
        { label: "Khẳng định (số ít)", f: "S (he/she/it) + V(s/es) + O", vi: "Chủ ngữ anh ấy/cô ấy/nó thì động từ thêm s hoặc es. VD: She likes gardening. (Cô ấy thích làm vườn.)" },
        { label: "Khẳng định (số nhiều)", f: "S (I/you/we/they) + V + O", vi: "Chủ ngữ tôi/bạn/chúng ta/chúng tôi/họ thì động từ giữ nguyên dạng gốc. VD: They like gardening." },
        { label: "Phủ định", f: "S + don't/doesn't + V (nguyên thể) + O", vi: "doesn't dùng cho he/she/it, don't dùng cho I/you/we/they. Ở câu phủ định này, động từ KHÔNG được thêm s nữa. VD: She doesn't like chess." },
        { label: "Nghi vấn", f: "Do/Does + S + V (nguyên thể) + O ?", vi: "Does dùng khi chủ ngữ là he/she/it. Trả lời ngắn: Yes, she does. / No, she doesn't. VD: Do you often go jogging?" },
        { label: "Trạng từ tần suất", f: "S + (be) + always/usually/often/sometimes/never + V", vi: "always (luôn luôn), usually (thường), often (hay), sometimes (thỉnh thoảng), never (không bao giờ). Đứng TRƯỚC động từ chính và SAU động từ to be. VD: She is always happy." },
        { label: "Hỏi tần suất", f: "How often + do/does + S + V ... ?", vi: "Hỏi 'mấy lần'. Trả lời: every day (mỗi ngày), twice a week (hai lần một tuần). VD: How often do you do your homework?" }
      ],
      explain: "Thì hiện tại đơn là thì dùng cho những việc LẶP ĐI LẶP LẠI mỗi ngày, mỗi tuần — tức là thói quen và sở thích. VD: I get up at six o'clock. (Tôi dậy lúc sáu giờ — ngày nào cũng vậy.) Khi thấy các từ như every day (mỗi ngày), usually (thường), always (luôn luôn), never (không bao giờ), How often...? là chắc chắn dùng hiện tại đơn. Ví dụ quen thuộc trong bài: I usually get up at six o'clock every morning / My brother plays football on Sundays (Anh trai tôi đá bóng vào các ngày Chủ nhật).\n\nQuy tắc quan trọng nhất cần nhớ: với chủ ngữ số ít he, she, it thì động từ PHẢI THÊM s hoặc es — She likes music, My brother plays football. Còn I, you, we, they thì giữ nguyên — They like music. Mẹo cho em: thử thay chủ ngữ trong câu bằng từ 'she', nếu nghe hợp thì nhớ thêm s. Từ vựng của unit này cũng áp dụng y như vậy: I jog (tôi chạy bộ) nhưng She jogs; I make models nhưng Nam makes models.\n\nMuốn phủ định hay hỏi, em mượn hai 'vệ binh' là do và does. Doesn't/does luôn đi kèm động từ dạng NGUYÊN THỂ (dạng đầu, không thêm gì): She doesn't go jogging (không bao giờ viết 'doesn't goes'). Trạng từ tần suất (always, usually, often, never...) thì đứng trước động từ chính nhưng đứng SAU động từ to be: She is never late (không phải 'She never is late'). Câu hỏi thì đảo trợ từ lên trước: Do you often go jogging? / How often do you do your homework?",
      mistakes: [
        { wrong: "She go to school every day.", right: "She goes to school every day.", why: "Chủ ngữ She là số ít nên động từ go phải thêm es thành goes." },
        { wrong: "He doesn't goes to school by bike.", right: "He doesn't go to school by bike.", why: "Sau doesn't đã có 'does' rồi, động từ phải ở dạng nguyên thể, không được thêm s/es." },
        { wrong: "She always is happy.", right: "She is always happy.", why: "Với động từ to be (am/is/are), trạng từ tần suất đứng SAU, không đứng trước." },
        { wrong: "Do she like folk music?", right: "Does she like folk music?", why: "Chủ ngữ She là số ít nên phải dùng Does; sau Does thì động từ like giữ nguyên." }
      ],
      checkpoint: [
        { type: "mcq", q: "My brother usually ___ model planes in his room.", options: ["make", "makes", "making", "made"], answer: 1, vi: "Anh trai tôi thường làm mô hình máy bay trong phòng.", explain: "Chủ ngữ My brother = anh trai (tương đương he, số ít) nên động từ make thêm s thành makes." },
        { type: "mcq", q: "Chess is a ___ hobby among students.", options: ["popular", "patient", "valuable", "unusual"], answer: 0, vi: "Cờ vua là một sở thích phổ biến trong giới học sinh.", explain: "Popular nghĩa là 'được nhiều người ưa thích' hợp với hobby; patient (kiên nhẫn), valuable (quý giá), unusual (khác thường) không hợp nghĩa ở đây." },
        { type: "fill", q: "She usually (jog) in the park before school.", answer: "jogs", alt: ["jogs"], hint: "She là số ít → thêm s vào jog", vi: "Cô ấy thường chạy bộ ở công viên trước khi đến trường.", explain: "Chủ ngữ She số ít nên jog thêm s thành jogs; usually (thường) là trạng từ tần suất, đứng trước động từ." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["I", "am", "really", "into", "gardening"], answer: "I am really into gardening", vi: "Tôi rất mê làm vườn", explain: "Cấu trúc be into something = mê, rất thích cái gì; sau into có thể là danh từ hoặc V-ing (gardening)." }
      ]
    },
    "2": {
      goal: "Sau bài này em nhận ra được chủ ngữ, động từ và các thành phần còn lại để viết đúng câu đơn, rồi sắp xếp từ lộn xộn thành câu có nghĩa.",
      formula: [
        { label: "Chỉ hành động", f: "S + V", vi: "Một chủ ngữ làm một việc, không cần vật ngữ. VD: The children laugh. (Bọn trẻ cười.)" },
        { label: "Có vật ngữ", f: "S + V + O", vi: "Động từ cần một 'nạn nhân' (người hoặc thứ bị làm tới). VD: Lan goes to the library. (O = the library.)" },
        { label: "Có bổ ngữ", f: "S + V(link) + C", vi: "V là động từ nối (is/are/looks/becomes) — nó không 'làm' gì mà chỉ nối chủ ngữ với lời tả. VD: This exercise is easy. (Bài tập này dễ.)" },
        { label: "Hai vật ngữ", f: "S + V + O + O", vi: "Thông thường là (người) trước, (vật) sau. VD: My mother gave me a glass of milk. (gave me = cho tôi, a glass of milk = cái ly sữa.)" },
        { label: "Vật ngữ + bổ ngữ", f: "S + V + O + C", vi: "C chỉ tính chất của O (không phải của S). VD: We keep our classroom clean. (chúng tôi giữ lớp sạch.)" },
        { label: "Phủ định", f: "S + don't/doesn't + V (nguyên thể)", vi: "Nói 'không làm gì'. VD: I don't eat fast food. / She doesn't eat fried food." }
      ],
      explain: "Câu đơn (simple sentence) là câu chỉ có MỘT mệnh đề: một chủ ngữ (S) — người hoặc vật làm việc — và một động từ chính (V) kể việc đó. VD: The children are playing in the yard. Chủ ngữ là 'the children', động từ chính là 'are playing'. Câu dài hay ngắn không quan trọng, quan trọng là chỉ có MỘT nhóm chủ ngữ – động từ.\n\nSau động từ đến phần gì thì tùy mục đích: có thể là vật ngữ (O) — thứ bị làm tới (Lan reads books), có thể là bổ ngữ (C) — lời tả cho chủ ngữ (The book is interesting), cũng có thể cả hai (My mother gave me a glass of milk). Muốn viết câu đơn từ các từ cho sẵn: bước 1 tìm CHỦ NGỮ (ai? cái gì? làm gì?), bước 2 chọn ĐỘNG TỪ hợp với chủ ngữ, bước 3 xếp các từ còn lại — thời gian và địa điểm thường đứng CUỐI câu (Lan goes to the library on Saturdays.).\n\nLỗi hay gặp nhất là nhồi hai ý vào một câu. Câu đơn chỉ có một động từ chính; nếu có hai ý thì tách ra thành hai câu hoặc nối bằng and/but. Cuối cùng nhớ kiểm tra: chủ ngữ số ít thì động từ thêm s (Lan goes, không phải 'Lan go').\n\nBài tập nhanh em tự làm: đọc một câu trong sách rồi chỉ ra ai là CHỦ NGỮ, việc gì là ĐỘNG TỪ CHÍNH, từ nào chỉ THỜI GIAN/ĐỊA ĐIỂM (đứng cuối). VD: The children are playing in the yard. → chủ ngữ: the children; động từ: are playing; địa điểm: in the yard. Làm vài lần là em nhận ra câu đơn ngay.",
      mistakes: [
        { wrong: "The childrens is playing in the yard.", right: "The children are playing in the yard.", why: "Children đã là số nhiều (không thêm s vào children) nên động từ to be phải là are." },
        { wrong: "My mother gave to me a glass of milk.", right: "My mother gave me a glass of milk.", why: "Cấu trúc give somebody something: tân ngữ người đứng ngay sau động từ, không thêm to." },
        { wrong: "This exercise is look easy.", right: "This exercise is easy.", why: "Một câu đơn chỉ có một động từ chính; is đã làm động từ nối thì không dùng thêm look. Muốn dùng look thì viết: This exercise looks easy." },
        { wrong: "Lan go to the library every weekend.", right: "Lan goes to the library every weekend.", why: "Chủ ngữ Lan = cô ấy (số ít) nên động từ go phải thêm s thành goes." }
      ],
      checkpoint: [
        { type: "mcq", q: "Câu nào là câu đơn đúng?", options: ["Childrens play in the yard.", "The children play in the yard.", "Play the children in yard.", "Children play yard the in."], answer: 1, explain: "Câu đúng phải có chủ ngữ đúng (children, không thêm s) và trật tự S + V + O gọn gàng: The children play in the yard." },
        { type: "mcq", q: "___ is more important than money.", options: ["Health", "Healthy", "Disease", "Protein"], answer: 0, vi: "Sức khỏe quan trọng hơn tiền bạc.", explain: "Health là danh từ 'sức khoẻ' nên đứng làm chủ ngữ được; healthy là tính từ 'lành mạnh', disease là bệnh, protein là chất đạm." },
        { type: "fill", q: "Lan often (visit) the library on Saturdays.", answer: "visits", alt: ["visits"], hint: "Lan = cô ấy (số ít)", vi: "Lan thường đến thư viện vào các ngày thứ Bảy.", explain: "Chủ ngữ Lan số ít nên visit thêm s thành visits; often (thường) đứng trước động từ chính." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["It", "is", "good", "for", "your", "health"], answer: "It is good for your health", vi: "Nó tốt cho sức khoẻ của bạn", explain: "S + be + tính từ + for + danh từ: It (chủ ngữ) + is (động từ nối) + good (bổ ngữ tả chủ ngữ) + for your health." }
      ]
    },
    "3": {
      goal: "Sau bài này em kể được những việc mình đã làm tình nguyện trong quá khứ bằng thì quá khứ đơn, kể cả câu phủ định và câu hỏi.",
      formula: [
        { label: "Khẳng định — động từ quy tắc", f: "S + V(-ed) + O", vi: "Động từ có quy tắc chỉ cần thêm -ed: plant → planted, collect → collected, visit → visited. VD: We collected litter yesterday." },
        { label: "Khẳng định — động từ bất quy tắc", f: "S + V(dạng quá khứ) + O", vi: "Nhóm 'đặc biệt' phải nhớ mặt: go → went, give → gave, do → did, is/am → was, are → were. VD: She donated some books last week." },
        { label: "Phủ định", f: "S + didn't + V (nguyên thể) + O", vi: "Khi đã có didn't thì động từ chính KHÔNG thêm -ed nữa. VD: They didn't join the clean-up activity." },
        { label: "Nghi vấn", f: "Did + S + V (nguyên thể) + ... ?", vi: "Trả lời ngắn: Yes, S did. / No, S didn't. VD: Did you meet the elderly people?" },
        { label: "Động từ to be ở quá khứ", f: "S + was/were + C", vi: "I/he/she/it → was; you/we/they → were. VD: I was a volunteer two years ago." },
        { label: "Hỏi việc trong quá khứ", f: "What did + S + do + (yesterday/last week)?", vi: "Hỏi 'đã làm gì'. Trả lời: S + V(-ed)/V bất quy tắc + O. VD: What did you do yesterday? — We planted trees." }
      ],
      explain: "Thì quá khứ đơn (simple past) dùng để nói về việc ĐÃ XONG trong quá khứ, không lặp lại nữa. Dấu hiệu nhận ra ngay: yesterday (hôm qua), last night/week/month (đêm/tuần/tháng trước), two years ago (hai năm trước), in 2019 (năm 2019), when I was young (khi tôi còn nhỏ). VD: We collected litter in the park yesterday.\n\nĐộng từ có quy tắc thì chỉ cần thêm -ed: plant → planted, clean → cleaned, visit → visited. Nhưng có cả tá động từ 'bất quy tắc' không thêm -ed mà đổi sang dạng khác: go → went, give → gave, take → took, was/were. Nhóm này không có cách nào khác là học thuộc lòng, học theo cặp: give – gave, go – went, donate – donated.\n\nPhủ định và câu hỏi mượn hai 'vệ binh' là did và didn't: They didn't join... / Did you meet...? Quy tắc vàng cần nhớ: ĐÃ DÙNG did/didn't thì động từ chính giữ nguyên dạng đầu, không thêm -ed nữa. Sai 'didn't collected', đúng 'didn't collect'. Chỉ khi nào không có did thì mới thêm -ed: We planted trees. Luyện nói nhanh với từ vựng unit: We donated old books to poor children last weekend. / She worked as a volunteer at the nursing home. (Cô ấy đã làm tình nguyện tại viện dưỡng lão.)",
      mistakes: [
        { wrong: "They didn't collected any money for the charity.", right: "They didn't collect any money for the charity.", why: "Sau didn't thì động từ ở dạng nguyên thể, không thêm -ed." },
        { wrong: "Did you joined the clean-up activity yesterday?", right: "Did you join the clean-up activity yesterday?", why: "Sau Did, động từ chính phải là dạng nguyên thể: join, không phải joined." },
        { wrong: "We plant trees in the park yesterday.", right: "We planted trees in the park yesterday.", why: "Dấu hiệu yesterday (hôm qua) → quá khứ đơn; plant là động từ quy tắc nên thêm -ed: planted." },
        { wrong: "She were a volunteer two years ago.", right: "She was a volunteer two years ago.", why: "Với chủ ngữ she (số ít), động từ to be ở quá khứ là was; were dùng cho you/we/they." }
      ],
      checkpoint: [
        { type: "mcq", q: "Lan ___ some books to the orphanage last week.", options: ["donate", "donated", "donates", "donating"], answer: 1, vi: "Lan đã tặng một vài cuốn sách cho trại trẻ mồ côi vào tuần trước.", explain: "Dấu hiệu last week (tuần trước) → quá khứ đơn; donate thêm -ed thành donated." },
        { type: "mcq", q: "___ you meet the elderly people at the nursing home?", options: ["Do", "Did", "Are", "Were"], answer: 1, vi: "Bạn có gặp những người lớn tuổi ở viện dưỡng lão không?", explain: "Câu hỏi về việc đã xảy ra → mở đầu bằng Did + chủ ngữ + động từ nguyên thể (meet)." },
        { type: "fill", q: "They didn't (join) the clean-up activity.", answer: "join", alt: ["join"], hint: "Sau didn't dùng động từ nguyên thể", vi: "Họ không tham gia hoạt động dọn vệ sinh.", explain: "didn't đã mang nghĩa quá khứ rồi nên động từ join giữ nguyên, không thêm -ed." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["She", "donated", "books", "last", "week"], answer: "She donated books last week", vi: "Cô ấy đã tặng sách vào tuần trước", explain: "Thứ tự: Chủ ngữ + động từ quá khứ + vật ngữ + thời gian; donated là quá khứ của donate, last week chỉ thời gian quá khứ." }
      ]
    },
    "4": {
      goal: "Sau bài này em so sánh được hai đồ vật, hai bài hát, hai bảo tàng bằng like, different from và (not) as ... as.",
      formula: [
        { label: "Giống nhau", f: "A + be + like + B", vi: "like ở đây là 'giống như', phía sau là một danh từ. VD: My school is like a garden. (Trường tôi giống một khu vườn.)" },
        { label: "Khác nhau", f: "A + be + different from + B", vi: "different from = khác với (cụm cố định, luôn đi kèm from). VD: Her picture is different from mine." },
        { label: "So sánh bằng", f: "A + be + as + tính từ + as + B", vi: "Hai bên ngang nhau về mức độ. Sau as phải là TÍNH TỪ nguyên thể. VD: This painting is as beautiful as that one." },
        { label: "So sánh kém", f: "A + be + not as + tính từ + as + B", vi: "A không bằng B. VD: Pop music is not as quiet as classical music. (Nhạc pop không yên tĩnh bằng nhạc cổ điển.)" },
        { label: "Câu hỏi so sánh", f: "Is/Are + A + as + tính từ + as + B ?", vi: "Hỏi 'A có bằng B không?'. Trả lời: Yes, it is. / No, it isn't. VD: Is this painting as beautiful as that one?" },
        { label: "Thích hơn", f: "S + prefer + X + to + Y", vi: "prefer = thích hơn, so sánh bằng 'to' (KHÔNG dùng than). Với động từ thì dùng V-ing: I prefer painting to singing." }
      ],
      explain: "Trong unit này em có ba 'công cụ' so sánh: like (giống), different from (khác) và as ... as (bằng nhau). Dùng like khi muốn nói A giống B — My school is like a garden (Trường tôi giống khu vườn). Dùng different from khi A khác B — Her picture is different from mine (Bức tranh của cô ấy khác của tôi).\n\nMuốn nói hai bên CÙNG một mức nào đó thì dùng as + tính từ + as: This painting is as beautiful as that one (Bức tranh này đẹp bằng bức tranh kia). Muốn nói 'kém hơn' chỉ cần thêm not vào: The Science museum is not as big as the History museum. Chú ý chỉ được dùng TÍNH TỪ sau as — 'as beautifully as' là sai vì beautifully là trạng từ.\n\nMột số từ dễ nhầm: prefer X to Y = thích X hơn Y (dùng 'to', không dùng 'than'), sau prefer là danh từ hoặc V-ing: I prefer painting to singing. Còn 'than' chỉ dùng kèm more/less. Lệch một từ là mất điểm ngay, nên khi làm bài em đọc lại xem sau as là tính từ chưa, sau prefer là V-ing chưa, different có kèm from chưa. Thêm vài ví dụ với từ mới của unit để nhớ lâu: Folk music is not as loud as pop music (Nhạc dân gian không ồn ào bằng nhạc pop). / Vietnamese water puppetry is different from Thai puppetry (Múa rối nước Việt Nam khác với múa rối Thái Lan).",
      mistakes: [
        { wrong: "Vietnamese water puppetry is different with Thai puppetry.", right: "Vietnamese water puppetry is different from Thai puppetry.", why: "Cụm cố định là different from, không dùng different with hay different to." },
        { wrong: "This song is as beautifully as that one.", right: "This song is as beautiful as that one.", why: "Sau as ... as phải dùng tính từ nguyên thể (beautiful), không dùng trạng từ kéo thêm -ly." },
        { wrong: "Ha Noi is not as big than Ho Chi Minh City.", right: "Ha Noi is not as big as Ho Chi Minh City.", why: "Câu 'kém hơn' của cấu trúc này là not as ... as; 'than' chỉ dùng với more/less, không dùng ở đây." },
        { wrong: "She prefers dance to swim.", right: "She prefers dancing to swimming.", why: "Sau prefer là danh từ hoặc động từ dạng V-ing, và so sánh đi với 'to' chứ không phải 'than'." }
      ],
      checkpoint: [
        { type: "mcq", q: "The Science museum is not as ___ as the History museum.", options: ["big", "bigger", "biggest", "bigly"], answer: 0, vi: "Bảo tàng Khoa học không lớn bằng Bảo tàng Lịch sử.", explain: "Sau not as ... as phải là tính từ nguyên thể: big; bigger là so sánh hơn, biggest là so sánh nhất." },
        { type: "fill", q: "I prefer (paint) to (sing).", answer: "painting to singing", alt: ["painting to singing"], hint: "prefer + V-ing + to + V-ing", vi: "Tôi thích vẽ tranh hơn là ca hát.", explain: "prefer X to Y = thích X hơn Y; cả paint và sing đều phải ở dạng V-ing: painting, singing." },
        { type: "fill", q: "Vietnamese water puppetry is different (Thai puppetry).", answer: "from", alt: ["from"], hint: "Cụm cố định different ...", vi: "Múa rối nước Việt Nam khác với múa rối Thái Lan.", explain: "different from là cụm cố định nghĩa là 'khác với', luôn đi kèm from." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["This", "painting", "is", "as", "beautiful", "as", "that", "one"], answer: "This painting is as beautiful as that one", vi: "Bức tranh này đẹp bằng bức tranh kia", explain: "S + be + as + tính từ + as + danh từ: hai bên được so sánh ngang nhau, sau as là tính từ beautiful." }
      ]
    },
    "5": {
      goal: "Sau bài này em hỏi và trả lời được về số lượng thức ăn, đồ uống bằng some, any, a lot of và How many / How much.",
      formula: [
        { label: "Khẳng định", f: "S + V + some + danh từ", vi: "some dùng cho cả đếm được lẫn không đếm được trong câu KHẲNG ĐỊNH. VD: There is some milk in the fridge." },
        { label: "Phủ định và câu hỏi", f: "S + don't/doesn't + have any ... / Is/Are there any ...?", vi: "any là 'some' phiên bản phủ định – câu hỏi. VD: There isn't any sugar. / Are there any eggs?" },
        { label: "Nhiều", f: "S + V + a lot of / lots of + danh từ", vi: "a lot of = lots of = nhiều, dùng được cho cả hai loại danh từ. VD: We bought a lot of vegetables." },
        { label: "Hỏi số lượng đếm được", f: "How many + danh từ đếm được số nhiều + do/does + S + V ...?", vi: "How many đi với thứ ĐẾM ĐƯỢC. VD: How many eggs do we need for the cake?" },
        { label: "Hỏi số lượng / giá", f: "How much + danh từ không đếm được + do/does + S + V ...?", vi: "How much đi với thứ KHÔNG đếm được, cũng dùng để hỏi giá. VD: How much water do you drink every day? / How much is it?" },
        { label: "Có / không có (there is/are)", f: "There is + không đếm được / số ít + ... / There are + danh từ số nhiều + ...", vi: "There is some milk. (sữa không đếm được) — There are two eggs. (trứng đếm được, số nhiều)" }
      ],
      explain: "Việc đầu tiên khi học unit này là phân biệt ĐẾM ĐƯỢC và KHÔNG ĐẾM ĐƯỢC. Đếm được (countable): egg, tomato, carrot, orange — đếm 1, 2, 3 thoải mái. Không đếm được (uncountable): milk, sugar, rice, water, beef — thường là chất lỏng, bột, thứ vụn không tách thành từng cái, nên không nói 'hai cục đường'.\n\nCách dùng: some = 'một ít/một số' cho câu khẳng định (There is some milk.); any = 'không có tí nào' cho câu phủ định và câu hỏi (There isn't any sugar. / Are there any eggs?); a lot of / lots of = 'nhiều' dùng được cho cả hai loại. Trong câu phủ định, người ta còn hay dùng much/many: There isn't much sugar.\n\nHỏi số lượng thì nhớ câu thần chú: MANY đi với ĐẾM ĐƯỢC (How many eggs?), MUCH đi với KHÔNG ĐẾM ĐƯỢC (How much water?); much cũng là từ hỏi GIÁ: How much is it? (Cái này bao nhiêu tiền?). Cuối cùng kiểm tra lại 'cặp đôi': milk không đếm được nên là There IS some milk; tomatoes đếm được số nhiều nên là There ARE a lot of tomatoes. Hai câu giao tiếp hay dùng khi nói về đồ ăn thức uống: We need some flour and two eggs (Chúng tôi cần bột và hai quả trứng) và I'd like a glass of mineral water, please (Cho tôi một ly nước khoáng, làm ơn).",
      mistakes: [
        { wrong: "How many sugar do you want in your tea?", right: "How much sugar do you want in your tea?", why: "Sugar (đường) không đếm được nên hỏi bằng How much; How many chỉ dùng với danh từ đếm được số nhiều." },
        { wrong: "There are some milk in the fridge.", right: "There is some milk in the fridge.", why: "Milk là danh từ không đếm được nên đi với There is, không dùng are." },
        { wrong: "There aren't some eggs in the fridge.", right: "There aren't any eggs in the fridge.", why: "Trong câu phủ định (aren't) phải dùng any thay cho some." },
        { wrong: "There is a lot of tomatoes at the market.", right: "There are a lot of tomatoes at the market.", why: "Tomatoes là danh từ đếm được số nhiều nên đi với There are." }
      ],
      checkpoint: [
        { type: "mcq", q: "How ___ eggs do we need for the cake?", options: ["much", "many", "lot", "few"], answer: 1, vi: "Chúng ta cần bao nhiêu quả trứng để làm bánh?", explain: "Eggs (trứng) đếm được số nhiều nên hỏi bằng How many; How much dùng cho thứ không đếm được." },
        { type: "mcq", q: "Add two ___ of sugar to the mixture.", options: ["sauces", "tablespoons", "onions", "shrimps"], answer: 1, vi: "Thêm hai thìa canh đường vào hỗn hợp.", explain: "Tablespoon = thìa canh; sau 'two' nên thêm s: tablespoons. Sauce là nước xốt, onion là củ hành, shrimp là con tôm — không hợp ngữ cảnh nấu ăn này." },
        { type: "fill", q: "There (be) some milk in the fridge.", answer: "is", alt: ["is"], hint: "milk không đếm được", vi: "Trong tủ lạnh có một ít sữa.", explain: "Milk là danh từ không đếm được nên dùng There is; some đứng ngay sau đó." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["How", "much", "lemonade", "do", "you", "need"], answer: "How much lemonade do you need", vi: "Bạn cần bao nhiêu nước chanh?", explain: "How much + danh từ không đếm được (lemonade) + do + chủ ngữ + động từ nguyên thể." }
      ]
    },
    "6": {
      goal: "Sau bài này em chỉ được vị trí các phòng trong trường và nói được thời gian bằng at, in, on, in front of, behind, between, next to.",
      formula: [
        { label: "at — giờ cố định", f: "at + giờ", vi: "Dùng với giờ cố định hoặc giờ có phút: at seven o'clock, at seven fifteen, at noon. VD: Classes start at seven fifteen." },
        { label: "on — ngày", f: "on + ngày trong tuần / ngày cụ thể", vi: "Dùng với ngày và ngày tháng cụ thể. VD: We have English on Monday. / on 20th October." },
        { label: "in — tháng, năm, mùa, buổi", f: "in + tháng / năm / mùa / khoảng thời gian", vi: "Khoảng thời gian lớn. VD: My birthday is in April. / in summer / in the morning." },
        { label: "in / at — địa điểm", f: "in + không gian có giới hạn / at + một điểm cụ thể", vi: "in = bên trong: in the classroom, in the yard. at = tại một điểm: at the gate, at the bus stop." },
        { label: "Vị trí", f: "in front of / behind / next to + danh từ", vi: "in front of = phía trước, behind = phía sau, next to = bên cạnh. VD: There is a garden in front of the school." },
        { label: "Giữa hai thứ", f: "between A and B", vi: "between luôn đi với HAI thứ và có 'and' nối lại. VD: My desk is between the window and the door." }
      ],
      explain: "Với THỜI GIAN, em ghi nhớ theo thứ tự từ nhỏ đến lớn: AT là nhỏ nhất (giờ cố định — at seven o'clock), ON là vừa (một ngày — on Monday, on 20th October), IN là lớn nhất (tháng, năm, mùa, buổi — in May, in 2026, in summer, in the morning). Chỉ cần nhìn xem sau giới từ là GIỜ, NGÀY hay THÁNG là chọn ngay được.\n\nVới ĐỊA ĐIỂM: in dùng cho không gian lớn có giới hạn (in the classroom — trong lớp, in the yard — trong sân), at dùng cho một điểm cụ thể trên bản đồ (at the gate — ở cổng, at the bus stop — ở trạm xe buýt, at school — tại trường).\n\nCác từ chỉ vị trí rất dễ nhớ: in front of = phía trước, behind = phía sau, next to = bên cạnh, between = ở giữa (dùng với HAI thứ, luôn có and: between the window and the door). Ví dụ ghép: The school library is next to the science laboratory. (Thư viện trường ở cạnh phòng thí nghiệm.) Chú ý thêm hai từ hay bị nhầm: on time = đúng giờ, in time = kịp thời. Gộp cả hai loại giới từ trong một câu: The bus leaves at six thirty (Xe buýt khởi hành lúc sáu giờ ba mươi — giờ → at) và There is a big yard behind the classroom building (Có một sân lớn phía sau dãy phòng học — vị trí → behind).",
      mistakes: [
        { wrong: "The meeting starts in eight o'clock.", right: "The meeting starts at eight o'clock.", why: "Eight o'clock là giờ cố định → dùng at; in chỉ dùng với tháng, năm, mùa." },
        { wrong: "My birthday is on April.", right: "My birthday is in April.", why: "April là tháng → dùng in; on chỉ dành cho ngày trong tuần hoặc ngày cụ thể (on 20th April)." },
        { wrong: "There is a big statue in front the school gate.", right: "There is a big statue in front of the school gate.", why: "in front of là cụm cố định, luôn phải có of đi kèm, không được bỏ." },
        { wrong: "We have English class in Monday.", right: "We have English class on Monday.", why: "Monday là ngày trong tuần → dùng on; on time nghĩa là đúng giờ." }
      ],
      checkpoint: [
        { type: "mcq", q: "Classes start ___ seven fifteen.", options: ["in", "on", "at", "of"], answer: 2, vi: "Giờ học bắt đầu lúc bảy giờ mười lăm.", explain: "Seven fifteen là giờ cố định → dùng at; in dùng cho tháng/năm, on dùng cho ngày." },
        { type: "mcq", q: "The teacher turned on the ___ to show the slides.", options: ["projector", "equipment", "entrance exam", "resource"], answer: 0, vi: "Giáo viên đã bật máy chiếu để trình chiếu bài.", explain: "Projector = máy chiếu (dùng để chiếu slide); equipment là đồ dùng/thiết bị (từ chỉ chung), entrance exam là kì thi đầu vào, resource là nguồn tài liệu." },
        { type: "fill", q: "We have a festival (on) the last day of the term.", answer: "on", alt: ["on"], hint: "'the last day' là một ngày cụ thể", vi: "Chúng tôi có một lễ hội vào ngày cuối cùng của học kỳ.", explain: "The last day of the term là một ngày cụ thể → dùng on; nếu là tháng thì mới dùng in." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["The", "school", "library", "is", "next", "to", "the", "science", "laboratory"], answer: "The school library is next to the science laboratory", vi: "Thư viện trường ở cạnh phòng thí nghiệm khoa học", explain: "S + be + next to + danh từ: next to nghĩa là ở bên cạnh; science laboratory là phòng thí nghiệm khoa học." }
      ]
    },
    "7": {
      goal: "Sau bài này em hỏi đáp được về khoảng cách, thời gian đi lại và đưa ra lời khuyên về an toàn giao thông bằng should / shouldn't.",
      formula: [
        { label: "Trả lời khoảng cách", f: "It is + khoảng cách + from A to B", vi: "Từ A đến B là bao xa. VD: It is about two kilometres from my house to the school." },
        { label: "Hỏi khoảng cách", f: "How far is it from A to B?", vi: "How far = bao xa (hỏi khoảng cách). Trả lời: It's about two kilometres. — How long thì hỏi thời gian nhé!" },
        { label: "Mất bao lâu", f: "It takes + (người) + thời gian + to do something", vi: "Mất bao lâu để làm gì. VD: It takes fifteen minutes to walk there. / It takes me ten minutes." },
        { label: "Khuyên NÊN", f: "S + should + V (nguyên thể) + ...", vi: "should = nên, sau nó là động từ nguyên thể. VD: You should wear a helmet." },
        { label: "Khuyên KHÔNG NÊN", f: "S + shouldn't + V (nguyên thể) + ...", vi: "shouldn't = không nên. VD: Students shouldn't use their phones while walking." },
        { label: "Hỏi ý kiến", f: "What should + S + V ...? / Should + S + V ...?", vi: "Hỏi nên làm gì. Trả lời: Yes, S should. / No, S shouldn't. VD: What should we do to help pedestrians?" }
      ],
      explain: "Nói về khoảng cách, em dùng 'It' làm chủ ngữ giả — đó là lý do công thức bắt đầu bằng It: It is two kilometres from my house to the school (Từ nhà tôi đến trường là hai kilômét). Hỏi bằng How far is it from A to B? Câu dễ nhầm là How long — nhưng how long hỏi THỜI GIAN (bao lâu), how far mới hỏi KHOẢNG CÁCH (bao xa).\n\nNói về thời gian đi lại thì có công thức vàng: It takes + (người) + thời gian + to làm gì. VD: It takes fifteen minutes to walk there. (Đi bộ đến đó mất mười lăm phút.) Muốn nói 'tôi mất...' thì thêm người vào giữa: It takes me twenty minutes to get to school.\n\nPhần should / shouldn't là để đưa lời khuyên: should = nên, shouldn't = không nên, và sau cả hai chỉ được dùng ĐỘNG TỪ NGUYÊN THỂ (không thêm to, không thêm s): You should wear a helmet. / Drivers shouldn't drink wine. Trong chủ đề giao thông, should/shouldn't thường khuyên về an toàn: đội mũ bảo hiểm, đi trên vỉa hè, tuân theo luật giao thông, không dùng điện thoại khi tham gia giao thông. Ví dụ với từ vựng unit: The distance from my house to school is two kilometres, and it takes ten minutes by bike. / Everyone must obey traffic rules. (Mọi người phải tuân theo luật giao thông.)",
      mistakes: [
        { wrong: "It takes me twenty minutes get to school.", right: "It takes me twenty minutes to get to school.", why: "Công thức cố định là It takes + người + thời gian + TO do something, bắt buộc phải có to." },
        { wrong: "You should to wear a helmet.", right: "You should wear a helmet.", why: "Should là động từ tình thái (modal verb): sau should chỉ có động từ nguyên thể, không thêm to." },
        { wrong: "How long is it from here to the station?", right: "How far is it from here to the station?", why: "How long hỏi THỜI GIAN (bao lâu); how far hỏi KHOẢNG CÁCH (bao xa)." },
        { wrong: "We should obeys the traffic rules.", right: "We should obey the traffic rules.", why: "Sau should động từ giữ nguyên dạng gốc, không thêm s/es vào obeys." }
      ],
      checkpoint: [
        { type: "mcq", q: "It ___ ten minutes to walk to the school gate.", options: ["take", "takes", "taking", "to take"], answer: 1, vi: "Đi bộ đến cổng trường mất mười phút.", explain: "Công thức It takes + thời gian + to V; chủ ngữ It là số ít nên take thêm s: takes." },
        { type: "mcq", q: "Children should walk on the ___ to stay safe.", options: ["lane", "pavement", "handlebars", "vehicle"], answer: 1, vi: "Trẻ em nên đi trên vỉa hè để giữ an toàn.", explain: "Pavement = vỉa hè, nơi an toàn cho người đi bộ; lane là làn đường (dành cho xe), handlebars là tay lái, vehicle là xe cộ." },
        { type: "fill", q: "Drivers shouldn't (use) their phones while driving.", answer: "use", alt: ["use"], hint: "Sau shouldn't dùng động từ nguyên thể", vi: "Tài xế không nên dùng điện thoại khi đang lái xe.", explain: "shouldn't + động từ nguyên thể = không nên làm gì; không được viết 'shouldn't uses'." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["It", "takes", "fifteen", "minutes", "to", "walk", "there"], answer: "It takes fifteen minutes to walk there", vi: "Đi bộ đến đó mất mười lăm phút", explain: "It takes + thời gian + to + động từ nguyên thể: mất bao lâu để làm một việc gì đó." }
      ]
    },
    "8": {
      goal: "Sau bài này em nối được hai ý trái chiều bằng although, though và however để nói cảm nhận của mình về một bộ phim.",
      formula: [
        { label: "although ở đầu câu", f: "Although + S + V, + S + V (chính)", vi: "although = mặc dù, đằng sau nó là một mệnh đề ĐẦY ĐỦ (có chủ ngữ + động từ). VD: Although the film was long, we enjoyed it." },
        { label: "although ở giữa câu", f: "S + V + although + S + V", vi: "although đứng giữa vẫn được, nghĩa không đổi. VD: He went to the cinema although he had a lot of homework." },
        { label: "though", f: "Though + S + V, + S + V", vi: "though giống although, hay dùng trong văn nói. VD: Though she was tired, she stayed until the end." },
        { label: "though ở cuối câu", f: "S + V, though.", vi: "Dạng thoải mái của văn nói, tách bằng dấu phẩy. VD: It was long. It was good, though." },
        { label: "however nối hai câu", f: "S + V. However, + S + V.", vi: "however = tuy nhiên, nối HAI CÂU độc lập, thường có dấu phẩy ở hai bên. VD: The film was dull. However, the actors were very good." },
        { label: "Lưu ý không nhân đôi", f: "Although/Though ... KHÔNG dùng thêm but/however", vi: "although đã mang sẵn nghĩa 'mặc dù' nên câu còn lại không được dùng but/however nữa. VD: Although it was long, we enjoyed it." }
      ],
      explain: "although và though đều nghĩa là MẶC DÙ, dùng khi hai điều ngược chiều nhau: 'Mặc dù phim dài, chúng tôi vẫn thích.' Công thức: Although/Though + mệnh đề (có chủ ngữ + động từ), + mệnh đề chính. Mệnh đề nào đứng trước cũng được, chỉ cần nhớ sau Although là một mệnh đề đầy đủ, không phải một từ lẻ.\n\nhowever nghĩa là TUY NHIÊN và cách dùng khác hẳn: nó KHÔNG nối trong cùng một câu mà nối HAI CÂU ĐỘC LẬP với nhau. VD: The film was dull. However, the actors were very good. (Bộ phim buồn tẻ. Tuy nhiên, các diễn viên thì rất giỏi.) however thường đặt giữa câu với dấu phẩy hai bên, hoặc đứng đầu câu rồi thêm dấu phẩy.\n\nBẫy lớn nhất của unit này là 'nhân đôi': Although ĐÃ nghĩa là mặc dù nên KHÔNG được thêm but hoặc however ở đầu câu còn lại — 'Although the film was long, but we enjoyed it' là SAI. Ngoài ra trong văn nói, though có thể đứng một mình ở cuối câu: It was long. It was good, though. (Dài, nhưng mà cũng hay phết.) Thêm một ví dụ để nhớ: Although the film was frightening, the plot was gripping (Mặc dù bộ phim rùng rợn, cốt truyện vẫn hấp dẫn lôi cuốn).",
      mistakes: [
        { wrong: "Although the film was long, but we enjoyed it.", right: "Although the film was long, we enjoyed it.", why: "Although đã mang nghĩa 'mặc dù' rồi, không được dùng thêm but ở câu còn lại." },
        { wrong: "Although she was tired. She stayed until the end.", right: "Although she was tired, she stayed until the end.", why: "Although phải đi cùng mệnh đề chính trong MỘT câu (nối bằng dấu phẩy), không được tách thành hai câu rời." },
        { wrong: "However it was raining, we still went to the cinema.", right: "Although it was raining, we still went to the cinema.", why: "However không phải liên từ nên không thể đứng đầu câu rồi gắn mệnh đề ngay sau; muốn nói 'mặc dù' ở đầu câu thì dùng Although." },
        { wrong: "Although the film was dull, however we enjoyed it.", right: "Although the film was dull, we enjoyed it.", why: "Không dùng although và however cùng lúc vì cả hai đã mang nghĩa nhượng bộ/tương phản." }
      ],
      checkpoint: [
        { type: "mcq", q: "___ she was tired, she stayed until the end of the film.", options: ["Although", "However", "Because", "So"], answer: 0, vi: "Mặc dù mệt, cô ấy vẫn ở lại đến hết bộ phim.", explain: "Sau chỗ trống là một mệnh đề đầy đủ (she was tired) nên cần Although = mặc dù; however không nối được như vậy." },
        { type: "mcq", q: "He wrote a ___ of the new film for the school newspaper.", options: ["poster", "review", "director", "comedy"], answer: 1, vi: "Cậu ấy đã viết bài đánh giá về bộ phim mới cho báo của trường.", explain: "Review = bài phê bình (viết về phim); poster là áp phích, director là đạo diễn, comedy là phim hài." },
        { type: "fill", q: "He went to the cinema although he (have) a lot of homework.", answer: "had", alt: ["had"], hint: "Quá khứ của have là had", vi: "Anh ấy đã đến rạp chiếu phim dù có rất nhiều bài tập về nhà.", explain: "Mệnh đề although ở quá khứ nên động từ have phải ở dạng quá khứ: had; although đứng giữa câu vẫn giữ nguyên nghĩa." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["We", "enjoyed", "the", "film", "although", "it", "was", "long"], answer: "We enjoyed the film although it was long", vi: "Chúng tôi thích bộ phim dù nó dài", explain: "although đứng giữa câu, phía sau là mệnh đề đầy đủ (it was long); không dùng but vì although đã mang nghĩa mặc dù." }
      ]
    }
  },
  quizVi: {
    "1||She ___ shopping with her friends every Sunday.": "Cô ấy đi mua sắm với bạn bè mỗi Chủ nhật.",
    "1||My brother is keen ___ collecting stamps.": "Anh trai tôi rất mê sưu tầm tem.",
    "1||Lan never ___ up late on school days.": "Lan không bao giờ thức dậy muộn vào những ngày đi học.",
    "1||Nam often (jog) in the park near his house.": "Nam thường chạy bộ ở công viên gần nhà cậu ấy.",
    "1||How often do you ___ (go) to the library?": "Bạn thường đến thư viện mấy lần?",

    "2||Eating a lot of junk food ___ your health.": "Ăn nhiều đồ ăn nhanh ảnh hưởng đến sức khoẻ của bạn.",
    "2||You should ___ smoking; it is bad for your lungs.": "Bạn nên ngừng hút thuốc; thuốc lá có hại cho phổi của bạn.",
    "2||The opposite of 'unhealthy' is ___.": "Trái nghĩa của 'unhealthy' (không lành mạnh) là 'healthy' (lành mạnh).",
    "2||Choose the correct word: Wash your hands to keep ___ from germs.": "Chọn từ đúng: Hãy rửa tay để tránh xa vi trùng (keep away from germs).",
    "2||Fish and tofu are good sources of ___ (protein).": "Cá và đậu phụ là nguồn cung cấp chất đạm (protein) tốt.",
    "2||She (not/usually) eat fried food in the evening.": "Cô ấy thường không ăn đồ chiên vào buổi tối.",

    "3||The volunteers ___ food to the homeless last Sunday.": "Các tình nguyện viên đã phát lương thực cho người vô gia cư vào Chủ nhật tuần trước.",
    "3||___ you join the clean-up activity yesterday?": "Bạn có tham gia hoạt động dọn vệ sinh hôm qua không?",
    "3||Choose the correct word: We ___ old clothes for poor children.": "Chọn từ đúng: Chúng tôi đã tặng (donated) quần áo cũ cho trẻ em nghèo.",
    "3||A person who does voluntary work without pay is a ___.": "Người làm công việc tình nguyện mà không được trả công là tình nguyện viên (volunteer).",
    "3||Last year our class (plant) fifty trees in the school garden.": "Năm ngoái lớp chúng tôi đã trồng năm mươi cây trong vườn trường.",
    "3||They didn't ___ (collect) any money for the charity.": "Họ không quyên góp được khoản tiền nào cho quỹ từ thiện.",

    "4||Vietnamese water puppetry is different ___ Thai puppetry.": "Múa rối nước Việt Nam khác với múa rối Thái Lan.",
    "4||This song is as ___ as that one.": "Bài hát này cũng hay như bài hát kia.",
    "4||Choose the correct word: The ___ wrote a symphony for the concert.": "Chọn từ đúng: Nhà soạn nhạc (composer) đã viết một bản giao hưởng cho buổi hoà nhạc.",
    "4||My school library is ___ a boat.": "Thư viện trường tôi giống như một con thuyền.",
    "4||She prefers (dance) to (swim).": "Cô ấy thích khiêu vũ hơn là bơi lội.",
    "4||The two pictures are not the same. They are different ___ each other.": "Hai bức tranh không giống nhau. Chúng khác nhau.",

    "5||How ___ sugar do you want in your tea?": "Bạn muốn cho bao nhiêu đường vào tách trà của mình?",
    "5||There aren't ___ eggs in the fridge.": "Trong tủ lạnh không có quả trứng nào.",
    "5||A book that tells you how to cook is a ___.": "Cuốn sách hướng dẫn cách nấu ăn là một công thức nấu ăn (recipe).",
    "5||___ some beef in the bowl.": "Có một ít thịt bò trong cái bát.",
    "5||We need (buy) some fruit for the party.": "Chúng tôi cần mua một ít trái cây cho bữa tiệc.",
    "5||My father bought a lot of (vegetable) at the market today.": "Bố tôi đã mua rất nhiều rau ở chợ hôm nay.",

    "6||The meeting starts ___ eight o'clock.": "Cuộc họp bắt đầu lúc tám giờ.",
    "6||My birthday is ___ April.": "Sinh nhật tôi vào tháng Tư.",
    "6||The playground is ___ the two classroom blocks.": "Sân chơi nằm giữa hai dãy phòng học.",
    "6||Students do experiments in the school ___.": "Học sinh làm thí nghiệm ở phòng thí nghiệm của trường.",
    "6||Our class has a test (on) Monday.": "Lớp chúng tôi có bài kiểm tra vào thứ Hai.",
    "6||There is a big statue (in front of) the school gate.": "Có một bức tượng lớn phía trước cổng trường.",

    "7||It is three kilometres ___ my house ___ the bus stop.": "Từ nhà tôi đến trạm xe buýt là ba kilômét.",
    "7||You ___ drive your car after drinking wine.": "Bạn không nên lái xe sau khi uống rượu.",
    "7||It ___ me twenty minutes to get to school by bus.": "Tôi mất hai mươi phút để đến trường bằng xe buýt.",
    "7||Press the brakes when the traffic ___ turns red.": "Nhấn phanh khi đèn tín hiệu giao thông chuyển sang đỏ.",
    "7||You should (wear) a helmet when riding a motorbike.": "Bạn nên đội mũ bảo hiểm khi đi xe máy.",
    "7||How (far) is it from here to the station?": "Từ đây đến nhà ga xa bao nhiêu?",

    "8||___ it was raining, we still went to the cinema.": "Mặc dù trời mưa, chúng tôi vẫn đến rạp chiếu phim.",
    "8||The film was dull. ___, the actors were very good.": "Bộ phim buồn tẻ. Tuy nhiên, các diễn viên thì rất giỏi.",
    "8||A person who directs a film is the ___.": "Người làm công việc đạo diễn bộ phim là đạo diễn (director).",
    "8||The film is too ___ for children under 15.": "Bộ phim quá bạo lực đối với trẻ em dưới 15 tuổi.",
    "8||Although he was tired, he (finish) watching the whole film.": "Mặc dù mệt, anh ấy vẫn xem hết bộ phim.",
    "8||I enjoyed the film, (although) it was a bit long.": "Tôi thích bộ phim, mặc dù nó hơi dài."
  }
};
