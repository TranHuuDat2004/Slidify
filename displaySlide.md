# Phân tích thuật toán hàm `displaySlide(slideId)`

Hàm `displaySlide` là "trái tim" của trang học (`subject.html`). Mỗi khi người dùng nhấp vào một slide trong mục lục, hàm này sẽ được gọi với `slideId` tương ứng. Nhiệm vụ của nó là tìm nạp tất cả dữ liệu liên quan đến slide đó và cập nhật toàn bộ giao diện một cách chính xác.

## Toàn bộ mã nguồn hàm

```javascript
function displaySlide(slideId) {
    // --- Phần 1: Tìm dữ liệu slide và section hiện tại ---
    let currentSlideData = null;
    let currentSection = null;

    for (const section of courseSections) {
        const foundSlide = section.slides.find(s => s.id === slideId);
        if (foundSlide) {
            currentSlideData = foundSlide;
            currentSection = section;
            break;
        }
    }

    if (!currentSlideData) {
        console.error("Không tìm thấy slide với ID:", slideId);
        return;
    }

    // --- Phần 2: Hiển thị nội dung chính (Tiêu đề, ảnh, ghi chú) ---
    slideTitleEl.textContent = currentSlideData.title;
    slideImageEl.src = currentSlideData.image;
    slideNotesEl.innerHTML = currentSlideData.notes; // Dùng innerHTML để giữ định dạng

    // --- Phần 3: Xử lý logic hiển thị thuật ngữ ---
    const termsContainer = document.getElementById('terms-section-container');
    termsContainer.innerHTML = ''; // Luôn xóa nội dung thuật ngữ cũ

    // Kiểm tra xem đây có phải là slide cuối cùng của tuần hay không
    const isLastSlide = currentSection.slides.indexOf(currentSlideData) === currentSection.slides.length - 1;

    if (isLastSlide) {
        // TỔNG HỢP TẤT CẢ THUẬT NGỮ TRONG TUẦN
        const allTerms = {};
        currentSection.slides.forEach(slide => {
            if (slide.terms) {
                Object.assign(allTerms, slide.terms); // Gộp các thuật ngữ lại
            }
        });

        // Nếu có thuật ngữ để hiển thị
        if (Object.keys(allTerms).length > 0) {
            // Tạo tiêu đề và danh sách
            termsContainer.innerHTML = `
                <h3 class="terms-heading">Tổng kết Thuật Ngữ</h3>
                <p class="terms-summary-intro">Dưới đây là tổng hợp các thuật ngữ đã xuất hiện trong tuần này:</p>
                <dl id="slide-terms-content"></dl>
            `;
            const termsListEl = document.getElementById('slide-terms-content');
            for (const term in allTerms) {
                const dt = document.createElement('dt');
                dt.textContent = term;
                const dd = document.createElement('dd');
                dd.textContent = allTerms[term];
                termsListEl.appendChild(dt);
                termsListEl.appendChild(dd);
            }
        }
    }
    // Nếu không phải slide cuối, chúng ta không làm gì cả, termsContainer sẽ trống.

    // --- Phần 4: Cập nhật trạng thái "active" cho mục lục ---
    document.querySelectorAll('#slide-navigation-container li').forEach(li => li.classList.remove('active'));
    const activeLi = document.querySelector(`#slide-navigation-container li[data-id='${slideId}']`);
    if (activeLi) {
        activeLi.classList.add('active');
    }
}
```

## Phân rã thuật toán theo từng bước

Thuật toán của hàm có thể được chia thành 4 bước chính:

### Bước 1: Tìm kiếm Dữ liệu (The "Seeker")
Đây là bước đầu vào, mục tiêu là lấy ra dữ liệu của slide được yêu cầu và cả "tuần học" (section) chứa nó.

1.  **Khởi tạo:** Tạo ra 2 biến rỗng: `currentSlideData` và `currentSection`.
2.  **Vòng lặp ngoài:** Lặp qua từng `section` (từng tuần) trong mảng `courseSections`.
3.  **Vòng lặp trong (sử dụng `.find()`):** Bên trong mỗi `section`, sử dụng phương thức `find()` để tìm kiếm trong mảng `slides` xem có slide nào có `id` khớp với `slideId` được truyền vào hay không.
4.  **Lưu kết quả:** Nếu tìm thấy, gán dữ liệu của slide đó vào `currentSlideData` và gán section chứa nó vào `currentSection`.
5.  **Tối ưu hóa:** Sử dụng lệnh `break` để thoát khỏi vòng lặp ngoài ngay khi tìm thấy slide, tránh việc phải tìm kiếm không cần thiết ở các tuần sau.
6.  **Kiểm tra lỗi:** Nếu sau khi lặp xong mà `currentSlideData` vẫn rỗng, tức là không tìm thấy slide, hàm sẽ báo lỗi và kết thúc.

### Bước 2: Hiển thị Nội dung Cốt lõi (The "Painter")
Sau khi đã có dữ liệu, bước này cập nhật các thành phần chính trên giao diện.

1.  **Cập nhật tiêu đề:** Gán `currentSlideData.title` cho `textContent` của tiêu đề `h1`.
2.  **Cập nhật ảnh:** Gán `currentSlideData.image` cho thuộc tính `src` của thẻ `img`.
3.  **Cập nhật ghi chú:** Gán `currentSlideData.notes` cho `innerHTML` của vùng ghi chú. (Sử dụng `innerHTML` thay vì `textContent` để các thẻ HTML như `<b>` có thể được hiển thị đúng định dạng).

### Bước 3: Xử lý Thuật ngữ Thông minh (The "Strategist")
Đây là phần logic phức tạp nhất, quyết định việc có hiển thị thuật ngữ hay không và hiển thị cái gì.

1.  **Dọn dẹp:** Tìm đến vùng chứa thuật ngữ (`termsContainer`) và xóa sạch nội dung cũ của nó (`innerHTML = ''`). Bước này cực kỳ quan trọng để đảm bảo nội dung từ slide trước không còn sót lại.
2.  **Ra quyết định:** Tính toán xem slide hiện tại có phải là slide cuối cùng của tuần hay không.
    *   Điều này được thực hiện bằng cách so sánh vị trí (index) của slide hiện tại trong mảng `slides` của `currentSection` với chiều dài của mảng đó trừ đi 1.
    *   `currentSection.slides.indexOf(currentSlideData) === currentSection.slides.length - 1`
3.  **Phân luồng xử lý:**
    *   **Nếu LÀ slide cuối (`if (isLastSlide)`):**
        a. **Khởi tạo "Giỏ chứa":** Tạo một object rỗng `allTerms` để lưu trữ tất cả thuật ngữ.
        b. **Thực hiện "Thu thập":** Chạy một vòng lặp `forEach` qua **tất cả các slide** trong `currentSection`.
        c. **"Gộp" dữ liệu:** Với mỗi slide, sử dụng `Object.assign(allTerms, slide.terms)` để sao chép toàn bộ thuật ngữ của slide đó vào "giỏ chứa" `allTerms`. `Object.assign` tự động xử lý việc gộp các object lại với nhau.
        d. **Hiển thị:** Sau khi thu thập xong, tạo ra cấu trúc HTML cho phần tổng kết (tiêu đề, mô tả) và một danh sách `<dl>` rỗng, rồi chèn vào `termsContainer`.
        e. **Điền dữ liệu:** Cuối cùng, lặp qua "giỏ chứa" `allTerms` và tạo các thẻ `<dt>` (thuật ngữ) và `<dd>` (định nghĩa) tương ứng để điền vào danh sách.
    *   **Nếu KHÔNG PHẢI slide cuối:**
        a. Khối `if` sẽ bị bỏ qua.
        b. Vì `termsContainer` đã được dọn dẹp ở bước 3.1, nó sẽ vẫn trống, đúng như mục tiêu.

### Bước 4: Cập nhật Giao diện Mục lục (The "Highlighter")
Đây là bước cuối cùng để phản hồi lại cho người dùng biết họ đang ở slide nào.

1.  **Xóa highlight cũ:** Lấy tất cả các mục `<li>` trong mục lục và xóa class `active` khỏi chúng.
2.  **Thêm highlight mới:** Sử dụng `querySelector` để tìm chính xác mục `<li>` có `data-id` khớp với `slideId` hiện tại, và thêm class `active` vào cho nó.

## Sơ đồ luồng thuật toán (Flowchart)

```
[ Bắt đầu ]
    |
    v
( Nhận slideId )
    |
    v
[ Tìm slide và section tương ứng ]
    |
    v
< Tìm thấy? > --Không--► [ Báo lỗi & Kết thúc ]
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
< Đây có phải slide cuối của tuần? > --Không--► [ BƯỚC TIẾP THEO ]
    |
   Có
    |
    v
[ Vòng lặp: Thu thập tất cả thuật ngữ trong tuần ]
    |
    v
[ Hiển thị danh sách tổng kết thuật ngữ ]
    |
    v
[ BƯỚC TIẾP THEO ]
    |
    v
[ Cập nhật mục lục: highlight slide đang active ]
    |
    v
[ Kết thúc ]
```