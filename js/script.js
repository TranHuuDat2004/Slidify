// --- CÁC HÀM TIỆN ÍCH (giữ nguyên) ---
function loadComponent(filePath, elementId) {
    fetch(filePath)
        .then(response => response.ok ? response.text() : Promise.reject('File not found'))
        .then(data => { document.getElementById(elementId).innerHTML = data; })
        .catch(error => console.error(`Error loading ${elementId}:`, error));
}

function getCourseIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('course');
}

// --- LOGIC CHÍNH CỦA TRANG MÔN HỌC ---
document.addEventListener('DOMContentLoaded', () => {
    // Nạp header và footer
    loadComponent('header.html', 'header-placeholder');
    loadComponent('footer.html', 'footer-placeholder');

    const courseId = getCourseIdFromURL();
    const currentCourseData = coursesData[courseId];

    if (!currentCourseData) {
        document.querySelector('.main-container').innerHTML = `<h1>Lỗi: Không tìm thấy môn học.</h1><p>Vui lòng quay lại <a href="index.html">trang chủ</a>.</p>`;
        return;
    }

    // Đổi tên biến để rõ ràng hơn
    const courseSections = currentCourseData.sections;

    // **NÂNG CẤP: Lấy các element trên trang**
    const slideNavContainer = document.getElementById('slide-navigation-container');
    const slideTitleEl = document.getElementById('slide-title');
    const slideImageEl = document.getElementById('slide-image');
    const slideNotesEl = document.getElementById('slide-notes-content');
    const slideTermsEl = document.getElementById('slide-terms-content');

    // **NÂNG CẤP: Hàm tìm slide trong cấu trúc mới**
    function findSlideById(slideId) {
        for (const section of courseSections) {
            const foundSlide = section.slides.find(s => s.id === slideId);
            if (foundSlide) {
                return foundSlide;
            }
        }
        return null; // Không tìm thấy
    }

    // **NÂNG CẤP: Hàm hiển thị slide (logic bên trong giữ nguyên)**
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

    // **NÂNG CẤP: Hàm tạo mục lục có thể thu gọn/mở rộng**
    function generateSlideNavigation() {
        slideNavContainer.innerHTML = ''; // Xóa mục lục cũ

        // Sử dụng forEach với index để biết được tuần nào là tuần đầu tiên
        courseSections.forEach((section, index) => {
            // Tạo tiêu đề cho tuần/phần (H3)
            const sectionTitle = document.createElement('h3');
            sectionTitle.className = 'section-title';
            sectionTitle.textContent = section.title;
            slideNavContainer.appendChild(sectionTitle);

            // Tạo danh sách ul cho các slide trong tuần
            const slideList = document.createElement('ul');
            slideList.className = 'slide-list';

            section.slides.forEach(slide => {
                const li = document.createElement('li');
                li.textContent = slide.title;
                li.setAttribute('data-id', slide.id);

                li.addEventListener('click', () => {
                    displaySlide(slide.id);
                });

                slideList.appendChild(li);
            });

            slideNavContainer.appendChild(slideList);

            // ---- LOGIC ĐÓNG/MỞ ----
            // 1. Thiết lập trạng thái ban đầu: Mở tuần đầu tiên, đóng các tuần còn lại
            if (index === 0) {
                sectionTitle.classList.add('expanded');
                slideList.style.display = 'block';
            } else {
                slideList.style.display = 'none';
            }

            // 2. Thêm sự kiện click vào tiêu đề tuần
            sectionTitle.addEventListener('click', function () {
                // "this" ở đây chính là thẻ h3 được click
                this.classList.toggle('expanded'); // Thêm/xóa class 'expanded'

                // Lấy danh sách slide (ul) ngay sau tiêu đề (h3)
                const content = this.nextElementSibling;

                // Kiểm tra và thay đổi trạng thái hiển thị của danh sách slide
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            });
        });
    }

    // --- KHỞI CHẠY ---
    generateSlideNavigation();

    // Hiển thị slide đầu tiên của môn học
    const firstSlide = courseSections[0]?.slides[0];
    if (firstSlide) {
        displaySlide(firstSlide.id);
    }
});

// Hàm chuyển tab (giữ nguyên)
function openTab(evt, tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}