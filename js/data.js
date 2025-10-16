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
          },
          // SLIDE 16: C# CƠ BẢN - GENERICS
          {
            id: 16,
            title: "Trang 16: C# cơ bản - Generics",
            image: "images/game-dev/week1/slide_16.png",
            notes: "Generics cho phép lập trình viên trì hoãn việc chỉ định một hoặc nhiều kiểu dữ liệu cho đến khi class hoặc phương thức được khai báo và khởi tạo.\n\n" +
              "Nói cách khác, nó cho phép bạn viết một class hoặc phương thức có thể hoạt động với bất kỳ kiểu dữ liệu nào (ví dụ: `int`, `string`, hoặc một class tự định nghĩa như `AClass`) mà không cần viết lại code cho từng kiểu.\n\n" +
              "Ví dụ trên slide minh họa cách tạo một class `GenericList<T>` có thể chứa một danh sách các số nguyên (`int`), chuỗi (`string`), hoặc các đối tượng `AClass`.",
            terms: {
              "Generics": "Một tính năng cho phép viết code linh hoạt, tái sử dụng và an toàn về kiểu (type-safe) bằng cách cho phép các class, interface và phương thức hoạt động với một 'kiểu dữ liệu giữ chỗ' (placeholder type). Kiểu dữ liệu thực tế sẽ được chỉ định khi code được sử dụng.",
              "Instantiated (Khởi tạo đối tượng)": "Quá trình tạo ra một 'thể hiện' (instance) cụ thể của một class trong bộ nhớ. Thường được thực hiện bằng từ khóa `new`."
            }
          },
          // SLIDE 17: C# CƠ BẢN - PROPERTIES
          {
            id: 17,
            title: "Trang 17: C# cơ bản - Properties",
            image: "images/game-dev/week1/slide_17.png",
            notes: "Properties (Thuộc tính) là các 'lối tắt' cú pháp cho các phương thức getter và setter thường đi kèm với các biến của class. Chúng giúp kiểm soát việc truy cập vào một biến và có thể được dùng để tạo ra một biến chỉ đọc (read-only).\n\n" +
              "- <b>Phiên bản ngắn gọn (auto-implemented property):</b> `public double Seconds { get; set; }` tự động tạo ra một biến private ẩn.\n" +
              "- <b>Phiên bản đầy đủ:</b> Cho phép bạn thêm logic tùy chỉnh vào bên trong `get` (để trả về giá trị) và `set` (để gán giá trị mới, thông qua từ khóa `value`).\n" +
              "- Có thể sử dụng các access modifier (ví dụ: `private`) trên `get` hoặc `set` để hạn chế quyền truy cập.",
            terms: {
              "Property (Thuộc tính)": "Một thành viên của class đóng vai trò trung gian để truy cập vào một trường dữ liệu private. Nó bao gồm các khối lệnh `get` (để đọc giá trị) và `set` (để ghi giá trị).",
              "Getter": "Phương thức hoặc khối lệnh `get` trong một property, dùng để truy xuất giá trị của một biến.",
              "Setter": "Phương thức hoặc khối lệnh `set` trong một property, dùng để gán một giá trị mới cho một biến.",
              "Access Modifiers (e.g., private, public)": "Các từ khóa dùng để quy định mức độ truy cập (ai có thể thấy và sử dụng) của các thành viên trong một class."
            }
          },
          // SLIDE 18: C# CƠ BẢN - STRUCTS
          {
            id: 18,
            title: "Trang 18: C# cơ bản - Structs",
            image: "images/game-dev/week1/slide_18.png",
            notes: "Struct trong C# là một cấu trúc dữ liệu:\n" +
              "- Giống như một class nhưng nó là một <b>kiểu tham trị (value type)</b>.\n" +
              "- Không hỗ trợ kế thừa.\n" +
              "- Constructor mặc định sẽ khởi tạo tất cả các biến về giá trị 0 hoặc null. Bạn không thể gán giá trị cho chúng trong constructor mặc định trừ khi chúng là `const`.\n" +
              "- Không yêu cầu khởi tạo đối tượng trên vùng nhớ heap.\n" +
              "- Theo mặc định, struct được truyền theo giá trị (pass by value), trong khi class được truyền theo tham chiếu (pass by reference).",
            terms: {
              "Struct": "Một kiểu dữ liệu giá trị (value type) dùng để đóng gói một nhóm nhỏ các biến liên quan. Rất hữu ích cho các đối tượng nhẹ mà không cần đến các tính năng phức tạp của class như kế thừa.",
              "Heap": "Một vùng bộ nhớ được sử dụng cho việc cấp phát động. Các đối tượng của class (kiểu tham chiếu) được lưu trữ trên heap.",
              "Pass by value": "Khi một biến được truyền vào một phương thức, một bản sao của giá trị của biến đó được tạo ra. Mọi thay đổi trên bản sao bên trong phương thức không ảnh hưởng đến biến gốc.",
              "Pass by reference": "Khi một biến được truyền vào một phương thức, một tham chiếu (địa chỉ bộ nhớ) đến đối tượng gốc được truyền vào. Mọi thay đổi bên trong phương thức sẽ ảnh hưởng trực tiếp đến đối tượng gốc."
            }
          },
          // SLIDE 19: C# CƠ BẢN - ARRAYS, LISTS & DICTIONARIES
          {
            id: 19,
            title: "Trang 19: C# cơ bản - Mảng, List & Dictionary",
            image: "images/game-dev/week1/slide_19.png",
            notes: "C# có hai loại mảng chính: <b>mảng chữ nhật (rectangular)</b> và <b>mảng lởm chởm (jagged)</b>. Trong hầu hết các trường hợp, bạn sẽ sử dụng mảng chữ nhật vì nó hiệu quả hơn.\n\n" +
              "- <b>List</b> và <b>Dictionary</b> là các cấu trúc dữ liệu generic (giống như trong Java).\n" +
              "  - <b>List<T>:</b> Một danh sách động có thể thêm, xóa, sắp xếp các phần tử.\n" +
              "  - <b>Dictionary<TKey, TValue>:</b> Một bộ sưu tập các cặp key-value, cho phép truy xuất giá trị nhanh chóng thông qua key.",
            terms: {
              "Rectangular Array (Mảng chữ nhật)": "Một mảng đa chiều trong đó mỗi 'hàng' có cùng một số lượng 'cột'. Ví dụ: `int[,] a = new int[2,3];`.",
              "Jagged Array (Mảng lởm chởm)": "Một mảng của các mảng, trong đó mỗi mảng con có thể có một độ dài khác nhau. Ví dụ: `int[][] a = new int[3][];`.",
              "List<T>": "Một lớp generic trong .NET đại diện cho một danh sách các đối tượng có thể được truy cập bằng chỉ mục. Kích thước của nó có thể thay đổi động.",
              "Dictionary<TKey, TValue>": "Một lớp generic đại diện cho một bộ sưu tập các cặp khóa-giá trị, cung cấp khả năng tra cứu rất nhanh."
            }
          },
          // SLIDE 20: C# CƠ BẢN - ENUMERATIONS
          {
            id: 20,
            title: "Trang 20: C# cơ bản - Enumerations",
            image: "images/game-dev/week1/slide_20.png",
            notes: "Enumerations (hay Enums) được sử dụng thường xuyên trong game để chỉ định các trạng thái khác nhau của trò chơi (ví dụ: màn hình chờ, đang chơi, tạm dừng, v.v.).\n\n" +
              "- Enum thường được sử dụng kết hợp với câu lệnh `switch`.\n" +
              "- Mỗi thành viên của enum có một giá trị số nguyên (integral value) tương ứng, theo thứ tự khai báo và bắt đầu từ 0.\n" +
              "- Bạn có thể gán giá trị tường minh cho các thành viên của enum.\n" +
              "- Giá trị số nguyên của một thành viên enum có thể được truy xuất bằng cách ép kiểu tường minh (explicit casting).",
            terms: {
              "Enumeration (Enum)": "Một kiểu dữ liệu đặc biệt cho phép một biến là một tập hợp các hằng số được đặt tên trước. Nó giúp làm cho code dễ đọc và dễ bảo trì hơn bằng cách sử dụng tên thay vì các con số 'ma thuật' (magic numbers)."
            }
          },
          // Dán 5 khối mã dưới đây vào sau slide có id: 20

          // SLIDE 21: C# CƠ BẢN - CÁC VÒNG LẶP
          {
            id: 21,
            title: "Trang 21: C# cơ bản - Các vòng lặp",
            image: "images/game-dev/week1/slide_21.png",
            notes: "C# có nhiều câu lệnh lặp (iteration statements), tương tự như Java:\n\n" +
              "- <b>for:</b> Lặp lại một khối lệnh một số lần xác định, thường dùng với một biến đếm.\n" +
              "- <b>foreach:</b> Duyệt qua tất cả các phần tử trong một bộ sưu tập (như mảng hoặc List) mà không cần dùng đến chỉ số (index).\n" +
              "- <b>while:</b> Lặp lại một khối lệnh chừng nào một điều kiện còn đúng. Điều kiện được kiểm tra trước mỗi lần lặp.\n" +
              "- <b>do-while:</b> Tương tự như 'while', nhưng khối lệnh được thực thi ít nhất một lần trước khi điều kiện được kiểm tra.\n\n" +
              "Ngoài ra, C# cũng có các câu lệnh <b>break</b> (để thoát khỏi vòng lặp), <b>continue</b> (để bỏ qua lần lặp hiện tại và đi đến lần tiếp theo), và <b>goto</b>.",
            terms: {
              "Iteration (Sự lặp lại)": "Hành động thực hiện một khối mã nguồn nhiều lần. Các vòng lặp là công cụ chính để thực hiện iteration.",
              "foreach loop": "Một loại vòng lặp được thiết kế để duyệt qua từng phần tử của một bộ sưu tập một cách đơn giản và dễ đọc.",
              "break": "Một câu lệnh dùng để chấm dứt ngay lập tức vòng lặp (for, foreach, while, do-while) hoặc câu lệnh switch.",
              "continue": "Một câu lệnh dùng để bỏ qua phần còn lại của lần lặp hiện tại và chuyển ngay sang lần lặp tiếp theo của vòng lặp."
            }
          },
          // SLIDE 22: C# CƠ BẢN - CÁC KHÁI NIỆM BỔ SUNG
          {
            id: 22,
            title: "Trang 22: C# cơ bản - Các khái niệm bổ sung",
            image: "images/game-dev/week1/slide_22.png",
            notes: "Một vài khái niệm bổ sung trong C#:\n\n" +
              "- <b>Comments (Chú thích):</b> Có 3 loại chính: `//` cho chú thích một dòng, `/* ... */` cho chú thích nhiều dòng, và `///` cho chú thích tài liệu XML.\n" +
              "- <b>Từ khóa 'is':</b> Dùng để kiểm tra xem một đối tượng có tương thích với một kiểu dữ liệu cho trước hay không.\n" +
              "- <b>Preprocessor directives (Chỉ thị tiền xử lý):</b> Các lệnh đặc biệt như `#if`, `#elif`, `#else`, `#endif` cho phép trình biên dịch bỏ qua một số dòng code nhất định khi xây dựng và thực thi. Rất hữu ích để viết code chỉ chạy trên một nền tảng cụ thể (ví dụ: Wii, Web) hoặc chỉ trong chế độ gỡ lỗi (DEBUG).",
            terms: {
              "Preprocessor Directive": "Một chỉ thị cho trình biên dịch, được xử lý trước khi quá trình biên dịch mã nguồn thực sự bắt đầu. Chúng thường được dùng để biên dịch có điều kiện (conditional compilation).",
              "is (keyword)": "Một toán tử trong C# dùng để kiểm tra kiểu của một đối tượng tại thời điểm chạy (runtime). Nó trả về `true` nếu đối tượng là một thể hiện của kiểu đó hoặc một kiểu dẫn xuất từ nó."
            }
          },
          // SLIDE 23: CHUYỂN TIẾP - SCRIPTING TRONG C# CHO UNITY3D
          {
            id: 23,
            title: "Trang 23: Chuyển tiếp - Scripting trong C# cho Unity3D",
            image: "images/game-dev/week1/slide_23.png",
            notes: "Kết thúc phần giới thiệu các khái niệm cơ bản của C#.\n\n" +
              "Phần tiếp theo sẽ tập trung vào cách viết script bằng C# để điều khiển các đối tượng và hành vi trong Unity3D.",
            terms: {}
          },
          // SLIDE 24: SCRIPTING CHO UNITY
          {
            id: 24,
            title: "Trang 24: Scripting cho Unity",
            image: "images/game-dev/week1/slide_24.png",
            notes: "Scripting là một phần thiết yếu của việc làm game, nó quyết định cách người chơi tương tác, cách các yếu tố trong game hoạt động, tạo hiệu ứng đồ họa, AI của kẻ thù, vật lý, v.v.\n\n" +
              "Trong Unity3D 5.1, có thể viết script bằng 3 ngôn ngữ: C#, UnityScript (Javascript) và Boo. Chúng ta sẽ <b>chỉ sử dụng C#</b> trong môn học này.\n\n" +
              "- <b>Game Object:</b> Là mỗi thực thể hiện diện trong một Màn chơi (Scene) của game.\n" +
              "- <b>Components:</b> Mỗi Game Object chứa một bộ sưu tập các Components (ví dụ: đèn, vùng va chạm, animation...).\n" +
              "- <b>Scripts:</b> Có thể được xem như một loại component hành vi (behaviour component) và cần phải được <b>gắn (attached)</b> vào một Game Object để hoạt động.",
            terms: {
              "Scripting": "Quá trình viết mã nguồn (script) để định nghĩa hành vi, logic và các sự kiện trong một môi trường phần mềm, chẳng hạn như một game engine.",
              "Game Object": "Trong Unity, đây là đối tượng cơ bản nhất trong một Scene. Mọi thứ bạn thấy và tương tác trong game đều là hoặc được gắn vào một Game Object.",
              "Component": "Các khối xây dựng chức năng trong Unity. Mỗi component cung cấp một tính năng cụ thể cho một Game Object (ví dụ: `Transform` để xác định vị trí, `Rigidbody` để xử lý vật lý).",
              "Scene": "Trong Unity, đây là một màn chơi hoặc một cấp độ của game. Nó chứa tất cả các Game Objects, môi trường và giao diện người dùng cho phần đó của trò chơi."
            }
          },
          // SLIDE 25: CẤU TRÚC CỦA MỘT SCRIPT
          {
            id: 25,
            title: "Trang 25: Cấu trúc của một Script",
            image: "images/game-dev/week1/slide_25.png",
            notes: "Một Game Object có thể chứa nhiều script. Lý tưởng nhất, mỗi script nên đảm nhận một hành vi cụ thể của đối tượng.\n\n" +
              "Khi tạo một C# Script mới từ trình soạn thảo Unity, mã nguồn ban đầu sẽ có cấu trúc như sau:\n" +
              "- Kế thừa từ lớp <b>MonoBehaviour</b>. Đây là lớp cơ sở cho tất cả các script trong Unity.\n" +
              "- Phương thức <b>Start():</b> Được gọi một lần duy nhất khi script được kích hoạt, thường dùng cho việc khởi tạo.\n" +
              "- Phương thức <b>Update():</b> Được gọi một lần trong mỗi khung hình (frame). Đây là nơi chứa hầu hết logic của game.\n\n" +
              "<b>Lưu ý quan trọng:</b> Script trong Unity <b>không có constructor!</b> Bạn không được thêm bất kỳ constructor nào. Unity sẽ tự tạo đối tượng cho bạn trước khi game bắt đầu.",
            terms: {
              "MonoBehaviour": "Lớp cơ sở mà mọi script trong Unity phải kế thừa từ đó nếu muốn được gắn vào một Game Object và tương tác với game engine.",
              "Start()": "Một phương thức đặc biệt của MonoBehaviour được Unity tự động gọi một lần trong suốt vòng đời của script, sau khi các đối tượng đã được tạo nhưng trước khi vòng lặp Update() đầu tiên bắt đầu.",
              "Update()": "Một phương thức đặc biệt của MonoBehaviour được Unity tự động gọi ở mỗi khung hình. Logic game chính, như di chuyển và xử lý input, thường được đặt ở đây.",
              "Frame (Khung hình)": "Một hình ảnh tĩnh duy nhất trong một chuỗi các hình ảnh tạo nên một video hoặc chuyển động trong game. Tốc độ khung hình (FPS - Frames Per Second) đo lường số lượng khung hình được hiển thị mỗi giây."
            }
          },

          // Dán 5 khối mã dưới đây vào sau slide có id: 25

          // SLIDE 26: CÁC HÀM SỰ KIỆN (EVENT FUNCTIONS) - PHẦN 1
          {
            id: 26,
            title: "Trang 26: Các hàm sự kiện (Event Functions) - Phần 1",
            image: "images/game-dev/week1/slide_26.png",
            notes: "Unity điều khiển các script bằng cách gọi một tập hợp các hàm được xác định trước, gọi là <b>Event Functions</b> (Hàm sự kiện). Dưới đây là các hàm phổ biến nhất:\n\n" +
              "<b>Khởi tạo (Initialization):</b>\n" +
              "- <b>Awake():</b> Hàm đầu tiên được gọi khi scene được tải, chỉ được gọi một lần nếu game object đang 'active'.\n" +
              "- <b>Start():</b> Được gọi trước frame đầu tiên, chỉ được gọi một lần nếu script (component) đang 'enabled'.\n\n" +
              "<b>Các sự kiện cập nhật thông thường (Regular Update Events):</b>\n" +
              "- <b>FixedUpdate():</b> Thường được gọi thường xuyên hơn `Update()`. Dùng cho các tính toán vật lý. Được gọi độc lập với tốc độ khung hình (framerate).\n" +
              "- <b>Update():</b> Được gọi ở mỗi khung hình. Dùng cho logic game chính.\n" +
              "- <b>LateUpdate():</b> Được gọi một lần mỗi khung hình, sau khi `Update()` đã kết thúc. Hữu ích cho các hành vi cần chạy sau cùng, ví dụ như camera đi theo người chơi.",
            terms: {
              "Event Function": "Các phương thức đặc biệt trong một script MonoBehaviour mà Unity tự động gọi tại các thời điểm cụ thể trong vòng đời của game (ví dụ: khi bắt đầu, ở mỗi khung hình, khi có va chạm...).",
              "Awake()": "Được gọi khi một thể hiện của script được tải. Thường dùng để khởi tạo các tham chiếu giữa các script và các thiết lập ban đầu.",
              "FixedUpdate()": "Được gọi theo một tần suất cố định (ví dụ: 50 lần/giây), không phụ thuộc vào tốc độ khung hình. Đây là nơi lý tưởng để xử lý các logic liên quan đến vật lý (Rigidbody).",
              "LateUpdate()": "Được gọi sau khi tất cả các hàm Update() đã được thực thi. Thường được sử dụng cho các logic cần đảm bảo đã xử lý xong chuyển động, ví dụ như camera theo sau nhân vật.",
              "Time.deltaTime": "Khoảng thời gian (tính bằng giây) đã trôi qua để hoàn thành khung hình cuối cùng. Thường được nhân với các giá trị chuyển động trong `Update()` để làm cho chuyển động mượt mà và độc lập với tốc- độ khung hình."
            }
          },
          // SLIDE 27: CÁC HÀM SỰ KIỆN (EVENT FUNCTIONS) - PHẦN 2
          {
            id: 27,
            title: "Trang 27: Các hàm sự kiện (Event Functions) - Phần 2",
            image: "images/game-dev/week1/slide_27.png",
            notes: "Tiếp tục với các hàm sự kiện phổ biến khác:\n\n" +
              "<b>Sự kiện GUI (Giao diện người dùng):</b>\n" +
              "- <b>OnGUI():</b> Dùng cho các chức năng của giao diện người dùng đồ họa (Legacy GUI system).\n" +
              "- <b>OnMouseDown(), OnMouseEnter(), OnMouseOver():</b> Dùng cho các sự kiện chuột liên quan đến GUI Components.\n\n" +
              "<b>Sự kiện Vật lý (Physics Events):</b>\n" +
              "- <b>OnCollisionEnter(), OnCollisionStay(), OnCollisionExit():</b> Dành cho các va chạm với các <b>Colliders</b>.\n" +
              "- <b>OnTriggerEnter(), OnTriggerStay(), OnTriggerExit():</b> Dành cho các va chạm với các <b>Triggers</b>.",
            terms: {
              "OnCollisionEnter()": "Được gọi khi một Collider/Rigidbody bắt đầu chạm vào một Collider/Rigidbody khác.",
              "OnTriggerEnter()": "Được gọi khi một Collider đi vào một Collider khác được đánh dấu là 'Trigger'. Trigger dùng để phát hiện sự hiện diện mà không gây ra va chạm vật lý thực sự.",
              "Execution Order (Thứ tự thực thi)": "Thứ tự cụ thể mà Unity gọi các hàm sự kiện khác nhau (Awake, Start, FixedUpdate, Update...). Việc hiểu rõ thứ tự này rất quan trọng để tránh các lỗi logic."
            }
          },
          // SLIDE 28: BIẾN TRONG SCRIPT
          {
            id: 28,
            title: "Trang 28: Biến trong Script",
            image: "images/game-dev/week1/slide_28.png",
            notes: "Khi bạn khai báo một biến là <b>public</b> trong một script, nó sẽ tự động xuất hiện trong cửa sổ <b>Inspector</b> của Unity Editor.\n\n" +
              "Điều này cho phép bạn thay đổi giá trị của biến trực tiếp từ trình soạn thảo mà không cần sửa code.\n\n" +
              "<b>Quy tắc ưu tiên:</b>\n" +
              "- Giá trị bạn thiết lập trong <b>Editor</b> sẽ được ưu tiên hơn và ghi đè lên giá trị bạn khai báo trong code.\n" +
              "- Tuy nhiên, bạn có thể ghi đè lại giá trị của Editor bằng cách gán một giá trị mới cho biến đó bên trong các hàm <b>Awake()</b> hoặc <b>Start()</b>.",
            terms: {
              "public (keyword)": "Một access modifier. Khi một biến của MonoBehaviour được khai báo là 'public', nó sẽ được hiển thị và có thể chỉnh sửa được trong Inspector của Unity.",
              "Inspector": "Một cửa sổ trong Unity Editor hiển thị thông tin chi tiết về Game Object hoặc asset đang được chọn. Đây là nơi bạn có thể xem và chỉnh sửa các component và thuộc tính của chúng."
            }
          },
          // SLIDE 29: MẢNG TRONG SCRIPT
          {
            id: 29,
            title: "Trang 29: Mảng trong Script",
            image: "images/game-dev/week1/slide_29.png",
            notes: "Tương tự như các biến thông thường, khi bạn khai báo một mảng (Array) hoặc một List là <b>public</b>, nó cũng sẽ xuất hiện trong Inspector.\n\n" +
              "Inspector sẽ cung cấp một giao diện tiện lợi để bạn:\n" +
              "- Thay đổi kích thước (Size) của mảng.\n" +
              "- Gán các phần tử (Element) vào mảng, thường bằng cách kéo thả các Game Object hoặc các assets khác từ trong Editor vào các ô tương ứng.",
            terms: {
              "GameObject.FindGameObjectsWithTag()": "Một phương thức của Unity dùng để tìm và trả về một mảng chứa tất cả các Game Object trong Scene đang có một 'Tag' (thẻ) cụ thể."
            }
          },
          // SLIDE 30: CÁC COMPONENT CỦA MỘT GAME OBJECT
          {
            id: 30,
            title: "Trang 30: Các Component của một Game Object",
            image: "images/game-dev/week1/slide_30.png",
            notes: "Mỗi Game Object chứa một bộ sưu tập các component. Dưới đây là một số component phổ biến nhất:\n\n" +
              "- <b>Transform:</b> Xác định Vị trí, Xoay, và Tỷ lệ của một đối tượng. Đây là component duy nhất mà mọi Game Object đều bắt buộc phải có.\n" +
              "- <b>Collider:</b> Định nghĩa hình dạng vật lý của đối tượng cho việc xử lý va chạm.\n" +
              "- <b>Rigidbody:</b> Cho phép đối tượng được điều khiển bởi hệ thống vật lý của Unity (chịu tác động của trọng lực, lực đẩy...).\n" +
              "- <b>Scripts:</b> Các component chứa mã nguồn để định nghĩa hành vi.\n" +
              "- <b>Animator:</b> Giao diện để điều khiển hệ thống animation Mecanim.\n" +
              "- <b>AudioSource:</b> Đại diện cho các nguồn âm thanh trong không gian 3D.\n" +
              "- <b>Light:</b> Giao diện script cho các component ánh sáng.\n\n" +
              "Một script có thể có một game object hoặc một component làm biến. Bạn có thể gán các giá trị này trực tiếp từ Editor.",
            terms: {
              "Transform": "Một component lưu trữ vị trí, góc xoay và tỷ lệ của một Game Object. Mọi Game Object đều có một Transform.",
              "Collider": "Một component định nghĩa một hình dạng (như hình hộp, hình cầu) cho mục đích va chạm vật lý. Collider không tự di chuyển, chúng chỉ là hình dạng.",
              "Rigidbody": "Một component cho phép một Game Object được điều khiển bởi hệ thống vật lý của Unity. Để hai vật thể va chạm vật lý với nhau, cả hai phải có Collider và ít nhất một trong hai phải có Rigidbody.",
              "Animator": "Component dùng để gán các animation (chuyển động) cho một Game Object và điều khiển chúng thông qua các trạng thái và tham số."
            }
          },

          // Dán 5 khối mã dưới đây vào sau slide có id: 30

          // SLIDE 31: SCRIPTS VÀ GAME OBJECTS (1/4)
          {
            id: 31,
            title: "Trang 31: Scripts và Game Objects (1/4)",
            image: "images/game-dev/week1/slide_31.png",
            notes: "Từ bên trong một script, bạn có thể truy cập đến tất cả các component khác của cùng một Game Object.\n\n" +
              "<b>Cách truy cập các component:</b>\n" +
              "1. <b>Lối tắt cũ (Không còn dùng trong Unity 5+):</b> Trước đây, các component phổ biến như `transform`, `rigidbody`, `collider` có thể được truy cập trực tiếp như một biến. Điều này đã bị loại bỏ.\n" +
              "2. <b>Cách chung (Khuyên dùng):</b> Sử dụng phương thức generic `GetComponent<T>()`. Ví dụ: `GetComponent<Rigidbody>()` sẽ tìm và trả về component Rigidbody đầu tiên trên Game Object đó.\n" +
              "3. <b>Cách thay thế (Không khuyến khích):</b> Có thể dùng chuỗi để gọi `GetComponent()`, ví dụ: `GetComponent(\"Rigidbody\")`. Tuy nhiên, cách này kém hiệu quả hơn về mặt hiệu suất.",
            terms: {
              "GetComponent<T>()": "Phương thức quan trọng nhất để một script có thể 'giao tiếp' với các component khác trên cùng một Game Object. Nó tìm và trả về một tham chiếu đến component thuộc kiểu `T` được chỉ định."
            }
          },
          // SLIDE 32: SCRIPTS VÀ GAME OBJECTS (2/4)
          {
            id: 32,
            title: "Trang 32: Scripts và Game Objects (2/4)",
            image: "images/game-dev/week1/slide_32.png",
            notes: "Unity cung cấp nhiều biến thể của `GetComponent` để tìm kiếm component ở các đối tượng khác:\n\n" +
              "- <b>GetComponentInChildren<T>():</b> Trả về component kiểu `T` trên chính Game Object đó <b>hoặc</b> trên bất kỳ đối tượng con (children) nào của nó.\n" +
              "- <b>GetComponentInParent<T>():</b> Trả về component kiểu `T` trên chính Game Object đó <b>hoặc</b> trên bất kỳ đối tượng cha (parent) nào của nó.\n\n" +
              "Cũng có thể lấy nhiều hơn một component cùng lúc:\n" +
              "- <b>GetComponents<T>():</b> Trả về một <b>mảng</b> chứa <b>tất cả</b> các component kiểu `T` trên Game Object.\n" +
              "- <b>GetComponentsInChildren<T>():</b> Trả về một <b>mảng</b> chứa <b>tất cả</b> các component kiểu `T` trên Game Object đó và tất cả các con của nó.\n" +
              "- <b>GetComponentsInParent<T>():</b> Trả về một <b>mảng</b> chứa <b>tất cả</b> các component kiểu `T` trên Game Object đó và tất cả các cha của nó.",
            terms: {
              "Parent/Children (Cha/Con)": "Trong Unity, bạn có thể tạo ra một hệ thống phân cấp bằng cách kéo một Game Object vào một Game Object khác trong cửa sổ Hierarchy. Đối tượng bị kéo vào sẽ trở thành 'con' và đối tượng kia là 'cha'. Đối tượng con sẽ thừa hưởng các phép biến đổi (vị trí, xoay, tỷ lệ) từ cha của nó."
            }
          },
          // SLIDE 33: SCRIPTS VÀ GAME OBJECTS (3/4)
          {
            id: 33,
            title: "Trang 33: Scripts và Game Objects (3/4)",
            image: "images/game-dev/week1/slide_33.png",
            notes: "Thông thường, trong game sẽ có nhiều Game Object cùng loại (ví dụ: các đồng xu trong Mario, các điểm checkpoint trong game đua xe...).\n\n" +
              "Một cách hay để giữ cho các đối tượng này được tổ chức gọn gàng là đặt tất cả chúng làm <b>con (children)</b> của một Game Object rỗng chung.\n\n" +
              "Sau đó, có thể truy cập tất cả các đối tượng con này thông qua component <b>Transform</b> của đối tượng cha. Bằng cách lặp qua `transform` của đối tượng cha, bạn có thể lấy được `transform` của từng đối tượng con.",
            terms: {}
          },
          // SLIDE 34: SCRIPTS VÀ GAME OBJECTS (4/4)
          {
            id: 34,
            title: "Trang 34: Scripts và Game Objects (4/4)",
            image: "images/game-dev/week1/slide_34.png",
            notes: "Ví dụ này minh họa cách các script có thể tham chiếu và lấy component từ các Game Object khác nhau:\n\n" +
              "- <b>Dòng 6:</b> Khai báo một biến `player` kiểu `GameObject` để chứa tham chiếu đến đối tượng người chơi.\n" +
              "- <b>Dòng 9:</b> Khai báo một biến `playerHealth` để chứa tham chiếu đến script `PlayerHealth` nằm trên đối tượng người chơi.\n" +
              "- <b>Dòng 13:</b> Khai báo một biến `enemyHealth` để chứa tham chiếu đến script `EnemyHealth` nằm trên chính đối tượng kẻ thù này.\n\n" +
              "Trong hàm <b>Awake()</b> (được gọi một lần):\n" +
              "- <b>Dòng 20:</b> Tìm đối tượng người chơi trong Scene bằng Tag của nó.\n" +
              "- <b>Dòng 23:</b> Lấy component (script) `PlayerHealth` từ đối tượng người chơi vừa tìm được.\n" +
              "- <b>Dòng 26:</b> Lấy component (script) `EnemyHealth` từ chính Game Object này.",
            terms: {
              "GameObject.FindGameObjectWithTag()": "Một phương thức của Unity dùng để tìm và trả về Game Object đầu tiên trong Scene có 'Tag' (thẻ) được chỉ định. Đây là một cách hiệu quả để tìm các đối tượng quan trọng như 'Player'."
            }
          },
          // SLIDE 35: CÁC THAO TÁC VỚI GAME OBJECTS VÀ COMPONENTS
          {
            id: 35,
            title: "Trang 35: Các thao tác với Game Objects và Components",
            image: "images/game-dev/week1/slide_35.png",
            notes: "Các thao tác cơ bản để quản lý đối tượng và component tại thời điểm chạy (runtime):\n\n" +
              "<b>Hủy (Destroying):</b>\n" +
              "- `Destroy(obj, t)`: Hủy một đối tượng hoặc component. Tham số `t` (tùy chọn) là khoảng thời gian trì hoãn (tính bằng giây) trước khi hủy.\n" +
              "- `Destroy` không hủy ngay lập tức, nó chỉ 'đánh dấu' đối tượng để hủy. Việc hủy thực sự sẽ diễn ra vào cuối khung hình.\n\n" +
              "<b>Kích hoạt / Vô hiệu hóa (Activating / Deactivating) Game Objects:</b>\n" +
              "- `SetActive(bool value)`: Bật (`true`) hoặc tắt (`false`) toàn bộ một Game Object. Khi một Game Object bị tắt, tất cả các component của nó (renderer, collider, script...) cũng sẽ bị vô hiệu hóa.\n\n" +
              "<b>Bật / Tắt (Enabling / Disabling) Components:</b>\n" +
              "- `Behaviour.enabled = bool`: Bật (`true`) hoặc tắt (`false`) một component cụ thể (thường là script). Các component bị tắt sẽ không được gọi hàm `Update()`.",
            terms: {
              "Destroy()": "Một hàm cơ bản của Unity dùng để xóa một Game Object, một component, hoặc một asset khỏi Scene.",
              "SetActive()": "Phương thức của Game Object dùng để kích hoạt hoặc vô hiệu hóa nó. Các đối tượng bị vô hiệu hóa sẽ không được vẽ, không va chạm và các script trên đó sẽ không chạy.",
              "Behaviour.enabled": "Một thuộc tính của các component kế thừa từ `Behaviour` (như script, camera, light...). Thiết lập nó thành `false` sẽ vô hiệu hóa component đó mà không ảnh hưởng đến toàn bộ Game Object."
            }
          },

          // Dán 5 khối mã dưới đây vào sau slide có id: 35

          // SLIDE 36: TÊN VÀ TAG
          {
            id: 36,
            title: "Trang 36: Tên và Tag",
            image: "images/game-dev/week1/slide_36.png",
            notes: "Ngoài việc tham chiếu trực tiếp, Unity còn cho phép tìm kiếm Game Object bằng Tên hoặc Tag.\n\n" +
              "<b>Tìm theo Tên (Name):</b>\n" +
              "- `GameObject.Find(string name)`: Tìm và trả về Game Object đầu tiên có tên trùng khớp. Trả về `null` nếu không tìm thấy.\n" +
              "- <b>Cảnh báo hiệu suất:</b> Không nên sử dụng hàm này liên tục ở mỗi frame (ví dụ trong `Update()`). Thay vào đó, hãy gọi nó một lần ở `Start()` và lưu kết quả vào một biến.\n\n" +
              "<b>Tìm theo Tag:</b>\n" +
              "- Tag là một 'nhãn' bạn có thể định nghĩa và gán cho một hoặc nhiều Game Object để phân loại chúng.\n" +
              "- `GameObject.FindWithTag(string tag)`: Trả về một Game Object 'active' có tag tương ứng.\n" +
              "- `GameObject.FindGameObjectsWithTag(string tag)`: Trả về một <b>mảng</b> chứa tất cả các Game Object 'active' có tag tương ứng. Trả về một mảng rỗng nếu không tìm thấy.\n" +
              "- Lưu ý: Các hàm này là <b>static</b>, thuộc về chính lớp `GameObject`.",
            terms: {
              "Tag": "Một thuộc tính tham chiếu dạng chuỗi có thể được gán cho một hoặc nhiều Game Object. Tag rất hữu ích để xác định và nhóm các loại đối tượng (ví dụ: 'Player', 'Enemy', 'Coin').",
              "static (method)": "Một phương thức thuộc về chính class đó, không phải một thể hiện (instance) cụ thể của class. Bạn có thể gọi nó trực tiếp từ tên class (ví dụ: `GameObject.Find(...)`) mà không cần tạo đối tượng."
            }
          },
          // SLIDE 37: LAYER (1/4)
          {
            id: 37,
            title: "Trang 37: Layer (1/4) - Giới thiệu",
            image: "images/game-dev/week1/slide_37.png",
            notes: "Layer (Lớp) là một cơ chế mạnh mẽ để tổ chức và phân loại Game Object cho các mục đích cụ thể:\n\n" +
              "- <b>Rendering:</b> Cho phép Camera chỉ render (hiển thị) một phần của scene.\n" +
              "- <b>Raycasting:</b> Cho phép các tia vật lý (raycast) chỉ tương tác với hoặc bỏ qua một số loại đối tượng nhất định.\n" +
              "- <b>Lighting:</b> Cho phép các nguồn sáng chỉ chiếu sáng một số layer nhất định.\n" +
              "- <b>Collision:</b> Xác định các quy tắc va chạm giữa các nhóm đối tượng.\n" +
              "- <b>Sorting:</b> Xác định thứ tự hiển thị của các Sprite (đối tượng 2D).\n\n" +
              "Để gán một Game Object vào một layer, chỉ cần chọn layer ở menu thả xuống trên cùng của cửa sổ Inspector.",
            terms: {
              "Layer": "Một cơ chế trong Unity dùng để nhóm các Game Object. Layer chủ yếu được sử dụng bởi Camera để chỉ render một phần của scene, và bởi hệ thống vật lý để kiểm soát va chạm.",
              "Raycasting": "Quá trình 'bắn' ra một tia ảo theo một hướng nhất định để phát hiện xem nó có va chạm với Collider nào trên đường đi hay không. Rất hữu ích cho việc xác định tầm nhìn, bắn súng, tương tác với đối tượng..."
            }
          },
          // SLIDE 38: LAYER (2/4)
          {
            id: 38,
            title: "Trang 38: Layer (2/4) - Tạo Layer mới",
            image: "images/game-dev/week1/slide_38.png",
            notes: "Unity cung cấp một số layer mặc định (Default, TransparentFX, Ignore Raycast, Water, UI), nhưng bạn có thể tạo các layer mới của riêng mình.\n\n" +
              "Để tạo hoặc chỉnh sửa layer, hãy đi tới menu <b>Edit → Project Settings → Tags and Layers</b>.",
            terms: {}
          },
          // SLIDE 39: LAYER (3/4)
          {
            id: 39,
            title: "Trang 39: Layer (3/4) - Culling Mask",
            image: "images/game-dev/week1/slide_39.png",
            notes: "Có thể chỉ định cho cả component Camera và Light rằng chúng sẽ ảnh hưởng đến những layer nào thông qua thuộc tính <b>Culling Mask</b>.\n\n" +
              "- <b>Đối với Camera:</b> Culling Mask quyết định những layer nào sẽ được camera đó render (vẽ lên màn hình).\n" +
              "- <b>Đối với Light:</b> Culling Mask quyết định những layer nào sẽ được nguồn sáng đó chiếu sáng.\n\n" +
              "Theo mặc định, tất cả các layer đều được render và chiếu sáng.",
            terms: {
              "Culling Mask": "Một thuộc tính trên Camera và Light cho phép bạn chọn lọc các layer mà chúng sẽ tương tác. 'Culling' có nghĩa là loại bỏ hoặc bỏ qua một cái gì đó."
            }
          },
          // SLIDE 40: LAYER (4/4)
          {
            id: 40,
            title: "Trang 40: Layer (4/4) - Ma trận Va chạm",
            image: "images/game-dev/week1/slide_40.png",
            notes: "Một trong những ứng dụng mạnh mẽ nhất của Layer là kiểm soát va chạm (Layer-based collision detection).\n\n" +
              "Bạn có thể chỉ định chính xác những nhóm đối tượng nào có thể va chạm với nhau bằng cách bật/tắt các va chạm giữa các layer tương ứng của chúng trong một ma trận gọi là <b>Layer Collision Matrix</b>.\n\n" +
              "Ma trận này có thể được tìm thấy trong <b>Physics 2D Manager</b> (cho game 2D) hoặc <b>Physics Manager</b> (cho game 3D) bằng cách đi tới menu <b>Edit → Project Settings</b>.",
            terms: {
              "Layer Collision Matrix": "Một ma trận dạng bảng trong cài đặt vật lý của Unity, cho phép bạn bật hoặc tắt khả năng va chạm giữa các cặp layer khác nhau."
            }
          },

          // Dán 6 khối mã dưới đây vào sau slide có id: 40

          // SLIDE 41: PREFAB ASSETS
          {
            id: 41,
            title: "Trang 41: Prefab Assets",
            image: "images/game-dev/week1/slide_41.png",
            notes: "<b>Prefab</b> là một loại asset (tài sản) dùng để lưu trữ một Game Object hoàn chỉnh với tất cả các component và thuộc tính của nó.\n\n" +
              "- Nó hoạt động như một <b>khuôn mẫu (template)</b> cho Game Object đó.\n" +
              "- Mọi thay đổi bạn thực hiện trên Prefab asset sẽ ngay lập tức được phản ánh trên tất cả các 'thể hiện' (instances) của nó trong Scene.\n" +
              "- Có thể ghi đè (override) các component và thiết lập cho từng thể hiện một cách riêng lẻ.\n\n" +
              "Một prefab có thể được 'khởi tạo' (instantiated) một cách tự động tại thời điểm chạy bằng hàm `Instantiate()`.",
            terms: {
              "Prefab": "Một Game Object đã được cấu hình sẵn và lưu lại như một Asset. Prefab cho phép bạn tạo, cấu hình và lưu trữ một Game Object cùng với tất cả các component, giá trị thuộc tính và các Game Object con của nó như một tài sản có thể tái sử dụng.",
              "Instantiate()": "Hàm của Unity dùng để tạo ra một bản sao (clone) của một đối tượng tại thời điểm chạy. Thường được dùng để 'đẻ' ra các đối tượng từ Prefab (ví dụ: tạo viên đạn, kẻ thù...)."
            }
          },
          // SLIDE 42: INVOKE - LÊN LỊCH CÁC LỆNH GỌI HÀM
          {
            id: 42,
            title: "Trang 42: Invoke - Lên lịch các lệnh gọi hàm",
            image: "images/game-dev/week1/slide_42.png",
            notes: "Họ các phương thức <b>Invoke</b> cho phép bạn lên lịch để gọi một hàm sau một khoảng thời gian trễ. Chỉ các hàm có kiểu trả về là `void` và không có tham số mới có thể được gọi bằng cách này.\n\n" +
              "- <b>Invoke(string methodName, float time):</b> Gọi hàm `methodName` sau `time` giây.\n" +
              "- <b>InvokeRepeating(string methodName, float time, float repeatRate):</b> Gọi hàm `methodName` lần đầu sau `time` giây, sau đó lặp lại việc gọi hàm đó sau mỗi `repeatRate` giây.\n" +
              "- <b>CancelInvoke():</b> Hủy tất cả các lệnh gọi `Invoke` trên script (MonoBehaviour) này.\n" +
              "- <b>CancelInvoke(string methodName):</b> Chỉ hủy các lệnh gọi `Invoke` đến hàm `methodName`.",
            terms: {
              "Invoke": "Một cơ chế đơn giản trong Unity để thực thi một phương thức sau một khoảng thời gian trễ. Hữu ích cho các hành động đơn giản, hẹn giờ."
            }
          },
          // SLIDE 43: COROUTINES (1/2)
          {
            id: 43,
            title: "Trang 43: Coroutines (1/2) - Giới thiệu",
            image: "images/game-dev/week1/slide_43.png",
            notes: "<b>Coroutine</b> là một hàm có khả năng tạm dừng việc thực thi và trả lại quyền điều khiển cho Unity, sau đó tiếp tục lại từ nơi nó đã dừng ở một frame sau đó.\n\n" +
              "- Nó được bắt đầu bằng cách gọi `StartCoroutine()`.\n" +
              "- Phương thức được gọi phải có kiểu trả về là <b>IEnumerator</b>.\n" +
              "- Nó có thể trả về (tạm dừng) bằng từ khóa <b>yield return</b>.\n" +
              "- Ở lần cập nhật (update) tiếp theo, hàm sẽ tiếp tục thực thi từ sau điểm `yield return`.\n" +
              "- Coroutine kết thúc khi phương thức chạy xong, hoặc khi `StopCoroutine()` được gọi.",
            terms: {
              "Coroutine": "Một loại hàm đặc biệt trong Unity cho phép bạn thực hiện các tác vụ kéo dài qua nhiều frame. Nó giống như một hàm có thể 'tạm dừng' và 'tiếp tục' mà không chặn luồng chính của game.",
              "IEnumerator": "Một interface trong .NET định nghĩa hành vi cho việc lặp qua một bộ sưu tập. Trong Unity, các hàm coroutine phải trả về kiểu này.",
              "yield return": "Câu lệnh được sử dụng bên trong một coroutine để tạm dừng việc thực thi. Giá trị trả về sau 'yield return' sẽ quyết định khi nào coroutine sẽ tiếp tục (ví dụ: `yield return null` sẽ tiếp tục ở frame tiếp theo, `yield return new WaitForSeconds(3f)` sẽ tiếp tục sau 3 giây)."
            }
          },
          // SLIDE 44: COROUTINES (2/2)
          {
            id: 44,
            title: "Trang 44: Coroutines (2/2) - Ví dụ",
            image: "images/game-dev/week1/slide_44.png",
            notes: "Ví dụ này minh họa một Coroutine tên là `Movement` dùng để di chuyển một đối tượng đến một vị trí `target` một cách mượt mà.\n\n" +
              "- Vòng lặp `while` sẽ tiếp tục chạy chừng nào khoảng cách giữa vị trí hiện tại và vị trí mục tiêu còn lớn hơn 0.05f.\n" +
              "- Bên trong vòng lặp, `Vector3.Lerp` được dùng để tính toán vị trí mới, di chuyển một chút về phía `target` ở mỗi frame.\n" +
              "- `yield return null;` tạm dừng coroutine và sẽ tiếp tục lại ở frame tiếp theo, tạo ra hiệu ứng di chuyển mượt mà qua nhiều frame.",
            terms: {
              "Vector3.Lerp(a, b, t)": "Hàm nội suy tuyến tính (Linear Interpolation) trả về một điểm nằm trên đường thẳng giữa hai điểm `a` và `b`. Tham số `t` là một giá trị từ 0 đến 1, quyết định vị trí của điểm trả về (0 là tại `a`, 1 là tại `b`)."
            }
          },
          // SLIDE 45: CÁC THÓI QUEN LẬP TRÌNH TỐT
          {
            id: 45,
            title: "Trang 45: Các thói quen lập trình tốt",
            image: "images/game-dev/week1/slide_45.png",
            notes: "Các nguyên tắc để giữ cho mã nguồn dễ bảo trì, dễ mở rộng và dễ đọc:\n\n" +
              "- <b>Nguyên tắc Đơn trách nhiệm (Single Responsibility):</b> Mỗi class chỉ nên chịu trách nhiệm cho một nhiệm vụ duy nhất. Thay vì một class `Player.cs` làm mọi thứ, hãy tách nó ra thành `PlayerInput.cs`, `PlayerWeapons.cs`, `PlayerInventory.cs`...\n" +
              "- <b>Nguyên tắc Đảo ngược sự phụ thuộc (Dependency Inversion):</b> Nếu class A phụ thuộc vào B, thì B nên là một interface hoặc một abstract class.\n" +
              "- <b>Module hóa (Modularization):</b> Các hành vi độc lập nên được đặt trong các hàm hoặc thậm chí các class riêng biệt.",
            terms: {
              "Single Responsibility Principle": "Một nguyên tắc thiết kế phần mềm phát biểu rằng mỗi module, class, hoặc hàm chỉ nên có trách nhiệm đối với một phần chức năng duy nhất.",
              "Dependency Inversion Principle": "Một nguyên tắc thiết kế phần mềm phát biểu rằng các module cấp cao không nên phụ thuộc vào các module cấp thấp. Cả hai nên phụ thuộc vào các 'trừu tượng' (abstractions, ví dụ như interface)."
            }
          },
          // SLIDE 46: CHUYỂN TIẾP - CÂU HỎI & DEMO LAB
          {
            id: 46,
            title: "Trang 46: Chuyển tiếp - Câu hỏi & Demo Lab",
            image: "images/game-dev/week1/slide_46.png",
            notes: "Kết thúc phần lý thuyết về Scripting trong C# cho Unity.\n\n" +
              "Phần cuối cùng sẽ là các câu hỏi kiểm tra và xem trước nội dung buổi thực hành (Lab).",
            terms: {}
          },

          // ... slide 47 (tổng kết) sẽ nằm ở đây ...


          // Thêm vào cuối mảng slides của Tuần 1
          {
            id: 47, // Giả sử đây là slide cuối cùng của tuần
            title: "Trang 47: Cảm ơn & Tổng kết thuật ngữ",
            image: "images/game-dev/week1/slide_47.png", // Bạn cần có ảnh cho slide này
            notes: "Cảm ơn bạn đã theo dõi bài giảng Tuần 1. Dưới đây là danh sách tổng hợp các thuật ngữ quan trọng đã xuất hiện trong tuần này để bạn tiện ôn tập.",
            terms: {} // Để trống, JS sẽ tự động điền vào
          }
          // ... và tiếp tục với các slide còn lại
        ]
      }, // Dấu phẩy ngăn cách các tuần
      {
        title: "Tuần 2: 3D Games and User Input",
        slides: [
          {
            id: 1,
            title: "Trang 1: Bìa - 3D Games and User Input",
            image: "images/game-dev/week2/slide_1.png",
            notes: "Bài giảng 2: Game 3D và Tương tác người dùng (User Input).\n\nTuần này sẽ tập trung vào các khái niệm toán học cơ bản trong game và cách quản lý các tín hiệu đầu vào từ người chơi.",
            terms: {}
          },
          {
            id: 2,
            title: "Trang 2: Đề cương bài giảng",
            image: "images/game-dev/week2/slide_2.png",
            notes: "Nội dung chính của bài giảng Tuần 2 bao gồm 3 phần:\n\n1. <b>Toán học trong Game (Math in Games)</b>.\n2. <b>Quản lý Tương tác người dùng (Managing Player Input)</b>.\n3. <b>Câu hỏi ôn tập và Xem trước buổi thực hành</b>.",
            terms: {}
          },
          {
            id: 3,
            title: "Trang 3: Chuyển tiếp - Toán học trong Game",
            image: "images/game-dev/week2/slide_3.png",
            notes: "Chuẩn bị vào phần đầu tiên: Các khái niệm toán học cơ bản được ứng dụng trong lập trình game.",
            terms: {}
          },
          {
            id: 4,
            title: "Trang 4: 2D Vectors",
            image: "images/game-dev/week2/slide_4.png",
            notes: "Vector là một đối tượng hình học có <b>độ lớn (magnitude)</b> và <b>hướng (direction)</b>.\n\nVector có thể được dùng để biểu diễn:\n- Một <b>điểm (point)</b> trong không gian.\n- Một <b>hướng (direction)</b> kèm theo một <b>độ lớn (magnitude)</b>.\n\nTrong Unity, các vector 2D có nhiều thuộc tính và phương thức hữu ích, có thể tham khảo thêm tại tài liệu của Unity.",
            terms: {
              "Vector": "Một đại lượng toán học có cả độ lớn và hướng. Trong lập trình game, nó thường được dùng để biểu diễn vị trí, vận tốc, và lực.",
              "Magnitude (Độ lớn)": "Độ dài của một vector, thường được tính bằng căn bậc hai của tổng bình phương các thành phần của nó. Nó biểu thị 'cường độ' của vector (ví dụ: tốc độ, độ lớn của lực).",
              "Direction (Hướng)": "Hướng mà vector đang trỏ tới trong không gian.",
              "Left Hand Rule Coordinates": "Hệ tọa độ quy tắc bàn tay trái. Trong hệ tọa độ này (được dùng bởi Unity), nếu bạn xòe bàn tay trái, ngón cái chỉ theo trục X dương, ngón trỏ chỉ theo trục Y dương, thì ngón giữa sẽ chỉ theo trục Z dương."
            }
          },
          {
            id: 5,
            title: "Trang 5: 2D Vectors & Hình học cơ bản",
            image: "images/game-dev/week2/slide_5.png",
            notes: "Vector 2D được cấu tạo bởi hai thành phần (x, y). Với các vector bắt đầu từ gốc tọa độ (0,0), chúng biểu diễn khoảng cách từ gốc dọc theo trục X và Y.\n\nĐộ dài (hay độ lớn - magnitude) của một vector được xác định bởi norm của nó, tính theo công thức Pythagoras: `magnitude = ||vec|| = sqrt(x² + y²)`.\nTrong Unity, giá trị này có thể được truy cập dễ dàng thông qua thuộc tính `.magnitude`.\n\n<b>Ví dụ:</b> Một vector có thể biểu diễn tốc độ di chuyển của một vật thể. Nếu vector là (2, 5), vật thể đang di chuyển 2 đơn vị/giây theo trục X và 5 đơn vị/giây theo trục Y. Độ lớn của vector này là `sqrt(2² + 5²) = sqrt(29) ≈ 5.385`, đây chính là tốc độ tuyến tính của vật thể.",
            terms: {
              "Vector2": "Một struct trong Unity dùng để biểu diễn các vector và điểm trong không gian 2D. Nó chứa hai thành phần public là `x` và `y`.",
              "magnitude (thuộc tính)": "Một thuộc tính của các kiểu Vector (Vector2, Vector3...) trong Unity, trả về độ dài của vector đó."
            }
          },

          // Dán 5 khối mã này vào sau slide có id: 5 của Tuần 2

          // SLIDE 6: CÁC PHÉP TOÁN TRÊN VECTOR (1/5)
          {
            id: 6,
            title: "Trang 6: Các phép toán trên Vector (1/5)",
            image: "images/game-dev/week2/slide_6.png",
            notes: "Tổng quan về các phép toán cơ bản trên vector:\n\n" +
              "- <b>Phép cộng (Addition):</b> Cộng từng thành phần tương ứng. Có tính giao hoán (`a + b = b + a`).\n" +
              "- <b>Phép trừ (Subtraction):</b> Trừ từng thành phần tương ứng. Không có tính giao hoán (`a - b != b - a`).\n" +
              "- <b>Nhân vô hướng (Scalar multiplication):</b> Nhân một số với từng thành phần của vector, làm thay đổi độ lớn của vector.\n" +
              "- <b>Phủ định (Negation):</b> Đảo ngược dấu của tất cả các thành phần, tạo ra một vector có cùng độ lớn nhưng ngược hướng.\n" +
              "- <b>Tích vô hướng (Dot product):</b> Một phép toán giữa hai vector cho kết quả là một số vô hướng (scalar).\n" +
              "- <b>Tích có hướng (Cross product):</b> Một phép toán giữa hai vector trong không gian 3D, cho kết quả là một vector mới vuông góc với cả hai vector ban đầu.",
            terms: {
              "Scalar (Vô hướng)": "Một đại lượng chỉ có độ lớn, không có hướng (ví dụ: một con số như 5, -10.5).",
              "Dot Product (Tích vô hướng)": "Phép toán `a · b = ||a|| ||b|| cos(θ)`. Kết quả là một số vô hướng. Rất hữu ích để tính góc giữa hai vector hoặc để 'chiếu' một vector lên một vector khác.",
              "Cross Product (Tích có hướng)": "Phép toán `a x b`. Chỉ xác định trong không gian 3D, kết quả là một vector mới vuông góc với mặt phẳng chứa hai vector ban đầu. Rất hữu ích để tìm vector pháp tuyến của một mặt phẳng."
            }
          },
          // SLIDE 7: CÁC PHÉP TOÁN TRÊN VECTOR (2/5)
          {
            id: 7,
            title: "Trang 7: Các phép toán trên Vector (2/5)",
            image: "images/game-dev/week2/slide_7.png",
            notes: "Minh họa hình học của các phép toán trên vector:\n\n" +
              "- <b>a + b:</b> Đặt gốc của vector b vào đầu của vector a. Vector tổng là vector nối từ gốc của a đến đầu của b (quy tắc hình bình hành).\n" +
              "- <b>a - b:</b> Tương đương với `a + (-b)`. Là vector nối từ đầu của b đến đầu của a.\n" +
              "- <b>ac:</b> Vector a được kéo dài hoặc co lại một lượng bằng c. Nếu c < 0, vector sẽ đổi hướng.\n" +
              "- <b>-a:</b> Vector a có cùng độ lớn nhưng ngược hướng.\n" +
              "- <b>ab (Dot product):</b> Biểu diễn hình chiếu của vector a lên vector b (hoặc ngược lại) nhân với độ dài của vector kia.\n" +
              "- <b>a x b (Cross product):</b> Vector kết quả vuông góc với cả a và b, tuân theo quy tắc bàn tay.",
            terms: {}
          },
          // SLIDE 8: CÁC PHÉP TOÁN TRÊN VECTOR (3/5)
          {
            id: 8,
            title: "Trang 8: Các phép toán trên Vector (3/5)",
            image: "images/game-dev/week2/slide_8.png",
            notes: "Trong Unity, bạn có thể sử dụng các toán tử thông thường (`+`, `-`, `*`, `/`) để thực hiện các phép toán cộng, trừ vector, và nhân/chia một vector với một số.\n\n" +
              "<b>Vector đơn vị (Unit vector):</b>\n" +
              "- Là một vector bất kỳ có độ dài (magnitude) bằng 1.\n" +
              "- Vector đơn vị thường được dùng để chỉ định một <b>hướng</b> mà không quan tâm đến độ lớn.\n" +
              "- Bất kỳ vector nào cũng có thể được 'chuẩn hóa' (normalizing) để trở thành một vector đơn vị bằng cách chia nó cho chính độ dài của nó.\n" +
              "- Trong Unity, có thể chuẩn hóa một vector bằng cách gọi hàm `Normalize()`.",
            terms: {
              "Unit Vector (Vector đơn vị)": "Một vector có độ lớn chính xác bằng 1. Nó rất hữu ích để biểu diễn một hướng thuần túy.",
              "Normalizing (Chuẩn hóa)": "Quá trình biến một vector có độ dài bất kỳ thành một vector đơn vị (độ dài bằng 1) nhưng vẫn giữ nguyên hướng ban đầu."
            }
          },
          // SLIDE 9: CÁC PHÉP TOÁN TRÊN VECTOR (4/5)
          {
            id: 9,
            title: "Trang 9: Các phép toán trên Vector (4/5)",
            image: "images/game-dev/week2/slide_9.png",
            notes: "<b>Tích vô hướng (Dot Product)</b>, đôi khi được gọi là inner product, cho kết quả là một số vô hướng (scalar).\n" +
              "Công thức: `a · b = ||a|| ||b|| cos(θ)`, trong đó `θ` là góc (tính bằng radian) giữa hai vector.\n\n" +
              "Đối với các vector đã được chuẩn hóa (normalized vectors):\n" +
              "- Tích vô hướng bằng <b>1</b> nếu chúng trỏ về cùng một hướng.\n" +
              "- Tích vô hướng bằng <b>-1</b> nếu chúng trỏ về hai hướng hoàn toàn đối lập.\n" +
              "- Tích vô hướng bằng <b>0</b> nếu hai vector vuông góc với nhau.\n\n" +
              "Đây là một phép toán rất hữu ích để xác định góc giữa hai vector, ví dụ như để xác định góc quay cần thiết để đối mặt với một vị trí nhất định, góc nhìn, v.v.",
            terms: {
              "Radian": "Một đơn vị đo góc. Một vòng tròn đầy đủ là 2π radian (tương đương 360 độ). Hầu hết các hàm lượng giác trong lập trình đều sử dụng radian."
            }
          },
          // SLIDE 10: CÁC PHÉP TOÁN TRÊN VECTOR (5/5)
          {
            id: 10,
            title: "Trang 10: Các phép toán trên Vector (5/5)",
            image: "images/game-dev/week2/slide_10.png",
            notes: "Trong Unity, bạn có thể sử dụng các hàm sau để tính toán góc giữa hai vector:\n\n" +
              "1. <b>Chuẩn hóa (Normalize):</b> Để có kết quả chính xác, bạn nên chuẩn hóa cả hai vector trước khi tính tích vô hướng của chúng.\n" +
              "2. <b>`Vector2.Dot(a, b)`:</b> Tính tích vô hướng của hai vector a và b.\n" +
              "3. <b>`Mathf.Acos(dotProduct)`:</b> Tính góc (tính bằng radian) từ giá trị tích vô hướng. Đây là hàm arccos(x).\n" +
              "4. <b>`Mathf.Rad2Deg`:</b> Một hằng số dùng để nhân với giá trị radian để chuyển đổi nó sang độ (degrees).",
            terms: {
              "Vector2.Dot()": "Một hàm static của lớp Vector2 dùng để tính tích vô hướng giữa hai vector 2D.",
              "Mathf.Acos()": "Hàm trong lớp Mathf của Unity, trả về giá trị arccos của một số. Kết quả là góc (tính bằng radian) có cosin là số đó.",
              "Mathf.Rad2Deg": "Một hằng số trong lớp Mathf có giá trị là `180 / PI`. Nhân một góc tính bằng radian với hằng số này sẽ chuyển đổi nó sang độ."
            }
          },

          // Dán 5 khối mã này vào sau slide có id: 10 của Tuần 2

          // SLIDE 11: 3D VECTORS
          {
            id: 11,
            title: "Trang 11: 3D Vectors",
            image: "images/game-dev/week2/slide_11.png",
            notes: "Vector 3D là một đối tượng hình học trong không gian 3 chiều, có <b>độ lớn (magnitude)</b> và <b>hướng (direction)</b>.\n\n" +
              "Tương tự như vector 2D, chúng có thể được dùng để biểu diễn một <b>điểm (point)</b> trong không gian hoặc một <b>hướng</b> kèm theo một <b>độ lớn</b>.\n\n" +
              "Trong Unity, các vector 3D có rất nhiều thuộc tính và phương thức, có thể tham khảo thêm tại tài liệu của Unity về Vector3.",
            terms: {
              "Vector3": "Một struct trong Unity dùng để biểu diễn các vector và điểm trong không gian 3D. Nó chứa ba thành phần public là `x`, `y`, và `z`."
            }
          },
          // SLIDE 12: CÁC PHÉP TOÁN TRÊN VECTOR 3D (1/4)
          {
            id: 12,
            title: "Trang 12: Các phép toán trên Vector 3D (1/4)",
            image: "images/game-dev/week2/slide_12.png",
            notes: "Tương tự như Vector2, bạn có thể sử dụng các toán tử thông thường (`+`, `-`, `*`, `/`) để thực hiện các phép toán cộng, trừ, và nhân/chia một Vector3 với một số.\n\n" +
              "Khái niệm <b>Vector đơn vị (Unit vector)</b> và việc <b>chuẩn hóa (normalizing)</b> một vector bằng hàm `Normalize()` cũng được áp dụng tương tự như trong không gian 2D.",
            terms: {}
          },
          // SLIDE 13: CÁC PHÉP TOÁN TRÊN VECTOR 3D (2/4)
          {
            id: 13,
            title: "Trang 13: Các phép toán trên Vector 3D (2/4)",
            image: "images/game-dev/week2/slide_13.png",
            notes: "Các phép toán cơ bản như <b>Phép cộng (Addition)</b>, <b>Phép trừ (Subtraction)</b>, <b>Nhân vô hướng (Scalar multiplication)</b>, và <b>Phủ định (Negation)</b> được thực hiện trên 3 thành phần (x, y, z) tương tự như với vector 2D.\n\n" +
              "<b>Tích vô hướng (Dot product)</b> và <b>Tích có hướng (Cross product)</b> cũng có các công thức tương ứng trong không gian 3D.",
            terms: {}
          },
          // SLIDE 14: CÁC PHÉP TOÁN TRÊN VECTOR 3D (3/4)
          {
            id: 14,
            title: "Trang 14: Các phép toán trên Vector 3D (3/4)",
            image: "images/game-dev/week2/slide_14.png",
            notes: "<b>Tích có hướng (Cross Product)</b>, hay còn gọi là vector product, là một phép toán nhị phân trên hai vector trong không gian 3 chiều.\n\n" +
              "Kết quả của `a x b` là một vector mới <b>vuông góc</b> với cả hai vector `a` và `b` (tức là vuông góc với mặt phẳng chứa chúng).\n\n" +
              "Hướng của vector kết quả có thể được xác định bằng <b>'quy tắc bàn tay phải' (right hand rule)</b>.\n\n" +
              "Ví dụ: Hàm `GetNormal` trên slide cho thấy cách tính vector pháp tuyến của một mặt phẳng tam giác bằng cách lấy tích có hướng của hai cạnh của tam giác đó.",
            terms: {
              "Right Hand Rule (Quy tắc bàn tay phải)": "Một quy ước để xác định hướng của vector kết quả trong phép tích có hướng. Nếu bạn cuộn các ngón tay của bàn tay phải từ vector đầu tiên sang vector thứ hai, ngón cái sẽ chỉ theo hướng của vector tích có hướng.",
              "Normal Vector (Vector pháp tuyến)": "Một vector vuông góc với một bề mặt tại một điểm nhất định. Vector pháp tuyến rất quan trọng trong đồ họa máy tính để tính toán sự phản xạ ánh sáng và các hiệu ứng khác."
            }
          },
          // SLIDE 15: CÁC PHÉP TOÁN TRÊN VECTOR 3D (4/4)
          {
            id: 15,
            title: "Trang 15: Các phép toán trên Vector 3D (4/4)",
            image: "images/game-dev/week2/slide_15.png",
            notes: "Một ví dụ ứng dụng của Tích có hướng là tìm trục quay để áp dụng mô-men xoắn (torque) nhằm xoay tháp pháo của một chiếc xe tăng.\n\n" +
              "Bằng cách lấy tích có hướng giữa <b>hướng hiện tại</b> của tháp pháo và <b>hướng mà nó cần đối mặt</b>, chúng ta sẽ có được vector trục quay (trong ví dụ là vector C).\n\n" +
              "Tích có hướng cũng có thể được dùng để xác định vector pháp tuyến của một mặt phẳng (ví dụ: một tam giác trên một bề mặt) nhằm tính toán hướng cho va chạm và ánh sáng.",
            terms: {
              "Torque (Mô-men xoắn)": "Một lực xoắn gây ra sự thay đổi trong chuyển động quay của một vật thể. Trong Unity, bạn có thể áp dụng torque cho một Rigidbody để làm nó quay."
            }
          },

          // Dán 5 khối mã này vào sau slide có id: 15 của Tuần 2

          // SLIDE 16: SMOOTH DAMP
          {
            id: 16,
            title: "Trang 16: Smooth Damp",
            image: "images/game-dev/week2/slide_16.png",
            notes: "<b>Vector3.SmoothDamp</b> là một hàm static rất hữu ích để di chuyển một đối tượng đến một vị trí mục tiêu một cách mượt mà, giống như có một bộ giảm xóc.\n\n" +
              "Vector sẽ được làm mượt theo một hàm giống như lò xo-giảm chấn và sẽ không bao giờ 'vọt lố' (overshoot) qua mục tiêu. Một ứng dụng phổ biến là làm mượt camera đi theo nhân vật.\n\n" +
              "Hàm này trả về vị trí mới và cập nhật lại vận tốc `currentVelocity` (được truyền vào bằng từ khóa `ref`) để duy trì sự mượt mà ở các frame tiếp theo.",
            terms: {
              "Vector3.SmoothDamp()": "Một hàm của Unity dùng để di chuyển dần dần một vector tới một vị trí mong muốn trong một khoảng thời gian nhất định. Rất hữu ích để tạo ra các chuyển động camera hoặc đối tượng mượt mà.",
              "ref (keyword)": "Từ khóa dùng khi truyền đối số vào phương thức, cho phép phương thức đó thay đổi giá trị của biến gốc. Biến truyền vào phải được khởi tạo trước."
            }
          },
          // SLIDE 17: TRANSFORMS
          {
            id: 17,
            title: "Trang 17: Transforms",
            image: "images/game-dev/week2/slide_17.png",
            notes: "Mọi đối tượng trong một Scene đều có một component <b>Transform</b>. Đây là component duy nhất không thể bị xóa bỏ.\n\n" +
              "Transform quyết định 3 thuộc tính cơ bản của đối tượng:\n" +
              "- <b>Position (Vị trí):</b> Vị trí của Transform theo tọa độ X, Y, và Z.\n" +
              "- <b>Rotation (Góc xoay):</b> Góc xoay của Transform quanh các trục X, Y, và Z, tính bằng độ.\n" +
              "- <b>Scale (Tỷ lệ):</b> Tỷ lệ của Transform dọc theo các trục X, Y, và Z. Giá trị 1 là kích thước gốc.\n\n" +
              "Mỗi Transform có thể có một 'cha' (parent), cho phép bạn áp dụng các thay đổi về vị trí, góc xoay và tỷ lệ một cách phân cấp.",
            terms: {
              "Transform": "Một component lưu trữ vị trí, góc xoay và tỷ lệ của một Game Object. Mọi Game Object đều có một Transform."
            }
          },
          // SLIDE 18: HỆ TỌA ĐỘ LOCAL VÀ WORLD/GLOBAL (1/2)
          {
            id: 18,
            title: "Trang 18: Tọa độ Local và World (1/2)",
            image: "images/game-dev/week2/slide_18.png",
            notes: "Component Transform của một game object chứa các vector như <b>forward</b>, <b>up</b>, và <b>right</b>. Các vector này xác định <b>hệ tọa độ cục bộ (local coordinate system)</b> của đối tượng.\n\n" +
              "Hệ tọa độ cục bộ (còn gọi là local space, model space, object space) có 3 trục vuông góc với nhau và có thể được dùng để biết đâu là phía trước, phía trên, và bên cạnh của đối tượng.\n\n" +
              "Khi một phép xoay được áp dụng lên Transform, tất cả các trục này sẽ xoay theo để phản ánh sự thay đổi đó.",
            terms: {
              "Local Space (Không gian cục bộ)": "Hệ tọa độ riêng của một Game Object, với gốc tọa độ (0,0,0) nằm ngay tại tâm của đối tượng đó. Các trục X, Y, Z của nó (right, up, forward) sẽ xoay cùng với đối tượng.",
              "transform.forward": "Một vector đơn vị trỏ về phía trước (trục Z dương) của đối tượng trong không gian cục bộ của nó.",
              "transform.up": "Một vector đơn vị trỏ về phía trên (trục Y dương) của đối tượng trong không gian cục bộ của nó.",
              "transform.right": "Một vector đơn vị trỏ về phía bên phải (trục X dương) của đối tượng trong không gian cục bộ của nó."
            }
          },
          // SLIDE 19: HỆ TỌA ĐỘ LOCAL VÀ WORLD/GLOBAL (2/2)
          {
            id: 19,
            title: "Trang 19: Tọa độ Local và World (2/2)",
            image: "images/game-dev/week2/slide_19.png",
            notes: "Mặt khác, <b>hệ tọa độ thế giới (world coordinate system)</b> định nghĩa các vector `Vector3.forward`, `Vector3.up`, và `Vector3.right`. Đây là các vector hằng số, chỉ hướng dương của các trục Z, Y, và X tương ứng.\n\n" +
              "Đây là một hệ tọa độ chung cho tất cả các đối tượng trong Scene.\n\n" +
              "Lưu ý rằng hệ tọa độ cục bộ và hệ tọa độ thế giới không nhất thiết phải thẳng hàng với nhau. Do đó, nói rằng bạn 'xoay quanh vector forward của đối tượng' sẽ chính xác hơn là nói 'xoay quanh trục Z'.",
            terms: {
              "World Space (Không gian thế giới)": "Một hệ tọa độ duy nhất, cố định và chung cho toàn bộ Scene. Mọi đối tượng trong Scene đều có một vị trí và góc xoay được xác định trong không gian này.",
              "Vector3.forward": "Một vector hằng số `(0, 0, 1)`, đại diện cho hướng 'phía trước' trong không gian thế giới.",
              "Vector3.up": "Một vector hằng số `(0, 1, 0)`, đại diện cho hướng 'phía trên' trong không gian thế giới.",
              "Vector3.right": "Một vector hằng số `(1, 0, 0)`, đại diện cho hướng 'bên phải' trong không gian thế giới."
            }
          },
          // SLIDE 20: TRANSFORMS.TRANSLATE (1/2)
          {
            id: 20,
            title: "Trang 20: Transforms.Translate (1/2)",
            image: "images/game-dev/week2/slide_20.png",
            notes: "Phương thức <b>Transform.Translate</b> di chuyển một transform theo một hướng và khoảng cách được chỉ định bởi vector `translation`.\n\n" +
              "- Nếu `relativeTo` là `Space.Self` (mặc định), di chuyển sẽ được áp dụng tương đối với hệ tọa độ cục bộ của transform (ví dụ: `Vector3.forward` sẽ di chuyển đối tượng về phía trước của chính nó).\n" +
              "- Nếu `relativeTo` là `Space.World`, di chuyển sẽ được áp dụng tương đối với hệ tọa độ thế giới.\n\n" +
              "<b>Ví dụ A:</b> Di chuyển đối tượng về phía trước 1 đơn vị mỗi <b>frame</b>. Điều này sẽ làm đối tượng di chuyển rất nhanh trên các máy tính mạnh.\n" +
              "<b>Ví dụ B:</b> Nhân với `Time.deltaTime` để di chuyển đối tượng về phía trước 1 đơn vị mỗi <b>giây</b>. Đây là cách làm đúng để chuyển động không phụ thuộc vào tốc độ khung hình.",
            terms: {
              "Transform.Translate()": "Một phương thức của component Transform dùng để di chuyển đối tượng một khoảng cách nhất định theo một hướng nhất định.",
              "Space.Self": "Một hằng số Enum chỉ định rằng một phép toán (như Translate hoặc Rotate) nên được thực hiện trong không gian cục bộ của đối tượng.",
              "Space.World": "Một hằng số Enum chỉ định rằng một phép toán nên được thực hiện trong không gian thế giới."
            }
          },
          // Dán 5 khối mã này vào sau slide có id: 20 của Tuần 2

          // SLIDE 21: TRANSFORMS.TRANSLATE (2/2)
          {
            id: 21,
            title: "Trang 21: Transforms.Translate (2/2)",
            image: "images/game-dev/week2/slide_21.png",
            notes: "<b>Ví dụ C:</b> Chúng ta có thể thay đổi tốc độ di chuyển bằng cách khai báo một biến `speed` và nhân nó vào phép tính. Điều này cho phép di chuyển đối tượng với tốc độ `speed` đơn vị mỗi giây.\n\n" +
              "<b>Ví dụ D:</b> Ví dụ trước tương đương với việc cung cấp tham số `Space.Self`. Nếu chúng ta muốn di chuyển đối tượng trong không gian tọa độ thế giới (world coordinates), nơi `Vector3.forward` luôn là trục Z dương, chúng ta cần chỉ định `Space.World` làm tham số cuối cùng.\n\n" +
              "Lưu ý: `Time.deltaTime` mặc định được thiết lập là 1/60 ≈ 0.0166, tương ứng với tốc độ khung hình 60 FPS.",
            terms: {}
          },
          // SLIDE 22: LERP
          {
            id: 22,
            title: "Trang 22: Lerp",
            image: "images/game-dev/week2/slide_22.png",
            notes: "<b>Lerp (Linear Interpolation - Nội suy tuyến tính)</b> là một hàm nội suy tuyến tính giữa hai điểm `from` và `to` theo một phần `t`.\n\n" +
              "Hàm này thường được sử dụng để tìm một điểm nằm trên đường thẳng giữa hai điểm đầu cuối, hoặc để di chuyển một đối tượng dần dần giữa các điểm đó.\n\n" +
              "Giá trị `t` được kẹp trong khoảng [0, 1]. Khi `t = 0`, hàm trả về `from`. Khi `t = 1`, hàm trả về `to`. Khi `t = 0.5`, hàm trả về điểm nằm chính giữa `from` và `to`.\n\n" +
              "Ví dụ trên slide cho thấy cách sử dụng `Vector3.Lerp` để làm mượt chuyển động của camera theo một đối tượng `target`.",
            terms: {
              "Lerp (Linear Interpolation)": "Một phép toán tìm một điểm mới nằm trên một đường thẳng giữa hai điểm cho trước. Nó rất phổ biến trong lập trình game để tạo ra các chuyển động mượt mà (smoothing), hiệu ứng mờ dần (fading), hoặc thay đổi giá trị theo thời gian."
            }
          },
          // SLIDE 23: CÁC PHÉP XOAY TRONG 3D
          {
            id: 23,
            title: "Trang 23: Các phép xoay trong 3D",
            image: "images/game-dev/week2/slide_23.png",
            notes: "Có ba loại xoay khác nhau có thể được thực hiện quanh một điểm trong không gian 3D, thường được gọi là <b>góc Euler (Euler angles)</b>:\n\n" +
              "- <b>Pitch:</b> Xoay quanh trục <b>X</b> (làm máy bay ngóc lên hoặc chúc xuống).\n" +
              "- <b>Yaw:</b> Xoay quanh trục <b>Y</b> (làm máy bay rẽ trái hoặc phải).\n" +
              "- <b>Roll:</b> Xoay quanh trục <b>Z</b> (làm máy bay nghiêng sang hai bên).",
            terms: {
              "Euler Angles": "Một bộ ba góc (thường là Pitch, Yaw, Roll) dùng để biểu diễn hướng của một vật thể trong không gian 3D. Mặc dù dễ hiểu, chúng có thể gây ra một vấn đề gọi là 'Gimbal Lock'."
            }
          },
          // SLIDE 24: TRANSFORMS.ROTATE
          {
            id: 24,
            title: "Trang 24: Transforms.Rotate",
            image: "images/game-dev/week2/slide_24.png",
            notes: "Phương thức <b>Transform.Rotate</b> xoay một transform quanh một `axis` (trục) một góc `angle` (tính bằng độ).\n\n" +
              "- Nếu `relativeTo` là `Space.Self` (mặc định), phép xoay được áp dụng quanh các trục cục bộ (local axes) của transform.\n" +
              "- Nếu `relativeTo` là `Space.World`, phép xoay được áp dụng quanh các trục của thế giới (world axes).\n\n" +
              "<b>Ví dụ A:</b> Xoay đối tượng quanh trục Y (Yaw) với tốc độ `turnSpeed` độ mỗi giây.\n" +
              "<b>Ví dụ B:</b> Phép xoay có thể được áp dụng quanh trục Y của không gian cục bộ hoặc không gian thế giới.",
            terms: {
              "Transform.Rotate()": "Một phương thức của component Transform dùng để áp dụng một phép xoay cho đối tượng."
            }
          },
          // SLIDE 25: TRANSFORM.LOOKAT
          {
            id: 25,
            title: "Trang 25: Transform.LookAt",
            image: "images/game-dev/week2/slide_25.png",
            notes: "Phương thức <b>Transform.LookAt</b> xoay một transform sao cho vector 'forward' (phía trước) của nó trỏ vào vị trí hiện tại của `target` hoặc một `worldPosition` cho trước.\n\n" +
              "Đây là một cách sử dụng rất hay để hướng camera vào một vị trí hoặc một đối tượng mục tiêu.\n\n" +
              "Trong ví dụ, camera sẽ luôn xoay để 'nhìn' vào đối tượng `target` ở mỗi frame.",
            terms: {
              "Transform.LookAt()": "Một phương thức của component Transform dùng để xoay đối tượng sao cho trục Z dương (forward) của nó hướng về một vị trí mục tiêu trong không gian thế giới."
            }
          },
          // Dán 5 khối mã này vào sau slide có id: 25 của Tuần 2

          // SLIDE 26: TRANSFORM.LOCALSCALE
          {
            id: 26,
            title: "Trang 26: Transform.localScale",
            image: "images/game-dev/week2/slide_26.png",
            notes: "Unity không cung cấp một hàm `Transform.Scale()` riêng biệt. Tuy nhiên, có thể thay đổi trực tiếp trường `localScale` để điều chỉnh tỷ lệ của transform.\n\n" +
              "<b>Lưu ý quan trọng về Vật lý:</b>\n" +
              "Nếu bạn muốn di chuyển một đối tượng có Collider (và tương tác với vật lý), bạn <b>không nên</b> sử dụng `Transform.Translate` hoặc `Transform.Rotate`. Thay vào đó, hãy sử dụng các hàm vật lý (sẽ được học ở bài giảng sau).\n\n" +
              "Chỉ nên sử dụng `Transform.Translate` hoặc `Transform.Rotate` khi đối tượng có một Rigidbody được đánh dấu là <b>kinematic</b>.",
            terms: {
              "transform.localScale": "Một thuộc tính của Transform đại diện cho tỷ lệ của đối tượng so với đối tượng cha của nó. Nếu không có cha, nó là tỷ lệ trong không gian thế giới.",
              "Kinematic (Rigidbody)": "Một loại Rigidbody không bị ảnh hưởng bởi các lực vật lý (như trọng lực hay va chạm). Nó chỉ di chuyển khi được điều khiển trực tiếp từ script thông qua Transform. Rigidbody kinematic vẫn có thể tương tác và gây ra va chạm với các Rigidbody thông thường khác."
            }
          },
          // SLIDE 27: VẤN ĐỀ GIMBAL LOCK (1/2)
          {
            id: 27,
            title: "Trang 27: Vấn đề Gimbal Lock (1/2)",
            image: "images/game-dev/week2/slide_27.png",
            notes: "Việc xoay một đối tượng trực tiếp bằng góc Euler (Pitch, Yaw, Roll) rất trực quan. Tuy nhiên, bên trong, Transform lưu trữ một ma trận được hình thành từ các vector cục bộ (Right, Up, Forward).\n\n" +
              "Cách áp dụng các phép xoay này hoạt động tốt, nhưng nó có thể gặp phải vấn đề <b>gimbal lock</b>: sự mất mát một bậc tự do trong không gian ba chiều, xảy ra khi các trục của hai trong ba gimbal bị đẩy vào một cấu hình song song.",
            terms: {
              "Gimbal Lock": "Một hiện tượng trong không gian 3D xảy ra khi sử dụng góc Euler, khiến cho một trong ba trục xoay trở nên vô dụng (ví dụ: xoay quanh trục Y và trục Z lại cho cùng một kết quả). Điều này làm mất đi một bậc tự do và gây ra các chuyển động xoay không mong muốn.",
              "Degree of Freedom (Bậc tự do)": "Trong cơ học, đây là số lượng các tham số độc lập định nghĩa cấu hình của một hệ thống. Một vật thể rắn trong không gian 3D có 6 bậc tự do: 3 cho tịnh tiến (di chuyển theo X, Y, Z) và 3 cho quay (xoay quanh X, Y, Z)."
            }
          },
          // SLIDE 28: VẤN ĐỀ GIMBAL LOCK (2/2)
          {
            id: 28,
            title: "Trang 28: Vấn đề Gimbal Lock (2/2)",
            image: "images/game-dev/week2/slide_28.png",
            notes: "Slide này minh họa bằng toán học ma trận về cách vấn đề gimbal lock xảy ra. Khi một góc xoay (ví dụ: β) bằng 0 hoặc 90 độ, hai ma trận xoay khác có thể bị 'khóa' vào nhau, làm cho hai phép xoay riêng biệt (α và γ) lại có cùng một tác dụng, dẫn đến mất một bậc tự do.",
            terms: {}
          },
          // SLIDE 29: QUATERNIONS (1/3)
          {
            id: 29,
            title: "Trang 29: Quaternions (1/3) - Giới thiệu",
            image: "images/game-dev/week2/slide_29.png",
            notes: "<b>Quaternions</b> là các vector bốn chiều của số thực, cho phép ba phép toán: cộng, nhân vô hướng và nhân quaternion. Chúng được sử dụng để biểu diễn các phép xoay.\n\n" +
              "Unity sử dụng Quaternions bên trong để biểu diễn tất cả các phép xoay vì chúng không bị gimbal lock và có thể dễ dàng được nội suy.\n\n" +
              "Một quaternion có bốn thành phần: w, x, y, và z. Các thành phần này hoạt động cùng nhau và <b>không bao giờ</b> nên được sửa đổi riêng lẻ.\n\n" +
              "<b>Quaternions vs. Euler:</b>\n" +
              "- Quaternions không bị gimbal lock, cung cấp phép nội suy mượt mà hơn.\n" +
              "- Các phép tính trên quaternion dễ dàng hơn.\n" +
              "- Về mặt khái niệm, quaternion khó nắm bắt hơn so với góc Euler.",
            terms: {
              "Quaternion": "Một hệ thống số phức bốn chiều được sử dụng trong đồ họa máy tính để biểu diễn các phép xoay trong không gian 3D. Đây là cách Unity lưu trữ và xử lý tất cả các góc xoay để tránh vấn đề Gimbal Lock."
            }
          },
          // SLIDE 30: QUATERNIONS (2/3)
          {
            id: 30,
            title: "Trang 30: Quaternions (2/3) - LookRotation",
            image: "images/game-dev/week2/slide_30.png",
            notes: "Lớp Quaternion cung cấp nhiều chức năng hữu ích. Một trong những hàm static quan trọng là <b>Quaternion.LookRotation</b>.\n\n" +
              "`Quaternion.LookRotation(Vector3 forward, Vector3 upwards)` tạo ra một phép xoay với hướng 'phía trước' (forward) và 'phía trên' (upwards) được chỉ định.\n\n" +
              "Khi được sử dụng để định hướng một Transform, trục Z của đối tượng sẽ được căn chỉnh với vector `forward` và trục Y sẽ được căn chỉnh với vector `upwards`.",
            terms: {
              "Quaternion.LookRotation()": "Một hàm static của lớp Quaternion, tạo ra một giá trị Quaternion đại diện cho một phép xoay. Phép xoay này sẽ làm cho đối tượng 'nhìn' về hướng của vector `forward` được cung cấp."
            }
          },

          // Dán 5 khối mã này vào sau slide có id: 30 của Tuần 2

          // SLIDE 31: QUATERNIONS (3/3)
          {
            id: 31,
            title: "Trang 31: Quaternions (3/3) - Slerp & Identity",
            image: "images/game-dev/week2/slide_31.png",
            notes: "Hai chức năng hữu ích khác của lớp Quaternion:\n\n" +
              "<b>Quaternion.Slerp(from, to, t):</b>\n" +
              "- Nội suy hình cầu (Spherical Linear Interpolation) giữa hai phép xoay `from` và `to` theo một phần `t`.\n" +
              "- Đây là cách chính xác và mượt mà nhất để xoay một đối tượng dần dần từ góc này sang góc khác.\n\n" +
              "<b>Quaternion.identity:</b>\n" +
              "- Đại diện cho một phép xoay 'rỗng' (không xoay). Nó hoàn toàn thẳng hàng với các trục của thế giới.\n" +
              "- Rất hữu ích để reset góc xoay của một đối tượng về trạng thái ban đầu.",
            terms: {
              "Slerp (Spherical Linear Interpolation)": "Một phép toán nội suy trên một mặt cầu. Trong Unity, nó được dùng để tạo ra các phép xoay mượt mà và tự nhiên giữa hai hướng khác nhau với tốc độ không đổi.",
              "Quaternion.identity": "Một thuộc tính static của lớp Quaternion trả về một phép xoay không có sự thay đổi nào (tương đương với góc xoay (0, 0, 0))."
            }
          },
          // SLIDE 32: CHUYỂN TIẾP - QUẢN LÝ TƯƠNG TÁC NGƯỜI DÙNG
          {
            id: 32,
            title: "Trang 32: Chuyển tiếp - Quản lý Tương tác người dùng",
            image: "images/game-dev/week2/slide_32.png",
            notes: "Kết thúc phần Toán học trong Game.\n\n" +
              "Phần tiếp theo sẽ tập trung vào cách Unity quản lý và xử lý các tín hiệu đầu vào từ người chơi (bàn phím, chuột, tay cầm...).",
            terms: {}
          },
          // SLIDE 33: THE INPUT MANAGER (1/2)
          {
            id: 33,
            title: "Trang 33: The Input Manager (1/2)",
            image: "images/game-dev/week2/slide_33.png",
            notes: "Unity hỗ trợ các loại thiết bị đầu vào truyền thống như bàn phím, tay cầm (joypad), v.v., cũng như màn hình cảm ứng và các cảm biến chuyển động của thiết bị di động.\n\n" +
              "<b>Input Manager</b> là nơi bạn định nghĩa tất cả các 'trục' (axes) và 'hành động' (actions) đầu vào cho dự án của mình.\n" +
              "Để xem Input Manager, hãy chọn menu <b>Edit → Project Settings → Input</b>.\n\n" +
              "Tất cả các trục được định nghĩa sẽ được hiển thị cho người chơi trong game launcher, cho phép họ tùy chỉnh lại các nút bấm theo ý muốn.",
            terms: {
              "Input Manager": "Một công cụ cài đặt trong Unity Editor cho phép bạn định nghĩa và quản lý các 'trục ảo' (virtual axes) cho các tín hiệu đầu vào của người chơi, chẳng hạn như 'Horizontal', 'Vertical', 'Jump', 'Fire1'."
            }
          },
          // SLIDE 34: THE INPUT MANAGER (2/2)
          {
            id: 34,
            title: "Trang 34: The Input Manager (2/2)",
            image: "images/game-dev/week2/slide_34.png",
            notes: "Đây là các cài đặt quan trọng nhất có thể được thiết lập cho mỗi trục:\n\n" +
              "- <b>Name:</b> Tên chuỗi dùng để tham chiếu đến trục trong script.\n" +
              "- <b>Positive/Negative Button:</b> Các phím sẽ gửi giá trị dương/âm cho trục (ví dụ: 'd' và 'a').\n" +
              "- <b>Gravity, Dead, Sensitivity:</b> Các thông số ảnh hưởng đến cách giá trị của trục thay đổi theo thời gian, tạo ra cảm giác 'trơn' hoặc 'nhạy'.\n" +
              "- <b>Invert:</b> Nếu được bật, các phím dương sẽ gửi giá trị âm và ngược lại.\n" +
              "- <b>Type:</b> Loại đầu vào (Phím, Chuyển động chuột, Trục tay cầm...).",
            terms: {
              "Axis (Trục)": "Trong Input Manager, đây là một ánh xạ (mapping) từ một hoặc nhiều nút bấm vật lý đến một giá trị số (thường từ -1 đến 1). Ví dụ, trục 'Horizontal' có thể được điều khiển bởi cả phím A/D và mũi tên trái/phải.",
              "Dead (Dead zone)": "Một khoảng giá trị nhỏ gần 0 mà các tín hiệu từ tay cầm analog sẽ bị bỏ qua. Điều này giúp tránh các chuyển động không mong muốn khi tay cầm không hoàn toàn ở vị trí trung tâm."
            }
          },
          // SLIDE 35: INPUT TRUYỀN THỐNG
          {
            id: 35,
            title: "Trang 35: Input truyền thống",
            image: "images/game-dev/week2/slide_35.png",
            notes: "Mỗi dự án Unity khi được tạo ra đều có các trục đầu vào mặc định sau:\n\n" +
              "- <b>Horizontal</b> và <b>Vertical</b> được ánh xạ tới các phím w, a, s, d và các phím mũi tên.\n" +
              "- <b>Fire1, Fire2, Fire3</b> được ánh xạ tới Control, Option (Alt), và Command.\n" +
              "- <b>Mouse X</b> và <b>Mouse Y</b> được ánh xạ tới sự thay đổi (delta) trong chuyển động của chuột.\n\n" +
              "Tất cả các trục ảo này được truy cập bằng tên của chúng từ script, ví dụ:\n" +
              "- `Input.GetAxis(\"Horizontal\")`: Trả về một giá trị float từ -1 đến 1.\n" +
              "- `Input.GetKey(\"a\")`: Trả về một giá trị boolean `true` nếu phím 'a' đang được nhấn.",
            terms: {
              "Input.GetAxis()": "Một hàm của Unity trả về giá trị của một trục ảo đã được định nghĩa trong Input Manager. Giá trị này được làm mượt và nằm trong khoảng [-1, 1].",
              "Input.GetKey()": "Một hàm của Unity trả về `true` trong mỗi frame mà người dùng đang giữ một phím được chỉ định.",
              "Mouse Delta": "Lượng di chuyển của chuột kể từ khung hình cuối cùng. Giá trị này không bị giới hạn trong khoảng [-1, 1]."
            }
          },
          // Dán 5 khối mã này vào sau slide có id: 35 của Tuần 2

          // SLIDE 36: CÁC NÚT BẤM VÀ PHÍM
          {
            id: 36,
            title: "Trang 36: Các nút bấm và phím",
            image: "images/game-dev/week2/slide_36.png",
            notes: "Trong Unity, họ các hàm `GetKey` và `GetButton` là những cách để nhận tín hiệu đầu vào từ các phím hoặc các nút trên tay cầm thông qua lớp `Input`.\n\n" +
              "- <b>GetKey</b> tham chiếu đến các phím vật lý cụ thể có thể được nhấn (ví dụ: `KeyCode.Space`).\n" +
              "- <b>GetButton</b> tham chiếu đến các 'hành động' đã được chỉ định trong Input Manager (ví dụ: \"Jump\"). Đây là cách được khuyến khích sử dụng.\n\n" +
              "Cả hai họ hàm này đều có ba thành viên trả về giá trị `boolean`:\n" +
              "- <b>Get...Down():</b> Trả về `true` <b>chỉ trong một frame duy nhất</b> ngay khi phím/nút được nhấn xuống.\n" +
              "- <b>Get...():</b> Trả về `true` trong mỗi frame mà phím/nút <b>đang được giữ</b>.\n" +
              "- <b>Get...Up():</b> Trả về `true` <b>chỉ trong một frame duy nhất</b> ngay khi phím/nút được thả ra.",
            terms: {
              "KeyCode": "Một Enum trong Unity chứa danh sách tất cả các phím vật lý trên bàn phím.",
              "Input.GetButtonDown()": "Hàm trả về `true` trong frame mà người dùng nhấn nút ảo được chỉ định. Rất hữu ích cho các hành động chỉ xảy ra một lần như nhảy hoặc bắn.",
              "Input.GetButton()": "Hàm trả về `true` trong mỗi frame mà người dùng đang giữ nút ảo được chỉ định. Hữu ích cho các hành động liên tục như di chuyển hoặc bắn liên thanh.",
              "Input.GetButtonUp()": "Hàm trả về `true` trong frame mà người dùng thả nút ảo được chỉ định."
            }
          },
          // SLIDE 37: GETAXIS VÀ GETAXISRAW
          {
            id: 37,
            title: "Trang 37: GetAxis và GetAxisRaw",
            image: "images/game-dev/week2/slide_37.png",
            notes: "<b>`Input.GetAxis()`</b> trả về một giá trị float trong khoảng [-1, 1] và có áp dụng các hiệu ứng làm mượt (smoothing) như Gravity và Sensitivity.\n\n" +
              "<b>`Input.GetAxisRaw()`</b> trả về một giá trị float chỉ có thể là -1, 0, hoặc 1, không có bất kỳ sự làm mượt nào. Nó phản ánh trực tiếp trạng thái của nút bấm.\n\n" +
              "Các cài đặt cho `GetAxis()`:\n" +
              "- <b>Gravity:</b> Tốc độ giá trị quay trở về 0 sau khi nút được thả ra.\n" +
              "- <b>Sensitivity:</b> Tốc độ giá trị đạt đến -1 hoặc 1 sau khi nút được nhấn.\n" +
              "- <b>Dead:</b> Khoảng giá trị gần 0 sẽ được coi là 0 (hữu ích cho tay cầm).\n" +
              "- <b>Snap:</b> Nếu được chọn, giá trị sẽ quay về 0 ngay lập tức nếu cả hai nút dương và âm được nhấn cùng lúc.",
            terms: {
              "Input.GetAxisRaw()": "Tương tự như `GetAxis`, nhưng không có bất kỳ sự làm mượt nào. Giá trị trả về sẽ ngay lập tức là -1, 0, hoặc 1. Hữu ích khi bạn muốn có sự phản hồi tức thì và chính xác."
            }
          },
          // SLIDE 38: CHUỘT (MOUSE)
          {
            id: 38,
            title: "Trang 38: Chuột (Mouse)",
            image: "images/game-dev/week2/slide_38.png",
            notes: "Tín hiệu đầu vào từ chuột có thể được phát hiện bằng các hàm `GetAxis` (cho 'Mouse X', 'Mouse Y') và `GetButton` (cho các nút chuột).\n\n" +
              "Tuy nhiên, Unity cũng cho phép phát hiện các cú nhấp chuột trên một <b>Collider</b> hoặc một <b>GUI Element</b>. Nếu phần tử đó có một script được gắn vào, họ các hàm sau sẽ được gọi:\n\n" +
              "- <b>OnMouseDown():</b> Được gọi khi người dùng nhấn nút chuột khi con trỏ đang ở trên Collider/GUIElement.\n" +
              "- <b>OnMouseUp():</b> Được gọi khi người dùng thả nút chuột.\n" +
              "- <b>OnMouseEnter() / OnMouseExit():</b> Được gọi khi con trỏ chuột đi vào / đi ra khỏi Collider/GUIElement.\n" +
              "- <b>OnMouseOver():</b> Được gọi ở mỗi frame khi con trỏ chuột đang ở trên Collider/GUIElement.\n" +
              "- <b>OnMouseDrag():</b> Được gọi khi người dùng đã nhấp và vẫn đang giữ chuột trên Collider/GUIElement.",
            terms: {
              "OnMouseDown()": "Một hàm sự kiện của MonoBehaviour được Unity tự động gọi trên tất cả các script của một Game Object khi người dùng nhấn nút chuột trong khi con trỏ đang ở trên Collider của đối tượng đó."
            }
          },
          // SLIDE 39: CHUYỂN TIẾP - CÂU HỎI & DEMO LAB
          {
            id: 39,
            title: "Trang 39: Chuyển tiếp - Câu hỏi & Demo Lab",
            image: "images/game-dev/week2/slide_39.png",
            notes: "Kết thúc phần lý thuyết về Quản lý Tương tác người dùng.\n\n" +
              "Phần cuối cùng sẽ là các câu hỏi kiểm tra và xem trước nội dung buổi thực hành (Lab).",
            terms: {}
          },
          // SLIDE 40: XEM TRƯỚC BUỔI THỰC HÀNH
          {
            id: 40,
            title: "Trang 40: Xem trước buổi thực hành",
            image: "images/game-dev/week2/slide_40.png",
            notes: "Trong buổi thực hành này, bạn sẽ hoàn thành phần thứ hai của bài lab. Hãy nhớ rằng bạn sẽ được đánh giá và sẽ tiếp tục từ nơi bạn đã dừng lại ở tuần trước.\n\n" +
              "Bài giảng tiếp theo: <b>3D Games: Models and Physics</b>.",
            terms: {}
          }

        ]

      }, // Dấu phẩy ngăn cách các tuần
      {
        title: "Tuần 3: 3D Games: Models and Physics",
        slides: [
          // Dán 5 khối mã này vào mảng slides của Tuần 3

          // SLIDE 1: BÌA TUẦN 3
          {
            id: 1,
            title: "Trang 1: Bìa - 3D Games: Models and Physics",
            image: "images/game-dev/week3/slide_1.png",
            notes: "Bài giảng 3: Game 3D: Các mô hình và Vật lý.\n\n" +
              "Tuần này sẽ giới thiệu về cách làm việc với các đối tượng 3D và hệ thống vật lý trong Unity.",
            terms: {}
          },
          // SLIDE 2: ĐỀ CƯƠNG TUẦN 3
          {
            id: 2,
            title: "Trang 2: Đề cương bài giảng",
            image: "images/game-dev/week3/slide_2.png",
            notes: "Nội dung chính của bài giảng Tuần 3 bao gồm 3 phần:\n\n" +
              "1. <b>Các mô hình 3D (3D Models).</b>\n" +
              "2. <b>Vật lý 3D (3D Physics).</b>\n" +
              "3. <b>Câu hỏi ôn tập và Xem trước buổi thực hành.</b>",
            terms: {}
          },
          // SLIDE 3: CHUYỂN TIẾP
          {
            id: 3,
            title: "Trang 3: Chuyển tiếp - Các mô hình 3D",
            image: "images/game-dev/week3/slide_3.png",
            notes: "Chuẩn bị vào phần đầu tiên: Các mô hình 3D.",
            terms: {}
          },
          // SLIDE 4: CHẾ ĐỘ 3D
          {
            id: 4,
            title: "Trang 4: Chế độ 3D",
            image: "images/game-dev/week3/slide_4.png",
            notes: "Trong Unity 5.4, khi bạn bắt đầu một dự án mới, bạn có thể chọn làm game 2D hoặc 3D. Lựa chọn này sẽ thiết lập trình soạn thảo ở chế độ 2D hoặc 3D tương ứng.\n\n" +
              "Theo mặc định, cửa sổ <b>Scene View</b> sẽ được đặt ở chế độ xem 3D, mặc dù bạn có thể chuyển đổi sang chế độ xem 2D bất kỳ lúc nào.",
            terms: {
              "Scene View": "Cửa sổ chính trong Unity Editor nơi bạn có thể xem và tương tác với thế giới game của mình một cách trực quan. Bạn có thể di chuyển, xoay, và sắp xếp các Game Object trong cửa sổ này."
            }
          },
          // SLIDE 5: CÁC ĐỐI TƯỢNG GAME 3D (PRIMITIVE MESHES)
          {
            id: 5,
            title: "Trang 5: Các đối tượng Game 3D (Primitive Meshes)",
            image: "images/game-dev/week3/slide_5.png",
            notes: "Unity có một số lưới (meshes) nguyên thủy được định nghĩa sẵn, rất hữu ích cho việc dựng mẫu (prototyping) hoặc làm các đối tượng giữ chỗ (placeholders):\n\n" +
              "- <b>Cube:</b> Hình lập phương.\n" +
              "- <b>Sphere:</b> Hình cầu.\n" +
              "- <b>Capsule:</b> Hình con nhộng (thường dùng cho nhân vật).\n" +
              "- <b>Cylinder:</b> Hình trụ.\n" +
              "- <b>Plane:</b> Một mặt phẳng lớn, vô hạn về mặt hình ảnh.\n" +
              "- <b>Quad:</b> Một mặt phẳng hình vuông, có kích thước 1x1.",
            terms: {
              "Mesh": "Thành phần chính của một mô hình 3D, bao gồm một tập hợp các đỉnh (vertices), cạnh (edges), và mặt (faces) định nghĩa nên hình dạng của vật thể.",
              "Primitive Mesh": "Các hình dạng hình học 3D cơ bản được cung cấp sẵn bởi một game engine. Chúng là những khối xây dựng đơn giản nhất để tạo ra các đối tượng trong game."
            }
          },// Dán 5 khối mã này vào sau slide có id: 5 của Tuần 3

          // SLIDE 6: 3D TRANSFORMS
          {
            id: 6,
            title: "Trang 6: 3D Transforms",
            image: "images/game-dev/week3/slide_6.png",
            notes: "Tất cả các đối tượng game 3D đều có một component <b>Transform</b>, quyết định 3 thuộc tính cơ bản: Vị trí (Position), Góc xoay (Rotation), và Tỷ lệ (Scale).\n\n" +
              "Các thuộc tính này có thể được thiết lập trực tiếp trong Inspector hoặc được điều khiển trong cửa sổ Scene View bằng cách sử dụng các công cụ điều khiển (control gizmos) tương ứng cho Tịnh tiến, Xoay, và Tỷ lệ.",
            terms: {
              "Gizmo": "Các biểu tượng đồ họa được hiển thị trong Scene View để giúp bạn tương tác và điều khiển các đối tượng. Ví dụ, gizmo di chuyển có 3 mũi tên màu đỏ, xanh lá, và xanh dương tương ứng với các trục X, Y, Z."
            }
          },
          // SLIDE 7: VERTICES, TRIANGLES, MESHES
          {
            id: 7,
            title: "Trang 7: Vertices, Triangles, Meshes",
            image: "images/game-dev/week3/slide_7.png",
            notes: "Một <b>mesh</b> (lưới) là một tập hợp các điểm 3D (gọi là <b>vertices</b> - đỉnh), khi được kết hợp lại với nhau, sẽ định nghĩa nên sự hiện diện vật lý của một đối tượng.\n\n" +
              "Mọi mesh đều được tạo thành từ một chuỗi các <b>triangles</b> (tam giác), được xác định bởi các đỉnh của nó.\n\n" +
              "Tam giác được sử dụng vì:\n" +
              "- 3 điểm xác định một tam giác duy nhất với các cạnh không cắt nhau.\n" +
              "- 3 điểm xác định một tam giác trong một mặt phẳng duy nhất (hình dạng phẳng).",
            terms: {
              "Vertices (Đỉnh)": "Các điểm trong không gian 3D, là thành phần cơ bản nhất của một mesh. Mỗi đỉnh chứa thông tin về vị trí và có thể chứa các thông tin khác như màu sắc, tọa độ UV, và vector pháp tuyến.",
              "Triangles (Tam giác)": "Các mặt phẳng được tạo ra bằng cách nối 3 đỉnh lại với nhau. Đây là đơn vị cơ bản để xây dựng bề mặt của tất cả các mô hình 3D trong đồ họa máy tính thời gian thực."
            }
          },
          // SLIDE 8: MESH FILTER VÀ MESH RENDERER
          {
            id: 8,
            title: "Trang 8: Mesh Filter và Mesh Renderer",
            image: "images/game-dev/week3/slide_8.png",
            notes: "Để một Game Object có thể hiển thị một mesh, nó cần hai component chính:\n\n" +
              "- <b>Mesh Filter:</b> Component này lấy một mesh từ các asset của bạn và chuyển nó cho Mesh Renderer để render lên màn hình.\n" +
              "- <b>Mesh Renderer:</b> Component này lấy thông tin hình học (geometry) của đối tượng từ Mesh Filter và render nó tại vị trí được xác định bởi component Transform. Nó cũng xử lý việc đổ bóng, nhận bóng, và áp dụng các vật liệu (materials).",
            terms: {
              "Mesh Filter": "Một component chứa dữ liệu mesh của một đối tượng. Nó không tự render bất cứ thứ gì, mà chỉ giữ thông tin về hình dạng và cung cấp nó cho Mesh Renderer.",
              "Mesh Renderer": "Một component chịu trách nhiệm vẽ (render) mesh được cung cấp bởi Mesh Filter lên màn hình. Nó xử lý cách đối tượng tương tác với ánh sáng và cách nó được tô màu thông qua các Materials."
            }
          },
          // SLIDE 9: MODELS (1/2)
          {
            id: 9,
            title: "Trang 9: Models (1/2) - Giới thiệu",
            image: "images/game-dev/week3/slide_9.png",
            notes: "Một <b>model</b> (mô hình) là một mesh đã được áp dụng các vật liệu (material), texture, và shader.\n\n" +
              "<b>Các định dạng được hỗ trợ:</b>\n" +
              "Việc nhập (import) các mesh vào Unity có thể được thực hiện từ hai loại tệp chính:\n" +
              "- Các định dạng tệp 3D đã xuất (Exported), chẳng hạn như <b>.FBX</b> hoặc <b>.OBJ</b>.\n" +
              "- Các định dạng tệp ứng dụng 3D độc quyền, chẳng hạn như <b>.Max</b> (3D Studio Max) và <b>.Blend</b> (Blender).\n\n" +
              "Unity có thể đọc được các định dạng .FBX, .dae (Collada), .3DS, .dxf và .obj.",
            terms: {
              "Model (Mô hình)": "Trong ngữ cảnh game, đây là một asset đại diện cho một đối tượng 3D hoàn chỉnh, bao gồm hình dạng (mesh), bề mặt (material, texture), và đôi khi cả các animation.",
              ".FBX": "Một định dạng tệp 3D phổ biến được phát triển bởi Autodesk, được sử dụng rộng rãi trong ngành công nghiệp game để trao đổi các mô hình 3D, animation, và các dữ liệu scene khác giữa các ứng dụng.",
              ".OBJ": "Một định dạng tệp hình học 3D đơn giản, chỉ lưu trữ thông tin về hình dạng (đỉnh, mặt, UVs, pháp tuyến) của một mô hình."
            }
          },
          // SLIDE 10: MODELS (2/2)
          {
            id: 10,
            title: "Trang 10: Models (2/2) - Cấu trúc",
            image: "images/game-dev/week3/slide_10.png",
            notes: "Một mô hình được áp dụng một <b>Model Material</b>.\n\n" +
              "- Một <b>material</b> (vật liệu) có thể được xem như là 'lớp da' của mesh.\n" +
              "- Mọi mesh cần một material để có thể được nhìn thấy trên màn hình.\n" +
              "- Model material (được lưu trong một tệp) có hai phần: <b>texture</b> (họa tiết) và <b>shader</b> (trình đổ bóng).",
            terms: {
              "Material": "Một asset trong Unity định nghĩa cách một bề mặt sẽ được render. Nó kết hợp một Shader và các thuộc tính (như màu sắc, texture) để tạo ra diện mạo cuối cùng của một đối tượng.",
              "Texture": "Một tệp hình ảnh (ví dụ: .png, .jpg) được 'dán' lên bề mặt của một mô hình 3D để cung cấp chi tiết về màu sắc, hoa văn, hoặc các đặc tính bề mặt khác.",
              "Shader": "Một chương trình nhỏ chạy trên card đồ họa (GPU), quyết định các thuộc tính của pixel cuối cùng được vẽ lên màn hình. Nó tính toán màu sắc dựa trên ánh sáng, texture, và các thuộc tính khác của material."
            }
          },// Dán 5 khối mã này vào sau slide có id: 10 của Tuần 3

          // SLIDE 11: MATERIALS
          {
            id: 11,
            title: "Trang 11: Materials",
            image: "images/game-dev/week3/slide_11.png",
            notes: "Unity cung cấp một material mặc định cho mỗi mesh (một material màu xám, trơn đơn giản).\n\n" +
              "Một trong những tham số cơ bản của nó là <b>texture</b>. Một texture chỉ đơn giản là một tệp hình ảnh.\n\n" +
              "Chúng ta có thể tạo một material mới trong Unity và gán texture cho nó. Sau đó, có thể áp dụng material mới này cho đối tượng để thay đổi diện mạo của nó.",
            terms: {
              "Material": "Một asset trong Unity định nghĩa cách một bề mặt sẽ được render. Nó kết hợp một Shader và các thuộc tính (như màu sắc, texture) để tạo ra diện mạo cuối cùng của một đối tượng.",
              "Texture": "Một tệp hình ảnh (ví dụ: .png, .jpg) được 'dán' lên bề mặt của một mô hình 3D để cung cấp chi tiết về màu sắc, hoa văn, hoặc các đặc tính bề mặt khác."
            }
          },
          // SLIDE 12: SHADERS
          {
            id: 12,
            title: "Trang 12: Shaders",
            image: "images/game-dev/week3/slide_12.png",
            notes: "Shader trong Unity được sử dụng thông qua Materials. Mã shader sẽ cho material biết nó cần những thuộc tính nào (màu sắc, textures, độ trong suốt, v.v.).\n\n" +
              "Shader mặc định là <b>Standard Shader</b>, được sử dụng trong material mặc định. Đây là một shader rất linh hoạt có thể được cấu hình theo nhiều cách.\n\n" +
              "Có ba mục chính trong shader material:\n" +
              "1. <b>Rendering Mode (Chế độ render):</b>\n" +
              "   - <b>Opaque:</b> Mặc định, vật thể đặc, không trong suốt.\n" +
              "   - <b>Cutout:</b> Dùng kênh alpha của texture để 'cắt bỏ' các phần của vật thể.\n" +
              "   - <b>Fade / Transparent:</b> Làm cho vật thể trong suốt.",
            terms: {
              "Shader": "Một chương trình nhỏ chạy trên card đồ họa (GPU), quyết định các thuộc tính của pixel cuối cùng được vẽ lên màn hình. Nó tính toán màu sắc dựa trên ánh sáng, texture, và các thuộc tính khác của material.",
              "Standard Shader": "Shader mặc định, đa năng của Unity. Nó có thể tạo ra nhiều loại bề mặt khác nhau (kim loại, nhựa, kính...) chỉ bằng cách điều chỉnh các thông số của nó.",
              "Alpha Channel": "Một kênh thông tin bổ sung trong một hình ảnh, quy định độ trong suốt của mỗi pixel."
            }
          },
          // SLIDE 13: THE STANDARD SHADER
          {
            id: 13,
            title: "Trang 13: The Standard Shader",
            image: "images/game-dev/week3/slide_13.png",
            notes: "Tiếp tục với các mục trong Standard Shader:\n\n" +
              "2. <b>Main Maps (Các texture chính):</b> Các thuộc tính được định nghĩa bởi các texture map.\n" +
              "   - <b>Albedo:</b> Màu cơ bản của bề mặt, là sự kết hợp của một texture và một màu sắc.\n" +
              "   - <b>Metallic:</b> Xác định độ 'kim loại' của bề mặt.\n" +
              "   - <b>Smoothness:</b> Xác định độ mịn/nhám của bề mặt, ảnh hưởng đến sự phản chiếu.\n" +
              "   - <b>Normal Map:</b> Tạo ra ảo giác về các chi tiết lồi lõm trên bề mặt.\n" +
              "   - <b>Height Map:</b> Xác định chiều cao biểu kiến của bề mặt.\n" +
              "   - <b>Occlusion:</b> Cách bề mặt phản ứng với ánh sáng môi trường.\n" +
              "   - <b>Emission:</b> Làm cho bề mặt tự phát sáng.\n\n" +
              "3. <b>Secondary maps:</b> Để định nghĩa các chi tiết bề mặt bổ sung.\n\n" +
              "Standard Shader còn có một biến thể (Standard, Specular Setup) sử dụng <b>Specular</b> thay vì Metallic.",
            terms: {
              "Albedo": "Màu sắc cơ bản của một bề mặt, không bị ảnh hưởng bởi ánh sáng. Nó giống như màu sắc bạn thấy của một vật thể trong một căn phòng được chiếu sáng đều.",
              "Normal Map": "Một loại texture đặc biệt dùng để thêm chi tiết bề mặt mà không cần tăng số lượng đa giác của mô hình. Nó mô phỏng các vết lồi lõm nhỏ bằng cách thay đổi cách ánh sáng phản xạ trên bề mặt.",
              "Specular": "Đề cập đến sự phản chiếu ánh sáng một cách sắc nét, giống như gương. Trái ngược với 'Diffuse' là sự phản xạ khuếch tán, mờ."
            }
          },
          // SLIDE 14: SHADERS (VÍ DỤ)
          {
            id: 14,
            title: "Trang 14: Shaders (Ví dụ)",
            image: "images/game-dev/week3/slide_14.png",
            notes: "Slide này minh họa ảnh hưởng của các map khác nhau trong Standard Shader lên một hình cầu đơn giản:\n\n" +
              "- <b>Hình trên bên trái:</b> Chỉ có Albedo (màu gạch).\n" +
              "- <b>Hình trên bên phải:</b> Albedo + Metallic/Smoothness (bề mặt trông bóng hơn).\n" +
              "- <b>Hình dưới bên trái:</b> Thêm Occlusion (các khe gạch tối hơn).\n" +
              "- <b>Hình dưới bên phải:</b> Thêm Normal/Height Map (bề mặt trông lồi lõm, có chiều sâu thực sự).",
            terms: {}
          },
          // SLIDE 15: BỨC TRANH TOÀN CẢNH
          {
            id: 15,
            title: "Trang 15: Bức tranh toàn cảnh",
            image: "images/game-dev/week3/slide_15.png",
            notes: "Sơ đồ này tóm tắt mối quan hệ giữa các thành phần rendering:\n\n" +
              "1. <b>3D Model (Mesh):</b> Chứa dữ liệu hình học cơ bản như vị trí đỉnh, màu đỉnh, pháp tuyến, và dữ liệu UV (để áp texture).\n" +
              "2. <b>Material:</b> Sử dụng dữ liệu từ Model. Nó chứa các Texture và các giá trị thuộc tính của Shader (ví dụ: màu Albedo, độ mịn...).\n" +
              "3. <b>Shader:</b> Được sử dụng bởi Material. Nó chứa mã nguồn (viết bằng Cg/HLSL) để thực hiện các phép tính và cuối cùng quyết định màu sắc của từng pixel trên màn hình.",
            terms: {
              "UV data (Texture Mapping)": "Tọa độ 2D được gán cho mỗi đỉnh của một mesh 3D, cho biết phần nào của một texture 2D sẽ được 'dán' lên vị trí đó của mô hình.",
              "Cg / HLSL": "Các ngôn ngữ lập trình bậc cao được sử dụng để viết shader. Cg (C for Graphics) được phát triển bởi NVIDIA. HLSL (High-Level Shading Language) được phát triển bởi Microsoft cho DirectX."
            }
          },// Dán 5 khối mã này vào sau slide có id: 15 của Tuần 3

          // SLIDE 16: CHUYỂN TIẾP - VẬT LÝ 3D
          {
            id: 16,
            title: "Trang 16: Chuyển tiếp - Vật lý 3D",
            image: "images/game-dev/week3/slide_16.png",
            notes: "Kết thúc phần giới thiệu về các mô hình 3D.\n\n" +
              "Phần tiếp theo sẽ tập trung vào hệ thống vật lý 3D của Unity.",
            terms: {}
          },
          // SLIDE 17: VẬT LÝ 3D
          {
            id: 17,
            title: "Trang 17: Vật lý 3D",
            image: "images/game-dev/week3/slide_17.png",
            notes: "Unity có một engine vật lý riêng biệt cho tất cả các tương tác 3D trong game.\n\n" +
              "Các thành phần của engine vật lý 3D trong Unity là:\n" +
              "- <b>Rigidbodies:</b> Cho phép đối tượng có hành vi vật lý.\n" +
              "- <b>3D Colliders:</b> Các hình dạng va chạm (Box, Capsule, Mesh, Sphere...).\n" +
              "- <b>Joints (Khớp nối):</b> Dùng để kết nối các Rigidbody với nhau (Hinge, Spring, Character...).\n" +
              "- <b>Forces and Torque (Lực và Mô-men xoắn).</b>\n\n" +
              "Chúng ta cũng sẽ xem xét về Physic 3D Materials và Raycasting trong bài giảng này.",
            terms: {
              "Physics Engine": "Một phần mềm mô phỏng các định luật vật lý Newton trong môi trường ảo. Nó chịu trách nhiệm tính toán các hiệu ứng như trọng lực, va chạm, ma sát, và các lực khác."
            }
          },
          // SLIDE 18: 3D RIGIDBODY (1/3)
          {
            id: 18,
            title: "Trang 18: 3D Rigidbody (1/3) - Giới thiệu",
            image: "images/game-dev/week3/slide_18.png",
            notes: "<b>Rigidbody</b> là component chính cho phép một đối tượng có hành vi vật lý. Với một Rigidbody được gắn vào, đối tượng sẽ ngay lập tức phản ứng với trọng lực.\n\n" +
              "Khi một component Rigidbody kiểm soát chuyển động của đối tượng, bạn <b>không nên</b> cố gắng di chuyển nó từ script bằng cách thay đổi các thuộc tính của Transform như vị trí và góc xoay. Thay vào đó, bạn nên <b>áp dụng các lực</b> để đẩy đối tượng và để engine vật lý tính toán kết quả.\n\n" +
              "<b>Sleeping (Ngủ đông):</b> Khi một rigidbody di chuyển chậm hơn một tốc độ tối thiểu nhất định, engine vật lý sẽ cho rằng nó đã dừng lại và đặt nó vào chế độ 'ngủ'. Đối tượng sẽ không được cập nhật cho đến khi nhận được một va chạm hoặc một lực tác động mới. Đây là một cơ chế tối ưu hóa hiệu suất.",
            terms: {
              "Rigidbody": "Một component cho phép một Game Object được điều khiển bởi hệ thống vật lý của Unity. Nó cho phép đối tượng của bạn chịu tác động của trọng lực, va chạm với các đối tượng khác, và phản ứng với các lực được áp dụng từ script.",
              "Force": "Một tác động có thể làm thay đổi chuyển động của một vật thể. Trong Unity, bạn có thể dùng `Rigidbody.AddForce()` để đẩy một đối tượng."
            }
          },
          // SLIDE 19: 3D RIGIDBODY (2/3)
          {
            id: 19,
            title: "Trang 19: 3D Rigidbody (2/3) - Các tham số",
            image: "images/game-dev/week3/slide_19.png",
            notes: "Các tham số chính của component Rigidbody:\n\n" +
              "- <b>Mass (Khối lượng):</b> Khối lượng của đối tượng. Bạn không nên tạo ra các khối lượng chênh lệch quá lớn (hơn 100 lần) so với các Rigidbody khác.\n" +
              "- <b>Drag (Lực cản):</b> Lực cản không khí ảnh hưởng đến đối tượng khi di chuyển. 0 nghĩa là không có lực cản.\n" +
              "- <b>Angular Drag:</b> Lực cản không khí ảnh hưởng đến đối tượng khi xoay.\n" +
              "- <b>Use Gravity:</b> Nếu được bật, đối tượng sẽ bị ảnh hưởng bởi trọng lực.\n" +
              "- <b>Is Kinematic:</b> Nếu được bật, đối tượng sẽ không bị điều khiển bởi engine vật lý, và chỉ có thể được điều khiển thông qua Transform của nó.",
            terms: {
              "Mass (Khối lượng)": "Đại lượng vật lý đo lường quán tính của một vật thể. Trong Unity, khối lượng ảnh hưởng đến cách một đối tượng phản ứng với các lực và va chạm.",
              "Drag (Lực cản)": "Một lực cản trở chuyển động của một vật thể qua một chất lỏng (như không khí). Drag càng lớn, vật thể càng nhanh chóng dừng lại.",
              "Is Kinematic": "Một thuộc tính của Rigidbody. Khi bật, đối tượng sẽ không phản ứng với các lực vật lý nhưng vẫn có thể gây ra va chạm và kích hoạt trigger. Hữu ích cho các đối tượng chuyển động mà bạn muốn kiểm soát hoàn toàn bằng script (ví dụ: thang máy, cửa tự động)."
            }
          },
          // SLIDE 20: 3D RIGIDBODY (3/3)
          {
            id: 20,
            title: "Trang 20: 3D Rigidbody (3/3) - Các tham số khác",
            image: "images/game-dev/week3/slide_20.png",
            notes: "Các tham số quan trọng khác của Rigidbody:\n\n" +
              "- <b>Interpolate (Nội suy):</b> Dùng để làm mượt chuyển động của Rigidbody giữa các frame vật lý.\n" +
              "  - <b>Interpolate:</b> Làm mượt Transform dựa trên vị trí của các frame trước đó.\n" +
              "  - <b>Extrapolate:</b> Làm mượt Transform dựa trên vận tốc hiện tại.\n" +
              "- <b>Collision Detection (Phát hiện va chạm):</b>\n" +
              "  - <b>Discrete:</b> Phát hiện va chạm thông thường.\n" +
              "  - <b>Continuous:</b> Ngăn chặn các collider di chuyển nhanh đi xuyên qua nhau. Hữu ích cho các vật thể như viên đạn.\n" +
              "- <b>Constraints (Ràng buộc):</b> Cho phép 'đóng băng' chuyển động hoặc xoay của Rigidbody trên các trục X, Y, Z một cách chọn lọc.",
            terms: {
              "Interpolation (Nội suy)": "Trong vật lý game, đây là kỹ thuật dùng để làm mượt chuyển động của một đối tượng vật lý, vốn được cập nhật ở một tần suất cố định (trong FixedUpdate), để nó trông mượt mà trên màn hình, vốn được cập nhật ở một tần suất thay đổi (trong Update).",
              "Continuous Collision Detection (CCD)": "Một chế độ phát hiện va chạm chính xác hơn, được thiết kế để ngăn chặn các vật thể di chuyển với tốc độ cao đi xuyên qua các vật thể mỏng khác. Nó tốn nhiều tài nguyên hơn so với phát hiện va chạm 'Discrete'."
            }
          },

          // Dán 5 khối mã này vào sau slide có id: 20 của Tuần 3

          // SLIDE 21: 3D RIGIDBODY TRONG CODE
          {
            id: 21,
            title: "Trang 21: 3D Rigidbody trong Code",
            image: "images/game-dev/week3/slide_21.png",
            notes: "Các script nằm trong một game object có gắn rigidbody sẽ có thể truy cập đến component này thông qua lệnh gọi `GetComponent<Rigidbody>()`.\n\n" +
              "Có thể di chuyển một đối tượng có rigidbody bằng cách thay đổi vị trí, vận tốc tuyến tính, vận tốc góc, v.v. của nó. Ví dụ:\n\n" +
              "- `rigidbody.velocity`: Thiết lập vận tốc di chuyển thẳng của rigidbody.\n" +
              "- `rigidbody.angularVelocity`: Thiết lập vận tốc xoay của rigidbody.\n" +
              "- `rigidbody.position`: Thiết lập trực tiếp vị trí của rigidbody (nên dùng trong `FixedUpdate`).\n\n" +
              "Bạn cũng có thể truy cập các biến khác của component rigidbody, chẳng hạn như `drag`, `angularDrag`, `useGravity` hoặc `isKinematic`.",
            terms: {
              "rigidbody.velocity": "Một thuộc tính Vector3 của Rigidbody, đại diện cho vận tốc của đối tượng. Thay đổi giá trị này sẽ làm cho đối tượng di chuyển ngay lập tức với vận tốc mới.",
              "rigidbody.angularVelocity": "Một thuộc tính Vector3 của Rigidbody, đại diện cho vận tốc góc (tốc độ xoay) của đối tượng."
            }
          },
          // SLIDE 22: 3D COLLIDERS (1/3)
          {
            id: 22,
            title: "Trang 22: 3D Colliders (1/3) - Giới thiệu",
            image: "images/game-dev/week3/slide_22.png",
            notes: "Các component <b>Collider</b> định nghĩa hình dạng của một đối tượng cho mục đích va chạm vật lý. Một collider là vô hình, không nhất thiết phải có hình dạng giống hệt như mesh của đối tượng, và trên thực tế, một hình dạng xấp xỉ đơn giản thường hiệu quả hơn và không thể phân biệt được trong gameplay.\n\n" +
              "Có thể thêm nhiều collider vào một đối tượng duy nhất để tạo ra các <b>collider phức hợp (compound colliders)</b>.\n\n" +
              "Một quy tắc chung là sử dụng <b>mesh colliders</b> cho các vật thể tĩnh trong màn chơi (như mặt đất, tường) và sử dụng các collider nguyên thủy phức hợp để xấp xỉ hình dạng của các đối tượng chuyển động.",
            terms: {
              "Collider": "Một component định nghĩa một hình dạng (như hình hộp, hình cầu) cho mục đích va chạm vật lý. Collider không tự di chuyển, chúng chỉ là hình dạng.",
              "Compound Collider": "Một cấu trúc vật lý được tạo ra bằng cách kết hợp nhiều collider nguyên thủy (primitive colliders) trên một Game Object duy nhất (có một Rigidbody). Điều này cho phép tạo ra các hình dạng va chạm phức tạp mà vẫn hiệu quả về mặt hiệu suất.",
              "Mesh Collider": "Một loại collider lấy hình dạng của nó trực tiếp từ mesh của một mô hình 3D. Nó rất chính xác nhưng tốn nhiều tài nguyên hơn để tính toán va chạm, do đó thường chỉ nên dùng cho các vật thể tĩnh."
            }
          },
          // SLIDE 23: 3D COLLIDERS (2/3)
          {
            id: 23,
            title: "Trang 23: 3D Colliders (2/3) - Static Collider",
            image: "images/game-dev/week3/slide_23.png",
            notes: "Các collider tương tác với nhau theo những cách khác nhau tùy thuộc vào cách các component Rigidbody của chúng được cấu hình. Ba cấu hình quan trọng là:\n\n" +
              "<b>Static Collider (Collider tĩnh):</b>\n" +
              "- Là một Game Object có một Collider nhưng <b>không có</b> Rigidbody.\n" +
              "- Được sử dụng cho các hình học trong màn chơi luôn ở cùng một vị trí và không bao giờ di chuyển (ví dụ: sàn nhà, tường, tòa nhà).\n" +
              "- Các đối tượng rigidbody đang lao tới sẽ va chạm với collider tĩnh nhưng sẽ không làm nó di chuyển.\n" +
              "- Engine vật lý giả định rằng các collider tĩnh không bao giờ di chuyển và có thể thực hiện các tối ưu hóa hiệu suất dựa trên giả định này. Do đó, bạn <b>không nên</b> di chuyển, thay đổi tỷ lệ, hoặc bật/tắt các collider tĩnh trong khi game đang chạy.",
            terms: {
              "Static Collider": "Một Game Object có component Collider nhưng không có Rigidbody. Nó được coi là một vật thể bất động trong thế giới vật lý, lý tưởng cho các yếu- tố môi trường."
            }
          },
          // SLIDE 24: 3D COLLIDERS (3/3)
          {
            id: 24,
            title: "Trang 24: 3D Colliders (3/3) - Rigidbody Colliders",
            image: "images/game-dev/week3/slide_24.png",
            notes: "<b>Rigidbody Collider:</b>\n" +
              "- Là một Game Object có một Collider và một Rigidbody thông thường (non-kinematic).\n" +
              "- Các collider rigidbody được mô phỏng hoàn toàn bởi engine vật lý và có thể phản ứng với các va chạm và các lực được áp dụng từ script. Đây là cấu hình Collider được sử dụng phổ biến nhất trong các game có sử dụng vật lý.\n\n" +
              "<b>Kinematic Rigidbody Collider:</b>\n" +
              "- Là một Game Object có một Collider và một Rigidbody được đánh dấu là kinematic.\n" +
              "- Bạn có thể di chuyển một đối tượng kinematic rigidbody từ script bằng cách sửa đổi component Transform của nó, nhưng nó sẽ không phản ứng với các lực như một rigidbody non-kinematic.\n" +
              "- Nên sử dụng kinematic rigidbody cho các collider có thể được di chuyển hoặc bật/tắt đôi khi nhưng vẫn hoạt động như các collider tĩnh. Ví dụ: một cánh cửa trượt.",
            terms: {}
          },
          // SLIDE 25: 3D COLLIDERS - BOX COLLIDER
          {
            id: 25,
            title: "Trang 25: 3D Colliders - Box Collider",
            image: "images/game-dev/week3/slide_25.png",
            notes: "<b>Box Collider</b> là một collider nguyên thủy có hình dạng khối lập phương cơ bản. Nó rất hữu ích cho bất cứ thứ gì có hình dạng gần giống hình hộp, chẳng hạn như một cái thùng hoặc một cái rương. Một box collider mỏng cũng có thể được dùng làm sàn, tường hoặc dốc.\n\n" +
              "Các thuộc tính chính:\n" +
              "- <b>Is Trigger:</b> Nếu được bật, Collider này được sử dụng để kích hoạt các sự kiện và bị bỏ qua bởi engine vật lý (các vật thể khác có thể đi xuyên qua nó).\n" +
              "- <b>Material:</b> Tham chiếu đến một Physic Material, quyết định cách Collider này tương tác với các collider khác (ví dụ: độ nảy, ma sát).\n" +
              "- <b>Center / Size:</b> Vị trí tâm và kích thước của Collider trong không gian cục bộ của đối tượng.",
            terms: {
              "Is Trigger": "Một thuộc tính boolean trên một Collider. Khi được bật, collider sẽ không còn là một vật thể rắn vật lý nữa. Thay vào đó, nó sẽ hoạt động như một 'vùng cảm biến' và sẽ gọi các hàm sự kiện như `OnTriggerEnter()` khi một Rigidbody khác đi vào nó.",
              "Physic Material": "Một asset dùng để điều chỉnh các thuộc tính ma sát và độ nảy của các collider khi chúng va chạm với nhau."
            }
          },// Dán 5 khối mã này vào sau slide có id: 25 của Tuần 3

          // SLIDE 26: 3D COLLIDERS - SPHERE COLLIDER
          {
            id: 26,
            title: "Trang 26: 3D Colliders - Sphere Collider",
            image: "images/game-dev/week3/slide_26.png",
            notes: "<b>Sphere Collider</b> là một collider nguyên thủy có hình dạng hình cầu cơ bản. Collider này có thể được thay đổi kích thước thông qua thuộc tính Bán kính (Radius) nhưng không thể được co giãn không đồng đều theo ba trục.\n\n" +
              "Ngoài việc sử dụng cho các vật thể hình cầu như quả bóng tennis, hình cầu cũng hoạt động tốt cho các tảng đá rơi và các vật thể khác cần lăn và nhào lộn.",
            terms: {
              "Sphere Collider": "Một component va chạm cơ bản có hình dạng hình cầu. Nó rất hiệu quả về mặt hiệu suất cho việc tính toán va chạm."
            }
          },
          // SLIDE 27: 3D COLLIDERS - CAPSULE COLLIDER
          {
            id: 27,
            title: "Trang 27: 3D Colliders - Capsule Collider",
            image: "images/game-dev/week3/slide_27.png",
            notes: "<b>Capsule Collider</b> được tạo thành từ hai nửa hình cầu được nối với nhau bằng một hình trụ. Nó có hình dạng giống như primitive Capsule.\n\n" +
              "Đây là loại collider rất phổ biến để sử dụng cho các nhân vật, vì hình dạng tròn ở đáy giúp nhân vật không dễ bị mắc kẹt vào các cạnh của chướng ngại vật trên mặt đất.",
            terms: {
              "Capsule Collider": "Một component va chạm có hình dạng con nhộng. Đây là lựa chọn hàng đầu cho các collider của nhân vật trong cả game 2D và 3D."
            }
          },
          // SLIDE 28: 3D COLLIDERS - MESH COLLIDER (1/2)
          {
            id: 28,
            title: "Trang 28: 3D Colliders - Mesh Collider (1/2)",
            image: "images/game-dev/week3/slide_28.png",
            notes: "<b>Mesh Collider</b> lấy một Mesh Asset và xây dựng Collider của nó dựa trên mesh đó. Nó chính xác hơn nhiều cho việc phát hiện va chạm so với các collider nguyên thủy đối với các mesh phức tạp.\n\n" +
              "Theo mặc định, các collider nguyên thủy không va chạm với các Mesh Collider khác. Mesh Collider tốn nhiều tài nguyên tính toán hơn các loại collider nguyên thủy, vì vậy tốt nhất là sử dụng chúng một cách tiết kiệm.",
            terms: {
              "Mesh Collider": "Một loại collider lấy hình dạng của nó trực tiếp từ mesh của một mô hình 3D. Nó rất chính xác nhưng tốn nhiều tài nguyên hơn để tính toán va chạm, do đó thường chỉ nên dùng cho các vật thể tĩnh."
            }
          },
          // SLIDE 29: 3D COLLIDERS - MESH COLLIDER (2/2)
          {
            id: 29,
            title: "Trang 29: 3D Colliders - Mesh Collider (2/2)",
            image: "images/game-dev/week3/slide_29.png",
            notes: "Các thuộc tính của Mesh Collider:\n\n" +
              "- <b>Convex:</b> Đặt thành `true` nếu collider không có lỗ hổng hoặc lối vào. Nếu được bật, Mesh Collider này sẽ có thể va chạm với các Mesh Collider khác. Các Convex Mesh Collider bị giới hạn ở 255 tam giác và cần phải là convex để hoạt động với một rigidbody.\n" +
              "- <b>Is Trigger:</b> Nếu được bật, collider này được sử dụng để kích hoạt các sự kiện. Chức năng trigger trong mesh collider chỉ có thể thực hiện được nếu collider được đánh dấu là convex.",
            terms: {
              "Convex (Lồi)": "Một hình dạng được coi là lồi nếu một đường thẳng nối hai điểm bất kỳ bên trong hình dạng đó cũng nằm hoàn toàn bên trong hình dạng đó. Hình cầu, hình hộp là lồi; hình bánh donut (có lỗ ở giữa) là không lồi (concave). Engine vật lý xử lý va chạm giữa các vật thể lồi hiệu quả hơn nhiều."
            }
          },
          // SLIDE 30: 3D COLLIDERS - TERRAIN COLLIDER
          {
            id: 30,
            title: "Trang 30: 3D Colliders - Terrain Collider",
            image: "images/game-dev/week3/slide_30.png",
            notes: "<b>Terrain Collider</b> lấy một đối tượng Địa hình (Terrain) và xây dựng Collider của nó dựa trên địa hình đó.\n\n" +
              "Các thuộc tính chính:\n" +
              "- <b>Is Trigger:</b> Nếu được bật, collider này được sử dụng để kích hoạt các sự kiện.\n" +
              "- <b>Terrain Data:</b> Dữ liệu địa hình.\n" +
              "- <b>Create Tree Colliders:</b> Khi được chọn, các collider cho cây cối trên địa hình sẽ được tạo ra.",
            terms: {
              "Terrain": "Một hệ thống trong Unity cho phép bạn tạo ra các cảnh quan rộng lớn. Bạn có thể điêu khắc địa hình, vẽ texture, và thêm cây cối, cỏ.",
              "Terrain Collider": "Một component va chạm đặc biệt lấy dữ liệu hình dạng của nó từ một asset Terrain. Nó được tối ưu hóa cao cho các địa hình lớn."
            }
          },

          // SLIDE 31: 3D COLLIDERS - WHEEL COLLIDER
          {
            id: 31,
            title: "Trang 31: 3D Colliders - Wheel Collider",
            image: "images/game-dev/week3/slide_31.png",
            notes: "<b>Wheel Collider</b> là một collider đặc biệt dành cho các phương tiện trên mặt đất. Nó có sẵn các tính năng phát hiện va chạm, vật lý bánh xe, và một mô hình ma sát lốp dựa trên độ trượt.\n\n" +
              "Nó có thể được sử dụng cho các vật thể khác ngoài bánh xe, nhưng nó được thiết kế đặc biệt cho các phương tiện có bánh xe.",
            terms: {
              "Wheel Collider": "Một component vật lý đặc biệt trong Unity mô phỏng một bánh xe. Nó không chỉ xử lý va chạm mà còn cả hệ thống treo (suspension) và ma sát của lốp xe."
            }
          },
          // SLIDE 32: COLLIDERS AS TRIGGERS
          {
            id: 32,
            title: "Trang 32: Colliders as Triggers",
            image: "images/game-dev/week3/slide_32.png",
            notes: "Các collider được đặt làm <b>triggers</b> sẽ <b>không</b> tham gia vào các va chạm vật lý. Thay vào đó, chúng hoạt động như những vùng cảm biến.\n\n" +
              "Nếu một va chạm xảy ra với một trigger 3D collider, các thông điệp sau sẽ được gửi:\n" +
              "- <b>OnTriggerEnter(Collider other):</b> Gửi khi một collider khác đi vào trigger.\n" +
              "- <b>OnTriggerExit(Collider other):</b> Gửi khi một collider khác rời khỏi trigger.\n" +
              "- <b>OnTriggerStay(Collider other):</b> Gửi một lần mỗi frame cho mỗi collider đang chạm vào trigger.\n\n" +
              "Ngược lại, một collider 3D không được thiết lập làm trigger sẽ tham gia vào các va chạm vật lý, gửi các thông điệp `OnCollisionEnter`, `OnCollisionExit`, và `OnCollisionStay`.",
            terms: {
              "Trigger": "Một collider được cấu hình để phát hiện khi các đối tượng khác đi vào không gian của nó, thay vì gây ra một va chạm vật lý. Rất hữu ích để kích hoạt các sự kiện trong game (ví dụ: mở cửa, kích hoạt một đoạn cắt cảnh)."
            }
          },
          // SLIDE 33: CÁC LỰC (FORCES)
          {
            id: 33,
            title: "Trang 33: Các lực (Forces)",
            image: "images/game-dev/week3/slide_33.png",
            notes: "<b>Lực (Force)</b> là bất kỳ tương tác nào có xu hướng làm thay đổi chuyển động của một vật thể. Trong Unity, các lực được biểu diễn dưới dạng vector, và có thể là tuyến tính (được gọi đơn giản là Force) hoặc quay (được gọi là Torque).\n\n" +
              "Sự khác biệt lớn nhất giữa việc điều khiển Transform và Rigidbody là việc sử dụng các lực: rigidbody có thể nhận lực và mô-men xoắn, nhưng Transform thì không.\n\n" +
              "<b>Quan trọng:</b> Thay đổi Transform trong khi đang sử dụng vật lý có thể gây ra các vấn đề với va chạm và các tính toán khác.\n\n" +
              "Trong một script, hàm <b>FixedUpdate</b> được khuyến nghị là nơi để áp dụng các lực và thay đổi cài đặt của Rigidbody, vì các cập nhật vật lý được thực hiện theo các bước thời gian đo lường không trùng với cập nhật khung hình.",
            terms: {
              "Force (Lực)": "Một tác động có thể làm thay đổi chuyển động của một vật thể. Trong Unity, bạn có thể dùng `Rigidbody.AddForce()` để đẩy một đối tượng."
            }
          },
          // SLIDE 34: ADDFORCE
          {
            id: 34,
            title: "Trang 34: AddForce",
            image: "images/game-dev/week3/slide_34.png",
            notes: "Hàm `Rigidbody.AddForce()` dùng để áp dụng một lực lên Rigidbody.\n\n" +
              "Tham số <b>ForceMode</b> chỉ định cách lực được áp dụng:\n" +
              "- <b>ForceMode.Force:</b> Áp dụng một lực liên tục có tính đến khối lượng của đối tượng. Tốt cho các lực đẩy liên tục như động cơ tên lửa.\n" +
              "- <b>ForceMode.Acceleration:</b> Áp dụng một gia tốc liên tục, bỏ qua khối lượng. Chuyển động không phụ thuộc vào khối lượng.\n" +
              "- <b>ForceMode.Impulse:</b> Áp dụng một lực tức thời (xung lực), có tính đến khối lượng. Tốt cho các vụ nổ hoặc va chạm.\n" +
              "- <b>ForceMode.VelocityChange:</b> Áp dụng một thay đổi vận tốc tức thời, bỏ qua khối lượng.",
            terms: {
              "Rigidbody.AddForce()": "Phương thức chính để áp dụng một lực lên một Rigidbody, làm cho nó di chuyển và xoay theo các quy tắc vật lý.",
              "ForceMode": "Một Enum xác định cách một lực được áp dụng lên một Rigidbody. Các lựa chọn khác nhau cho phép mô phỏng các loại tác động khác nhau (liên tục, tức thời, có hoặc không có ảnh hưởng của khối lượng)."
            }
          },
          // SLIDE 35: ADDTORQUE
          {
            id: 35,
            title: "Trang 35: AddTorque",
            image: "images/game-dev/week3/slide_35.png",
            notes: "<b>Torque (Mô-men xoắn)</b> là xu hướng của một lực làm quay một vật thể quanh một trục. Hàm <b>AddTorque</b> thêm một lực mô-men xoắn vào một Rigidbody, làm cho nó bắt đầu quay quanh trục `torque`.\n\n" +
              "Lực được áp dụng theo quy tắc 'vít tay trái' (left hand screw rule).",
            terms: {
              "Rigidbody.AddTorque()": "Phương thức chính để áp dụng một mô-men xoắn (lực xoay) lên một Rigidbody, làm cho nó bắt đầu quay.",
              "Torque (Mô-men xoắn)": "Một lực xoắn gây ra sự thay đổi trong chuyển động quay của một vật thể. Trong Unity, bạn có thể áp dụng torque cho một Rigidbody để làm nó quay."
            }
          },
          // Dán 5 khối mã này vào sau slide có id: 35 của Tuần 3

          // SLIDE 36: CÁC LỰC KHÁC ĐỂ THÊM
          {
            id: 36,
            title: "Trang 36: Các lực khác để thêm",
            image: "images/game-dev/week3/slide_36.png",
            notes: "Ngoài `AddForce`, Rigidbody còn có các phương thức khác để áp dụng lực:\n\n" +
              "<b>AddRelativeForce:</b>\n" +
              "Thêm một lực vào rigidbody tương đối với hệ tọa độ <b>cục bộ (local)</b> của nó. Ví dụ, áp dụng một lực theo `Vector3.forward` sẽ luôn đẩy đối tượng về phía trước của chính nó, bất kể nó đang xoay về hướng nào.\n\n" +
              "<b>AddForceAtPosition:</b>\n" +
              "Áp dụng một `force` tại một `position`. Kết quả là nó sẽ áp dụng cả một mô-men xoắn và một lực lên đối tượng. Để có hiệu ứng chân thực, vị trí nên nằm gần bề mặt của rigidbody. Thường được sử dụng nhất cho các vụ nổ.",
            terms: {
              "Rigidbody.AddRelativeForce()": "Một phương thức áp dụng lực lên Rigidbody trong không gian tọa độ cục bộ của nó. Rất hữu ích cho việc điều khiển các phương tiện như tàu vũ trụ hoặc xe hơi.",
              "Rigidbody.AddForceAtPosition()": "Một phương thức áp dụng lực tại một điểm cụ thể trên Rigidbody, gây ra cả chuyển động tịnh tiến và chuyển động quay. Lý tưởng để mô phỏng các vụ nổ hoặc các tác động lực không đồng đều."
            }
          },
          // SLIDE 37: CONSTANT FORCE
          {
            id: 37,
            title: "Trang 37: Constant Force",
            image: "images/game-dev/week3/slide_37.png",
            notes: "<b>Constant Force</b> là một component có thể được thêm vào một game object có Rigidbody.\n\n" +
              "Trong khi `AddForce` chỉ áp dụng một lực trong một frame duy nhất (do đó bạn phải gọi hàm liên tục), `Constant Force` sẽ áp dụng lực ở <b>mỗi frame</b> cho đến khi bạn thay đổi giá trị lực hoặc mô-men xoắn thành một giá trị mới.\n\n" +
              "Component này cho phép bạn thiết lập các lực và mô-men xoắn liên tục trong cả không gian thế giới (world space) và không gian cục bộ (local space).",
            terms: {
              "Constant Force": "Một component tiện lợi dùng để áp dụng một lực hoặc mô-men xoắn không đổi lên một Rigidbody ở mỗi bước vật lý, mà không cần viết mã trong `FixedUpdate`."
            }
          },
          // SLIDE 38: PHYSICS MATERIALS (1/2)
          {
            id: 38,
            title: "Trang 38: Physics Materials (1/2)",
            image: "images/game-dev/week3/slide_38.png",
            notes: "<b>Physics Material</b> được sử dụng để điều chỉnh các hiệu ứng ma sát và độ nảy của các đối tượng va chạm. Chúng được gán vào component Collider của một game object.\n\n" +
              "- <b>Dynamic Friction (Ma sát động):</b> Ma sát được sử dụng khi đối tượng đã đang di chuyển. Giá trị từ 0 đến 1. Giá trị 0 cảm giác như băng, giá trị 1 sẽ làm cho nó dừng lại rất nhanh.\n" +
              "- <b>Static Friction (Ma sát tĩnh):</b> Ma sát được sử dụng khi một đối tượng đang nằm yên trên một bề mặt. Giá trị từ 0 đến 1. Giá trị 1 sẽ làm cho việc bắt đầu di chuyển đối tượng trở nên rất khó khăn.\n" +
              "- <b>Bounciness (Độ nảy):</b> Bề mặt nảy như thế nào. Giá trị 0 sẽ không nảy, giá trị 1 sẽ nảy lên mà không mất năng lượng.",
            terms: {
              "Physic Material": "Một asset dùng để điều chỉnh các thuộc tính ma sát và độ nảy của các collider khi chúng va chạm với nhau.",
              "Friction (Ma sát)": "Lực cản lại chuyển động tương đối giữa các bề mặt tiếp xúc. Ma sát tĩnh ngăn cản vật thể bắt đầu di chuyển, trong khi ma sát động làm chậm vật thể đang di chuyển.",
              "Bounciness (Độ nảy)": "Một thuộc tính xác định mức độ đàn hồi của một vụ va chạm. Giá trị cao hơn sẽ làm cho các vật thể nảy ra xa nhau hơn sau khi va chạm."
            }
          },
          // SLIDE 39: PHYSICS MATERIALS (2/2)
          {
            id: 39,
            title: "Trang 39: Physics Materials (2/2)",
            image: "images/game-dev/week3/slide_39.png",
            notes: "Các thuộc tính kết hợp của Physics Material:\n\n" +
              "- <b>Friction Combine:</b> Cách ma sát của hai đối tượng va chạm được kết hợp với nhau (Lấy trung bình, Lấy giá trị nhỏ nhất, Lấy giá trị lớn nhất, Nhân với nhau).\n" +
              "- <b>Bounce Combine:</b> Cách độ nảy của hai đối tượng va chạm được kết hợp với nhau. Có các chế độ tương tự như Friction Combine.\n\n" +
              "Các thuộc tính ma sát theo hướng cụ thể:\n" +
              "- <b>Friction Direction 2:</b> Ma sát cụ thể cho một hướng cụ thể.\n" +
              "- <b>Dynamic Friction 2 / Static Friction 2:</b> Ma sát động/tĩnh dọc theo `Friction Direction 2`.",
            terms: {}
          },
          // SLIDE 40: JOINTS (1/2)
          {
            id: 40,
            title: "Trang 40: Joints (1/2) - Giới thiệu",
            image: "images/game-dev/week3/slide_40.png",
            notes: "<b>Joints (Khớp nối)</b> được sử dụng để hạn chế chuyển động của một đối tượng sao cho nó phụ thuộc vào một đối tượng khác. Sự phụ thuộc này được thực hiện bởi vật lý, thay vì phân cấp đối tượng (parenting).\n\n" +
              "<b>Fixed Joint (Khớp cố định):</b>\n" +
              "Được sử dụng để làm cho hai đối tượng dính chặt vào nhau. Cả hai đối tượng phải có component Rigidbody.\n" +
              "- <b>Connected Body:</b> Tham chiếu (tùy chọn) đến Rigidbody mà khớp nối phụ thuộc vào. Nếu không được đặt, khớp nối sẽ kết nối với thế giới.\n" +
              "- <b>Break Force / Break Torque:</b> Lực/Mô-men xoắn cần thiết để làm gãy khớp nối này.",
            terms: {
              "Joint": "Một component vật lý cho phép một Rigidbody được ràng buộc với một Rigidbody khác hoặc một điểm cố định trong không gian. Joints rất cần thiết để tạo ra các cơ chế phức tạp như cửa bản lề, dây xích, hệ thống treo xe..."
            }
          },

          // Dán 5 khối mã này vào sau slide có id: 40 của Tuần 3

          // SLIDE 41: JOINTS (2/2)
          {
            id: 41,
            title: "Trang 41: Joints (2/2) - Các loại khác",
            image: "images/game-dev/week3/slide_41.png",
            notes: "Một số loại khớp nối (Joints) phổ biến khác:\n\n" +
              "- <b>Spring Joint:</b> Nối hai Rigidbody với nhau, ràng buộc chúng di chuyển giống như được kết nối bằng một lò xo.\n" +
              "- <b>Hinge Joint:</b> Nối hai Rigidbody với nhau, ràng buộc chúng di chuyển giống như được kết nối bằng một bản lề. Rất phù hợp cho cửa ra vào, cũng có thể được dùng để mô hình hóa dây xích, con lắc, v.v.\n" +
              "- <b>Character Joint:</b> Nối hai Rigidbody với nhau, giới hạn góc xoay của chúng với nhau. Chủ yếu được sử dụng cho hiệu ứng Ragdoll.\n" +
              "- <b>Configurable Joint:</b> Một khớp nối có thể tùy chỉnh hoàn toàn, cho phép hạn chế và tăng tốc chuyển động/xoay của các Rigidbody được gắn vào.",
            terms: {
              "Ragdoll": "Một loại animation vật lý thủ tục, thường được sử dụng khi một nhân vật chết. Thay vì một animation được làm sẵn, cơ thể của nhân vật sẽ trở thành một tập hợp các Rigidbody được nối với nhau bằng các khớp, làm cho nó ngã xuống một cách chân thực theo các định luật vật lý."
            }
          },
          // SLIDE 42: RAYCASTING (1/3)
          {
            id: 42,
            title: "Trang 42: Raycasting (1/3) - Giới thiệu",
            image: "images/game-dev/week3/slide_42.png",
            notes: "Một <b>tia (ray)</b> là một đường thẳng vô hạn bắt đầu từ một điểm gốc và đi theo một hướng nào đó.\n\n" +
              "Một <b>raycast</b> là một thủ tục bao gồm việc 'bắn' một tia vào tất cả hoặc một số collider nhất định trong scene. Unity cung cấp hàm static `Physics.Raycast`.\n\n" +
              "Các tham số chính:\n" +
              "- <b>ray:</b> Điểm bắt đầu và hướng của tia.\n" +
              "- <b>distance:</b> Chiều dài của tia.\n" +
              "- <b>hitInfo:</b> Nếu raycast thành công, biến này sẽ chứa thông tin về nơi va chạm.\n" +
              "- <b>layerMask:</b> Dùng để chọn lọc bỏ qua các collider khi bắn tia.\n\n" +
              "`Physics.Raycast` trả về `true` nếu tia giao với một collider, và `false` nếu không.",
            terms: {
              "Raycasting": "Quá trình 'bắn' ra một tia ảo theo một hướng nhất định để phát hiện xem nó có va chạm với Collider nào trên đường đi hay không. Rất hữu ích cho việc xác định tầm nhìn, bắn súng, tương tác với đối tượng...",
              "RaycastHit": "Một struct chứa thông tin chi tiết về một va chạm được trả về từ một hàm Raycast (ví dụ: điểm va chạm, khoảng cách, collider đã va chạm)."
            }
          },
          // SLIDE 43: RAYCASTING (2/3)
          {
            id: 43,
            title: "Trang 43: Raycasting (2/3) - RaycastHit & LayerMasks",
            image: "images/game-dev/week3/slide_43.png",
            notes: "<b>RaycastHit</b> là một struct được sử dụng để lấy thông tin trả về từ một raycast. Một số trường thông tin của nó bao gồm:\n" +
              "- `collider`: Collider đã bị bắn trúng.\n" +
              "- `distance`: Khoảng cách từ gốc của tia đến điểm va chạm.\n" +
              "- `normal`: Vector pháp tuyến của bề mặt mà tia đã bắn trúng.\n" +
              "- `point`: Điểm trong không gian thế giới nơi va chạm xảy ra.\n\n" +
              "<b>LayerMasks:</b> Bằng cách định nghĩa một layer mask, bạn có thể xác định các collider trong các layer cụ thể sẽ bị ảnh hưởng bởi raycast. Raycast với một mask được cung cấp sẽ chỉ bắn trúng các collider được gán cho các layer đó.",
            terms: {
              "LayerMask": "Một mặt nạ bit dùng để lọc các Game Object theo Layer của chúng. Thường được sử dụng trong Raycasting và Camera Culling để chỉ tương tác với các layer mong muốn."
            }
          },
          // SLIDE 44: RAYCASTING (3/3)
          {
            id: 44,
            title: "Trang 44: Raycasting (3/3) - Ví dụ",
            image: "images/game-dev/week3/slide_44.png",
            notes: "Ví dụ này minh họa cách thực hiện một raycast để bắn súng:\n\n" +
              "1. <b>Chuẩn bị:</b> Khai báo một biến `RaycastHit`, `range` (tầm bắn), `LayerMask` (chỉ bắn vào những thứ có thể bắn được), và một `Ray`.\n" +
              "2. <b>Thiết lập Ray:</b> Đặt gốc của tia tại vị trí của súng và hướng của tia là hướng về phía trước của súng.\n" +
              "3. <b>Thực hiện Raycast:</b> Gọi `Physics.Raycast`, truyền vào ray, `hitInfo` (với từ khóa `out`), tầm bắn, và layer mask.\n" +
              "4. <b>Xử lý kết quả:</b> Nếu hàm trả về `true` (bắn trúng), lấy component `EnemyHealth` từ collider đã bị bắn trúng và gây sát thương. Đồng thời, vẽ một đường `LineRenderer` đến điểm va chạm. Nếu không trúng, vẽ đường line đến hết tầm bắn.",
            terms: {
              "out (keyword)": "Một từ khóa tham số cho phép một phương thức trả về nhiều hơn một giá trị. Biến được truyền vào với từ khóa 'out' không cần được khởi tạo trước, nhưng phương thức bắt buộc phải gán một giá trị cho nó.",
              "LineRenderer": "Một component trong Unity dùng để vẽ các đường thẳng trong không gian 3D. Rất hữu ích để hiển thị các tia laser, đường đạn, hoặc các đường dẫn."
            }
          },
          // SLIDE 45: COMPONENT ĐẶC BIỆT - CHARACTER CONTROLLER (1/2)
          {
            id: 45,
            title: "Trang 45: Character Controller (1/2)",
            image: "images/game-dev/week3/slide_45.png",
            notes: "<b>Character Controller</b> là một component đặc biệt dành cho các đối tượng nhân vật. Trong khi Rigidbody cung cấp vật lý <b>đáng tin cậy</b>, đôi khi bạn không muốn điều đó (ví dụ: nhân vật di chuyển với tốc độ cao và nhảy những khoảng cách không tưởng).\n\n" +
              "Một đối tượng với component Character Controller:\n" +
              "- <b>Không</b> phản ứng với các lực (thực tế, không nên dùng nó cùng với một Rigidbody).\n" +
              "- <b>Không</b> áp dụng lực cho các rigidbody khác.\n" +
              "- Tự động bao gồm một <b>Capsule Collider</b>, do đó nó phản ứng với các va chạm.",
            terms: {
              "Character Controller": "Một component cung cấp một cách di chuyển nhân vật đơn giản, không dựa trên vật lý thực tế. Nó cho phép bạn dễ dàng tạo ra các chuyển động giống như trong các game platformer hoặc FPS mà không cần phải xử lý các lực phức tạp của Rigidbody."
            }
          },

          // Dán 5 khối mã này vào sau slide có id: 45 của Tuần 3

          // SLIDE 46: COMPONENT ĐẶC BIỆT - CHARACTER CONTROLLER (2/2)
          {
            id: 46,
            title: "Trang 46: Character Controller (2/2)",
            image: "images/game-dev/week3/slide_46.png",
            notes: "Ở cấp độ Scripting, component Character Controller bao gồm một số hàm/biến/thông điệp hữu ích:\n\n" +
              "- <b>isGrounded:</b> Cho biết controller có đang chạm đất trong frame này hay không.\n" +
              "- <b>velocity:</b> Vận tốc hiện tại của controller.\n" +
              "- <b>SimpleMove(Vector3)</b> và <b>Move(Vector3):</b> Dùng để di chuyển nhân vật.\n" +
              "- <b>OnControllerColliderHit:</b> Được gọi khi va chạm với một collider khác, nếu game object này đang thực hiện một lệnh Move().\n\n" +
              "<b>Sự khác biệt giữa `SimpleMove` và `Move`:</b>\n" +
              "- <b>SimpleMove:</b> Di chuyển trên trục XZ, tự động áp dụng trọng lực. Tốc độ tính bằng <i>mét trên giây</i>.\n" +
              "- <b>Move:</b> Di chuyển trên trục XYZ, <b>không</b> tự động áp dụng trọng lực. Tốc độ tính bằng <i>mét</i> (cần nhân với Time.deltaTime để di chuyển mượt mà).",
            terms: {
              "CharacterController.isGrounded": "Một thuộc tính boolean trả về `true` nếu controller đang chạm vào một collider bên dưới nó. Rất hữu ích để kiểm tra xem nhân vật có thể nhảy hay không.",
              "CharacterController.SimpleMove()": "Một hàm đơn giản để di chuyển nhân vật. Nó nhận vào vận tốc mong muốn, tự động áp dụng trọng lực và đảm bảo nhân vật trượt dọc theo các bề mặt dốc.",
              "CharacterController.Move()": "Một hàm mạnh mẽ hơn `SimpleMove`. Nó di chuyển controller một khoảng cách nhất định nhưng không tự động áp dụng trọng lực, cho phép bạn tự lập trình các hành vi vật lý phức tạp hơn như nhảy."
            }
          },
          // SLIDE 47: CÁC THÓI QUEN TỐT NHẤT VỀ VẬT LÝ (1/2)
          {
            id: 47,
            title: "Trang 47: Các thói quen tốt nhất về Vật lý (1/2)",
            image: "images/game-dev/week3/slide_47.png",
            notes: "<b>Layers và ma trận va chạm:</b>\n" +
              "- Theo mặc định, mọi thứ va chạm với mọi thứ, điều này khá kém hiệu quả. <b>Mẹo:</b> Gán các đối tượng vào các layer và vô hiệu hóa các va chạm không cần thiết trong ma trận va chạm.\n\n" +
              "<b>Raycast:</b>\n" +
              "- Raycasting rất mạnh mẽ nhưng là một hoạt động tốn kém. <b>Mẹo:</b>\n" +
              "  - Sử dụng số lượng tia ít nhất có thể.\n" +
              "  - Đặt khoảng cách giới hạn nếu có thể.\n" +
              "  - Không sử dụng Raycast bên trong hàm `FixedUpdate()`.\n" +
              "  - Sử dụng một collider đơn giản hơn để xấp xỉ thay vì raycast vào các mesh collider phức tạp.\n" +
              "  - Chỉ định một layer mask để giới hạn số lượng va chạm mà raycast kiểm tra.",
            terms: {
              "Bitwise operators (Toán tử bit)": "Các toán tử hoạt động trên các bit riêng lẻ của một số (ví dụ: `<<` dịch trái, `~` đảo bit). Chúng rất hiệu quả để làm việc với LayerMask."
            }
          },
          // SLIDE 48: CÁC THÓI QUEN TỐT NHẤT VỀ VẬT LÝ (2/2)
          {
            id: 48,
            title: "Trang 48: Các thói quen tốt nhất về Vật lý (2/2)",
            image: "images/game-dev/week3/slide_48.png",
            notes: "<b>Mẹo về Rigidbody:</b>\n\n" +
              "- Các game object không có component Rigidbody được coi là <b>static colliders</b>. Việc cố gắng di chuyển các static collider là cực kỳ kém hiệu quả, vì nó buộc engine vật lý phải tính toán lại toàn bộ thế giới vật lý.\n" +
              "- Việc một Rigidbody có Khối lượng (Mass) lớn hơn không làm cho nó rơi tự do nhanh hơn. Hãy sử dụng Lực cản (Drag) cho việc đó.\n" +
              "- Nếu bạn đang điều khiển trực tiếp Transform của đối tượng nhưng vẫn muốn va chạm và nhận thông điệp trigger, hãy gắn một Rigidbody và đặt nó thành <b>Kinematic</b>.\n" +
              "- Bạn không thể làm một đối tượng ngừng quay chỉ bằng cách đặt Angular Drag của nó thành vô cực.",
            terms: {}
          },
          // SLIDE 49: CHUYỂN TIẾP - CÂU HỎI & DEMO LAB
          {
            id: 49,
            title: "Trang 49: Chuyển tiếp - Câu hỏi & Demo Lab",
            image: "images/game-dev/week3/slide_49.png",
            notes: "Kết thúc phần lý thuyết về Vật lý 3D.\n\n" +
              "Phần cuối cùng sẽ là các câu hỏi kiểm tra và xem trước nội dung buổi thực hành (Lab).",
            terms: {}
          },
          // SLIDE 50: XEM TRƯỚC BUỔI THỰC HÀNH
          {
            id: 50,
            title: "Trang 50: Xem trước buổi thực hành",
            image: "images/game-dev/week3/slide_50.png",
            notes: "Trong buổi thực hành này và tuần tới, bạn sẽ tạo ra một game 3D.\n\n" +
              "- Game sẽ là một game bắn súng không gian 3D, mặc dù nó chỉ mở rộng trong hai chiều khi nhìn từ trên xuống.\n" +
              "- Bạn sẽ học cách thiết lập một dự án, tạo một scene, đặt các game object, xử lý input để di chuyển người chơi, v.v.\n\n" +
              "Bài giảng tiếp theo: <b>Cameras, Audio, Lights and Shadows</b>.",
            terms: {}
          },

        ]
      }
    ]
  },

  // ... bên trong đối tượng coursesData
  "computer_vision": {
    title: "Nhập môn Thị giác Máy tính",
    description: "Khám phá cách máy tính 'nhìn' và phân tích hình ảnh, từ nhận diện vật thể đến xử lý ảnh cơ bản.",
    thumbnail: "images/computer-vision.webp",
    sections: [
      {
        title: "Tuần 1: Giới thiệu và các khái niệm cơ bản",
        slides: [
          {
            id: 1,
            title: "Trang 1: Bìa môn học",
            image: "images/cv/week1/Slide1.PNG",
            notes: "Bài giảng giới thiệu môn Thị giác Máy tính.\n\n" +
              "<b>Giảng viên:</b> Phạm Văn Huy, Ph.D.\n" +
              "<b>Khoa:</b> Công nghệ thông tin, Đại học Tôn Đức Thắng, TP.HCM.",
            terms: {}
          },
          {
            id: 2,
            title: "Trang 2: Yêu cầu môn học",
            image: "images/cv/week1/Slide2.PNG",
            notes: "Slide này giới thiệu về các yêu cầu và cách tính điểm của môn học:\n\n" +
              "<b>Bài tập về nhà (Homework - 20%):</b>\n" +
              "- Gồm 2 bài, làm theo nhóm ngẫu nhiên.\n" +
              "- Yêu cầu: Chuẩn bị ở nhà, thuyết trình trên lớp (10 phút), và code (sử dụng OpenCV, Python, Tensorflow/Keras/Pytorch...).\n\n" +
              "<b>Thuyết trình (Presentation - 20%):</b>\n" +
              "- Làm cá nhân vào Tuần 10.\n" +
              "- Yêu cầu: Tài liệu hóa tất cả bài tập về nhà dưới dạng báo cáo và thuyết trình trên lớp.\n\n" +
              "<b>Dự án cuối kỳ (Final Project - 50%):</b>\n" +
              "- Làm theo nhóm vào Tuần 12-15.\n" +
              "- Có hai lựa chọn: Ứng dụng thực tế hoặc Nghiên cứu lý thuyết.\n\n" +
              "<b>Lưu ý quan trọng:</b> KHÔNG THUYẾT TRÌNH THEO KIỂU ĐỌC - PHẢI GIẢI THÍCH.",
            terms: {
              "OpenCV": "Một thư viện mã nguồn mở hàng đầu cho các ứng dụng thị giác máy tính, xử lý ảnh và học máy.",
              "TensorFlow": "Một nền tảng mã nguồn mở end-to-end cho học máy, được phát triển bởi Google.",
              "PyTorch": "Một thư viện học máy mã nguồn mở dựa trên Torch, được sử dụng cho các ứng dụng như thị giác máy tính và xử lý ngôn ngữ tự nhiên."
            }
          },
          {
            id: 3,
            title: "Trang 3: Thị giác Máy tính là gì?",
            image: "images/cv/week1/Slide3.PNG",
            notes: "Thị giác máy tính là một lĩnh vực của Trí tuệ nhân tạo (AI), cho phép máy móc diễn giải và xử lý dữ liệu hình ảnh tương tự như thị giác của con người.\n\n" +
              "<b>Hệ thống thị giác của con người:</b>\n" +
              "- Mắt (Eye): Cảm biến để thu nhận hình ảnh từ môi trường.\n" +
              "- Não (Brain): Chịu trách nhiệm diễn giải để hiểu nội dung hình ảnh.\n\n" +
              "<b>Hệ thống thị giác máy tính:</b>\n" +
              "- Đầu vào (Input): Hình ảnh.\n" +
              "- Thiết bị cảm biến (Sensing device): Camera.\n" +
              "- Thiết bị diễn giải (Interpreting device): Máy tính.\n" +
              "- Đầu ra (Output): Dữ liệu có ý nghĩa (ví dụ: tên các vật thể).",
            terms: {
              "Computer Vision (Thị giác Máy tính)": "Một lĩnh vực của khoa học máy tính và trí tuệ nhân tạo, tập trung vào việc cho phép máy tính 'nhìn', xác định và xử lý hình ảnh theo cách tương tự như con người."
            }
          },
          {
            id: 4,
            title: "Trang 4: Từ Xử lý ảnh đến Thị giác máy tính",
            image: "images/cv/week1/Slide4.PNG",
            notes: "Quá trình đi từ một hình ảnh thô đến việc hiểu được nó có thể được chia thành 3 cấp độ xử lý:\n\n" +
              "1. <b>Xử lý cấp thấp (Low-Level Processing):</b>\n" +
              "   - Đầu vào: Hình ảnh. Đầu ra: Hình ảnh.\n" +
              "   - Các tác vụ: Giảm nhiễu, tăng cường độ tương phản, làm sắc nét hình ảnh.\n\n" +
              "2. <b>Xử lý cấp trung (Mid-Level Processing):</b>\n" +
              "   - Đầu vào: Hình ảnh. Đầu ra: Các thuộc tính (attributes).\n" +
              "   - Các tác vụ: Phân đoạn (segmentation), phân loại (classification).\n\n" +
              "3. <b>Xử lý cấp cao (High-Level Processing):</b>\n" +
              "   - Đầu vào: Các thuộc tính. Đầu ra: Sự thấu hiểu (making sense).\n" +
              "   - Các tác vụ: Nhận dạng đối tượng (object recognition).",
            terms: {
              "Image Processing (Xử lý ảnh)": "Thường đề cập đến các hoạt động xử lý cấp thấp, nơi đầu vào và đầu ra đều là hình ảnh. Mục tiêu là cải thiện chất lượng ảnh hoặc trích xuất một số thông tin từ nó.",
              "Segmentation (Phân đoạn)": "Quá trình phân chia một hình ảnh kỹ thuật số thành nhiều đoạn (tập hợp các pixel) để đơn giản hóa hoặc thay đổi cách biểu diễn của hình ảnh thành một cái gì đó có ý nghĩa hơn và dễ phân tích hơn.",
              "Object Recognition (Nhận dạng đối tượng)": "Một nhiệm vụ trong thị giác máy tính để xác định và nhận dạng các đối tượng trong một hình ảnh hoặc video."
            }
          },
          {
            id: 5,
            title: "Trang 5: Các ứng dụng của Thị giác Máy tính",
            image: "images/cv/week1/Slide5.PNG",
            notes: "Thị giác máy tính có rất nhiều ứng dụng trong thực tế, bao gồm:\n\n" +
              "- <b>Xe tự lái (Self-driving vehicles):</b> Giúp xe 'nhìn' và hiểu môi trường xung quanh.\n" +
              "- <b>Nhận dạng khuôn mặt (Facial recognition):</b> Dùng trong bảo mật, mạng xã hội.\n" +
              "- <b>Y tế (Healthcare):</b> Phân tích hình ảnh y tế như X-quang, MRI để chẩn đoán bệnh.\n" +
              "- <b>Nhận dạng ký tự quang học (OCR):</b> Chuyển đổi văn bản trong hình ảnh thành văn bản có thể chỉnh sửa.\n" +
              "- <b>Hình ảnh siêu phân giải (SRI):</b> Nâng cao chất lượng và độ phân giải của hình ảnh.\n" +
              "- <b>Thực tế tăng cường (AR):</b> Kết hợp thông tin ảo vào thế giới thực.",
            terms: {
              "Augmented Reality (AR)": "Công nghệ lồng ghép thông tin ảo (hình ảnh, dữ liệu) vào môi trường thực tế thông qua các thiết bị như điện thoại thông minh hoặc kính.",
              "Optical Character Recognition (OCR)": "Công nghệ chuyển đổi các loại tài liệu khác nhau, chẳng hạn như tài liệu giấy được quét, tệp PDF hoặc hình ảnh được chụp bằng máy ảnh kỹ thuật số, thành dữ liệu có thể chỉnh sửa và tìm kiếm."
            }
          },

          // Dán 5 khối mã này vào sau slide có id: 5 của Tuần 1

          // SLIDE 6: LỊCH SỬ PHÁT TRIỂN CỦA THỊ GIÁC MÁY TÍNH
          {
            id: 6,
            title: "Trang 6: Lịch sử phát triển của Thị giác Máy tính",
            image: "images/cv/week1/Slide6.PNG",

            notes: "<b>Nông nghiệp (Agriculture):</b>\n" +
              "- Giám sát cây trồng và phát hiện bệnh.\n" +
              "- Tự động hóa việc thu hoạch và phân loại.\n" +
              "- Phân tích sức khỏe của đất và cây trồng.\n" +
              "- Ví dụ: Máy bay không người lái (drones) sử dụng thị giác máy tính để theo dõi sức khỏe cây trồng.\n\n" +
              "<b>An ninh và Giám sát (Security and Surveillance):</b>\n" +
              "- Tự động giám sát các đoạn phim từ camera CCTV.\n" +
              "- Hệ thống phát hiện xâm nhập.\n" +
              "- Nhận dạng biển số xe.\n" +
              "- Ví dụ: Các camera an ninh thông minh có thể phát hiện và cảnh báo về hoạt động đáng ngờ.",
            terms: {
              "CCTV (Closed-Circuit Television)": "Hệ thống truyền hình mạch kín, thường được gọi là giám sát video. Đây là việc sử dụng các camera video để truyền tín hiệu đến một nơi cụ thể, trên một số lượng màn hình giới hạn."
            }

          },
          // SLIDE 7: GIỚI THIỆU - KỸ THUẬT TRUYỀN THỐNG VÀ DEEP LEARNING
          {
            id: 7,
            title: "Trang 7: Giới thiệu - Kỹ thuật truyền thống và Deep Learning",
            image: "images/cv/week1/Slide7.PNG",
            notes: "Thị giác máy tính đã phát triển đáng kể, kết hợp cả hai phương pháp: kỹ thuật truyền thống và học sâu (deep learning).\n\n" +
              "Bài thuyết trình này khám phá lý do tại sao các kỹ thuật truyền thống vẫn còn giá trị mặc cho những tiến bộ của học sâu.",
            terms: {
              "Deep Learning (Học sâu)": "Một lĩnh vực con của học máy dựa trên mạng nơ-ron nhân tạo với nhiều lớp (layer). Học sâu là động lực chính đằng sau nhiều tiến bộ gần đây trong AI, bao gồm cả thị giác máy tính.",
              "Traditional Techniques (Kỹ thuật truyền thống)": "Trong thị giác máy tính, thuật ngữ này thường đề cập đến các phương pháp không dựa trên deep learning, chẳng hạn như các bộ lọc ảnh (ví dụ: Sobel, Canny), các thuật toán trích xuất đặc trưng thủ công (SIFT, HOG), và các mô hình học máy cổ điển (SVM, K-means)."
            }
          },
          // SLIDE 8: ỨNG DỤNG - NHẬN DẠNG KHUÔN MẶT & TỰ ĐỘNG HÓA CÔNG NGHIỆP
          {
            id: 8,
            title: "Trang 8: Ứng dụng - Nhận dạng khuôn mặt & Tự động hóa công nghiệp",
            image: "images/cv/week1/Slide8.PNG",
            notes: "<b>Nhận dạng khuôn mặt (Facial Recognition):</b>\n" +
              "- Hệ thống an ninh để nhận dạng cá nhân.\n" +
              "- Xác thực và mở khóa điện thoại di động.\n" +
              "- Hệ thống chấm công và kiểm soát ra vào.\n" +
              "- Ví dụ: Công nghệ Face ID của Apple.\n\n" +
              "<b>Tự động hóa công nghiệp (Industrial Automation):</b>\n" +
              "- Kiểm tra chất lượng và phát hiện lỗi trong sản xuất.\n" +
              "- Tự động hóa việc phân loại và sắp xếp dây chuyền lắp ráp.\n" +
              "- Quản lý và đếm hàng tồn kho.\n" +
              "- Ví dụ: Tự động kiểm tra các bảng mạch in để tìm lỗi.",
            terms: {}
          },
          // SLIDE 9: ỨNG DỤNG - Y TẾ & XE TỰ LÁI
          {
            id: 9,
            title: "Trang 9: Ứng dụng - Y tế & Xe tự lái",
            image: "images/cv/week1/Slide9.PNG",
            notes: "<b>Hình ảnh Y tế (Medical Imaging):</b>\n" +
              "- Phát hiện các khối u trong ảnh MRI và CT.\n" +
              "- Tự động đếm tế bào trong ảnh kính hiển vi.\n" +
              "- Phân tích ảnh võng mạc để phát hiện bệnh võng mạc tiểu đường.\n" +
              "- Ví dụ: Sử dụng CNN để phân loại các tổn thương da là lành tính hay ác tính.\n\n" +
              "<b>Xe tự lái (Autonomous Driving):</b>\n" +
              "- Phát hiện và giữ làn đường.\n" +
              "- Phát hiện người đi bộ và chướng ngại vật.\n" +
              "- Nhận dạng biển báo giao thông.\n" +
              "- Ví dụ: Hệ thống Autopilot của Tesla sử dụng thị giác máy tính để điều hướng.",
            terms: {}
          },
          // SLIDE 10: ỨNG DỤNG - NÔNG NGHIỆP & AN NINH GIÁM SÁT
          {
            id: 10,
            title: "Trang 10: Ứng dụng - Nông nghiệp & An ninh giám sát",
            image: "images/cv/week1/Slide10.PNG",
            notes: "Dòng thời gian phát triển của Thị giác Máy tính:\n\n" +
              "- <b>Thập niên 1960-1980:</b> Các thí nghiệm ban đầu về xử lý ảnh và trích xuất đặc trưng đơn giản.\n" +
              "- <b>Thập niên 1990-2000:</b> Phát triển các thuật toán phức tạp như SIFT, HOG và những tiến bộ trong việc phát hiện cạnh (edge detection).\n" +
              "- <b>Thập niên 2010-Hiện tại:</b> Sự trỗi dậy của các mô hình học sâu (deep learning) như CNNs, GANs, và Transformers.",
            terms: {
              "SIFT (Scale-Invariant Feature Transform)": "Một thuật toán trích xuất đặc trưng trong thị giác máy tính để phát hiện và mô tả các đặc trưng cục bộ trong hình ảnh. SIFT rất mạnh mẽ trong việc nhận dạng đối tượng dưới các điều kiện thay đổi về tỷ lệ, góc nhìn và ánh sáng.",
              "HOG (Histogram of Oriented Gradients)": "Một bộ mô tả đặc trưng được sử dụng trong xử lý ảnh và thị giác máy tính cho mục đích phát hiện đối tượng. Nó hoạt động bằng cách đếm sự xuất hiện của hướng gradient trong các phần cục bộ của một hình ảnh.",
              "CNN (Convolutional Neural Network)": "Mạng Nơ-ron Tích chập, một lớp của mạng nơ-ron nhân tạo, thường được áp dụng để phân tích hình ảnh. CNN là nền tảng của hầu hết các đột phá trong thị giác máy tính gần đây.",
              "GAN (Generative Adversarial Network)": "Mạng Đối nghịch Tạo sinh, một lớp của các framework học máy, trong đó hai mạng nơ-ron cạnh tranh với nhau trong một trò chơi. GAN có khả năng tạo ra các hình ảnh mới, chân thực."
            }
          },

          // Dán 5 khối mã này vào sau slide có id: 10 của Tuần 1

          // SLIDE 11: CÁC KỸ THUẬT THỊ GIÁC MÁY TÍNH - TỔNG QUAN
          {
            id: 11,
            title: "Trang 11: Các kỹ thuật Thị giác Máy tính - Tổng quan",
            image: "images/cv/week1/Slide11.PNG",
            notes: "Sơ đồ này so sánh quy trình làm việc giữa Học máy (truyền thống) và Học sâu:\n\n" +
              "<b>Học máy (Machine Learning):</b>\n" +
              "1. <b>Đầu vào (Input):</b> Hình ảnh.\n" +
              "2. <b>Trích xuất đặc trưng (Feature extraction):</b> Một bước riêng biệt, thường cần sự can thiệp của con người để thiết kế các bộ trích xuất đặc trưng.\n" +
              "3. <b>Phân loại (Classification):</b> Mô hình học máy sẽ học từ các đặc trưng đã được trích xuất.\n" +
              "4. <b>Đầu ra (Output):</b> Kết quả.\n\n" +
              "<b>Học sâu (Deep Learning):</b>\n" +
              "1. <b>Đầu vào (Input):</b> Hình ảnh.\n" +
              "2. <b>Trích xuất đặc trưng + Phân loại:</b> Mạng nơ-ron sâu tự động học các đặc trưng cần thiết và thực hiện phân loại trong cùng một quy trình end-to-end.\n" +
              "3. <b>Đầu ra (Output):</b> Kết quả.",
            terms: {}
          },
          // SLIDE 12: CÁC KỸ THUẬT THỊ GIÁC MÁY TÍNH - SO SÁNH QUY TRÌNH
          {
            id: 12,
            title: "Trang 12: Các kỹ thuật Thị giác Máy tính - So sánh quy trình",
            image: "images/cv/week1/Slide12.PNG",

            notes: "<b>Kỹ thuật truyền thống (Traditional Techniques):</b>\n" +
              "- <b>Định nghĩa:</b> Các phương pháp dựa trên các mô hình toán học và các đặc trưng được chế tác thủ công (handcrafted features).\n" +
              "- <b>Các thuật toán chính:</b> Phát hiện cạnh (Canny, Sobel), Bộ phát hiện đặc trưng (SIFT, SURF), Bộ mô tả (HOG, LBP).\n\n" +
              "<b>Học sâu trong Thị giác Máy tính (Deep Learning in Computer Vision):</b>\n" +
              "- <b>Định nghĩa:</b> Sử dụng mạng nơ-ron để tự động học các đặc trưng từ các bộ dữ liệu lớn.\n" +
              "- <b>Các mô hình chính:</b> CNNs (phân loại ảnh, phát hiện đối tượng), GANs (tạo ảnh, chuyển đổi phong cách), RNNs và Transformers (phân tích video).",
            terms: {
              "Handcrafted Features": "Các đặc trưng của một hình ảnh (ví dụ: cạnh, góc, màu sắc) được các chuyên gia con người định nghĩa và trích xuất bằng các thuật toán được thiết kế trước. Trái ngược với các đặc trưng được học tự động bởi các mô hình deep learning.",
              "Canny Edge Detector": "Một thuật toán phát hiện cạnh phổ biến trong xử lý ảnh.",
              "RNN (Recurrent Neural Network)": "Mạng Nơ-ron Hồi quy, một loại mạng nơ-ron được thiết kế để xử lý dữ liệu dạng chuỗi (sequential data), chẳng hạn như các khung hình trong một video."
            }
          },
          // SLIDE 13: CÁC KỸ THUẬT THỊ GIÁC MÁY TÍNH - SO SÁNH ĐIỂM MẠNH
          {
            id: 13,
            title: "Trang 13: Các kỹ thuật Thị giác Máy tính - So sánh điểm mạnh",
            image: "images/cv/week1/Slide13.PNG",
            notes: "<b>Ưu điểm của Kỹ thuật truyền thống:</b>\n" +
              "- <b>Khả năng giải thích (Explainability):</b> Các thuật toán minh bạch và dễ hiểu hơn.\n" +
              "- <b>Hiệu quả tài nguyên (Resource Efficiency):</b> Yêu cầu ít sức mạnh tính toán và bộ nhớ hơn.\n" +
              "- <b>Độ bền (Robustness):</b> Thường có khả năng chống chịu tốt hơn với các biến thể và nhiễu trong dữ liệu.\n" +
              "- <b>Tốc độ (Speed):</b> Thường nhanh hơn trong các ứng dụng thời gian thực.\n\n" +
              "<b>Ưu điểm của Học sâu:</b>\n" +
              "- <b>Hiệu suất (Performance):</b> Đạt được độ chính xác cao trong các tác vụ phức tạp với bộ dữ liệu lớn.\n" +
              "- <b>Tự động hóa (Automation):</b> Loại bỏ nhu cầu trích xuất đặc trưng thủ công.\n" +
              "- <b>Khả năng mở rộng (Scalability):</b> Có thể xử lý các bộ dữ liệu quy mô lớn và các mô hình phức tạp.\n" +
              "- <b>Tính linh hoạt (Versatility):</b> Áp dụng được cho một loạt các tác vụ ngoài thị giác truyền thống.",
            terms: {}
            
          },
          // SLIDE 14: CÁC KỸ THUẬT THỊ GIÁC MÁY TÍNH - ƯU ĐIỂM
          {
            id: 14,
            title: "Trang 14: Các kỹ thuật Thị giác Máy tính - Ưu điểm",
            image: "images/cv/week1/Slide14.PNG",
            notes: "Một khung để so sánh hai phương pháp dựa trên các tiêu chí:\n\n" +
              "- <b>Hiệu suất (Performance):</b> Độ chính xác và độ chuẩn xác trong các tác vụ khác nhau.\n" +
              "- <b>Khả năng diễn giải (Interpretability):</b> Mức độ dễ hiểu về cách thuật toán hoạt động.\n" +
              "- <b>Yêu cầu tài nguyên (Resource Requirements):</b> Sức mạnh tính toán, bộ nhớ, và dữ liệu cần thiết.\n" +
              "- <b>Sự phù hợp của tác vụ (Task Suitability):</b> Các trường hợp sử dụng thích hợp cho mỗi phương pháp.\n\n" +
              "Biểu đồ cho thấy hiệu suất của các thuật toán học sâu tăng lên đáng kể khi lượng dữ liệu tăng lên, vượt qua các thuật toán học máy cũ hơn.",
            terms: {}
            
          },
          // SLIDE 15: CÁC KỸ THUẬT THỊ GIÁC MÁY TÍNH - KHUNG SO SÁNH
          {
            id: 15,
            title: "Trang 15: Các kỹ thuật Thị giác Máy tính - Khung so sánh",
            image: "images/cv/week1/Slide15.PNG",
            notes: "<b>Điểm mạnh theo tác vụ cụ thể:</b>\n" +
              "- <b>Truyền thống:</b> Tốt cho các tác vụ đơn giản (phát hiện cạnh, xử lý ảnh cơ bản), xử lý thời gian thực (robot, ứng dụng công nghiệp), và các môi trường có tài nguyên thấp (hệ thống nhúng, thiết bị di động).\n" +
              "- <b>Học sâu:</b> Tốt cho các tác vụ phức tạp (phân đoạn ảnh, phát hiện đối tượng), các ứng dụng quy mô lớn (gắn thẻ tự động trên mạng xã hội, chẩn đoán y tế).\n\n" +
              "<b>Xử lý thời gian thực:</b>\n" +
              "- <b>Truyền thống:</b> Thường nhanh hơn do các phép tính đơn giản hơn.\n" +
              "- <b>Học sâu:</b> Yêu cầu tài nguyên tính toán đáng kể nhưng các tiến bộ như TensorRT và Edge TPU đang cải thiện khả năng thời gian thực.",
            terms: {
              "Real-Time Processing (Xử lý thời gian thực)": "Khả năng của một hệ thống máy tính xử lý dữ liệu và đưa ra phản hồi gần như ngay lập tức, trong một khoảng thời gian rất ngắn.",
              "Embedded Systems (Hệ thống nhúng)": "Các hệ thống máy tính chuyên dụng được thiết kế để thực hiện một hoặc một vài chức năng cụ thể, thường được 'nhúng' vào bên trong một hệ thống cơ khí hoặc điện tử lớn hơn."
            }
          },

          // Dán 5 khối mã này vào sau slide có id: 15 của Tuần 1

          // SLIDE 16: CÁC KỸ THUẬT THỊ GIÁC MÁY TÍNH - TRƯỜNG HỢP SỬ DỤNG
          {
            id: 16,
            title: "Trang 16: Các kỹ thuật Thị giác Máy tính - Trường hợp sử dụng",
            image: "images/cv/week1/Slide16.PNG",
            notes: "<b>Các trường hợp mà phương pháp truyền thống vượt trội:</b>\n" +
              "- <b>Phân tích hình ảnh y tế:</b> Các thuật toán đơn giản để phát hiện cạnh, hình dạng và họa tiết.\n" +
              "- <b>Hệ thống thị giác thời gian thực:</b> Các ứng dụng yêu cầu xử lý tức thì với độ trễ thấp (ví dụ: kiểm tra dây chuyền lắp ráp tự động).\n" +
              "- <b>Ứng dụng với dữ liệu hạn chế:</b> Khi chỉ có các bộ dữ liệu nhỏ, các phương pháp truyền thống có thể hoạt động tốt hơn.\n\n" +
              "<b>Các phương pháp lai (Hybrid Approaches):</b>\n" +
              "- <b>Tích hợp:</b> Kết hợp các phương pháp truyền thống với học sâu có thể nâng cao hiệu suất. Ví dụ: Sử dụng các đặc trưng SIFT làm đầu vào cho CNN để trích xuất đặc trưng mạnh mẽ hơn.\n" +
              "- <b>Lợi ích:</b> Tận dụng thế mạnh của cả hai phương pháp có thể cải thiện độ chính xác, độ bền và hiệu quả tính toán.",
            terms: {}
          },
          // SLIDE 17: CÁC KỸ THUẬT THỊ GIÁC MÁY TÍNH - CASE STUDY
          {
            id: 17,
            title: "Trang 17: Các kỹ thuật Thị giác Máy tính - Case Study",
            image: "images/cv/week1/Slide17.PNG",
            notes: "<b>Case Study 1: Phương pháp truyền thống trong Hệ thống Lái xe Tự động</b>\n" +
              "- <b>Chi tiết:</b> Phát hiện làn đường bằng các thuật toán phát hiện cạnh.\n" +
              "- <b>Tác động:</b> Xử lý thời gian thực, có khả năng chống chịu với các điều kiện ánh sáng thay đổi.\n\n" +
              "<b>Case Study 2: Học sâu trong Nhận dạng khuôn mặt và Phát hiện đối tượng</b>\n" +
              "- <b>Chi tiết:</b> Sử dụng CNN cho việc nhận dạng khuôn mặt có độ chính xác cao trong các hệ thống an ninh.\n" +
              "- <b>Tác động:</b> Cải thiện độ chính xác và khả năng mở rộng cho các cơ sở dữ liệu lớn.",
            terms: {}
          },
          // SLIDE 18: CÁC KỸ THUẬT THỊ GIÁC MÁY TÍNH - XU HƯỚNG HIỆN TẠI
          {
            id: 18,
            title: "Trang 18: Các kỹ thuật Thị giác Máy tính - Xu hướng hiện tại",
            image: "images/cv/week1/Slide18.PNG",
            notes: "<b>Trọng tâm nghiên cứu:</b>\n" +
              "- Các mô hình lai kết hợp kỹ thuật truyền thống với học sâu.\n" +
              "- Cải thiện hiệu quả và khả năng giải thích của các mô hình học sâu.\n" +
              "- Phát triển các thuật toán mới trong thị giác truyền thống có thể bổ sung cho học sâu.\n\n" +
              "<b>Ví dụ trong ngành công nghiệp:</b>\n" +
              "- <b>Robot:</b> Sử dụng kết hợp cả truyền thống và học sâu để điều hướng và thao tác đối tượng.\n" +
              "- <b>Chẩn đoán y tế:</b> Các phương pháp lai cho kết quả chính xác và có thể giải thích được hơn.",
            terms: {}
          },
          // SLIDE 19: CÁC KỸ THUẬT THỊ GIÁC MÁY TÍNH - THÁCH THỨC VÀ HƯỚNG ĐI TƯƠNG LAI
          {
            id: 19,
            title: "Trang 19: Thách thức và Hướng đi tương lai",
            image: "images/cv/week1/Slide19.PNG",
            notes: "<b>Những thách thức:</b>\n" +
              "- <b>Yêu cầu dữ liệu:</b> Các mô hình học sâu cần các bộ dữ liệu lớn đã được gán nhãn.\n" +
              "- <b>Chi phí tính toán:</b> Yêu cầu tài nguyên cao cho việc huấn luyện và suy luận.\n" +
              "- <b>Khả năng diễn giải:</b> Hiểu và tin tưởng vào các quyết định của AI.\n\n" +
              "<b>Các xu hướng tương lai:</b>\n" +
              "- Những tiến bộ trong AI có thể giải thích được (Explainable AI) cho cả hai phương pháp.\n" +
              "- Điện toán biên (Edge computing) để đưa AI mạnh mẽ vào các môi trường có tài nguyên hạn chế.\n" +
              "- Tiếp tục tích hợp các phương pháp truyền thống và học sâu để nâng cao hiệu suất.",
            terms: {
              "Explainable AI (XAI)": "AI có thể giải thích được, một lĩnh vực nghiên cứu tập trung vào việc phát triển các hệ thống AI có thể giải thích các quyết định hoặc dự đoán của chúng cho con người một cách dễ hiểu.",
              "Edge Computing (Điện toán biên)": "Một mô hình điện toán phân tán, trong đó việc tính toán được thực hiện gần nguồn dữ liệu nhất có thể (trên chính thiết bị), thay vì gửi dữ liệu lên một đám mây tập trung. Điều này giúp giảm độ trễ và tăng cường quyền riêng tư."
            }
          },
          // SLIDE 20: CÂU HỎI
          {
            id: 20,
            title: "Trang 20: Câu hỏi",
            image: "images/cv/week1/Slide20.PNG",
            notes: "Các câu hỏi ôn tập:\n\n" +
              "1. So sánh Thị giác Máy tính và Xử lý ảnh kỹ thuật số?\n" +
              "2. So sánh Học sâu và Học máy?\n" +
              "3. Xem một video và trả lời các câu hỏi:\n" +
              "   a. Tên của bộ dữ liệu đã được sử dụng? Có bao nhiêu ảnh, bao nhiêu danh mục trong bộ dữ liệu?\n" +
              "   b. Bộ dữ liệu có thể được gán nhãn như thế nào?\n" +
              "   c. Những thuật toán (mô hình) nào được đề cập trong video?",
            terms: {}
          },

          // XÓA 5 SLIDE CŨ (TỪ 21 ĐẾN 25) VÀ THAY BẰNG 5 SLIDE MỚI NÀY

          // SLIDE 21: SO SÁNH CÁC LĨNH VỰC
          {
            id: 21,
            title: "Trang 21: So sánh các lĩnh vực",
            image: "images/cv/week1/Slide21.PNG",
            notes: "Slide này đặt ra sự so sánh giữa ba lĩnh vực liên quan:\n\n" +
                   "- <b>Xử lý ảnh kỹ thuật số (Digital image processing):</b> Tập trung vào việc thao tác, cải thiện hình ảnh. Ví dụ trong ảnh là làm cho ảnh sáng và mịn hơn.\n" +
                   "- <b>Đồ họa máy tính (Computer graphics):</b> Tập trung vào việc tạo ra hình ảnh từ các mô tả hoặc mô hình.\n" +
                   "- <b>Thị giác máy tính (Computer Vision):</b> Tập trung vào việc 'hiểu' và trích xuất thông tin có ý nghĩa từ hình ảnh.",
            terms: {
              "Computer Graphics (Đồ họa máy tính)": "Một lĩnh vực của khoa học máy tính tập trung vào việc tạo ra hình ảnh và video bằng máy tính. Nó bao gồm việc tạo mô hình 3D, rendering, và animation."
            }
          },
          // SLIDE 22: ĐỒ HỌA MÁY TÍNH VS THỊ GIÁC MÁY TÍNH
          {
            id: 22,
            title: "Trang 22: Đồ họa máy tính vs Thị giác Máy tính",
            image: "images/cv/week1/Slide22.PNG",
            notes: "Sơ đồ này minh họa sự khác biệt về quy trình giữa Đồ họa máy tính và Thị giác máy tính:\n\n" +
                   "<b>Đồ họa máy tính (Computer Graphics):</b>\n" +
                   "Đi từ một Mô hình Thế giới (World Model) trừu tượng để <b>tạo ra</b> hình ảnh.\n" +
                   "<i>(Từ mô tả → Hình ảnh)</i>\n\n" +
                   "<b>Thị giác máy tính (Computer Vision):</b>\n" +
                   "Đi từ một hình ảnh để <b>suy ra</b> một Mô hình Thế giới.\n" +
                   "<i>(Từ hình ảnh → Mô tả)</i>",
            terms: {}
          },
          // SLIDE 23: BIỂU ĐỒ GIAO THOA
          {
            id: 23,
            title: "Trang 23: Biểu đồ giao thoa",
            image: "images/cv/week1/Slide23.PNG",
            notes: "Biểu đồ Venn này cho thấy mối quan hệ và sự giao thoa giữa Đồ họa máy tính và Thị giác máy tính.\n\n" +
                   "<b>Các lĩnh vực riêng của Đồ họa máy tính:</b>\n" +
                   "- Rendering, thiết kế bề mặt, animation, giao diện người dùng.\n\n" +
                   "<b>Các lĩnh vực riêng của Thị giác máy tính:</b>\n" +
                   "- Ước tính hình dạng, ước tính chuyển động, nhận dạng, xử lý ảnh.\n\n" +
                   "<b>Phần giao thoa (Mô hình hóa hình ảnh - Visual Modeling):</b>\n" +
                   "- Cả hai lĩnh vực đều làm việc với các khái niệm về hình dạng, ánh sáng, chuyển động, quang học và hình ảnh.",
            terms: {}
          },
          // SLIDE 24: TỪ XỬ LÝ ẢNH ĐẾN THỊ GIÁC MÁY TÍNH
          {
            id: 24,
            title: "Trang 24: Từ Xử lý ảnh đến Thị giác máy tính",
            image: "images/cv/week1/Slide24.PNG",
            notes: "Slide này nhắc lại về 3 cấp độ xử lý để đi từ một hình ảnh thô đến việc hiểu được nó:\n\n" +
                   "1. <b>Xử lý cấp thấp (Low-Level):</b> Ảnh → Ảnh (ví dụ: giảm nhiễu).\n" +
                   "2. <b>Xử lý cấp trung (Mid-Level):</b> Ảnh → Thuộc tính (ví dụ: phân đoạn).\n" +
                   "3. <b>Xử lý cấp cao (High-Level):</b> Thuộc tính → Sự thấu hiểu (ví dụ: nhận dạng đối tượng).",
            terms: {}
          },
          // SLIDE 25: BÀI TẬP TRÊN LỚP
          {
            id: 25,
            title: "Trang 25: Bài tập trên lớp",
            image: "images/cv/week1/Slide25.PNG",
            notes: "Yêu cầu bài tập thực hành trên lớp:\n\n" +
                   "<b>1. Cài đặt OpenCV + Python.</b>\n\n" +
                   "<b>2. Khám phá đoạn mã này:</b>\n" +
                   "   - Mở file Colab 'Hello OpenCV'.\n" +
                   "   - Tự giải thích code hoặc dùng ChatGPT.\n\n" +
                   "<b>3. Đọc và hiển thị ảnh của riêng bạn:</b>\n" +
                   "   - Làm theo code đã được cung cấp.\n" +
                   "   - Lấy thông tin của ảnh (kích thước, màu sắc).\n" +
                   "   - Thay đổi ảnh một chút.",
            terms: {
              "Google Colab": "Một dịch vụ miễn phí của Google cho phép bạn viết và thực thi mã Python trong trình duyệt của mình, đặc biệt hữu ích cho các tác vụ học máy và phân tích dữ liệu mà không cần cài đặt phức tạp."
            }
          },

          // SLIDE 26: ẢNH KỸ THUẬT SỐ LÀ GÌ?
          {
            id: 26,
            title: "Trang 26: Ảnh kỹ thuật số là gì?",
            image: "images/cv/week1/Slide26.PNG",
            notes: "Một <b>ảnh kỹ thuật số</b> là sự biểu diễn của một hình ảnh hai chiều dưới dạng một tập hợp hữu hạn các giá trị số, được gọi là các phần tử ảnh hay <b>pixel</b>.\n\n" +
              "Quá trình này bao gồm việc chiếu một cảnh (scene) qua một hệ thống tạo ảnh (imaging system) lên một mặt phẳng ảnh, sau đó được số hóa thành một lưới các pixel.",
            terms: {
              "Digital Image (Ảnh kỹ thuật số)": "Sự biểu diễn của một hình ảnh 2D dưới dạng một tập hợp hữu hạn các giá trị số, được gọi là các pixel.",
              "Pixel (Picture Element)": "Phần tử nhỏ nhất có thể điều khiển được của một hình ảnh được biểu diễn trên màn hình. Mỗi pixel có một giá trị số đại diện cho độ sáng hoặc màu sắc của nó."
            }
          },
          // SLIDE 27: GIÁ TRỊ PIXEL
          {
            id: 27,
            title: "Trang 27: Giá trị Pixel",
            image: "images/cv/week1/Slide27.PNG",
            notes: "Các giá trị pixel thường đại diện cho các mức độ xám, màu sắc, độ cao, độ mờ, v.v.\n\n" +
              "Hãy nhớ rằng quá trình <b>số hóa (digitization)</b> ngụ ý rằng một hình ảnh kỹ thuật số là một sự <b>xấp xỉ (approximation)</b> của một cảnh thực tế.",
            terms: {
              "Digitization (Số hóa)": "Quá trình chuyển đổi thông tin thành định dạng kỹ thuật số. Trong hình ảnh, điều này bao gồm việc lấy mẫu (rời rạc hóa tọa độ không gian) và lượng tử hóa (rời rạc hóa các giá trị mức xám/màu sắc)."
            }
          },
          // SLIDE 28: HÌNH ẢNH NHƯ MỘT HÀM SỐ (ẢNH XÁM)
          {
            id: 28,
            title: "Trang 28: Hình ảnh như một hàm số (Ảnh xám)",
            image: "images/cv/week1/Slide28.PNG",
            notes: "Một hình ảnh chứa một số lượng pixel rời rạc.\n\n" +
              "Giá trị của pixel trong ảnh xám (grayscale), hay còn gọi là cường độ (intensity), là một con số duy nhất, thường nằm trong khoảng [0, 255], trong đó 0 là màu đen và 255 là màu trắng.",
            terms: {
              "Grayscale (Ảnh xám)": "Một hình ảnh trong đó giá trị của mỗi pixel là một mẫu duy nhất chỉ đại diện cho một lượng ánh sáng; tức là, nó chỉ mang thông tin về cường độ."
            }
          },
          // SLIDE 29: HÌNH ẢNH NHƯ MỘT HÀM SỐ (ẢNH MÀU)
          {
            id: 29,
            title: "Trang 29: Hình ảnh như một hàm số (Ảnh màu)",
            image: "images/cv/week1/Slide29.PNG",
            notes: "Tương tự ảnh xám, ảnh màu cũng chứa một số lượng pixel rời rạc.\n\n" +
              "Giá trị của pixel trong ảnh màu thường là một vector gồm nhiều con số. Các không gian màu phổ biến bao gồm:\n" +
              "- <b>RGB:</b> [R, G, B] (Đỏ, Xanh lá, Xanh dương)\n" +
              "- <b>Lab:</b> [L, a, b]\n" +
              "- <b>HSV:</b> [H, S, V] (Hue, Saturation, Value)",
            terms: {
              "RGB Color Model": "Một mô hình màu cộng, trong đó ba màu cơ bản của ánh sáng là đỏ, xanh lá, và xanh dương được cộng lại với nhau theo nhiều cách khác nhau để tái tạo ra một dải màu rộng.",
              "HSV Color Model": "Biểu diễn màu sắc theo các thuật ngữ Hue (loại màu), Saturation (độ bão hòa/độ đậm của màu), và Value (độ sáng)."
            }
          },
          
          {
            id: 30,
            title: "Trang 30: Ảnh xám & Ảnh màu",
            image: "images/cv/week1/Slide37.PNG",
            notes: "Slide này minh họa cách một ảnh màu có thể được biểu diễn:\n\n" +
              "- <b>Ảnh màu:</b> Có thể được xem như sự kết hợp của ba kênh màu riêng biệt: Đỏ (Red), Xanh lá (Green), và Xanh dương (Blue).\n" +
              "- <b>Ảnh xám:</b> Có thể được tạo ra từ một ảnh màu, chỉ chứa thông tin về độ sáng (cường độ).",
            terms: {}
          },
          // SLIDE 31: CHUYỂN ĐỔI TỪ RGB SANG ẢNH XÁM
          {
            id: 31,
            title: "Trang 31: Chuyển đổi từ RGB sang Ảnh xám",
            image: "images/cv/week1/Slide38.PNG",
            notes: "Có nhiều phương pháp để chuyển đổi một pixel màu RGB thành một giá trị mức xám (Intensity - I). Ba phương pháp phổ biến là:\n\n" +
              "1. <b>Phương pháp Lightness (Độ sáng):</b>\n" +
              "   `I = (max(R, G, B) + min(R, G, B)) / 2`\n\n" +
              "2. <b>Phương pháp Average (Trung bình):</b>\n" +
              "   `I = (R + G + B) / 3`\n\n" +
              "3. <b>Phương pháp Luminosity (Độ chói - Khuyến khích):</b>\n" +
              "   `I = 0.21 R + 0.72 G + 0.07 B`\n" +
              "   Phương pháp này tính đến sự nhạy cảm khác nhau của mắt người đối với các màu sắc khác nhau (mắt người nhạy cảm với màu xanh lá nhất).",
            terms: {
              "Luminosity Method": "Một phương pháp chuyển đổi ảnh màu sang ảnh xám bằng cách tính tổng có trọng số của các thành phần R, G, B. Các trọng số này được chọn để phù hợp với nhận thức của con người về độ sáng."
            }
          },
          // SLIDE 32: CÁC CÔNG CỤ ĐỂ HỌC XỬ LÝ ẢNH KỸ THUẬT SỐ (DIP)
          {
            id: 32,
            title: "Trang 32: Các công cụ để học Xử lý ảnh Kỹ thuật số",
            image: "images/cv/week1/Slide39.PNG",
            notes: "So sánh hai công cụ phổ biến để học và làm việc với Xử lý ảnh:\n\n" +
              "<b>Thư viện OPENCV:</b>\n" +
              "- Có các phiên bản cho C++, C#, Java/Python.\n" +
              "- Tốt cho lập trình viên.\n" +
              "- Nhanh và hiệu quả.\n" +
              "- Là mã nguồn mở (OPEN SOURCE).\n\n" +
              "<b>MATLAB:</b>\n" +
              "- Rất dễ lập trình.\n" +
              "- Kém hiệu quả hơn (so với OpenCV).\n" +
              "- KHÔNG MIỄN PHÍ (NOT FREE).",
            terms: {
              "OpenCV (Open Source Computer Vision Library)": "Một thư viện mã nguồn mở hàng đầu chứa các công cụ lập trình chủ yếu nhắm vào thị giác máy tính thời gian thực.",
              "MATLAB": "Một môi trường tính toán số và ngôn ngữ lập trình bậc cao. Nó rất mạnh mẽ cho việc tạo mẫu, phân tích dữ liệu và trực quan hóa, đặc biệt là trong các lĩnh vực kỹ thuật và khoa học."
            }
          },
          // SLIDE 33: SỬ DỤNG OPENCV & MATLAB
          {
            id: 33,
            title: "Trang 33: Sử dụng OpenCV & Matlab",
            image: "images/cv/week1/Slide40.PNG",
            notes: "Ví dụ về cách đọc và hiển thị một hình ảnh bằng OpenCV và Matlab:\n\n" +
              "<b>OpenCV (sử dụng C++):</b>\n" +
              "Đoạn mã cho thấy cách sử dụng các hàm như `cvLoadImage`, `cvNamedWindow`, `cvShowImage` để tải và hiển thị một ảnh trong một cửa sổ.\n\n" +
              "<b>Matlab:</b>\n" +
              "Chỉ cần hai dòng lệnh đơn giản: `I = imread('cameraman.tif');` để đọc ảnh và `imshow(I)` để hiển thị nó.",
            terms: {}
          },

          // Dán 5 khối mã này vào sau slide có id: 40 của Tuần 1

          // SLIDE 34: KHÔNG GIAN MÀU - CÂU HỎI
          {
            id: 34,
            title: "Trang 34: Không gian màu - Câu hỏi",
            image: "images/cv/week1/Slide41.PNG",
            notes: "Tại sao màu được thiết kế cho một mục đích cụ thể. Một số phù hợp với cách thiết bị hiển thị (màn hình), một số phù hợp cho in ấn (máy in), và một số khác lại phù hợp hơn với cách con người cảm nhận màu sắc.",
            terms: {
              "Color Space (Không gian màu)": "Một mô hình toán học trừu tượng mô tả cách màu sắc có thể được biểu diễn dưới dạng các bộ giá trị số (tuples), thường là 3 hoặc 4 giá trị. Ví dụ: RGB, CMYK, HSV."
            }
          },
          // SLIDE 35: KHÔNG GIAN MÀU - RGB & RGBA
          {
            id: 35,
            title: "Trang 35: Không gian màu - RGB & RGBA",
            image: "images/cv/week1/Slide42.PNG",
            notes: "<b>RGB (Red, Green, Blue):</b>\n" +
              "- Sử dụng phương pháp trộn màu cộng (additive color mixing), vì nó mô tả loại ánh sáng cần được phát ra để tạo ra một màu nhất định.\n" +
              "- RGB lưu trữ các giá trị riêng lẻ cho màu đỏ, xanh lá, và xanh dương.\n\n" +
              "<b>RGBA:</b>\n" +
              "- Là RGB với một kênh bổ sung, <b>alpha</b>, để chỉ định độ trong suốt (transparency).",
            terms: {
              "Additive Color Mixing (Trộn màu cộng)": "Phương pháp tạo ra màu sắc bằng cách trộn các ánh sáng có màu khác nhau. Các màu cơ bản là đỏ, xanh lá, và xanh dương. Khi cả ba được trộn với cường độ tối đa, chúng tạo ra màu trắng. Đây là cách màn hình máy tính và TV hoạt động."
            }
          },
          // SLIDE 36: KHÔNG GIAN MÀU - CMYK, HSV, HSL
          {
            id: 36,
            title: "Trang 36: Không gian màu - CMYK, HSV, HSL",
            image: "images/cv/week1/Slide43.PNG",
            notes: "<b>CMYK (Cyan, Magenta, Yellow, Key/Black):</b>\n" +
              "- Sử dụng phương pháp trộn màu trừ (subtractive color mixing), được dùng trong quá trình in ấn.\n\n" +
              "<b>HSV (Hue, Saturation, Value):</b>\n" +
              "- Còn được gọi là HSB (Hue, Saturation, Brightness). Thường được các nghệ sĩ sử dụng vì nó tự nhiên hơn để tư duy.\n\n" +
              "<b>HSL (Hue, Saturation, Lightness/Luminance):</b>\n" +
              "- Khá tương tự như HSV, với 'lightness' (độ sáng) thay thế cho 'value' (giá trị/độ sáng).",
            terms: {
              "Subtractive Color Mixing (Trộn màu trừ)": "Phương pháp tạo ra màu sắc bằng cách trộn các loại mực hoặc thuốc nhuộm. Các màu cơ bản là lục lam (Cyan), cánh sen (Magenta), và vàng (Yellow). Khi cả ba được trộn lại, chúng tạo ra màu đen (về lý thuyết). Đây là cách máy in hoạt động."
            }
          },
          // SLIDE 37: KHÔNG GIAN MÀU - TUYỆT ĐỐI
          {
            id: 37,
            title: "Trang 37: Không gian màu - Tuyệt đối",
            image: "images/cv/week1/Slide44.PNG",
            notes: "<b>Không gian màu TUYỆT ĐỐI (ABSOLUTE color space):</b>\n" +
              "- Là một không gian màu trong đó sự khác biệt có thể cảm nhận được giữa các màu sắc liên quan trực tiếp đến khoảng cách giữa các điểm trong không gian màu đó.\n" +
              "- <b>CIEXYZ</b> và <b>sRGB</b> là các ví dụ về không gian màu tuyệt đối.\n" +
              "- Không gian màu L*a*b* đôi khi cũng được coi là tuyệt đối, mặc dù nó cần một thông số điểm trắng (white point) để được xác định đầy đủ.",
            terms: {
              "Absolute Color Space": "Một không gian màu trong đó màu sắc có thể được xác định một cách không mơ hồ, không cần tham chiếu đến bất kỳ yếu tố bên ngoài nào. sRGB là không gian màu tuyệt đối tiêu chuẩn cho web.",
              "sRGB": "Một không gian màu RGB tiêu chuẩn được tạo ra bởi HP và Microsoft. Đây là không gian màu được sử dụng phổ biến nhất cho màn hình, máy in và Internet."
            }
          },
          

          // SLIDE 38: BẢNG SO SÁNH CÁC KHÔNG GIAN MÀU
          {
            id: 38,
            title: "Trang 38: Bảng so sánh các không gian màu",
            image: "images/cv/week1/Slide38.PNG",
            notes: "Bảng này tóm tắt các đặc điểm chính của một số không gian màu phổ biến:\n\n" +
              "- <b>RGB:</b> Trộn màu cộng, dùng cho hiển thị màn hình.\n" +
              "- <b>CMYK:</b> Trộn màu trừ, dùng cho máy in.\n" +
              "- <b>YCbCr/YPbPr:</b> Trộn màu cộng, tối ưu cho việc mã hóa video và máy ảnh kỹ thuật số, hiệu quả về băng thông.\n" +
              "- <b>YUV/YIQ:</b> Trộn màu cộng, các biến thể dùng cho việc mã hóa video cho các hệ TV analog như NTSC, PAL.",
            terms: {
              "YUV / YCbCr": "Các không gian màu tách tín hiệu hình ảnh thành một thành phần độ chói (Y - luma) và hai thành phần màu (chroma). Cách này tận dụng việc mắt người nhạy cảm với độ sáng hơn là màu sắc, cho phép nén dữ liệu hình ảnh và video hiệu quả hơn."
            }
          },
          
        ]
      }
    ]
  }
}