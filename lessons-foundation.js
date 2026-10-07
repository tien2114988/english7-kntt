/* lessons-foundation.js — phần "Lớp mất gốc" cho English Quest 7
   Khóa học 7 bài dạy từ con số 0 cho học sinh mất gốc tiếng Anh.
   Chỉ chứa dữ liệu, không phụ thuộc file nào khác. */

window.LESSONS_F = {
  foundation: {
    title: "Lớp mất gốc tiếng Anh",
    subtitle: "Học từ con số 0 — không sợ nữa!",
    lessons: [
      {
        id: "f1",
        title: "Bài 1: Từ loại — danh từ, động từ, tính từ",
        goal: "Nhận biết 4 loại từ cơ bản và vai trò của chúng trong một câu tiếng Anh.",
        formula: [
          { label: "Danh từ (Noun – N)", f: "N = người / vật / việc", vi: "teacher, book, Hà Nội, happiness" },
          { label: "Động từ (Verb – V)", f: "V = việc làm / trạng thái", vi: "eat, go, study, like, is, have" },
          { label: "Tính từ (Adjective – Adj)", f: "Adj + N = tính từ đứng NGAY TRƯỚC danh từ để mô tả nó", vi: "a tall boy, beautiful weather, kind teacher" },
          { label: "Trạng từ (Adverb – Adv)", f: "V + Adv = trạng từ đứng SAU động từ để mô tả cách làm", vi: "run quickly, often go, very kind" },
          { label: "Cách nhận biết nhanh", f: "hỏi “cái gì/ai?” → N ; hỏi “làm gì?” → V ; hỏi “như thế nào?” → Adj ; hỏi “như nào/lúc nào?” → Adv", vi: "a book (N) / go (V) / a tall tree (Adj) / run fast (Adv)" },
          { label: "Cặp dễ nhầm", f: "Adj đổi thành Adv thường + ly : beautiful → beautifully, quick → quickly", vi: "She is a beautiful singer. / She sings beautifully." }
        ],
        explain: "Một câu tiếng Anh được ghép từ những viên gạch gọi là từ loại. Có 4 loại từ bạn bắt buộc phải nhớ mặt: danh từ, động từ, tính từ, trạng từ. Hãy hình dung câu tiếng Anh như một bức tranh: danh từ là người và vật xuất hiện trong tranh, động từ là hành động của họ, tính từ tô màu cho vật, còn trạng từ nói hành động đó diễn ra như thế nào.\n\nDanh từ (Noun) là người, vật hoặc việc. Bạn chỉ cần hỏi “Ai?” hay “Cái gì?” — câu trả lời chính là danh từ: teacher (giáo viên), book (sách), Hà Nội, happiness (niềm vui). Mẹo nhỏ: danh từ thường đứng sau a/an/the, hoặc làm chủ ngữ ở đầu câu (“The book is new”).\n\nĐộng từ (Verb) là việc làm. Kiểm tra bằng câu hỏi “làm gì?”: I eat breakfast (ăn), She studies English (học), The cat sleeps (ngủ). Lưu ý quan trọng: các từ is, are, am, was, were cũng ĐỘNG TỪ — chúng là động từ “nói trạng thái”, nghĩa là là / ở / đang là. Vì thế “She is a teacher” vẫn có động từ, chỉ là nó không chỉ việc làm thôi.\n\nTính từ (Adjective) mô tả danh từ và luôn đứng ngay trước nó: a tall boy (đứa bé cao), beautiful weather (thời tiết đẹp), kind teacher (giáo viên tốt). Trạng từ (Adverb) mô tả ĐỘNG TỪ và thường đứng sau động từ: run quickly (chạy nhanh), often go (thường đi), very kind (rất tốt). Câu thần thánh cần nhớ: danh từ được mô tả bởi tính từ, động từ được mô tả bởi trạng từ.",
        mistakes: [
          { wrong: "He runs quick.", right: "He runs quickly.", why: "runs là động từ, phía sau phải là trạng từ quickly. quick là tính từ, chỉ được đứng trước danh từ (a quick run)." },
          { wrong: "She sings beauty.", right: "She sings beautifully.", why: "beauty là danh từ (sự đẹp đẽ). Muốn nói cô ấy hát ĐẸP thì phải dùng trạng từ beautifully, đứng sau động từ sings." },
          { wrong: "The soup is taste delicious.", right: "The soup tastes delicious.", why: "taste (nếm, có vị) đã là động từ rồi nên không được thêm is. Chỉ có tính từ mới cần is: The soup is delicious." },
          { wrong: "I very like English.", right: "I like English very much.", why: "very là trạng từ bám vào tính từ/trạng từ (very kind, very quickly), không được đặt ngay trước động từ like. Đúng là I like … very much." }
        ],
        examples: [
          { en: "The teacher is kind.", exVi: "Cô giáo tốt bụng." },
          { en: "We have a beautiful garden.", exVi: "Chúng tôi có một khu vườn đẹp." },
          { en: "My father drives slowly.", exVi: "Bố tôi lái xe chậm rãi." },
          { en: "Lan usually studies in her room.", exVi: "Lan thường học bài trong phòng của cô ấy." },
          { en: "The children are happy at school.", exVi: "Các em học sinh vui vẻ ở trường." }
        ],
        checkpoint: [
          { type: "mcq", q: "Từ nào là TÍNH TỪ?", options: ["run", "beautiful", "school", "quickly"], answer: 1, explain: "beautiful (đẹp) trả lời câu hỏi “như thế nào?” và đứng trước danh từ → tính từ. run là động từ, school là danh từ, quickly là trạng từ." },
          { type: "mcq", q: "Từ nào là ĐỘNG TỪ?", options: ["book", "go", "quickly", "happy"], answer: 1, explain: "go (đi) trả lời câu hỏi “làm gì?” → động từ. book là danh từ, quickly là trạng từ, happy là tính từ." },
          { type: "fill", q: "She sings ___ (beautiful) in the choir.", answer: "beautifully", alt: ["beautifully"], hint: "sau động từ cần trạng từ", vi: "Cô ấy hát thật hay trong dàn hợp xướng.", explain: "sings là động từ nên phải mô tả bằng trạng từ beautifully (đổi beautiful → beautifully bằng cách thêm ly). Tính từ beautiful chỉ được đứng trước danh từ." },
          { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["a", "tall", "boy", "He", "is"], answer: "He is a tall boy", vi: "Cậu ấy là một cậu bé cao", explain: "He = danh từ (chủ ngữ) + is = động từ + a tall boy = bổ ngữ (mạo từ a + tính từ tall + danh từ boy). Tính từ luôn nằm ngay trước danh từ nó mô tả." }
        ]
      },

      {
        id: "f2",
        title: "Bài 2: Câu tiếng Anh & cấu trúc SVO",
        goal: "Tìm được chủ ngữ và động từ, rồi xếp đúng thứ tự Chủ ngữ + Động từ + Vật ngữ để tự đặt được câu.",
        formula: [
          { label: "Chủ ngữ (Subject – S)", f: "S = người / vật đang LÀM VIỆC trong câu (hỏi “Ai? / Cái gì?”)", vi: "I, You, Lan, The dog, My friends" },
          { label: "Động từ (Verb – V)", f: "V = việc S làm, luôn đứng NGAY SAU chủ ngữ, không được nhảy chỗ", vi: "eat, go, study, likes, is, have" },
          { label: "Vật ngữ (Object – O)", f: "O = người / vật NHẬN việc của S (hỏi “S làm gì AI/CÁI GÌ?”)", vi: "a book, English, her, the ball" },
          { label: "Công thức câu đơn giản", f: "S + V + O = Chủ ngữ + Động từ + Vật ngữ", vi: "I like apples. (Tôi thích táo.)" },
          { label: "Cách tìm S và V thật nhanh", f: "hỏi “Ai?” → S ; từ chỉ việc làm đứng ngay sau S → V ; phần còn lại → O", vi: "Nam reads books → S = Nam, V = reads, O = books" },
          { label: "Quy tắc thêm s/es (sống còn)", f: "S = I / You / We / They → V nguyên mẫu ; S = He / She / It → V + s/es", vi: "I play / She plays ; I go / He goes ; They like / He likes" }
        ],
        explain: "Câu tiếng Anh đơn giản nhất chỉ có 3 phần: ai làm (Chủ ngữ – S), làm gì (Động từ – V), làm cái gì (Vật ngữ – O). Cứ bám công thức S + V + O là bạn đã nắm được khoảng 70% ngữ pháp rồi. Ví dụ: I (S) like (V) apples (O) → Tôi thích táo. Đọc một câu bất kỳ, bạn chỉ cần gạch chân 3 chỗ này là hiểu.\n\nChủ ngữ (Subject) là người hoặc vật đang làm việc trong câu. Tìm nó bằng cách hỏi “Ai?” hay “Cái gì?”: “Nam reads books” → Ai đọc sách? → Nam là chủ ngữ. Vật ngữ (Object) là người/vật nhận việc đó: Nam đọc cái gì? → books (sách) là vật ngữ. Còn reads chính là động từ, vì nó nằm ngay sau chủ ngữ và chỉ việc đang làm.\n\nĐiều quan trọng nhất: động từ LUÔN nằm ngay sau chủ ngữ, không được nhảy lên trước hay đẩy xuống sau. Đây là lỗi người mất gốc mắc nhiều nhất — hay đặt is/am/are hoặc một động từ thứ hai lên đầu. Một câu chỉ có MỘT động từ chính (hoặc hai động từ ghép bằng and: I like and sing English).\n\nQuy tắc thêm s/es quyết định câu bạn có “nghe Tây” không: chủ ngữ là I, You, We, They → động từ để nguyên mẫu; chủ ngữ là He, She, It (ngôi thứ ba số ít) → động từ thêm s hoặc es. I go, You go, We go, They go / He goes, She goes, It goes. Chỉ cần nhớ đúng bảng này thì câu hiện tại đơn của bạn sẽ không bao giờ sai.",
        mistakes: [
          { wrong: "She go to school every day.", right: "She goes to school every day.", why: "She là chủ ngữ ngôi thứ ba số ít → động từ phải thêm es: goes. Chỉ có I / You / We / They mới dùng động từ nguyên mẫu." },
          { wrong: "My friend he likes football.", right: "My friend likes football.", why: "Chủ ngữ đã là My friend rồi, không được lặp lại bằng he. Một câu chỉ có MỘT chủ ngữ — lỗi này rất hay gặp khi dịch word-by-word từ tiếng Việt." },
          { wrong: "I am go to school by bus.", right: "I go to school by bus.", why: "am chỉ ghép với I để đứng trước tính từ hoặc danh từ (I am tired / I am a student), không được ghép với động từ thường. Động từ chính ở đây là go." },
          { wrong: "The boys plays volleyball after school.", right: "The boys play volleyball after school.", why: "boys là số nhiều = they → động từ để nguyên mẫu play, không thêm s. Thêm s chỉ khi chủ ngữ là He/She/It." }
        ],
        examples: [
          { en: "I study English every day.", exVi: "Tôi học tiếng Anh mỗi ngày." },
          { en: "My sister likes reading books.", exVi: "Em gái tôi thích đọc sách." },
          { en: "We play football after school.", exVi: "Chúng tôi chơi bóng đá sau giờ học." },
          { en: "The cat drinks milk every morning.", exVi: "Con mèo uống sữa mỗi sáng." },
          { en: "Nam has a beautiful bicycle.", exVi: "Nam có một chiếc xe đạp đẹp." }
        ],
        checkpoint: [
          { type: "mcq", q: "Trong câu “Nam reads books every day.”, từ nào là ĐỘNG TỪ?", options: ["Nam", "reads", "books", "every day"], answer: 1, explain: "reads nằm ngay sau chủ ngữ Nam và trả lời “làm gì?” → động từ. Nam là chủ ngữ (S), books là vật ngữ (O), every day là chỉ thời gian." },
          { type: "fill", q: "My mother ___ (cook) dinner every evening.", answer: "cooks", alt: ["cooks"], hint: "My mother = she", vi: "Mẹ tôi nấu bữa tối vào mỗi buổi tối.", explain: "My mother tương đương she (ngôi thứ ba số ít) → theo công thức S + V(s/es), cook thêm s thành cooks." },
          { type: "fill", q: "They ___ (go) to school at seven o'clock.", answer: "go", alt: ["go"], hint: "They thuộc nhóm I / You / We / They", vi: "Họ đến trường lúc bảy giờ.", explain: "They ở nhóm dùng động từ nguyên mẫu → go, không thêm s. Chỉ He/She/It mới goes." },
          { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["studies", "She", "English", "every day"], answer: "She studies English every day", vi: "Cô ấy học tiếng Anh mỗi ngày", explain: "Thứ tự S + V + O + thời gian: She (chủ ngữ) + studies (động từ thêm es vì She là số ít) + English (vật ngữ) + every day (thời gian)." }
        ]
      },

      {
        id: "f3",
        title: "Bài 3: Mạo từ & số ít / số nhiều",
        goal: "Dùng đúng a/an/the, phân biệt danh từ đếm được và không đếm được, và thêm s/es khi nói về nhiều cái.",
        formula: [
          { label: "a / an", f: "a + danh từ bắt đầu bằng ÂM phụ âm ; an + danh từ bắt đầu bằng ÂM nguyên âm", vi: "a book, a school / an apple, an egg, an hour" },
          { label: "the", f: "the = cái đã biết trước hoặc DUY NHẤT trên đời", vi: "the book on my table (cuốn sách trên bàn tôi), the sun, the moon" },
          { label: "Không mạo từ (zero article)", f: "danh từ SỐ NHIỀU khi nói chung + danh từ KHÔNG ĐẾM ĐƯỢC khi nói chung", vi: "Books are useful. / Water is important." },
          { label: "Đếm được vs không đếm được", f: "đếm được → a/an, one, two… và thêm s khi nhiều ; không đếm được → much / a little, KHÔNG thêm s", vi: "a book, two pens / some water, much rice, a lot of homework" },
          { label: "Đổi sang số nhiều", f: "thường + s ; ch/sh/s/x/o → + es ; phụ âm + y → bỏ y thêm ies", vi: "book → books, box → boxes, watch → watches, study → studies" },
          { label: "Số nhiều biến đổi hẳn (học thuộc)", f: "irregular plurals", vi: "child → children, man → men, woman → women, foot → feet, tooth → teeth" }
        ],
        explain: "Mạo từ (article) là những từ nhỏ luôn đi kèm với danh từ: a, an, the. a/an dùng khi nói về MỘT cái trong nhiều cái (một quyển sách, một quả táo); the dùng khi cả hai bên đã biết rõ đó là cái nào (cuốn sách tôi vừa cầm — “Give me the book, please”). Đây là chỗ sai nhiều nhất của người Việt, vì tiếng Việt mình không có mấy từ này, nên phải tập cho quen.\n\nMẹo dùng a/an: nhìn ÂM đầu tiên chứ không nhìn chữ. Phụ âm thì dùng a (a book, a pen), nguyên âm thì dùng an (an apple, an egg, an orange). Có hai trường hợp đặc biệt đáng nhớ: “hour” mất chữ h nên đọc là /aʊə/ → an hour; còn “university” đọc là /ˌjuːnɪˈvɜːsəti/ bắt đầu bằng âm /j/ → a university. Chỉ cần để ý 2 ca này là đủ.\n\nTiếng Anh chia danh từ thành hai loại: đếm được (book, pen, apple — đếm được một, hai, ba…) và không đếm được (water, rice, milk, homework, music — không thể nói “một cái nước, hai cái nước” theo nghĩa thường). Đếm được thì dùng a/an và thêm s khi nhiều; không đếm được thì KHÔNG dùng a/an, KHÔNG thêm s, muốn nói số lượng thì dùng some, much, a little, a lot of.\n\nCuối cùng là quy tắc thêm s: hầu hết danh từ thêm s (book → books); những từ kết thúc bằng ch, sh, s, x, o thì thêm es (watch → watches, box → boxes, potato → potatoes); danh từ 2 âm tiết mà đuôi là phụ âm + y thì bỏ y thêm ies (study → studies, baby → babies); và một nhóm nhỏ biến đổi hẳn (child → children, man → men, foot → feet) — nhóm này không có cách nào khác là học thuộc.",
        mistakes: [
          { wrong: "I have a apple in my bag.", right: "I have an apple in my bag.", why: "apple bắt đầu bằng âm nguyên âm /æ/ → phải dùng an. a chỉ dành cho danh từ bắt đầu bằng âm phụ âm." },
          { wrong: "She has many book.", right: "She has many books.", why: "many nghĩa là “nhiều” → danh từ đằng sau bắt buộc phải ở số nhiều: books." },
          { wrong: "I like a music.", right: "I like music.", why: "music là danh từ không đếm được, không có “một bản nhạc / hai bản nhạc” rõ ràng để đếm → bỏ a, nói chung thì đứng một mình." },
          { wrong: "I did my homeworks last night.", right: "I did my homework last night.", why: "homework là danh từ không đếm được nên KHÔNG thêm s. Khi muốn nói nhiều thì dùng a lot of homework." }
        ],
        examples: [
          { en: "I have a new pen and an old ruler.", exVi: "Tôi có một cây bút mới và một cái thước cũ." },
          { en: "The sun is very hot today.", exVi: "Mặt trời rất nóng hôm nay. (duy nhất trên đời → dùng the)" },
          { en: "There are five books on the desk.", exVi: "Có năm quyển sách trên bàn." },
          { en: "We need some bread and milk for breakfast.", exVi: "Chúng tôi cần bánh mì và sữa cho bữa sáng." },
          { en: "Water is necessary for life.", exVi: "Nước cần thiết cho sự sống. (nói chung → không mạo từ)" }
        ],
        checkpoint: [
          { type: "mcq", q: "Từ nào bắt buộc phải dùng “an”?", options: ["banana", "school", "egg", "pen"], answer: 2, explain: "egg bắt đầu bằng âm nguyên âm /e/ → dùng an. banana, school, pen đều bắt đầu bằng âm phụ âm → dùng a. Lưu ý: tính theo ÂM đọc, không theo chữ." },
          { type: "fill", q: "My father buys two ___ (box) of milk.", answer: "boxes", alt: ["boxes"], hint: "box kết thúc bằng x", vi: "Bố tôi mua hai hộp sữa.", explain: "danh từ kết thúc bằng x phải thêm es: box → boxes. Hai (two) luôn đi kèm danh từ số nhiều." },
          { type: "fill", q: "She has many ___ (book) in her room.", answer: "books", alt: ["books"], hint: "many = nhiều", vi: "Cô ấy có nhiều sách trong phòng.", explain: "many = nhiều → danh từ phải ở số nhiều. Nếu là số ít thì phải là “a book” hoặc bỏ hẳn." },
          { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["an", "orange", "would", "like", "I"], answer: "I would like an orange", vi: "Tôi muốn một quả cam", explain: "Cấu trúc S + would like + O: I (chủ ngữ) + would like (động từ) + an orange (vật ngữ). orange bắt đầu bằng âm nguyên âm nên dùng an, không dùng a." }
        ]
      },

      {
        id: "f4",
        title: "Bài 4: Thì hiện tại đơn & hiện tại tiếp diễn",
        goal: "Dùng đúng thì hiện tại đơn (nói thói quen) và hiện tại tiếp diễn (nói việc đang xảy ra), nhớ công thức và dấu hiệu nhận biết.",
        formula: [
          { label: "HT đơn – Khẳng định", f: "S + V(s/es) + O = Chủ ngữ + Động từ(thêm s/es) + Vật ngữ", vi: "She gets up at six. / I like coffee." },
          { label: "HT đơn – Phủ định", f: "S + don't / doesn't + V NGUYÊN MẪU = Chủ ngữ + không + việc làm ở dạng gốc", vi: "I don't like coffee. / He doesn't like coffee." },
          { label: "HT đơn – Nghi vấn", f: "Do / Does + S + V nguyên mẫu ? = từ hỏi Yes/No + Chủ ngữ + việc làm dạng gốc", vi: "Does she play chess? — Yes, she does. / No, she doesn't." },
          { label: "HT tiếp diễn – Công thức", f: "S + am / is / are + V-ing = Chủ ngữ + trạng thái “đang” + việc đang làm", vi: "I am reading now. / She is cooking. / They are playing." },
          { label: "Dấu hiệu HT đơn (thói quen)", f: "always, usually, often, sometimes, never, every day/week", vi: "I usually walk to school. / He never drinks coffee." },
          { label: "Dấu hiệu HT tiếp diễn (đang xảy ra)", f: "now, at the moment, Look!, Listen!, This week", vi: "Look! The baby is crying. / She is studying now." }
        ],
        explain: "Bài này chỉ có 2 thì, nhưng là 2 thì quan trọng nhất của tiếng Anh. Thì hiện tại đơn (Present Simple) nói về việc LẶP ĐI LẶP LẠI, đúng mọi lúc. Thì hiện tại tiếp diễn (Present Continuous) nói về việc ĐANG xảy ra ngay lúc này. Phân biệt được hai cái là bạn đã có thể kể về cuộc sống hằng ngày rồi.\n\nCông thức hiện tại đơn: khẳng định là S + V(s/es) + O (She gets up at six); phủ định là S + don't/doesn't + V nguyên mẫu (I don't like coffee, He doesn't like coffee); nghi vấn là Do/Does + S + V nguyên mẫu (Does she play chess? → Yes, she does. / No, she doesn't.). Dấu hiệu nhận biết: always, usually, often, sometimes, never, every day.\n\nCông thức hiện tại tiếp diễn: S + am/is/are + V-ing (I am reading now; They are playing football). Phủ định: S + am/is/are + not + V-ing (I am not sleeping). Nghi vấn: Am/Is/Are + S + V-ing? (Is he working?). Dấu hiệu: now, at the moment, Look!, Listen! — những câu có tiếng “kêu” kiểu “Nhìn kia!” thì 99% là hiện tại tiếp diễn.\n\nSo sánh để không bao giờ nhầm: “I go to school at seven” (mỗi ngày đều vậy → thói quen, hiện tại đơn) khác với “I am going to school now” (ngay lúc này tôi đang đi → hiện tại tiếp diễn). Một ý chỉ được chọn 1 trong 2 thì, tuỳ bạn muốn nói thói quen hay chuyện đang xảy ra. Lỗi kinh điển cần tránh: “She is go to school” — sau is/are bắt buộc phải là V-ing: She is going to school.",
        mistakes: [
          { wrong: "He don't play football.", right: "He doesn't play football.", why: "He là ngôi thứ ba số ít → phải dùng doesn't. Lưu ý: doesn't đã mang nghĩa phủ định rồi nên động từ quay về nguyên mẫu play, không được viết “doesn't plays”." },
          { wrong: "She is go to school now.", right: "She is going to school now.", why: "Sau is/are bắt buộc là V-ing. Cấu trúc hiện tại tiếp diễn là S + is/are + V-ing, không bao giờ là S + is + V nguyên mẫu." },
          { wrong: "Does she likes coffee?", right: "Does she like coffee?", why: "does đã gánh chủ ngữ she rồi → động từ phải ở nguyên mẫu like. Thêm s là lỗi rất hay mắc khi hỏi." },
          { wrong: "I am not like fish.", right: "I don't like fish.", why: "like là động từ thường, thuộc thì hiện tại đơn → phủ định bằng don't like. am not chỉ dùng với V-ing: I am not eating." }
        ],
        examples: [
          { en: "I usually get up at six o'clock.", exVi: "Thường thì tôi dậy lúc sáu giờ." },
          { en: "My mother often cooks dinner at seven.", exVi: "Mẹ tôi thường nấu cơm lúc bảy giờ." },
          { en: "Nam is doing his homework now.", exVi: "Nam đang làm bài tập về nhà." },
          { en: "We don't eat fast food.", exVi: "Chúng tôi không ăn đồ ăn nhanh." },
          { en: "The children are playing in the garden.", exVi: "Bọn trẻ đang chơi trong vườn." }
        ],
        checkpoint: [
          { type: "mcq", q: "Câu nào nói về THÓI QUEN (hiện tại đơn)?", options: ["She is reading a book now.", "She often reads a book after dinner.", "Listen! They are singing.", "Look! He is running."], answer: 1, explain: "often + V(s/es) là dấu hiệu của thói quen → hiện tại đơn. Ba câu còn lại có now / Listen / Look → đều là hiện tại tiếp diễn (S + is/are + V-ing)." },
          { type: "mcq", q: "Chọn câu hỏi ĐÚNG cho lời trả lời “Yes, she does.”", options: ["Does she likes tea?", "Does she like tea?", "Do she like tea?", "Is she like tea?"], answer: 1, explain: "Sau Does phải dùng động từ nguyên mẫu like (bỏ s), và chủ ngữ she hợp với does chứ không phải do. “Is she like” là trộn lẫn hai thì." },
          { type: "fill", q: "My brother never ___ (watch) TV on weekdays.", answer: "watches", alt: ["watches"], hint: "never + chủ ngữ số ít", vi: "Anh trai tôi không bao giờ xem tivi vào những ngày trong tuần.", explain: "never là dấu hiệu hiện tại đơn; my brother = he (số ít) → watch thêm es thành watches theo công thức S + V(s/es)." },
          { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["They", "are", "swimming", "now"], answer: "They are swimming now", vi: "Họ đang bơi", explain: "Công thức hiện tại tiếp diễn: S + are + V-ing. now (bây giờ) là dấu hiệu nhận biết, thường đứng cuối câu." }
        ]
      },

      {
        id: "f5",
        title: "Bài 5: Thì quá khứ đơn & thì tương lai",
        goal: "Kể lại việc đã làm trong quá khứ bằng was/were và động từ +ed, và nói về kế hoạch tương lai bằng will / be going to.",
        formula: [
          { label: "QK đơn – Khẳng định (động từ be)", f: "S + was/were = Chủ ngữ + (đã) là/ở — was với I/He/She/It, were với You/We/They", vi: "I was tired. / They were at home." },
          { label: "QK đơn – Khẳng định (động từ thường)", f: "S + V + ed = Chủ ngữ + việc ĐÃ làm + ed (bất quy tắc thì biến đổi riêng)", vi: "She cooked rice. / We walked home." },
          { label: "QK đơn – Phủ định & nghi vấn", f: "S + didn't + V nguyên mẫu = Chủ ngữ + không(cũ) + việc làm dạng gốc | Did + S + V nguyên mẫu ?", vi: "I didn't know. / Did you go? — Yes, I did." },
          { label: "Tương lai – will", f: "S + will + V nguyên mẫu = Chủ ngữ + SẼ + việc sẽ làm (dự đoán, hứa, quyết định ngay lúc đó)", vi: "I will help you. / It will rain tomorrow." },
          { label: "Tương lai – be going to", f: "S + am/is/are + going to + V = Chủ ngữ + ĐÃ DỰ ĐỊNH + việc định làm", vi: "We are going to visit Hue next week." },
          { label: "Động từ bất quy tắc 12 từ hay gặp", f: "go→went, have→had, do→did, see→saw, eat→ate, come→came, take→took, give→gave, get→got, make→made, say→said, read→read (vẫn viết vậy, đọc là /red/)", vi: "Nhóm này KHÔNG thêm -ed, bắt buộc học thuộc lòng." },
          { label: "Dấu hiệu nhận biết", f: "QK: yesterday, last night/week/Sunday, … ago, in 2020 | Tương lai: tomorrow, next week/summer, in + năm", vi: "two days ago / last Sunday / next summer / in 2030" }
        ],
        explain: "Thì quá khứ đơn dùng để kể chuyện ĐÃ xảy ra và ĐÃ kết thúc. Dấu hiệu nhận biết: yesterday (hôm qua), last night/week/Sunday (đêm qua, tuần trước, Chủ nhật trước), two days ago (hai ngày trước), in 2020 (vào năm 2020). Gặp những từ này thì trong đầu phải lật ngay sang quá khứ.\n\nCông thức quá khứ đơn: nếu là động từ be (is/are) thì đổi thành was/were — was với I/He/She/It, were với You/We/They (I was tired; They were happy). Nếu là động từ thường có quy tắc thì thêm -ed (She cooked, We walked, They played). Còn động từ bất quy tắc thì biến đổi riêng: go→went, see→saw, eat→ate, have→had, do→did… nhóm này không có cách nào khác là học thuộc. Phủ định: S + didn't + V nguyên mẫu. Nghi vấn: Did + S + V nguyên mẫu? (Did you go? → Yes, I did. / No, I didn't.)\n\nTiếng Anh có 2 cách nói tương lai. will + V nguyên mẫu dùng cho dự đoán, hứa hẹn hoặc quyết định lập tức ngay lúc nói (I will help you. / I think it will rain.). be going to + V dùng cho kế hoạch đã nghĩ sẵn từ trước (We are going to visit Hue next week. / I am going to learn English.). Cả hai đều chỉ tương lai, chỉ khác ở chỗ “đã dự tính từ trước hay mới quyết định”.\n\nDấu hiệu tương lai: tomorrow, next week/month/summer, in + năm (in 2030). Hai lỗi sai chết người cần nhớ: sau will LUÔN là động từ nguyên mẫu (không có to), và sau didn't cũng LUÔN là động từ nguyên mẫu. Tức là “I will to go” và “I didn't went” đều sai tuyệt đối.",
        mistakes: [
          { wrong: "Yesterday I go to the park.", right: "Yesterday I went to the park.", why: "yesterday là dấu hiệu quá khứ → động từ phải chuyển sang quá khứ. go là bất quy tắc: go → went, không dùng nguyên mẫu." },
          { wrong: "We was very happy at the party.", right: "We were very happy at the party.", why: "were mới đúng với We/You/They. was chỉ dùng cho I/He/She/It." },
          { wrong: "She didn't went home.", right: "She didn't go home.", why: "did/didn't đã mang nghĩa quá khứ rồi → động từ phía sau phải về nguyên mẫu go. Đây là lỗi mắc nhiều nhất của thì quá khứ." },
          { wrong: "I will to help you.", right: "I will help you.", why: "Sau will luôn là động từ nguyên mẫu, không được thêm to. Chữ “to” chỉ xuất hiện trong cấu trúc be going to: I am going to help." }
        ],
        examples: [
          { en: "Last night I did my homework at eight.", exVi: "Tối qua tôi làm bài tập lúc tám giờ." },
          { en: "They were at the library yesterday.", exVi: "Họ ở thư viện hôm qua." },
          { en: "My mother cooked breakfast at six.", exVi: "Mẹ tôi nấu bữa sáng lúc sáu giờ." },
          { en: "Next summer we will visit Da Lat.", exVi: "Mùa hè tới chúng tôi sẽ thăm Đà Lạt." },
          { en: "I am going to start an English club.", exVi: "Tôi dự định bắt đầu một câu lạc bộ tiếng Anh." }
        ],
        checkpoint: [
          { type: "mcq", q: "Câu nào ĐÚNG về thì quá khứ đơn?", options: ["She didn't went to school.", "She didn't go to school.", "She doesn't went to school.", "She not go to school."], answer: 1, explain: "Sau didn't phải dùng động từ nguyên mẫu go, không dùng went. Didn't đã chứa “did” (= quá khứ) nên went là thừa và sai." },
          { type: "fill", q: "Last Sunday we ___ (visit) our grandparents.", answer: "visited", alt: ["visited"], hint: "Last Sunday → quá khứ", vi: "Chủ nhật tuần trước chúng tôi đến thăm ông bà.", explain: "Last Sunday là dấu hiệu quá khứ; visit là động từ quy tắc → thêm ed: visited. Chủ ngữ we nên không cần đổi gì khác." },
          { type: "fill", q: "Two days ago, Hoa ___ (lose) her pen.", answer: "lost", alt: ["lost"], hint: "bất quy tắc — đừng thêm ed", vi: "Hai ngày trước, Hoa đã làm mất cây bút của cô ấy.", explain: "ago chỉ quá khứ, nhưng lose là động từ bất quy tắc: lose → lost (không phải losed). Đây là nhóm động từ không thêm ed nên dễ sai nhất." },
          { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["going", "am", "to", "I", "learn", "English"], answer: "I am going to learn English", vi: "Tôi dự định học tiếng Anh", explain: "Công thức tương lai be going to: S (I) + am going to + V nguyên mẫu (learn). Khác với will: đây là kế hoạch đã nghĩ sẵn từ trước." }
        ]
      },

      {
        id: "f6",
        title: "Bài 6: Câu hỏi, câu phủ định & cấu trúc to + V",
        goal: "Đặt được câu hỏi Yes/No với do/does/did, phủ định đúng, trả lời ngắn gọn, và dùng đúng động từ nguyên mẫu sau “to”.",
        formula: [
          { label: "Phủ định hiện tại", f: "S + don't / doesn't + V nguyên mẫu = Chủ ngữ + không + việc làm ở dạng gốc", vi: "I don't know. / She doesn't like coffee." },
          { label: "Phủ định quá khứ", f: "S + didn't + V nguyên mẫu = Chủ ngữ + không(cũ) + việc làm ở dạng gốc", vi: "We didn't see him. / They didn't come." },
          { label: "Câu hỏi Yes/No", f: "Do / Does / Did + S + V nguyên mẫu ? = từ hỏi đặt đầu + Chủ ngữ + việc làm dạng gốc", vi: "Do you like English? / Does she play? / Did they come?" },
          { label: "Đảo ngữ với tobe / modal", f: "Am/Is/Are/Was/Were/Can/Will + S + … ? = đảo tobe/modal lên TRƯỚC chủ ngữ", vi: "Is he a student? / Can you swim? / Will you come?" },
          { label: "Trả lời ngắn cho câu Yes/No", f: "Yes, S + do/does/did. / No, S + don't/doesn't/didn't. (với to be: Yes, S + am/is/are.)", vi: "Does she like it? — Yes, she does. / No, she doesn't." },
          { label: "Động từ nguyên mẫu sau to", f: "to + V = “to” LUÔN đi kèm động từ dạng gốc (không thêm s / ed / ing)", vi: "want to go, need to study, decide to stay, easy to learn" }
        ],
        explain: "Muốn hỏi thì phải “đảo ngược”: đưa do/does/did lên đầu câu. Công thức là Do/Does/Did + S + V nguyên mẫu? — ví dụ: Do you like English? / Does she play chess? / Did they come yesterday? Chọn do hay does dựa vào chủ ngữ: I/You/We/They → do, He/She/It → does; còn khi nói về QUÁ KHỨ thì dùng did cho mọi chủ ngữ. Trả lời ngắn gọn là Yes, S do/does/did. hoặc No, S don't/doesn't/didn't.\n\nCâu phủ định còn dễ hơn câu hỏi: chỉ cần chèn don't/doesn't/didn't ngay sau chủ ngữ, rồi động từ quay về nguyên mẫu. I don't know. / She doesn't like coffee. / We didn't see him. Bạn chỉ cần nhớ 3 cụm này là làm được 90% câu phủ định.\n\nNgoài do/does/did, câu hỏi còn có cách thứ hai gọi là đảo ngữ: khi trong câu đã có to be hoặc một động từ khuyết thiếu (modal) như can, will, should, may thì chỉ cần đưa nó lên trước chủ ngữ. Is he a student? / Can you swim? / Will you come? — cực kỳ ngắn gọn, không cần do/does.\n\nMột điểm nữa phải nhớ như cháo: sau “to” luôn là động từ nguyên mẫu, không thêm s, ed, hay ing. want to go, need to study, decide to stay, like to learn, be easy to understand. Cấu trúc to + V xuất hiện ở khắp mọi nơi trong tiếng Anh, nên gặp “to” là hãy ngay lập tức chuẩn bị một động từ dạng nguyên mẫu phía sau.",
        mistakes: [
          { wrong: "Do she like coffee?", right: "Does she like coffee?", why: "she là ngôi thứ ba số ít → phải dùng does. Do chỉ dành cho I/You/We/They." },
          { wrong: "Does he plays football?", right: "Does he play football?", why: "does đã làm chủ ngữ he đứng yên rồi → động từ phía sau phải ở nguyên mẫu play, bỏ s." },
          { wrong: "I want to going home.", right: "I want to go home.", why: "Sau to luôn là động từ nguyên mẫu: to go, không phải to going." },
          { wrong: "He can to swim.", right: "He can swim.", why: "Sau các động từ khuyết thiếu can/will/should/may/must không có “to” — chỉ có động từ nguyên mẫu. To chỉ đi sau want, need, like, decide…" }
        ],
        examples: [
          { en: "Do you like English?", exVi: "Bạn có thích tiếng Anh không?" },
          { en: "My sister doesn't like coffee.", exVi: "Em gái tôi không thích cà phê." },
          { en: "Does your school have a swimming pool?", exVi: "Trường bạn có bể bơi không?" },
          { en: "I want to learn English well.", exVi: "Tôi muốn học tiếng Anh thật giỏi." },
          { en: "It is easy to make this cake.", exVi: "Làm cái bánh này thì dễ." }
        ],
        checkpoint: [
          { type: "mcq", q: "Câu hỏi nào là ĐÚNG?", options: ["Do he like music?", "Does he like music?", "Does he likes music?", "Is he like music?"], answer: 1, explain: "he = ngôi thứ ba số ít → dùng does; sau does động từ phải ở nguyên mẫu like. “Do he” sai vì thiếu s cho chủ ngữ, “Does he likes” sai vì thừa s, “Is he like” trộn lẫn hai thì." },
          { type: "fill", q: "___ you finish your homework last night?", answer: "Did", alt: ["did", "Did"], hint: "last night → quá khứ", vi: "Bạn đã làm xong bài tập về nhà tối qua chưa?", explain: "last night là dấu hiệu quá khứ → câu hỏi phải bắt đầu bằng Did + S + V nguyên mẫu: Did you finish…?" },
          { type: "fill", q: "She needs ___ (finish) her work now.", answer: "to finish", alt: ["to finish"], hint: "sau động từ need là to + V", vi: "Cô ấy cần hoàn thành công việc của mình ngay bây giờ.", explain: "need (cần) luôn đi kèm to + V nguyên mẫu: need to finish. Không được viết “needs finish” hay “needs finishing”." },
          { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["Does", "your", "brother", "like", "English"], answer: "Does your brother like English", vi: "Em trai bạn có thích tiếng Anh không?", explain: "Câu hỏi Yes/No: Does + chủ ngữ + V nguyên mẫu. your brother = he → dùng does; like giữ nguyên mẫu, không thêm s." }
        ]
      },

      {
        id: "f7",
        title: "Bài 7: Giao tiếp cơ bản & cách học từ vựng",
        goal: "Nói được 25+ câu giao tiếp hàng ngày (chào hỏi, cảm ơn, xin lỗi, mua sắm, hỏi đường), nhớ đại từ nhân xưng và cách học từ vựng hiệu quả.",
        formula: [
          { label: "Đại từ nhân xưng + be", f: "I (tôi) + am ; You (bạn) + are ; He/She/It (anh ấy/cô ấy/nó) + is ; We/They (chúng tôi/họ) + are", vi: "I am a student. / She is my friend. / They are in class." },
          { label: "Chào hỏi & hỏi thăm", f: "Hello! / Hi! / Good morning/afternoon/evening! — How are you? — I'm fine, thanks. And you? / Nice to meet you.", vi: "Xin chào! / Chào buổi sáng! / Bạn khỏe không? — Tôi khỏe, cảm ơn. Bạn thì sao? / Rất vui được gặp bạn." },
          { label: "Cảm ơn & xin lỗi", f: "Thank you (very much). — You're welcome. / No problem. | Sorry! / Excuse me. — That's OK. / Never mind.", vi: "Cảm ơn bạn rất nhiều! — Không có gì. / Không sao đâu. | Xin lỗi! / Cho tôi qua nhé. — Không sao đâu. / Đừng bận tâm." },
          { label: "Giới thiệu & kết bạn", f: "My name is Mai. / I'm 12 years old. / I'm from Vinh. / This is my friend, Nam. / See you tomorrow!", vi: "Tên tôi là Mai. / Tôi 12 tuổi. / Tôi đến từ Vinh. / Đây là bạn tôi, Nam. / Hẹn gặp lại ngày mai!" },
          { label: "Mua sắm & hỏi đường", f: "How much is this shirt? / How much are these shoes? — It's 50,000 VND. / Excuse me, where is the bus stop? — Go straight, then turn left. / Can you help me?", vi: "Áo sơ mi này bao nhiêu tiền? / Hai chiếc giày này bao nhiêu? — 50.000đ. / Xin lỗi, bến xe buýt ở đâu? — Đi thẳng, rồi rẽ trái. / Bạn giúp tôi được không?" },
          { label: "Cách học từ vựng HIỆU QUẢ", f: "học 5–10 từ/ngày + học TRONG CÂU (không học lẻ) + đọc thành tiếng 3 lần + ôn lại sau 1, 3 và 7 ngày", vi: "Gặp “library” → viết ngay “I go to the library.” (Tôi đi thư viện.) thì vừa nhớ từ vừa nhớ cách dùng." }
        ],
        explain: "Giao tiếp cơ bản không cần ngữ pháp phức tạp — chỉ cần nói đúng câu quen thuộc và dám nói. Bước đầu tiên là nhớ đại từ nhân xách: I (tôi), You (bạn), He (anh ấy), She (cô ấy), It (nó), We (chúng tôi), They (họ). Ghép với động từ to be: I am, He/She/It is, You/We/They are. Chỉ bảng nhỏ này thôi là bạn đã tự giới thiệu về mình rồi: “I am a student. She is my friend.”\n\nHãy học thuộc 4 nhóm câu dùng mỗi ngày: (1) chào hỏi — Hello, Good morning, How are you? — I'm fine, thanks; (2) cảm ơn và xin lỗi — Thank you very much, You're welcome, Sorry, Excuse me, That's OK; (3) giới thiệu — My name is…, Nice to meet you, This is my friend…, See you tomorrow; (4) mua sắm và hỏi đường — How much is it?, Excuse me, where is the bank?, Go straight, then turn left. Mỗi khi gặp ai hãy mở miệng nói to — đọc thành tiếng giúp bạn nhớ gấp 3 lần so với chỉ nhìn.\n\nCách học từ vựng hiệu quả cho người mất gốc gồm 4 nguyên tắc. Một là học 5–10 từ một ngày, đừng học 50 từ rồi quên hết sau tuần. Hai là học TRONG CÂU thay vì học lẻ nghĩa: gặp từ “library” hãy viết ngay “I go to the library.” — nhớ cả câu thì tự nhiên nhớ luôn từ và cách dùng. Ba là ôn lại đúng lúc: sau 1 ngày, 3 ngày và 7 ngày, vì trí nhớ sẽ phai nếu không nhắc lại. Bốn là dùng ngay trong ngày, nói thành tiếng ít nhất 3 lần.\n\nCuối cùng, hãy nhớ: sai là hoàn toàn bình thường. Người bản xứ cũng không mong bạn nói không bao giờ sai. Cứ nói, sai thì sửa, rồi nói lại — đó là cách nhanh nhất để tiến bộ. Bạn đã đi được 7 bài đầu tiên từ con số 0 rồi, sắp tới đích rồi đó!",
        mistakes: [
          { wrong: "I am agree with you.", right: "I agree with you.", why: "agree (đồng ý) là ĐỘNG TỪ, không phải tính từ nên không đi với am. am chỉ ghép với tính từ/danh từ: I am tired / I am a student." },
          { wrong: "What your name?", right: "What's your name?", why: "Câu hỏi thiếu động từ to be. Đúng phải là What is (viết tắt What's) your name? — đây là câu hỏi đầu tiên ai cũng cần thuộc." },
          { wrong: "I very thank you.", right: "Thank you very much.", why: "very không được đứng trước động từ thank. Muốn nói “cảm ơn nhiều” thì dùng cụm cố định: thank you very much." },
          { wrong: "How much is the pens?", right: "How much are the pens?", why: "the pens là số nhiều → phải dùng are. is chỉ dành cho danh từ số ít: How much is this pen?" }
        ],
        examples: [
          { en: "Good morning, classmates!", exVi: "Chào buổi sáng, các bạn!" },
          { en: "Excuse me, can you help me?", exVi: "Xin lỗi, bạn có thể giúp tôi được không?" },
          { en: "How much is this bag?", exVi: "Cái túi này bao nhiêu tiền?" },
          { en: "Sorry, I'm late.", exVi: "Xin lỗi, tôi đến muộn." },
          { en: "Nice to meet you.", exVi: "Rất vui được gặp bạn." }
        ],
        checkpoint: [
          { type: "mcq", q: "Khi muốn hỏi giá món hàng, bạn nói câu nào?", options: ["How old are you?", "How much is this?", "Where are you?", "What time is it?"], answer: 1, explain: "How much is…? = (cái này) bao nhiêu tiền? → dùng khi hỏi giá. How old = bao nhiêu tuổi, Where = ở đâu, What time = mấy giờ." },
          { type: "mcq", q: "“I'm fine, thanks.” là câu trả lời cho câu hỏi nào?", options: ["What's your name?", "How are you?", "How much is it?", "Where do you live?"], answer: 1, explain: "How are you? = bạn khỏe không? → trả lời quen thuộc là I'm fine, thanks. (And you?) Câu trả lời này không hợp với hỏi tên, hỏi giá hay hỏi chỗ ở." },
          { type: "fill", q: "Lan is my friend. ___ (she) is kind.", answer: "She", alt: ["she"], hint: "Lan = cô ấy", vi: "Lan là bạn tôi. Cô ấy là người tốt bụng.", explain: "Lan là cô gái nên thay bằng đại từ nhân xách She; She là chủ ngữ → ghép với is: She is kind. (không dùng Her — Her chỉ làm vật ngữ.)" },
          { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["you", "are", "How", "today"], answer: "How are you today", vi: "Hôm nay bạn khỏe không?", explain: "Câu hỏi với to be phải đảo ngữ: How + are + chủ ngữ you. Trả lời: I'm fine, thanks." }
        ]
      }
    ]
  }
};
