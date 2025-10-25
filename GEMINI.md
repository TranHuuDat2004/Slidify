# Quy trình tự động hóa bởi Gemini

Tệp này ghi lại các quy trình và tập lệnh được sử dụng để quản lý và tự động hóa dự án Slidify.

## 1. Chuẩn hóa tên tệp Slide

**Vấn đề:** Các tệp ảnh slide trong `images/cv/reference` có tên và phần mở rộng không nhất quán (ví dụ: `Slide1.PNG`). Điều này gây khó khăn cho việc quản lý tự động.

**Giải pháp:** Chạy một tập lệnh shell để đổi tên tất cả các tệp theo một định dạng chuẩn: `slide_NUMBER.png`.

### Lệnh đã sử dụng (Windows CMD)

```cmd
ren "C:\...\Slide1.PNG" "slide_1.png" && ren "C:\...\Slide10.PNG" "slide_10.png" && ...
```
*(Lệnh đầy đủ đã được rút gọn cho dễ đọc)*

## 2. Tái cấu trúc dữ liệu (Refactor)

**Vấn đề:** Toàn bộ dữ liệu của các môn học được lưu trong một tệp `js/data.js` duy nhất. Điều này làm cho trang web tải chậm vì phải tải tất cả dữ liệu ngay từ đầu, đồng thời cũng khó bảo trì và mở rộng.

**Giải pháp:** Tách dữ liệu của mỗi môn học thành một tệp JSON riêng. Cập nhật mã nguồn để chỉ tải dữ liệu của môn học được yêu cầu.

### Các bước thực hiện

#### Bước 2.1: Tách tệp `data.js` bằng script Node.js

Để đảm bảo việc tách tệp diễn ra chính xác và không làm mất dữ liệu, chúng tôi đã sử dụng một script Node.js tạm thời (`js/split_data.js`).

**Nội dung script `js/split_data.js`:**
```javascript
const fs = require('fs');
const path = require('path');

// Đọc nội dung của data.js
const dataFilePath = path.join(__dirname, 'data.js');
const dataFileContent = fs.readFileSync(dataFilePath, 'utf8');

// Chuyển đổi nội dung thành đối tượng JavaScript
const coursesData = eval('(' + dataFileContent.replace('const coursesData =', '') + ')');

// Hàm sửa lại đường dẫn ảnh cho môn computer_vision
function fixComputerVisionPaths(obj) {
    if (Array.isArray(obj)) {
        obj.forEach(fixComputerVisionPaths);
    } else if (obj !== null && typeof obj === 'object') {
        Object.keys(obj).forEach(key => {
            if (key === 'image' && typeof obj[key] === 'string') {
                obj[key] = obj[key].replace(/Slide(\d+)\.PNG/g, 'slide_$1.png');
                obj[key] = obj[key].replace(/\.PNG/g, '.png');
            }
            if(obj[key]){
               fixComputerVisionPaths(obj[key]);
            }
        });
    }
}

// Xử lý và ghi tệp game_dev.json
if (coursesData.game_dev) {
    const gameDevPath = path.join(__dirname, 'game_dev.json');
    fs.writeFileSync(gameDevPath, JSON.stringify(coursesData.game_dev, null, 4));
    console.log('Successfully created game_dev.json');
}

// Xử lý và ghi tệp computer_vision.json
if (coursesData.computer_vision) {
    fixComputerVisionPaths(coursesData.computer_vision);
    const cvPath = path.join(__dirname, 'computer_vision.json');
    fs.writeFileSync(cvPath, JSON.stringify(coursesData.computer_vision, null, 4));
    console.log('Successfully created computer_vision.json');
}
```

**Lệnh thực thi script:**
```bash
node "C:\Users\huuda\OneDrive\Documents\GitHub\Slidify\js\split_data.js"
```

#### Bước 2.2: Tạo tệp kê khai `courses.json`

Một tệp `js/courses.json` được tạo để trang chủ có thể lấy danh sách các môn học một cách nhanh chóng.

**Nội dung `js/courses.json`:**
```json
[
  {
    "id": "game_dev",
    "title": "Phát triển trò chơi với Unity",
    "description": "Xây dựng 4 game 2D có thể chơi được bằng C# và nắm vững các nguyên tắc cơ bản về phát triển game.",
    "thumbnail": "images/unity.png"
  },
  {
    "id": "computer_vision",
    "title": "Nhập môn Thị giác Máy tính",
    "description": "Khám phá cách máy tính 'nhìn' và phân tích hình ảnh, từ nhận diện vật thể đến xử lý ảnh cơ bản.",
    "thumbnail": "images/computer-vision.webp"
  }
]
```

#### Bước 2.3: Cập nhật `index.html`

Trang chủ được cập nhật để không nạp `data.js` nữa, thay vào đó là `fetch` tệp `courses.json` để dựng giao diện.

**Đoạn mã được thay đổi trong `index.html`:**
```html
<script>
    // ...
    document.addEventListener('DOMContentLoaded', () => {
        // ...
        // Hiển thị danh sách môn học từ courses.json
        const courseContainer = document.getElementById('course-list-container');
        fetch('js/courses.json')
            .then(response => response.json())
            .then(courses => {
                courses.forEach(course => {
                    const courseCard = document.createElement('a');
                    courseCard.className = 'course-card';
                    courseCard.href = `subject.html?course=${course.id}`;
                    // ... tạo HTML cho card
                    courseContainer.appendChild(courseCard);
                });
            })
            .catch(error => {
                console.error('Error loading courses:', error);
            });
    });
</script>
```

#### Bước 2.4: Cập nhật `js/script.js`

Tệp script cho trang chi tiết môn học được cập nhật để `fetch` tệp JSON của môn học tương ứng thay vì đọc từ biến toàn cục.

**Đoạn mã được thay đổi trong `js/script.js`:**
```javascript
// ...
document.addEventListener('DOMContentLoaded', () => {
    const courseId = getCourseIdFromURL();
    // ...
    // Tải dữ liệu JSON của môn học
    fetch(`js/${courseId}.json`)
        .then(response => response.json())
        .then(currentCourseData => {
            // TOÀN BỘ LOGIC HIỂN THỊ SLIDE ĐƯỢC ĐẶT BÊN TRONG ĐÂY
        })
        .catch(error => {
            console.error('Lỗi khi tải hoặc xử lý dữ liệu môn học:', error);
        });
});
```

#### Bước 2.5: Dọn dẹp

Xóa tệp `js/data.js` không còn được sử dụng.

```bash
del "C:\Users\huuda\OneDrive\Documents\GitHub\Slidify\js\data.js"
```