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
          }
        ]
      }
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