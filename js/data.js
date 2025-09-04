const coursesData = {
  "game_dev": {
    title: "Phát triển trò chơi với Unity",
    description: "Xây dựng 4 game 2D có thể chơi được bằng C# và nắm vững các nguyên tắc cơ bản về phát triển game.",
    thumbnail: "images/game-dev-thumb.png",
    // THAY ĐỔI: 'slides' trở thành 'sections'
    sections: [
      {
        title: "Tuần 1: Giới thiệu Game Engine & Code Editor",
        slides: [
          { id: 1, title: "Trang 1: Game Engine là gì?", image: "images/game-dev/week1/slide_01.jpg", notes: "Ghi chú cho slide 1 của tuần 1.", terms: { "Game Engine": "Định nghĩa..." } },
          { id: 2, title: "Trang 2: Giới thiệu Unity", image: "images/game-dev/week1/slide_02.jpg", notes: "Ghi chú cho slide 2 của tuần 1.", terms: { "Unity": "Định nghĩa..." } },
          // ... thêm 48 slide nữa cho tuần 1
          { id: 50, title: "Trang 50: Tổng kết tuần 1", image: "images/game-dev/week1/slide_50.jpg", notes: "Tổng kết nội dung tuần 1.", terms: {} }
        ]
      },
      {
        title: "Tuần 2: Delivery Dash - New Unity 6 Content",
        slides: [
          { id: 51, title: "Trang 1: Bắt đầu dự án Delivery Dash", image: "images/game-dev/week2/slide_01.jpg", notes: "Ghi chú cho slide 1 của tuần 2.", terms: { "Prototype": "Định nghĩa..." } },
          { id: 52, title: "Trang 2: Điều khiển người chơi", image: "images/game-dev/week2/slide_02.jpg", notes: "Ghi chú cho slide 2 của tuần 2.", terms: {} }
          // ... thêm 18 slide nữa cho tuần 2
        ]
      },
      // Bạn có thể thêm "Tuần 3", "Tuần 4"... ở đây
    ]
  },

  "computer_vision": {
    title: "Nhập môn Thị giác Máy tính",
    description: "Khám phá cách máy tính 'nhìn' và phân tích hình ảnh, từ nhận diện vật thể đến xử lý ảnh cơ bản.",
    thumbnail: "images/cv-thumb.png",
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