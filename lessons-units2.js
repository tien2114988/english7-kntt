/* lessons-units2.js — phần "📖 Học" cho Unit 9-12 + Review 1-4 */
window.LESSONS_U2 = {
  units: {
    "9": {
      goal: "Sau bài này em tự đặt được câu hỏi Yes/No bằng Do/Does/Did và am/is/are, rồi trả lời ngắn gọn về các lễ hội.",
      formula: [
        { label: "Câu hỏi hiện tại – động từ thường", f: "Do/Does + S + V nguyên thể ... ?", vi: "Do cho I/you/we/they, Does cho he/she/it. Sau Do/Does động từ bỏ s/es: Does she like...?" },
        { label: "Câu hỏi quá khứ – động từ thường", f: "Did + S + V nguyên thể ... ?", vi: "Did = đã; động từ giữ nguyên dạng gốc, không thêm ed: Did they enjoy the parade?" },
        { label: "Câu hỏi với động từ to be", f: "Am/Is/Are + S ... ?", vi: "Không cần Do/Does, chỉ đảo am/is/are lên trước chủ ngữ: Is she wearing...? Are they...?" },
        { label: "Câu phủ định hiện tại", f: "S + don't/doesn't + V nguyên thể", vi: "He/she/it thì dùng doesn't, các chủ ngữ còn lại dùng don't: She doesn't like scary films." },
        { label: "Trả lời ngắn", f: "Yes, S do/does/did. | No, S don't/doesn't/didn't.", vi: "Phải lặp lại đúng từ phụ của câu hỏi: Yes, she is. / No, they didn't." },
        { label: "Câu hỏi chung chung (wh-)", f: "What/How/Which + do/does + S + V ... ?", vi: "Hỏi thông tin cũng mượn do/does: How do people celebrate it?" }
      ],
      explain: "Câu hỏi Yes/No là câu hỏi chỉ trả lời được bằng \"Có (Yes)\" hoặc \"Không (No)\". Trong tiếng Anh, khi muốn hỏi kiểu này với động từ thường ở hiện tại, ta không đảo từ theo kiểu tiếng Việt mà lôi một \"từ phụ\" ra đứng đầu câu: Do cho I/you/we/they, Does cho he/she/it. Ví dụ: Do you like the Mid-Autumn Festival? (Bạn có thích Tết Trung Thu không?), Does she celebrate Thanksgiving? (Cô ấy có ăn mừng Lễ Tạ ơn không?). Nhớ kỹ một điều: sau Do/Does, động từ phải để nguyên thể. Nếu câu kể là \"She likes festivals\" thì câu hỏi là \"Does she like festivals?\", chữ s ở cuối động từ biến mất.\n\nNếu việc đó xảy ra trong quá khứ — thường kèm theo các dấu hiệu như last night, yesterday, last week — ta dùng Did đặt lên đầu câu: Did they enjoy the parade last night? (Họ có thích cuộc diễu hành tối qua không?). Cũng y hệt như trên, sau Did động từ phải về nguyên thể, không được thêm -ed: nói \"Did they enjoy\", tuyệt đối không nói \"Did they enjoyed\".\n\nVới động từ to be (am/is/are) thì không cần Do/Does, chỉ cần đảo am/is/are lên trước chủ ngữ: Is she wearing a costume? (Có cô ấy đang mặc trang phục không?), Are these decorations made by hand? (Những đồ trang trí này có làm tay không?). Ngữ điệu của câu hỏi đi lên ở cuối câu. Khi trả lời ngắn, hãy lặp lại đúng từ phụ: Yes, she is. / No, she isn't. Yes, they did. / No, they didn't. Đừng bao giờ trả lời \"Yes, she does\" cho một câu hỏi bắt đầu bằng \"Is\" nhé.\n\nMột vài từ vựng về lễ hội rất hay ghé vào các câu hỏi: feast (bữa yến tiệc), parade (cuộc diễu hành), fireworks display (màn bắn pháo hoa), costume (trang phục), symbol (biểu tượng), decorate (trang trí). Gộp lại là em đã có sẵn đồ để luyện: Do you like the parade? / Did they wear costumes? / Is there a fireworks display in your town? — cứ thế hỏi bạn bè cho thuộc.",
      mistakes: [
        { wrong: "Does she likes festivals?", right: "Does she like festivals?", why: "Sau Does, động từ giữ nguyên thể — bỏ s/es đi." },
        { wrong: "Did they enjoyed the parade last night?", right: "Did they enjoy the parade last night?", why: "Sau Did cũng dùng động từ nguyên thể, không thêm -ed hay -en." },
        { wrong: "Do he celebrate Thanksgiving?", right: "Does he celebrate Thanksgiving?", why: "Chủ ngữ he/she/it khi hỏi phải dùng Does, không dùng Do." },
        { wrong: "Is they wearing costumes?", right: "Are they wearing costumes?", why: "Chủ ngữ they (số nhiều) luôn đi cùng are." }
      ],
      checkpoint: [
        { type: "mcq", q: "___ your brother like the Mid-Autumn Festival?", options: ["Do", "Does", "Did", "Is"], answer: 1, vi: "Em trai bạn có thích Tết Trung Thu không?", explain: "Chủ ngữ your brother = he → dùng Does; sau Does, like giữ nguyên (không thêm s)." },
        { type: "mcq", q: "___ the children wearing costumes at the parade?", options: ["Do", "Does", "Is", "Are"], answer: 3, vi: "Bọn trẻ có đang mặc trang phục trong cuộc diễu hành không?", explain: "Chủ ngữ the children là số nhiều, lại dùng động từ to be → Are they wearing...?" },
        { type: "fill", q: "Did the children (enjoy) the fireworks display last night?", answer: "enjoy", alt: ["enjoy"], hint: "Sau Did, động từ ở dạng nào?", vi: "Bọn trẻ có thích màn bắn pháo hoa tối qua không?", explain: "Đã có Did ở đầu câu thì động từ phía sau để nguyên thể: enjoy (không phải enjoyed)." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["Do", "you", "like", "the", "Mid-Autumn", "Festival"], answer: "Do you like the Mid-Autumn Festival", vi: "Bạn có thích Tết Trung Thu không?", explain: "Câu hỏi Yes/Do ở hiện tại: Do + chủ ngữ + động từ nguyên thể." }
      ]
    },

    "10": {
      goal: "Sau bài này em tả được ngay việc đang xảy ra lúc này bằng thì hiện tại tiếp diễn (am/is/are + V-ing).",
      formula: [
        { label: "Khẳng định", f: "S + am/is/are + V-ing", vi: "am với I, is với he/she/it, are với you/we/they, rồi cộng thêm ing cho động từ." },
        { label: "Phủ định", f: "S + am/is/are + not + V-ing", vi: "Viết gọn là isn't/aren't + V-ing: We aren't wasting energy today." },
        { label: "Nghi vấn", f: "Am/Is/Are + S + V-ing ... ?", vi: "Đảo am/is/are lên trước chủ ngữ: Are we wasting electricity right now?" },
        { label: "Dấu hiệu nhận biết", f: "now | right now | at the moment | Look! | Listen!", vi: "Nghe thấy những từ này là chọn ngay thì hiện tại tiếp diễn." },
        { label: "Cách thêm hậu tố -ing", f: "V + ing (make → making ; sit → sitting)", vi: "Có e ở cuối thì bỏ e; âm tiết ngắn có phụ âm cuối liền nhau thì gấp đôi phụ âm đó." },
        { label: "Động từ KHÔNG dùng tiếp diễn", f: "like, know, want, believe, need ...", vi: "Đây là động từ trạng thái, chỉ dùng dạng đơn: I know English (không nói I am knowing English)." }
      ],
      explain: "Thì hiện tại tiếp diễn (present continuous) dùng để nói về việc đang xảy ra ngay lúc mình mở miệng nói. Công thức rất gọn: chủ ngữ + am/is/are + động từ thêm ing. Chọn am với I, is với he/she/it, are với you/we/they. Ví dụ: The factory is producing electricity from solar panels (Nhà máy đang tạo ra điện từ các tấm pin mặt trời). Chỉ cần nhìn vào chủ ngữ để chọn am/is/are, rồi thêm ing cho động từ là xong.\n\nCó mấy dấu hiệu \"báo trước\" giúp em nhận ra ngay thì này: now, right now, at the moment, cộng thêm các từ hô như Look! (Nhìn kìa!), Listen! (Nghe nè!). Thấy những từ đó, chọn luôn am/is/are + V-ing. Ngược lại, một số động từ chỉ cảm xúc hoặc trạng thái — like, know, want, believe — thường không dùng ở dạng này: mình nói \"I like solar energy\", không bao giờ nói \"I am liking solar energy\".\n\nCách thêm ing có ba kiểu: mặc định chỉ cộng ing (save → saving); động từ có e ở cuối thì bỏ e trước (make → making, produce → producing); động từ một âm tiết mà phụ âm cuối liền nhau thì gấp đôi phụ âm đó (sit → sitting, run → running, flicker → flickering thì không gấp vì hai âm tiết). Phủ định là aren't/isn't + V-ing, còn nghi vấn thì đảo am/is/are lên đầu: Are they saving electricity at the moment?\n\nKhi nói về đề tài năng lượng của Unit 10, em nên nhớ bộ từ này: energy (năng lượng), electricity (điện), renewable (tái tạo được), non-renewable (không tái tạo được), solar panel (tấm pin mặt trời), produce (tạo ra), reduce (giảm), replace (thay thế), light bulb (bóng đèn). Ghép với ngữ pháp em nói được ngay: The solar panels are producing electricity now. / We are saving electricity at the moment. — vừa đúng thì vừa đúng chủ đề.",
      mistakes: [
        { wrong: "She is cook dinner now.", right: "She is cooking dinner now.", why: "Sau am/is/are phải là V-ing, không để động từ gốc." },
        { wrong: "They is saving energy.", right: "They are saving energy.", why: "Chủ ngữ they/we/you đi cùng are; chỉ I dùng am, he/she/it dùng is." },
        { wrong: "The factory is makeing electricity.", right: "The factory is making electricity.", why: "Động từ có e ở cuối thì bỏ e rồi mới thêm ing: make → making." },
        { wrong: "We aren't save electricity today.", right: "We aren't saving electricity today.", why: "Câu phủ định vẫn giữ nguyên cấu trúc are + not + V-ing." }
      ],
      checkpoint: [
        { type: "mcq", q: "Look! The factory ___ electricity from solar panels.", options: ["produces", "is producing", "produced", "produce"], answer: 1, vi: "Nhìn kia! Nhà máy đang tạo ra điện từ các tấm pin mặt trời.", explain: "Dấu hiệu Look! → việc đang xảy ra → hiện tại tiếp diễn: is producing." },
        { type: "mcq", q: "___ they wasting water at the moment?", options: ["Do", "Does", "Is", "Are"], answer: 3, vi: "Họ có đang lãng phí nước vào lúc này không?", explain: "Chủ ngữ they + dấu hiệu at the moment → Are they wasting...?" },
        { type: "fill", q: "The light bulb is ___ (flicker) now.", answer: "flickering", alt: ["flickering"], hint: "Sau is thì động từ thêm gì?", vi: "Bóng đèn đang chớp nháy lúc này.", explain: "Sau is/are là V-ing: flicker (2 âm tiết) chỉ cộng ing → flickering." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["They", "are", "saving", "energy", "at", "the", "moment"], answer: "They are saving energy at the moment", vi: "Họ đang tiết kiệm năng lượng vào lúc này", explain: "S + are + V-ing + dấu hiệu at the moment — thì hiện tại tiếp diễn." }
      ]
    },

    "11": {
      goal: "Sau bài này em dự đoán và nói về tương lai bằng will/won't, đồng thời phân biệt được my/mine, her/hers.",
      formula: [
        { label: "Khẳng định tương lai", f: "S + will + V nguyên thể", vi: "will không đổi theo chủ ngữ và động từ sau nó giữ nguyên dạng gốc: People will travel." },
        { label: "Phủ định tương lai", f: "S + will not (won't) + V", vi: "won't = will not: The Walkcar won't pollute the air (Walkcar sẽ không gây ô nhiễm)." },
        { label: "Nghi vấn tương lai", f: "Will + S + V ... ?", vi: "Đảo will lên đầu; trả lời Yes, S will. / No, S won't." },
        { label: "Dấu hiệu của tương lai", f: "tomorrow | next week | in the future | in 2050", vi: "Những từ này báo trước rằng câu đó cần dùng will/won't." },
        { label: "Đại từ sở hữu", f: "mine | yours | his | hers | ours | theirs", vi: "Thay cho my/your/his... + danh từ và đứng một mình: This ticket is mine." },
        { label: "Tính từ sở hữu vs đại từ sở hữu", f: "my + noun → mine ; her + noun → hers", vi: "her book (có danh từ sau) nhưng the book is hers (đứng độc lập, không cần danh từ)." }
      ],
      explain: "Will là \"thẻ tương lai\" của tiếng Anh: dùng cho dự đoán, quyết định hay lời hứa về những việc sẽ tới. Công thức: chủ ngữ + will + động từ nguyên thể. Điều may mắn là will không bao giờ đổi theo chủ ngữ — he, she, they, it đều là will — và động từ phía sau luôn giữ dạng gốc, không thêm s, không thêm ed. Ví dụ: People will travel to the moon in the future (Con người sẽ đến mặt trăng trong tương lai). Phủ định chỉ cần đổi sang won't (will not): The car won't run on petrol (Chiếc xe sẽ không chạy bằng xăng). Câu hỏi thì đảo will lên đầu: Will robots drive all the vehicles? (Roboto có lái hết các phương tiện không?).\n\nPhần thứ hai của bài là đại từ sở hữu (possessive pronouns): mine (của tôi), yours (của bạn), his (của anh ấy), hers (của cô ấy), ours (của chúng ta), theirs (của họ). Chúng thay cho \"tính từ sở hữu + danh từ\" và đứng một mình sau động từ to be. So sánh cho dễ nhớ: This is my ticket. → This ticket is mine (Vé này là của tôi). Câu hỏi giao tiếp gọn là Whose solowheel is this? – It's hers. (Solowheel này của ai? – Của cô ấy.)\n\nBộ từ tương lai của Unit 11 cũng giúp em nói được nhiều hơn: driverless (không người lái), autopilot (tự lái), teleporter (máy dịch chuyển tức thì), hyperloop (tàu chân không tốc độ cao), eco-friendly (thân thiện với môi trường), solar-powered (chạy bằng năng lượng mặt trời), convenient (tiện lợi). Ghép với will: Solar-powered buses will become common. / This vehicle won't pollute the air. / Will you travel by hyperloop?\n\nBẫy hay gặp nhất là her: \"her\" là tính từ sở hữu nên luôn có danh từ theo sau (her solowheel), còn \"hers\" là đại từ sở hữu nên đứng độc lập (The solowheel is hers). Tương tự: my → mine, your → yours, our → ours, their → theirs.",
      mistakes: [
        { wrong: "He will goes to work by hyperloop.", right: "He will go to work by hyperloop.", why: "Sau will, động từ luôn ở dạng nguyên thể — bỏ s đi." },
        { wrong: "She will travels to the moon next year.", right: "She will travel to the moon next year.", why: "will không đổi theo chủ ngữ nên không thêm s/es cho he/she/it." },
        { wrong: "The hyperloop ticket is her.", right: "The hyperloop ticket is hers.", why: "her là tính từ sở hữu cần danh từ sau; đứng độc lập sau to be phải dùng hers." },
        { wrong: "This solowheel is my.", right: "This solowheel is mine.", why: "my luôn đi kèm danh từ (my solowheel); đứng một mình thì đổi thành mine." }
      ],
      checkpoint: [
        { type: "mcq", q: "I think people ___ fly to work in 2050.", options: ["will", "are", "do", "were"], answer: 0, vi: "Tôi nghĩ con người sẽ bay đi làm vào năm 2050.", explain: "Dấu hiệu in 2050 → tương lai đơn: will + động từ nguyên thể (fly)." },
        { type: "mcq", q: "___ your school use solar energy next year?", options: ["Will", "Do", "Did", "Is"], answer: 0, vi: "Trường bạn có dùng năng lượng mặt trời vào năm tới không?", explain: "next year → tương lai; câu hỏi tương lai là Will + chủ ngữ + V nguyên thể." },
        { type: "fill", q: "The Walkcar is not yours. It's ___ (my).", answer: "mine", alt: ["mine"], hint: "Đứng độc lập, phía sau không có danh từ.", vi: "Chiếc Walkcar này không phải của bạn. Nó là của tôi.", explain: "my luôn cần danh từ sau; đứng một mình sau to be phải đổi thành mine." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["The", "car", "won't", "run", "on", "petrol"], answer: "The car won't run on petrol", vi: "Chiếc xe sẽ không chạy bằng xăng", explain: "S + won't (will not) + V nguyên thể — phủ định của tương lai đơn." }
      ]
    },

    "12": {
      goal: "Sau bài này em dùng đúng a, an, the (và khi phải bỏ trống mạo từ) khi nói về các nước nói tiếng Anh.",
      formula: [
        { label: "Mạo từ chưa xác định", f: "a + danh từ đếm được bắt đầu bằng phụ âm", vi: "a castle, a book, a university (âm đầu /juː/ nghe như phụ âm nên dùng a)." },
        { label: "Mạo từ với âm đầu nguyên âm", f: "an + danh từ có ÂM ĐẦU là nguyên âm", vi: "an island, an old castle, an hour (h câm) — nghe bằng tai, đừng nhìn bằng mắt." },
        { label: "Mạo từ xác định", f: "the + vật đã biết / đã nhắc lần hai / duy nhất", vi: "the capital of England, the sun, the culture of Canada — người nghe đã biết mình nói gì." },
        { label: "Tên nước có the", f: "the UK | the USA | the Netherlands | the Philippines", vi: "Dùng the khi tên nước có chữ chung (UK, USA, Netherlands...) ở đầu." },
        { label: "Không dùng mạo từ", f: "tên riêng | danh từ không đếm được | danh từ số nhiều dùng chung", vi: "Canada, water, students — không a/an/the: Students love English." },
        { label: "Câu mẫu về đất nước", f: "... is an island country. / ... is the capital of ...", vi: "Australia is an island country. London is the capital of the UK." }
      ],
      explain: "Mạo từ (articles) a, an, the là những \"quả\" nhỏ đặt ngay trước danh từ. a dùng trước danh từ đếm được bắt đầu bằng phụ âm: a castle, a book. an dùng khi ÂM ĐẦU của từ là nguyên âm: an island, an old castle. Mấu chốt là phải nghe bằng tai chứ không nhìn bằng chữ: ta nói \"an hour\" vì chữ h câm, âm đầu là /aʊ/; nhưng lại nói \"a university\" vì university phát âm /juː/ nghe như âm phụ âm vậy.\n\nthe dùng khi cả người nói và người nghe đều đã biết vật đó, khi mình nhắc lại một vật đã nói ở câu trước, hoặc khi vật đó là duy nhất trong bối cảnh: the sun, the capital of England, the culture of Canada. Nói cho gọn: a/an = vật lần đầu chưa xác định, the = vật đã xác định.\n\nCòn khi nào KHÔNG dùng mạo từ? Với tên riêng (Canada, London, Vietnam), danh từ không đếm được nói chung (water, rice) và danh từ số nhiều dùng chung (Students love English). Một ngoại lệ đáng nhớ cho tên nước: các nước có chữ chung ở đầu như the UK, the USA, the Netherlands, the Philippines thì lại dùng the — còn Canada, Australia, Vietnam thì không. Bài này hay xuất hiện trong câu mô tả đất nước: Australia is an island country (Úc là một nước đảo).\n\nBộ từ vựng để em nói về các nước nói tiếng Anh: capital (thủ đô), ancient castle (lâu đài cổ), coastline (bờ biển), island country (nước đảo), landscape (phong cảnh), culture (nền văn hoá), kilt (áo choàng truyền thống Scotland), penguin (chim cánh cụt). Luyện cùng mạo từ: London is the capital of the UK. / Australia is an island country. / There are many ancient castles in the country.",
      mistakes: [
        { wrong: "He studies at an university in the USA.", right: "He studies at a university in the USA.", why: "university phát âm /juː/ — âm đầu nghe như phụ âm nên dùng a." },
        { wrong: "I have never visited a island country.", right: "I have never visited an island country.", why: "island có âm đầu nguyên âm /ɪ/ nên phải là an." },
        { wrong: "London is a capital of England.", right: "London is the capital of England.", why: "Thủ đô là duy nhất và đã được xác định → dùng the." },
        { wrong: "The Canada is a very big country.", right: "Canada is a very big country.", why: "Tên riêng của đất nước thì không dùng a/an/the." }
      ],
      checkpoint: [
        { type: "mcq", q: "Australia is ___ island country.", options: ["a", "an", "the", "(không dùng mạo từ)"], answer: 1, vi: "Úc là một nước đảo.", explain: "island có âm đầu nguyên âm → an; vật chưa xác định → dùng an island country." },
        { type: "mcq", q: "We visited ___ ancient castle last summer.", options: ["a", "an", "the", "(không dùng mạo từ)"], answer: 1, vi: "Mùa hè trước chúng tôi đã tham quan một lâu đài cổ.", explain: "ancient có âm đầu nguyên âm /eɪ/ → an; đây là lần đầu nhắc đến nên không dùng the." },
        { type: "fill", q: "My sister is studying in ___ (Australia).", answer: "Australia", alt: ["Australia"], hint: "Đây là tên riêng của một đất nước.", vi: "Em gái tôi đang học tại Úc.", explain: "Tên riêng đất nước không dùng a/an/the: in Australia." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["The", "capital", "of", "the", "UK", "is", "London"], answer: "The capital of the UK is London", vi: "Thủ đô của Vương quốc Anh là London", explain: "the + danh từ đã xác định (capital of the UK); tên nước viết chung là UK thì dùng the." }
      ]
    },

    "13": {
      goal: "Sau chặng ôn tập này em chắc tay hiện tại đơn, cấu trúc câu đơn và quá khứ đơn — nền tảng của Units 1-3.",
      formula: [
        { label: "Hiện tại đơn – khẳng định", f: "S + V (s/es)", vi: "He/She/It + động từ thêm s/es: She goes shopping. We/You/They: they go shopping." },
        { label: "Hiện tại đơn – phủ định & nghi vấn", f: "S + don't/doesn't + V | Do/Does + S + V ?", vi: "Does dành cho he/she/it; sau does/doesn't động từ bỏ s/es: Does she eat junk food?" },
        { label: "Từ chỉ tần suất", f: "always | usually | often | sometimes | never + V", vi: "Đứng ngay trước động từ chính, sau động từ to be: She never eats junk food." },
        { label: "Các loại câu đơn", f: "S+V | S+V+O | S+V+C | S+V+IO+DO", vi: "She works. / I like English. / He is a student. / She gave me a book." },
        { label: "Quá khứ đơn", f: "S + V-ed / V2", vi: "Quy tắc thêm -ed (plant → planted); bất quy tắc đổi dạng (give → gave, go → went). Dấu hiệu: yesterday, last week, last year." },
        { label: "Hỏi & phủ định quá khứ", f: "Did + S + V nguyên thể ? | didn't + V nguyên thể", vi: "Did you join...? – Yes, I did. / No, I didn't. Động từ không bao giờ thêm -ed ở đây." }
      ],
      explain: "Chặng này ghép lại ba Units 1-3 để em nhìn thấy bức tranh toàn cảnh. Trước hết là hiện tại đơn — thì của thói quen và sự thật: She never eats junk food (Cô ấy không bao giờ ăn đồ ăn nhanh). Hai việc cần nhớ: he/she/it thì động từ thêm s/es (go → goes, work → works, eat → eats), và khi hỏi hoặc phủ định phải mượn Do/Does để động từ về nguyên thể: Does she eat...?, She doesn't eat... Từ chỉ tần suất (always, usually, often, sometimes, never) luôn đứng trước động từ chính.\n\nThứ hai là cấu trúc câu đơn: chủ ngữ + động từ, chia làm bốn loại hay gặp. S+V (She works.) — chỉ có chủ ngữ và động từ. S+V+O (I like English.) — O (tân ngữ) là thứ bị tác động. S+V+C (He is a student.) — C (bổ ngữ) bổ nghĩa cho chủ ngữ. S+V+IO+DO (My grandfather gave me a valuable stamp collection.) — IO là người nhận (me), DO là vật được cho (a stamp collection). Câu đơn chỉ có một động từ chính và không có các từ nối because, although.\n\nCuối cùng là quá khứ đơn — việc đã xảy ra và kết thúc trong quá khứ, thường kèm yesterday, last week, last year, two years ago. Động từ quy tắc thêm -ed (plant → planted, collect → collected), động từ bất quy tắc thì đổi dạng (give → gave, go → went, eat → ate). Hỏi về quá khứ dùng Did + chủ ngữ + động từ nguyên thể: Did you join the clean-up activity yesterday?, còn phủ định là didn't + động từ nguyên thể: We didn't collect any litter.\n\nMẹo ôn nhanh cho chặng này: thấy every day, usually, often → hiện tại đơn; thấy yesterday, last week, last year → quá khứ đơn; thấy câu hỏi ở hiện tại thì đi tìm Do/Does, ở quá khứ thì đi tìm Did. Ba câu đơn giản She works. / I like English. / He is a student. chính là mẫu để em tự kiểm tra xem mình đã phân biệt được S+V, S+V+O và S+V+C chưa.",
      mistakes: [
        { wrong: "She go shopping every Sunday.", right: "She goes shopping every Sunday.", why: "Chủ ngữ she ở hiện tại đơn phải thêm s/es vào động từ." },
        { wrong: "Did you joined the clean-up activity yesterday?", right: "Did you join the clean-up activity yesterday?", why: "Sau Did, động từ về nguyên thể — bỏ -ed đi." },
        { wrong: "We didn't collected any litter in the park.", right: "We didn't collect any litter in the park.", why: "didn't đã mang nghĩa quá khứ rồi, động từ sau để nguyên thể." },
        { wrong: "He don't play football after school.", right: "He doesn't play football after school.", why: "Chủ ngữ he/she/it khi phủ định phải dùng doesn't." }
      ],
      checkpoint: [
        { type: "mcq", q: "My brother ___ up early to do the gardening every weekend.", options: ["get", "gets", "getting", "got"], answer: 1, vi: "Anh trai tôi dậy sớm để làm vườn vào mỗi cuối tuần.", explain: "Chủ ngữ my brother = he, có dấu hiệu every weekend → hiện tại đơn: gets." },
        { type: "mcq", q: "___ you collect litter in the park last Sunday?", options: ["Do", "Does", "Did", "Are"], answer: 2, vi: "Bạn có nhặt rác ở công viên vào Chủ nhật tuần trước không?", explain: "Dấu hiệu last Sunday → quá khứ đơn: Did + chủ ngữ + động từ nguyên thể." },
        { type: "fill", q: "We ___ (collect) plastic bottles on the beach last weekend.", answer: "collected", alt: ["collected"], hint: "Động từ quy tắc + có dấu hiệu last weekend.", vi: "Chúng tôi đã nhặt các chai nhựa trên bãi biển vào cuối tuần trước.", explain: "last weekend báo hiệu quá khứ đơn: collect + ed = collected." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["She", "never", "eats", "junk", "food"], answer: "She never eats junk food", vi: "Cô ấy không bao giờ ăn đồ ăn nhanh", explain: "Hiện tại đơn với she → eats; từ chỉ tần suất never đứng trước động từ." }
      ]
    },

    "14": {
      goal: "Sau chặng ôn tập này em tự tin dùng câu so sánh, từ chỉ số lượng và giới từ thời gian/địa điểm.",
      formula: [
        { label: "So sánh giống nhau", f: "A + be + like + B", vi: "My school library is like a boat (Thư viện trường tôi giống một chiếc thuyền)." },
        { label: "So sánh khác nhau", f: "A + be + different from + B", vi: "Vietnamese puppetry is different from Thai puppetry — luôn nhớ chữ from." },
        { label: "So sánh bằng / không bằng", f: "A + be (not) as + adj + as + B", vi: "as beautiful as = đẹp bằng; not as ... as = không đẹp bằng." },
        { label: "Từ chỉ số lượng", f: "some / any / a lot of (+ danh từ)", vi: "some cho câu khẳng định và câu hỏi lịch sự; any cho phủ định và câu hỏi; a lot of = nhiều (dùng được cả hai loại danh từ)." },
        { label: "Hỏi về số lượng", f: "How many + đếm được ? | How much + không đếm được ?", vi: "How many eggs? / How much sugar? — luôn đi với động từ is." },
        { label: "Giới từ thời gian", f: "at + giờ | on + ngày | in + tháng/năm/mùa", vi: "at seven o'clock, on Monday, in April, in 2026." },
        { label: "Giới từ địa điểm", f: "in | at | in front of | behind | next to | between A and B", vi: "in + không gian rộng (in the city), at + điểm cụ thể (at the gate), between = giữa hai nơi." }
      ],
      explain: "Ba Units 4-6 hội tụ ở chặng này. Về so sánh, có ba công thức dễ nhầm: A + be + like + B (giống nhau — My school library is like a boat), A + be + different from + B (khác nhau — đừng quên chữ from), và A + be (not) as + adj + as + B (bằng hoặc không bằng — This painting is as beautiful as that one). Chỉ cần đọc đề là biết chọn like, different from hay as ... as.\n\nVề từ chỉ số lượng: some và any đi được với cả hai loại danh từ, nhưng some cho câu khẳng định và câu hỏi lịch sự (There is some beef in the bowl.), any cho câu phủ định và câu hỏi (There aren't any eggs. / Is there any milk?). a lot of / lots of = nhiều, dùng được cả đếm được lẫn không đếm được. Khi hỏi về số lượng, How many đi với danh từ đếm được (How many eggs do we need?), How much đi với danh từ không đếm được (How much rice do we need?).\n\nVề giới từ, chia hai nhóm cho dễ nhớ. Nhóm thời gian: at + giờ (at eight o'clock), on + ngày (on Monday, on my birthday), in + tháng, năm, mùa (in April, in 2026, in summer). Nhóm địa điểm: in + không gian rộng (in the city), at + một điểm dừng cụ thể (at the school gate), và các cặp thường gặp: in front of (phía trước), behind (phía sau), next to (bên cạnh), between A and B (giữa hai nơi). Mẫu câu hay dùng: The science laboratory is next to the school library.\n\nMẹo ôn nhanh: thấy \"as ... as\", \"like\", \"different from\" trong câu là khoanh ngay vào nhóm so sánh; gặp How many / How much thì nhìn danh từ phía sau xem đếm được hay không; gặp giờ thì chọn at, gặp ngày thì chọn on, gặp tháng năm thì chọn in. Các từ vựng hay xuất hiện trong câu ví dụ là recipe (công thức nấu ăn), ingredient (nguyên liệu), laboratory (phòng thí nghiệm), projector (máy chiếu), gallery (phòng trưng bày tranh).",
      mistakes: [
        { wrong: "This song is as beautiful like that one.", right: "This song is as beautiful as that one.", why: "Cấu trúc so sánh bằng là as + tính từ + as — cần hai chữ as." },
        { wrong: "How much eggs do you need?", right: "How many eggs do you need?", why: "eggs đếm được → phải dùng How many; How much cho đồ không đếm được." },
        { wrong: "There aren't some apples left.", right: "There aren't any apples left.", why: "Câu phủ định dùng any; some dành cho câu khẳng định." },
        { wrong: "The meeting starts in eight o'clock.", right: "The meeting starts at eight o'clock.", why: "at + chính xác giờ; on + ngày; in + tháng/năm/mùa." }
      ],
      checkpoint: [
        { type: "mcq", q: "This painting is as ___ as that one.", options: ["beautifully", "beautiful", "more beautiful", "most beautiful"], answer: 1, vi: "Bức tranh này đẹp bằng bức tranh kia.", explain: "Cấu trúc as + tính từ + as → as beautiful as (đẹp bằng)." },
        { type: "mcq", q: "The science laboratory is ___ the library and the gym.", options: ["next to", "between", "in front of", "on"], answer: 1, vi: "Phòng thí nghiệm khoa học nằm giữa thư viện và nhà thi đấu.", explain: "Nằm giữa hai nơi → between A and B." },
        { type: "fill", q: "How ___ (many / much) sugar do you want in your tea?", answer: "much", alt: ["much"], hint: "sugar (đường) là danh từ đếm được hay không?", vi: "Bạn muốn cho bao nhiêu đường vào tách trà của mình?", explain: "sugar không đếm được → How much; How many chỉ dùng cho đồ đếm được." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["Our", "class", "has", "a", "test", "on", "Monday"], answer: "Our class has a test on Monday", vi: "Lớp chúng tôi có bài kiểm tra vào thứ Hai", explain: "on + ngày trong tuần; chủ ngữ our class (= it) ở hiện tại đơn nên động từ là has." }
      ]
    },

    "15": {
      goal: "Sau chặng ôn tập này em hỏi được khoảng cách, đưa lời khuyên và nối ý bằng although/however.",
      formula: [
        { label: "Nói về khoảng cách", f: "It is + khoảng cách + from A to B", vi: "It is two kilometres from my house to school (Từ nhà đến trường hai ki-lô-mét)." },
        { label: "Hỏi về khoảng cách", f: "How far is it from A to B ?", vi: "How far = xa bao nhiêu; far chỉ khoảng cách, không dùng how long ở đây." },
        { label: "Mất bao lâu để làm gì", f: "It takes + (người) + thời gian + to do sth", vi: "It takes me twenty minutes to get to school (Tôi mất hai mươi phút để đến trường)." },
        { label: "Lời khuyên", f: "should / shouldn't + V nguyên thể", vi: "should = nên, shouldn't = không nên; động từ phía sau không thêm to." },
        { label: "Mặc dù", f: "Although/Though + mệnh đề, S + V", vi: "Although it was raining, we went out. Không dùng but ở cuối mệnh đề này." },
        { label: "Tuy nhiên", f: "S + V. However, + mệnh đề", vi: "however luôn có dấu phẩy sau nó và nối hai câu độc lập với nhau." },
        { label: "Câu hỏi Yes/No", f: "Do/Does/Did + S + V ? | Am/Is/Are + S ... ?", vi: "Đặt từ phụ lên đầu, động từ về nguyên thể, trả lời Yes, ... / No, ... lặp lại từ phụ." }
      ],
      explain: "Chặng này ghép Units 7, 8 và 9. Trước hết, \"It\" làm chủ ngữ để hỏi và nói về khoảng cách: It is two kilometres from my house to school (Từ nhà tôi đến trường là hai ki-lô-mét), How far is it from here to the station? (Từ đây đến nhà ga xa bao nhiêu?). Muốn nói mất bao lâu để làm một việc gì đó thì dùng It takes + (người) + thời gian + to do something: It takes me twenty minutes to get to school.\n\nĐưa lời khuyên thì dùng should / shouldn't + động từ nguyên thể: You should wear a helmet (Bạn nên đội mũ bảo hiểm); We shouldn't run the red light (Chúng ta không nên vượt đèn đỏ). Không thêm \"to\" sau should nhé. Trong khi đó, although/though (mặc dù) và however (tuy nhiên) là hai từ nối gây nhầm nhất: although/though đứng đầu câu rồi kèm ngay một mệnh đề, và tuyệt đối không dùng but cùng câu — nói \"Although it was raining, we went out.\", không nói \"Although..., but we went out.\". Còn however thì luôn có dấu phẩy sau nó và nối hai câu độc lập: The film was long. However, we enjoyed it.\n\nCuối cùng, đừng quên phần câu hỏi Yes/No đã học ở Unit 9: Do/Does/Did + chủ ngữ + động từ nguyên thể, hoặc am/is/are đảo lên đầu. Ví dụ: Did they enjoy the parade last night? — trả lời Yes, they did. / No, they didn't.\n\nMẹo ôn nhanh: thấy khoảng cách thì dùng It is ... from A to B; thấy \"xa bao nhiêu\" thì How far; thấy \"mất bao lâu\" thì It takes ... to do; thấy ý đưa lời khuyên thì should/shouldn't; thấy hai ý đối lập thì although đứng đầu câu hoặc however đứng giữa câu kèm dấu phẩy. Chỉ cần nhớ although đi đôi với \"không but\" là em tránh được phần lớn lỗi sai trong bài này.",
      mistakes: [
        { wrong: "Although it was raining, but we stayed at home.", right: "Although it was raining, we stayed at home.", why: "although đã nghĩa là \"mặc dù\" nên không dùng but trong cùng câu." },
        { wrong: "The film was long. However we enjoyed it.", right: "The film was long. However, we enjoyed it.", why: "however luôn đi kèm dấu phẩy ngay sau nó." },
        { wrong: "You shouldn't to run the red light.", right: "You shouldn't run the red light.", why: "should/shouldn't + động từ nguyên thể, không thêm to." },
        { wrong: "It takes me twenty minutes get to school.", right: "It takes me twenty minutes to get to school.", why: "Công thức là It takes + thời gian + to do something (bắt buộc có to)." }
      ],
      checkpoint: [
        { type: "mcq", q: "You ___ cross the road when the traffic light is red.", options: ["should", "shouldn't", "can", "will"], answer: 1, vi: "Bạn không nên băng qua đường khi đèn giao thông đang đỏ.", explain: "Vượt đèn đỏ là nguy hiểm → lời khuyên phủ định: shouldn't + V nguyên thể." },
        { type: "mcq", q: "___ it was raining heavily, we still enjoyed the film.", options: ["Although", "However", "But", "So"], answer: 0, vi: "Mặc dù trời mưa nặng hạt, chúng tôi vẫn thưởng thức bộ phim.", explain: "although + mệnh đề ngay sau, không dùng but: Although it was raining, ... (mặc dù trời mưa...)" },
        { type: "fill", q: "It is about two ___ (kilometre) from my house to school.", answer: "kilometres", alt: ["kilometres"], hint: "Số hai đi với danh từ ở dạng nào?", vi: "Từ nhà tôi đến trường khoảng hai kilômét.", explain: "Công thức It is + khoảng cách; số nhiều: two kilometres." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["Did", "she", "like", "the", "documentary"], answer: "Did she like the documentary", vi: "Cô ấy có thích phim tài liệu không?", explain: "Câu hỏi quá khứ: Did + chủ ngữ + động từ nguyên thể (like, không liked)." }
      ]
    },

    "16": {
      goal: "Sau chặng ôn tập cuối này em phối hợp trôi chảy hiện tại tiếp diễn, will/won't, đại từ sở hữu và mạo từ a/an/the.",
      formula: [
        { label: "Hiện tại tiếp diễn", f: "S + am/is/are + V-ing", vi: "Việc đang xảy ra, có dấu hiệu now, at the moment, Look!: The factory is producing electricity." },
        { label: "Tương lai – khẳng định & phủ định", f: "S + will / won't + V nguyên thể", vi: "will không đổi theo chủ ngữ, động từ sau giữ nguyên: People will travel... / The car won't run..." },
        { label: "Tương lai – nghi vấn", f: "Will + S + V ... ?", vi: "Will your school use solar energy? – Yes, it will. / No, it won't." },
        { label: "Đại từ sở hữu", f: "mine | yours | his | hers | ours | theirs", vi: "Đứng độc lập sau to be và thay cho tính từ sở hữu + danh từ: This ticket is mine." },
        { label: "Mạo từ chưa xác định", f: "a / an + danh từ đếm được", vi: "a + phụ âm (a castle); an + âm đầu nguyên âm (an island, an old castle)." },
        { label: "Mạo từ đã xác định & bỏ trống", f: "the ... | (không dùng) với tên riêng", vi: "the duy nhất/đã nhắc (the capital); Canada, Australia không có a/an/the, nhưng có the UK, the USA." }
      ],
      explain: "Chặng cuối ôn Units 10-12 — ba mảng kỹ năng em dùng nhiều nhất khi giao tiếp. Thì hiện tại tiếp diễn (am/is/are + V-ing) để nói việc đang xảy ra: Look! The factory is producing electricity from solar panels. Tương lai đơn (will/won't + động từ nguyên thể) để dự đoán hoặc nói về kế hoạch: People will travel to the moon in the future; The car won't run on petrol. Nhớ cho chắc: will không đổi theo chủ ngữ, động từ sau nó luôn ở dạng nguyên thể.\n\nĐại từ sở hữu mine, yours, his, hers, ours, theirs đứng độc lập sau động từ to be và thay cho \"tính từ sở hữu + danh từ\": This ticket is mine. = This is my ticket. (Vé này là của tôi.) Câu hỏi giao tiếp gọn nhất là Whose ...? – It's hers. Whose hỏi về chủ sở hữu, trả lời bằng đại từ sở hữu chứ không dùng tính từ sở hữu.\n\nVề mạo từ: a trước danh từ đếm được bắt đầu bằng phụ âm, an khi âm đầu là nguyên âm (an island, an old castle), the khi vật đã xác định hoặc duy nhất (the capital of the UK). Không dùng mạo từ với tên riêng như Canada hay Australia; nhưng các nước viết chung đầu như the UK, the USA thì lại có the. Ba mảng này xuất hiện gần như trong mọi câu tiếng Anh hằng ngày — làm ngay bốn câu checkpoint phía dưới như một bài test nhanh nhé!\n\nMẹo ôn nhanh: câu có now, Look!, at the moment → am/is/are + V-ing; câu có in the future, next year, in 2050 → will/won't + V nguyên thể; thấy hỏi \"của ai\" sau động từ to be → trả lời bằng mine/yours/his/hers/ours/theirs; vật đã xác định hoặc duy nhất thì dùng the, mới nhắc lần đầu mà đếm được thì a/an, tên riêng của đất nước thì bỏ trống (trừ các tên viết chung như the UK, the USA).",
      mistakes: [
        { wrong: "We are save energy at the moment.", right: "We are saving energy at the moment.", why: "Sau are phải là V-ing: saving." },
        { wrong: "People will travels to the moon in the future.", right: "People will travel to the moon in the future.", why: "Sau will dùng động từ nguyên thể, không thêm s/es." },
        { wrong: "This solowheel is my.", right: "This solowheel is mine.", why: "my cần danh từ sau; đứng độc lập sau to be phải dùng mine." },
        { wrong: "He studies at an university in the USA.", right: "He studies at a university in the USA.", why: "university có âm đầu /juː/ như phụ âm → dùng a." }
      ],
      checkpoint: [
        { type: "mcq", q: "Look! The children ___ solar panels on the roof.", options: ["repair", "are repairing", "repaired", "repairs"], answer: 1, vi: "Nhìn kìa! Bọn trẻ đang sửa các tấm pin mặt trời trên mái nhà.", explain: "Look! → việc đang xảy ra → hiện tại tiếp diễn: are repairing." },
        { type: "mcq", q: "My friend has ___ old dictionary at home.", options: ["a", "an", "the", "(không dùng mạo từ)"], answer: 1, vi: "Bạn tôi có một cuốn từ điển ở nhà.", explain: "old có âm đầu nguyên âm /əʊ/ → an; danh từ mới nhắc lần đầu chưa xác định." },
        { type: "fill", q: "The hyperloop ticket isn't yours. It's ___ (her).", answer: "hers", alt: ["hers"], hint: "Đứng độc lập sau to be, không có danh từ phía sau.", vi: "Vé hyperloop không phải của bạn. Nó là của cô ấy.", explain: "her là tính từ sở hữu (her ticket); hers là đại từ sở hữu nên đứng một mình." },
        { type: "reorder", q: "Sắp xếp thành câu có nghĩa", words: ["People", "will", "travel", "to", "the", "moon"], answer: "People will travel to the moon", vi: "Con người sẽ đến mặt trăng", explain: "S + will + V nguyên thể — dự đoán về tương lai." }
      ]
    }
  },

  quizVi: {
    "9||___ your family celebrate Thanksgiving every year?": "Gia đình em có ăn mừng Lễ Tạ ơn mỗi năm không?",
    "9||___ she wearing a costume at the party?": "Có phải cô ấy đang mặc trang phục ở bữa tiệc không?",
    "9||___ the children enjoy the fireworks display last night?": "Bọn trẻ có thích màn bắn pháo hoa tối qua không?",
    "9||A ___ is a happy occasion when people eat, drink and celebrate together.": "Một bữa yến tiệc là dịp vui vẻ khi mọi người cùng ăn, uống và chung vui.",
    "9||Last night they (join) the parade through the city.": "Tối qua họ đã tham gia cuộc diễu hành xuyên qua thành phố.",
    "9||Does your family (celebrate) Mid-Autumn Festival?": "Gia đình bạn có ăn mừng Tết Trung Thu không?",
    "10||Don't go in. The teacher ___ an experiment right now.": "Đừng vào đấy. Thầy cô đang làm thí nghiệm ngay bây giờ.",
    "10||We ___ energy at the moment.": "Chúng ta đang tiết kiệm năng lượng vào lúc này.",
    "10||Energy from the sun and wind is called ___ energy.": "Năng lượng từ mặt trời và gió được gọi là năng lượng tái tạo.",
    "10||Turn off the lights when you leave to ___ electricity.": "Hãy tắt đèn khi bạn ra khỏi phòng để tiết kiệm điện.",
    "10||The solar panels (produce) electricity for our school right now.": "Các tấm pin mặt trời đang tạo ra điện cho trường chúng ta ngay lúc này.",
    "10||They are (save) energy at the moment.": "Họ đang tiết kiệm năng lượng vào lúc này.",
    "11||I'm sure people ___ travel by driverless cars one day.": "Tôi chắc chắn một ngày nào đó con người sẽ đi bằng xe không người lái.",
    "11||___ your school use solar energy next year?": "Trường bạn có dùng năng lượng mặt trời vào năm tới không?",
    "11||This seat is not yours. It's ___.": "Ghế này không phải của bạn. Nó là của tôi.",
    "11||A ___ car drives without a person at the wheel.": "Xe không người lái là loại xe chạy mà không cần người cầm lái.",
    "11||I think vehicles (not / run) on petrol in 2050.": "Tôi nghĩ vào năm 2050 các phương tiện sẽ không chạy bằng xăng.",
    "11||The hyperloop ticket is (her).": "Vé hyperloop là của cô ấy.",
    "12||London is ___ capital of England.": "London là thủ đô của nước Anh.",
    "12||He studies at ___ university in ___ USA.": "Cậu ấy học tại một trường đại học ở Hoa Kỳ.",
    "12||___ UK is an island country.": "Vương quốc Anh là một nước đảo.",
    "12||Edinburgh Castle is a famous ___ in Scotland.": "Lâu đài Edinburgh là một lâu đài nổi tiếng ở Scotland.",
    "12||My sister is studying in (Australia).": "Em gái tôi đang học tại Úc.",
    "12||I have never visited (an) island country before.": "Tôi chưa từng đến thăm một nước đảo nào trước đây.",
    "13||She ___ shopping with her friends every Sunday.": "Cô ấy đi mua sắm cùng bạn bè vào mỗi Chủ nhật.",
    "13||___ you join the clean-up activity yesterday?": "Bạn có tham gia hoạt động làm sạch môi trường hôm qua không?",
    "13||A person who does voluntary work without pay is a ___.": "Người làm công việc tình nguyện mà không được trả lương là tình nguyện viên.",
    "13||Last year our class (plant) fifty trees in the school garden.": "Năm ngoái lớp chúng tôi đã trồng năm mươi cây trong vườn trường.",
    "13||How often do you (do) your homework?": "Bạn làm bài tập về nhà thường xuyên đến mức nào?",
    "14||This song is as ___ as that one.": "Bài hát này hay bằng bài hát kia.",
    "14||How ___ sugar do you want in your tea?": "Bạn muốn cho bao nhiêu đường vào tách trà của mình?",
    "14||The meeting starts ___ eight o'clock.": "Cuộc họp bắt đầu lúc tám giờ.",
    "14||She prefers (dance) to (swim).": "Cô ấy thích nhảy hơn là bơi lội.",
    "14||There isn't (some) bread left. Let's go to the bakery.": "Không còn ổ bánh mì nào nữa. Chúng ta đi tiệm bánh thôi.",
    "15||You ___ drive your car after drinking wine.": "Bạn không nên lái xe sau khi uống rượu.",
    "15||___ it was raining, we still went to the cinema.": "Mặc dù trời mưa, chúng tôi vẫn đi xem phim.",
    "15||___ the children enjoy the fireworks display last night?": "Bọn trẻ có thích màn bắn pháo hoa tối qua không?",
    "15||How (far) is it from here to the station?": "Từ đây đến nhà ga xa bao nhiêu?",
    "15||Last night they (join) the parade through the city.": "Tối qua họ đã tham gia cuộc diễu hành xuyên qua thành phố.",
    "16||We ___ energy at the moment.": "Chúng ta đang tiết kiệm năng lượng vào lúc này.",
    "16||I'm sure people ___ travel by driverless cars one day.": "Tôi chắc chắn một ngày nào đó con người sẽ đi bằng xe không người lái.",
    "16||London is ___ capital of England.": "London là thủ đô của nước Anh.",
    "16||The hyperloop ticket is (her).": "Vé hyperloop là của cô ấy.",
    "16||I have never visited (an) island country before.": "Tôi chưa từng đến thăm một nước đảo nào trước đây."
  }
};
