const coursesData = {
  "game_dev": {
    title: "Phát triển trò chơi với Unity",
    description: "Xây dựng 4 game 2D có thể chơi được bằng C# và nắm vững các nguyên tắc cơ bản về phát triển game.",
    thumbnail: "images/unity.png",
    // THAY ĐỔI: 'slides' trở thành 'sections'
    sections: [
      {
        title: "Tuần 1: Introduction. C# & Unity3D Basics",
        slides: [
          // SLIDE 1: TRANG BÌA
          {
            id: 1,
            title: "Trang 1: Bìa - Giới thiệu môn học",
            image: "images/game-dev/week1/slide_1.png",
            notes: "Bài giảng 1 thuộc môn CE318/CE818: High-level Games Development. Giảng viên: Diego Perez. Nội dung chính: Giới thiệu tổng quan, ngôn ngữ C# và các khái niệm cơ bản về Unity3D.",
            terms: {}
          },
          // SLIDE 2: ĐỀ CƯƠNG
          {
            id: 2,
            title: "Trang 2: Đề cương bài giảng",
            image: "images/game-dev/week1/slide_2.png",
            notes: "Nội dung bài giảng tuần này bao gồm 4 phần chính:\n1. Tổng quan khóa học (Bắt đầu từ slide 4).\n2. Giới thiệu về C#.\n3. Scripting trong C# cho Unity3D.\n4. Câu hỏi và Demo.",
            terms: {}
          },
          // SLIDE 3: SLIDE CHUYỂN TIẾP (NẾU CÓ)
          {
            id: 3,
            title: "Trang 3: Chuyển tiếp - Đề cương",
            image: "images/game-dev/week1/slide_3.png",
            notes: "Chuẩn bị vào phần đầu tiên: Tổng quan về khóa học.",
            terms: {}
          },
          // SLIDE 4: NỘI DUNG CHÍNH BẮT ĐẦU
          {
            id: 4,
            title: "Trang 4: Tổng quan khóa học",
            image: "images/game-dev/week1/slide_4.png",
            // DỮ LIỆU ĐÃ ĐƯỢC CẬP NHẬT
            notes: "Slide này cung cấp cái nhìn tổng quan về nội dung và mục tiêu của khóa học.\n\n" +
              "Khóa học sẽ tập trung vào các kiến thức nền tảng của lập trình game console, đặc biệt là game 3D được phát triển bằng <b>Unity3D phiên bản 5.1.4</b>.\n\n" +
              "<b>Các chủ đề chính bao gồm:</b>\n" + // Sử dụng \n để tạo danh sách
              "- Xây dựng game 3D và sử dụng trình soạn thảo của Unity3D.\n" +
              "- Các khái niệm toán học 2D-3D trong game.\n" +
              "- Quản lý input của người chơi, vật lý game, camera và animations.\n" +
              "- Điều hướng (Navigation), Giao diện người dùng (GUI), ánh sáng và âm thanh.\n" +
              "- Hệ thống hạt (Particle Systems) và địa hình (Terrains).\n" +
              "- Thiết kế game, Gameplay và Trí tuệ nhân tạo (Game AI).\n\n" +
              "Đây là một khóa học mang tính thực tiễn cao, sử dụng nhiều ví dụ mã nguồn và khuyến khích thiết kế game sáng tạo trong các buổi thực hành.",
            terms: {
              "Unity3D": "Một game engine đa nền tảng mạnh mẽ được sử dụng để tạo ra các trò chơi 2D, 3D và các trải nghiệm tương tác khác.",
              "Game Engine": "Là một framework phần mềm cung cấp các công cụ và chức năng cốt lõi (như đồ họa, vật lý, âm thanh) để các nhà phát triển xây dựng trò chơi một cách hiệu quả.",
              "Game AI (Artificial Intelligence)": "Trí tuệ nhân tạo trong game, dùng để điều khiển hành vi của các nhân vật không phải người chơi (NPC), tạo ra các thử thách và tương tác thông minh.",
              "Particle Systems (Hệ thống hạt)": "Một kỹ thuật trong đồ họa máy tính dùng để mô phỏng các hiện tượng 'mờ ảo' như lửa, khói, mưa, vụ nổ bằng cách sử dụng một số lượng lớn các hạt nhỏ."
            }
          },
          // SLIDE 5: KẾT QUẢ HỌC TẬP & ĐÁNH GIÁ
          {
            id: 5,
            title: "Trang 5: Kết quả học tập & Đánh giá",
            image: "images/game-dev/week1/slide_5.png",
            notes: "Sau khi hoàn thành môn học này, bạn sẽ có khả năng:\n" +
                   "- Hiểu được kiến trúc của game 2D/3D.\n" +
                   "- Thiết kế và lập trình các game 2D/3D đơn giản bằng Unity3D.\n" +
                   "- Lập trình các hành vi AI cơ bản cho nhân vật (NPC).\n" +
                   "- Thiết kế và lập trình các hiệu ứng đồ họa trong môi trường 3D.\n" +
                   "- Thiết kế và lập trình các đối tượng trong game (game objects).\n\n" +
                   "<b>Phương pháp đánh giá:</b>\n" +
                   "- <b>Kiểm tra tiến độ (30%):</b>\n" +
                   "  - Bài 1 (15%) - Nội dung từ Tuần 1 - 4.\n" +
                   "  - Bài 2 (15%) - Nội dung từ Tuần 5 - 9.\n" +
                   "- <b>Bài tập thực hành mỗi hai tuần (10%).</b>\n" +
                   "- <b>Một bài tập lớn duy nhất (60%):</b>\n" +
                   "  - Phần I (20%) - Hạn nộp ngày 22 tháng 11, 2016.\n" +
                   "  - Phần II (40%) - Hạn nộp ngày 9 tháng 1, 2017.",
            terms: {
              "Learning Outcomes (Kết quả học tập)": "Các kiến thức và kỹ năng cụ thể mà sinh viên dự kiến sẽ đạt được sau khi hoàn thành một môn học.",
              "Assessment (Đánh giá)": "Quá trình đo lường và cho điểm mức độ hiểu biết và năng lực của sinh viên thông qua các bài kiểm tra, bài tập.",
              "Game Architecture (Kiến trúc game)": "Cấu trúc tổng thể của một trò chơi, bao gồm cách các thành phần (như đồ họa, logic game, input) tương tác với nhau.",
              "Game Objects": "Trong Unity, đây là bất kỳ vật thể nào tồn tại trong một màn chơi, từ nhân vật, vật phẩm cho đến các yếu tố vô hình như camera hay nguồn sáng."
            }
          },
          // SLIDE 6: LỊCH TRÌNH KHÓA HỌC
          {
            id: 6,
            title: "Trang 6: Lịch trình khóa học",
            image: "images/game-dev/week1/slide_6.png",
            notes: "<b>Lý thuyết (Lectures):</b>\n" +
                   "- Mỗi thứ Ba, 1h chiều tại phòng 3.320, kéo dài 2 tiếng.\n" +
                   "- Bao gồm thảo luận, demo phần mềm và các câu hỏi ôn tập (sử dụng Kahoot!).\n\n" +
                   "<b>Thực hành (Labs):</b>\n" +
                   "- Mỗi thứ Sáu, 1h chiều tại phòng CES Lab 1, kéo dài 2 tiếng.\n" +
                   "- Sẽ có hướng dẫn từng bước, tutorials và các bài tập mở.\n" +
                   "- Trợ giảng là Emily Marriot (email: ecmarr@essex.ac.uk).\n\n" +
                   "<b>Lịch học chi tiết:</b>\n" +
                   "- Lý thuyết: Thứ Ba, Tuần 2-5 & 7-10, 1h-3h chiều, Phòng 3.320.\n" +
                   "- Lý thuyết: Thứ Ba, Tuần 6 & 11, 2h-3h chiều, Phòng 3.320.\n" +
                   "- Thực hành: Thứ Sáu, Tuần 2-11, 1h-3h chiều, Phòng CES Lab 1.\n" +
                   "- Kiểm tra: Thứ Ba, Tuần 6 (ngày 8/11) và Tuần 11 (ngày 13/12), 1h-2h chiều.\n\n" +
                   "Cuối cùng, phần trình bày/demo cho bài tập lớn (phần II) có thể sẽ diễn ra vào <b>Tuần 16</b>.",
            terms: {
              "Lecture": "Buổi học lý thuyết, nơi giảng viên trình bày và giảng giải các khái niệm chính của môn học.",
              "Lab (Laboratory session)": "Buổi học thực hành, nơi sinh viên áp dụng kiến thức lý thuyết vào việc giải quyết các bài tập cụ thể, thường là trên máy tính.",
              "Tutorial": "Một bài hướng dẫn chi tiết, thường là từng bước một, để giúp người học thực hiện một nhiệm vụ cụ thể.",
              "Kahoot!": "Một nền tảng học tập dựa trên trò chơi, được sử dụng để tạo và tham gia các câu đố trắc nghiệm một cách tương tác."
            }
          },
          // SLIDE 7: YÊU CẦU BÀI TẬP
          {
            id: 7,
            title: "Trang 7: Yêu cầu bài tập",
            image: "images/game-dev/week1/slide_7.png",
            notes: "Tất cả bài tập trong môn CE318 đều là <b>bài tập cá nhân</b>. Mọi buổi thực hành, thuyết trình và demo đều là <b>bắt buộc</b> (sẽ bị 0% điểm nếu vắng mặt không có lý do chính đáng).\n\n" +
                   "<b>Bài tập mỗi hai tuần (10%):</b>\n" +
                   "- Sẽ có 4 bài tập dạng này. Các bài tập sẽ được đánh giá tại phòng lab.\n\n" +
                   "<b>Bài tập lớn (60%):</b>\n" +
                   "- Yêu cầu phát triển một game hoàn chỉnh, gồm 2 phần phải nộp:\n" +
                   "  - <b>Phần I (20%, hạn nộp Thứ Tư 22/11):</b> Bao gồm Game Prototype (10%) + Kế hoạch phát triển (5%) + 5 phút thuyết trình (5%, có peer review).\n" +
                   "  - <b>Phần II (40%, hạn nộp Thứ Hai 09/01):</b>\n" +
                   "    - Đối với môn <b>CE318</b>: Game hoàn chỉnh (20%) + Báo cáo cuối kỳ (10%) + 10 phút thuyết trình (10%, có peer review).\n" +
                   "    - Đối với môn <b>CE818</b>: Game hoàn chỉnh (15%) + Báo cáo cuối kỳ (10%) + Case Study (10%) + 10 phút thuyết trình (5%, có peer review).",
            terms: {
              "Mandatory": "Bắt buộc, có nghĩa là phải tham gia hoặc hoàn thành, nếu không sẽ bị phạt hoặc không đủ điều kiện qua môn.",
              "Deliverable": "Một sản phẩm hoặc kết quả cụ thể, hữu hình phải được tạo ra và nộp lại để hoàn thành một dự án hoặc một phần của dự án.",
              "Game Prototype": "Một phiên bản chơi thử rất sớm của một trò chơi, được tạo ra để kiểm tra các cơ chế gameplay cốt lõi và xác định xem trò chơi có vui hay không.",
              "Peer reviewed": "Được đánh giá, nhận xét bởi những người cùng vai trò (trong trường hợp này là các sinh viên khác trong lớp).",
              "Case Study": "Một bài phân tích chuyên sâu về một trường hợp, vấn đề, hoặc dự án cụ thể để rút ra các bài học kinh nghiệm."
            }
          },
          // SLIDE 8: PEER REVIEW & GIẢI THƯỞNG GAME
          {
            id: 8,
            title: "Trang 8: Peer Review & Giải thưởng Game hay nhất",
            image: "images/game-dev/week1/slide_8.png",
            notes: "Trong môn học này, các bạn sẽ tham gia đánh giá lẫn nhau dựa trên các tiêu chí sau:\n" +
                   "- Phần thuyết trình cuối kỳ.\n" +
                   "- Mức độ \"vui\" (fun) của game.\n" +
                   "- Tính thẩm mỹ (aesthetics) của game.\n" +
                   "- Game hay nhất về tổng thể.\n\n" +
                   "<b>Quy tắc đánh giá:</b>\n" +
                   "- Danh tính của người đánh giá sẽ được <b>giữ ẩn danh</b> với người được đánh giá, nhưng sẽ không ẩn danh với giảng viên/trợ giảng.\n" +
                   "- Giảng viên có quyền không tính các điểm số cực đoan (quá cao hoặc quá thấp) mang tính không khách quan.\n\n" +
                   "<b>Giải thưởng:</b>\n" +
                   "- Vào kỳ mùa Xuân, sẽ có 3 giải thưởng được trao cho 3 hạng mục cuối (Vui, Thẩm mỹ, Tổng thể) dựa trên đánh giá của các bạn cùng lớp.\n" +
                   "- Phần thưởng có thể là 3 voucher (trị giá khoảng 20 Bảng Anh) để mua hàng trên Amazon hoặc Waterstones.",
            terms: {
              "Peer Review": "Là quá trình các cá nhân cùng vai trò (ví dụ: sinh viên) đánh giá, nhận xét công việc của nhau. Điều này giúp cung cấp nhiều góc nhìn và thúc đẩy việc học hỏi lẫn nhau.",
              "Aesthetics (Tính thẩm mỹ)": "Trong game, đây là yếu tố liên quan đến vẻ đẹp và phong cách nghệ thuật của trò chơi, bao gồm đồ họa, âm thanh, và cảm giác tổng thể mà nó mang lại.",
              "Anonymous (Ẩn danh)": "Việc thực hiện một hành động mà không tiết lộ danh tính của người thực hiện.",
              "Voucher": "Một loại phiếu hoặc mã có giá trị tiền tệ nhất định, có thể dùng để đổi lấy hàng hóa hoặc dịch vụ."
            }
          },
          // SLIDE 9: TÀI LIỆU THAM KHẢO
          {
            id: 9,
            title: "Trang 9: Tài liệu tham khảo",
            image: "images/game-dev/week1/slide_9.png",
            notes: "Đây là danh sách các tài liệu và tài nguyên web được đề xuất cho môn học:\n\n" +
                   "<b>Ngôn ngữ C#:</b>\n" +
                   "1. <b>C# 4.0 Pocket Reference</b> của <i>Albahari and Albahari</i>.\n" +
                   "2. <b>Essential C# 4.0</b> của <i>Mark Michaelis</i>.\n" +
                   "3. MSDN C# Ref: msdn.microsoft.com/en-us/library/618ayhy6.aspx\n\n" +
                   "<b>Unity3D:</b>\n" +
                   "1. http://unity3d.com/: Nơi chứa tài liệu Manual, Scripting API, Samples, Tutorials... (hầu hết tài liệu khóa học được lấy từ đây).\n" +
                   "2. <b>Beginning 3D Game Development with Unity 4, 2nd Edition</b> của <i>Sue Blackman</i> (rất khuyến khích).\n" +
                   "3. <b>Unity 4.x Cookbook</b> của <i>Matt Smith</i> (sách tham khảo bổ sung).\n" +
                   "4. <b>Unity 4.x Game AI Programming</b> của <i>Aung Sithu Kyaw, Thet Naing Swe</i> (dành cho Game AI trong Unity).\n" +
                   "5. <b>Unity 4x Game Development by Example, Beginners Guide</b> của <i>Ryan Henson Creighton</i> (dành cho người mới bắt đầu).\n\n" +
                   "<b>Game AI:</b>\n" +
                   "1. <b>Artificial Intelligence for Games</b> của <i>Millington and Funge</i>.\n" +
                   "2. <b>Game Artificial Intelligence</b> của <i>Ahlquist and Novak</i>.",
            terms: {
              "MSDN (Microsoft Developer Network)": "Là cổng thông tin chính thức của Microsoft dành cho các nhà phát triển, cung cấp tài liệu kỹ thuật, mã mẫu, và công cụ cho các sản phẩm và công nghệ của Microsoft.",
              "API (Application Programming Interface)": "Giao diện lập trình ứng dụng. Đây là một tập hợp các quy tắc và công cụ cho phép các ứng dụng phần mềm khác nhau giao tiếp với nhau. 'Scripting API' của Unity là tập hợp các lệnh bạn có thể dùng để điều khiển engine.",
              "Cookbook (sách lập trình)": "Một loại sách hướng dẫn lập trình được trình bày dưới dạng các 'công thức' (recipes). Mỗi 'công thức' là một giải pháp cho một vấn đề lập trình cụ thể."
            }
          },
          // SLIDE 10: CHUYỂN TIẾP
          {
            id: 10,
            title: "Trang 10: Chuyển tiếp - Giới thiệu về C#",
            image: "images/game-dev/week1/slide_10.png",
            notes: "Kết thúc phần Tổng quan khóa học.\n\n" +
                   "Phần tiếp theo sẽ giới thiệu chi tiết về ngôn ngữ lập trình C#.",
            terms: {}
          },
          // SLIDE 11: GIỚI THIỆU VỀ C#
          {
            id: 11,
            title: "Trang 11: Giới thiệu về C#",
            image: "images/game-dev/week1/slide_11.png",
            notes: "Tất cả các game làm bằng Unity3D thường chứa các đoạn mã (scripts) được viết bằng C#, Javascript hoặc Boo.\n\n" +
                   "Trong môn học này, chúng ta sẽ <b>chỉ sử dụng C#</b>, một ngôn ngữ lập trình hướng đối tượng được phát triển bởi Microsoft trong khuôn khổ .NET framework của họ.\n\n" +
                   "Unity3D đi kèm với một IDE mặc định gọi là <b>MonoDevelop</b>, cung cấp các tính năng như tô màu cú pháp (syntax highlighting) và gỡ lỗi (debug).",
            terms: {
              "C# (C Sharp)": "Một ngôn ngữ lập trình hiện đại, hướng đối tượng, được phát triển bởi Microsoft. Nó là ngôn ngữ chính được sử dụng để lập trình trong Unity.",
              "IDE (Integrated Development Environment)": "Môi trường phát triển tích hợp. Đây là một ứng dụng phần mềm cung cấp các công cụ cần thiết cho việc phát triển phần mềm, bao gồm trình soạn thảo mã, trình biên dịch, và công cụ gỡ lỗi (debugger).",
              "MonoDevelop": "Một IDE mã nguồn mở, đa nền tảng, từng là IDE mặc định đi kèm với Unity. Các phiên bản Unity gần đây đã chuyển sang sử dụng Visual Studio.",
              "Debug": "Quá trình tìm kiếm và sửa lỗi (bugs) trong một chương trình máy tính."
            }
          },
          // SLIDE 12: C# CƠ BẢN - DÀNH CHO NGƯỜI BIẾT JAVA
          {
            id: 12,
            title: "Trang 12: C# cơ bản - Dành cho người biết Java",
            image: "images/game-dev/week1/slide_12.png",
            notes: "Slide này trình bày một chương trình C# cơ bản và chỉ ra một số điểm khác biệt so với Java:\n\n" +
                   "- Từ khóa <b>using</b> được dùng để 'import' các gói, mà trong C# được gọi là <b>namespace</b>.\n" +
                   "- Một namespace có thể chứa nhiều class, và tên file không nhất thiết phải trùng với tên namespace hay tên class bên trong nó.\n" +
                   "- Quy ước đặt tên: Tên phương thức (ví dụ: <b>Main</b>) bắt đầu bằng chữ hoa, trong khi các kiểu dữ liệu có sẵn (ví dụ: <b>class</b>, <b>string</b>) thì không.",
            terms: {
              "using directive": "Trong C#, đây là chỉ thị được sử dụng ở đầu file mã nguồn để khai báo các namespace sẽ được sử dụng, cho phép bạn sử dụng các class trong namespace đó mà không cần ghi đầy đủ tên.",
              "namespace": "Một 'container' dùng để tổ chức mã nguồn và tránh xung đột tên. Nó tương tự như khái niệm 'package' trong Java.",
              "Main method": "Điểm khởi đầu của mọi ứng dụng C#. Khi chương trình được chạy, phương thức Main() là phương thức đầu tiên được thực thi."
            }
          },
          // SLIDE 13: C# CƠ BẢN - BIẾN, THAM SỐ & NAMESPACE
          {
            id: 13,
            title: "Trang 13: C# cơ bản - Biến, tham số & namespace",
            image: "images/game-dev/week1/slide_13.png",
            notes: "Tổng quan về các khái niệm biến, tham số và namespace trong C#:\n\n" +
                   "- <b>Biến và hằng số:</b> Khai báo với các kiểu dữ liệu như int, double, string, bool. Từ khóa <b>const</b> dùng để khai báo hằng số.\n" +
                   "- <b>Biến Static:</b> Biến được chia sẻ chung cho tất cả các đối tượng (instance) của một class.\n" +
                   "- <b>Chuyển đổi kiểu:</b> Có thể là ngầm định (implicit, ví dụ int sang double) hoặc tường minh (explicit/casting, ví dụ double sang short).\n" +
                   "- <b>Params và tham số tùy chọn:</b> Từ khóa <b>params</b> cho phép một phương thức nhận một số lượng đối số không xác định. Tham số tùy chọn là tham số có giá trị mặc định.\n" +
                   "- <b>Namespaces:</b> Có thể được lồng vào nhau để tạo ra một cấu trúc phân cấp, giúp tổ chức code tốt hơn.",
            terms: {
              "static": "Một từ khóa chỉ định rằng một thành viên (biến hoặc phương thức) thuộc về chính kiểu dữ liệu đó, chứ không thuộc về một đối tượng cụ thể của kiểu đó.",
              "Casting (Ép kiểu)": "Là việc chuyển đổi tường minh một giá trị từ kiểu dữ liệu này sang kiểu dữ liệu khác, có thể gây mất mát dữ liệu (ví dụ: ép kiểu một số double thành int sẽ mất phần thập phân).",
              "params": "Từ khóa cho phép một phương thức nhận một mảng các đối số. Nó phải là tham số cuối cùng trong danh sách tham số của phương thức."
            }
          },
          // SLIDE 14: C# CƠ BẢN - KIỂU THAM TRỊ VÀ THAM CHIẾU
          {
            id: 14,
            title: "Trang 14: C# cơ bản - Kiểu tham trị và tham chiếu",
            image: "images/game-dev/week1/slide_14.png",
            notes: "Trong C#, các kiểu dữ liệu được chia thành hai loại chính:\n\n" +
                   "- <b>Kiểu tham trị (Value types):</b> Chứa trực tiếp giá trị của nó. Ví dụ: int, float, bool, char, và các <b>Struct</b> (như Vector3). Khi gán hoặc truyền một biến kiểu tham trị, một bản sao của giá trị sẽ được tạo ra.\n" +
                   "- <b>Kiểu tham chiếu (Reference types):</b> Chứa một địa chỉ bộ nhớ trỏ đến nơi chứa giá trị. Ví dụ: các <b>Class</b> (như Transform, GameObject). Khi gán hoặc truyền một biến kiểu tham chiếu, chỉ có địa chỉ bộ nhớ được sao chép, các biến vẫn trỏ đến cùng một đối tượng.\n\n" +
                   "<b>Ví dụ:</b> Thay đổi một bản sao của <b>transform.position</b> (là Vector3, một struct) sẽ không ảnh hưởng đến bản gốc. Nhưng thay đổi thuộc tính của một bản sao của <b>transform</b> (là một class) sẽ ảnh hưởng đến bản gốc.\n\n" +
                   "- Từ khóa <b>ref</b> và <b>out</b> dùng để truyền các đối số vào phương thức theo kiểu tham chiếu.",
            terms: {
              "Value Type (Kiểu tham trị)": "Một kiểu dữ liệu lưu trữ giá trị của nó trực tiếp trong bộ nhớ. Các kiểu cơ bản như int, double, bool và các struct là kiểu tham trị.",
              "Reference Type (Kiểu tham chiếu)": "Một kiểu dữ liệu lưu trữ một tham chiếu (địa chỉ bộ nhớ) đến đối tượng thực tế. Các class, interface, delegate, và array là kiểu tham chiếu.",
              "ref": "Từ khóa dùng khi truyền đối số vào phương thức, cho phép phương thức đó thay đổi giá trị của biến gốc. Biến truyền vào phải được khởi tạo trước.",
              "out": "Tương tự như 'ref', nhưng biến truyền vào không cần được khởi tạo trước. Phương thức nhận tham số 'out' bắt buộc phải gán một giá trị cho nó trước khi kết thúc."
            }
          },
          // SLIDE 15: C# CƠ BẢN - CLASS, INTERFACE VÀ KẾ THỪA
          {
            id: 15,
            title: "Trang 15: C# cơ bản - Class, Interface và Kế thừa",
            image: "images/game-dev/week1/slide_15.png",
            notes: "Các khái niệm về Class, Interface và Kế thừa trong C# tương tự như Java:\n\n" +
                   "- Một class chỉ có thể <b>kế thừa (subclass)</b> từ một class khác, nhưng có thể <b>thực thi (implement)</b> nhiều interface.\n" +
                   "- <b>Interface</b> là một 'hợp đồng' định nghĩa các phương thức mà một class phải có nếu nó thực thi interface đó.\n" +
                   "- Sử dụng từ khóa <b>override</b> để cung cấp một định nghĩa mới cho một phương thức đã được định nghĩa ở lớp cha (base class).\n" +
                   "- Sử dụng từ khóa <b>base</b> để truy cập đến các thành viên (ví dụ: phương thức) của lớp cha từ bên trong lớp con.",
            terms: {
              "Inheritance (Kế thừa)": "Một cơ chế cho phép một class (lớp con) thừa hưởng các thuộc tính và phương thức từ một class khác (lớp cha).",
              "Interface": "Một tập hợp các định nghĩa về phương thức và thuộc tính. Một class khi 'thực thi' một interface phải cung cấp định nghĩa chi tiết cho tất cả các thành viên của interface đó.",
              "override": "Từ khóa dùng trong lớp con để cung cấp một triển khai mới cho một phương thức (virtual hoặc abstract) của lớp cha.",
              "base": "Từ khóa dùng trong lớp con để truy cập đến các thành viên của lớp cha, ví dụ như gọi constructor hoặc một phương thức đã bị override của lớp cha."
            }
          }
          // ... và tiếp tục với các slide còn lại
        ]
      }
      // Bạn có thể thêm "Tuần 3", "Tuần 4"... ở đây
    ]
  },

  "computer_vision": {
    title: "Nhập môn Thị giác Máy tính",
    description: "Khám phá cách máy tính 'nhìn' và phân tích hình ảnh, từ nhận diện vật thể đến xử lý ảnh cơ bản.",
    thumbnail: "images/computer-vision.webp",
    sections: [
      {
        title: "Tuần 1: Các khái niệm cơ bản",
        slides: [
          { id: 101, title: "Trang 1: Thị giác máy tính là gì?", image: "images/cv/week1/slide_01.jpg", notes: "Ghi chú cho slide 1 môn CV.", terms: { "OpenCV": "Định nghĩa..." } },
          { id: 102, title: "Trang 2: Pixel và không gian màu", image: "images/cv/week1/slide_02.jpg", notes: "Ghi chú cho slide 2 môn CV.", terms: { "Pixel": "Định nghĩa...", "RGB": "Định nghĩa..." } }
        ]
      }
    ]
  }
};