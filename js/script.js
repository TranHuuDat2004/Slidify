// Hàm để tải nội dung HTML từ một file và chèn vào một element
function loadComponent(filePath, elementId) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error(`Error loading component from ${filePath}:`, error);
            // Hiển thị lỗi trên trang để dễ debug
            document.getElementById(elementId).innerHTML = `<p style="color:red;">Failed to load ${elementId}.</p>`;
        });
}

// Đảm bảo mã chạy sau khi trang web đã tải xong
document.addEventListener('DOMContentLoaded', () => {
    const slideListEl = document.getElementById('slide-list');
    const slideTitleEl = document.getElementById('slide-title');
    const slideImageEl = document.getElementById('slide-image');
    const slideNotesEl = document.getElementById('slide-notes-content');
    const slideTermsEl = document.getElementById('slide-terms-content');

    // Hàm để hiển thị nội dung của một slide cụ thể
    function displaySlide(slideId) {
        // Tìm đối tượng slide trong mảng data.js
        const slideData = slidesData.find(s => s.id === slideId);
        if (!slideData) return;

        // Cập nhật nội dung trên trang
        slideTitleEl.textContent = slideData.title;
        slideImageEl.src = slideData.image;
        slideNotesEl.textContent = slideData.notes;

        // Xóa các thuật ngữ cũ và thêm thuật ngữ mới
        slideTermsEl.innerHTML = '';
        for (const term in slideData.terms) {
            const dt = document.createElement('dt');
            dt.textContent = term;
            const dd = document.createElement('dd');
            dd.textContent = slideData.terms[term];
            slideTermsEl.appendChild(dt);
            slideTermsEl.appendChild(dd);
        }

        // Cập nhật trạng thái "active" cho mục lục
        document.querySelectorAll('#slide-list li').forEach(li => {
            li.classList.remove('active');
        });
        document.querySelector(`#slide-list li[data-id='${slideId}']`).classList.add('active');
    }

    // Tạo danh sách mục lục từ dữ liệu trong data.js
    slidesData.forEach(slide => {
        const li = document.createElement('li');
        li.textContent = slide.title;
        li.setAttribute('data-id', slide.id);
        
        // Thêm sự kiện click để chuyển slide
        li.addEventListener('click', () => {
            displaySlide(slide.id);
        });

        slideListEl.appendChild(li);
    });

    // Mặc định hiển thị slide đầu tiên khi tải trang
    if (slidesData.length > 0) {
        displaySlide(slidesData[0].id);
    }
});

// Hàm xử lý việc chuyển tab giữa Ghi Chú và Thuật Ngữ
function openTab(evt, tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
    
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}