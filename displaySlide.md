# Phân tích thuật toán hàm `displaySlide(slideId)` (Phiên bản 2 - Bố cục hai cột)

Hàm `displaySlide` là "trái tim" của trang học (`subject.html`). Mỗi khi người dùng nhấp vào một slide trong mục lục, hàm này được gọi với `slideId` tương ứng. Nhiệm vụ của nó là tìm nạp dữ liệu liên quan và cập nhật toàn bộ giao diện, bao gồm cả việc **điều khiển bố cục hai cột một cách linh hoạt**.

## Toàn bộ mã nguồn hàm

```javascript
function displaySlide(slideId) {
    // --- Phần 1: Tìm dữ liệu slide ---
    let currentSlideData = null;
    for (const section of courseSections) {
        const foundSlide = section.slides.find(s => s.id === slideId);
        if (foundSlide) {
            currentSlideData = foundSlide;
            break;
        }
    }
    if (!currentSlideData) { return; }

    // --- Phần 2: Hiển thị nội dung chính (Tiêu đề, ảnh, ghi chú) ---
    slideTitleEl.textContent = currentSlideData.title;
    slideImageEl.src = currentSlideData.image;
    slideNotesEl.innerHTML = currentSlideData.notes;

    // --- Phần 3: Xử lý bố cục 2 cột ---
    const notesSection = document.querySelector('.notes-section');
    const termsColumn = document.getElementById('terms-column');
    const termsListEl = document.getElementById('slide-terms-content');
    termsListEl.innerHTML = ''; // Luôn dọn dẹp danh sách cũ

    // Kiểm tra xem slide này có thuật ngữ hay không
    const hasTerms = currentSlideData.terms && Object.keys(currentSlideData.terms).length > 0;

    if (hasTerms) {
        // NẾU CÓ THUẬT NGỮ:
        termsColumn.style.display = 'block'; // 1. Hiện cột thuật ngữ
        notesSection.classList.remove('single-column'); // 2. Xóa class để layout trở về 2 cột

        // 3. Điền dữ liệu thuật ngữ vào cột phải
        for (const term in currentSlideData.terms) {
            const dt = document.createElement('dt');
            dt.textContent = term;
            const dd = document.createElement('dd');
            dd.textContent = currentSlideData.terms[term];
            termsListEl.appendChild(dt);
            termsListEl.appendChild(dd);
        }
    } else {
        // NẾU KHÔNG CÓ THUẬT NGỮ:
        termsColumn.style.display = 'none'; // 1. Ẩn cột thuật ngữ
        notesSection.classList.add('single-column'); // 2. Thêm class để cột ghi chú chiếm toàn bộ không gian
    }

    // --- Phần 4: Cập nhật mục lục ---
    document.querySelectorAll('#slide-navigation-container li').forEach(li => li.classList.remove('active'));
    const activeLi = document.querySelector(`#slide-navigation-container li[data-id='${slideId}']`);
    if (activeLi) { activeLi.classList.add('active'); }
}
```

## Phân rã thuật toán theo từng bước

Thuật toán của hàm có thể được chia thành 4 bước chính, với sự thay đổi lớn nhất ở Bước 3.

### Bước 1: Tìm kiếm Dữ liệu (The "Seeker")
*Bước này không thay đổi.* Mục tiêu là lấy ra dữ liệu của slide được yêu cầu.

1.  **Khởi tạo:** Tạo biến `currentSlideData` rỗng.
2.  **Vòng lặp:** Lặp qua từng `section` (tuần học), và dùng `.find()` để tìm slide có `id` khớp với `slideId`.
3.  **Lưu kết quả & Thoát sớm:** Nếu tìm thấy, gán dữ liệu vào `currentSlideData` và dùng `break` để kết thúc tìm kiếm.
4.  **Kiểm tra lỗi:** Nếu không tìm thấy, kết thúc hàm.

### Bước 2: Hiển thị Nội dung Cốt lõi (The "Painter")
*Bước này không thay đổi.* Cập nhật các thành phần chính trên giao diện.

1.  **Cập nhật tiêu đề:** Gán `currentSlideData.title` vào `textContent` của tiêu đề.
2.  **Cập nhật ảnh:** Gán `currentSlideData.image` vào thuộc tính `src` của ảnh.
3.  **Cập nhật ghi chú:** Gán `currentSlideData.notes` vào `innerHTML` của vùng ghi chú.

### Bước 3: Quản lý Bố cục Động (The "Layout Manager")
Đây là phần logic được **thiết kế lại hoàn toàn**. Nó quyết định xem giao diện sẽ hiển thị 1 hay 2 cột.

1.  **Tham chiếu đến các Element:** Lấy ra các element HTML quan trọng:
    *   `notesSection`: Vùng chứa chính (`<section>`) của cả hai cột.
    *   `termsColumn`: Cột thuật ngữ bên phải.
    *   `termsListEl`: Danh sách `<dl>` để chứa nội dung thuật ngữ.
2.  **Dọn dẹp:** Luôn xóa sạch nội dung của danh sách thuật ngữ cũ (`termsListEl.innerHTML = ''`) để chuẩn bị cho dữ liệu mới.
3.  **Ra quyết định:** Kiểm tra xem slide hiện tại có chứa thuật ngữ hay không.
    *   Một biến boolean `hasTerms` được tạo ra.
    *   Điều kiện kiểm tra là: `currentSlideData.terms` có tồn tại **VÀ** số lượng "key" trong nó có lớn hơn 0 hay không (`Object.keys(currentSlideData.terms).length > 0`).
4.  **Phân luồng xử lý bố cục:**
    *   **Nếu `hasTerms` là `true` (CÓ thuật ngữ):**
        a. **Hiện cột phải:** Thiết lập `termsColumn.style.display = 'block'`.
        b. **Kích hoạt layout 2 cột:** Xóa class `single-column` khỏi `notesSection`. CSS sẽ tự động áp dụng `display: flex` và chia đôi không gian.
        c. **Điền dữ liệu:** Lặp qua đối tượng `currentSlideData.terms` và tạo các thẻ `<dt>`, `<dd>` để hiển thị nội dung thuật ngữ.
    *   **Nếu `hasTerms` là `false` (KHÔNG có thuật ngữ):**
        a. **Ẩn cột phải:** Thiết lập `termsColumn.style.display = 'none'`.
        b. **Kích hoạt layout 1 cột:** Thêm class `single-column` vào `notesSection`. CSS sẽ làm cho cột ghi chú bên trái chiếm 100% chiều rộng.

### Bước 4: Cập nhật Giao diện Mục lục (The "Highlighter")
*Bước này không thay đổi.* Phản hồi lại cho người dùng biết họ đang ở slide nào.

1.  **Xóa highlight cũ:** Xóa class `active` khỏi tất cả các mục `<li>` trong mục lục.
2.  **Thêm highlight mới:** Tìm đúng mục `<li>` có `data-id` khớp với `slideId` và thêm class `active` vào cho nó.

## Sơ đồ luồng thuật toán (Flowchart)

```
[ Bắt đầu ]
    |
    v
( Nhận slideId )
    |
    v
[ Tìm dữ liệu slide tương ứng ]
    |
    v
< Tìm thấy? > --Không--► [ Kết thúc ]
    |
   Có
    |
    v
[ Hiển thị title, ảnh, ghi chú ]
    |
    v
[ Xóa nội dung thuật ngữ cũ ]
    |
    v
< Slide hiện tại có thuật ngữ? > --Không--► [ Ẩn cột thuật ngữ & Áp dụng layout 1 cột ]
    |                                                 |
   Có                                                   |
    |                                                 |
    v                                                 |
[ Hiện cột thuật ngữ & Áp dụng layout 2 cột ]             |
    |                                                 |
    v                                                 |
[ Điền dữ liệu thuật ngữ vào cột phải ]                 |
    |                                                 |
    +-------------------------------------------------+
    |
    v
[ Cập nhật mục lục: highlight slide đang active ]
    |
    v
[ Kết thúc ]
```