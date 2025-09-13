// --- CÁC HÀM TIỆN ÍCH (giữ nguyên) ---
function loadComponent(filePath, elementId) {
    // Hàm này bây giờ trả về một Promise để chúng ta biết khi nào nó tải xong
    return fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`Could not load ${filePath}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}


function getCourseIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('course');
}

// --- LOGIC CHÍNH CỦA TRANG MÔN HỌC ---
document.addEventListener('DOMContentLoaded', () => {

    // --- TẢI CÁC THÀNH PHẦN ĐỘNG ---
    // Sử dụng Promise.all để đảm bảo cả header và footer đều được tải xong
    // --- TẢI CÁC THÀNH PHẦN ĐỘNG ---
    Promise.all([
        loadComponent('header.html', 'header-placeholder'),
        loadComponent('footer.html', 'footer-placeholder')
    ]).then(() => {
        // === KHỞI TẠO TOÀN BỘ LOGIC SIDEBAR SAU KHI HEADER ĐÃ TẢI XONG ===

        // Lấy tất cả các element cần thiết
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const leftSidebar = document.getElementById('left-sidebar');
        const closeLeftSidebarBtn = document.getElementById('close-left-sidebar-btn');

        const toggleTocBtn = document.getElementById('toggle-toc-btn');
        const rightSidebar = document.querySelector('.slide-sidebar');
        const closeRightSidebarBtn = document.getElementById('close-right-sidebar-btn');

        const overlay = document.getElementById('overlay');
        const body = document.body;

        // --- Hàm chung để đóng tất cả sidebar ---
        function closeAllSidebars() {
            leftSidebar.classList.remove('open');
            rightSidebar.classList.remove('open');
            overlay.classList.remove('active');
            body.classList.remove('body-no-scroll');
        }

        // --- Logic cho Sidebar Trái (Menu chính) ---
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', () => {
                leftSidebar.classList.add('open');
                overlay.classList.add('active');
                body.classList.add('body-no-scroll');
            });
        }
        if (closeLeftSidebarBtn) {
            closeLeftSidebarBtn.addEventListener('click', closeAllSidebars);
        }

        // --- Logic cho Sidebar Phải (Mục lục) ---
        if (toggleTocBtn) {
            toggleTocBtn.addEventListener('click', () => {
                rightSidebar.classList.add('open');
                overlay.classList.add('active');
                body.classList.add('body-no-scroll');
            });
        }
        if (closeRightSidebarBtn) {
            closeRightSidebarBtn.addEventListener('click', closeAllSidebars);
        }

        // --- Logic cho Overlay ---
        if (overlay) {
            overlay.addEventListener('click', closeAllSidebars);
        }

    }).catch(error => {
        console.error("Lỗi khi tải header hoặc footer:", error);
    });

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
    // **NÂNG CẤP LẦN CUỐI: Hàm hiển thị slide tích hợp nút Trước/Sau**
    function displaySlide(slideId) {
        // --- Lấy các element nút bấm ---
        const prevBtn = document.getElementById('prev-slide-btn');
        const nextBtn = document.getElementById('next-slide-btn');

        // --- Phần 1: Tìm dữ liệu slide, section và index hiện tại ---
        let currentSlideData = null;
        let currentSection = null;
        let currentSlideIndex = -1;
        let allSlidesInSection = [];

        for (const section of courseSections) {
            const foundIndex = section.slides.findIndex(s => s.id === slideId);
            if (foundIndex !== -1) {
                currentSection = section;
                currentSlideIndex = foundIndex;
                currentSlideData = section.slides[foundIndex];
                allSlidesInSection = section.slides;
                break;
            }
        }

        if (!currentSlideData) { return; }

        // --- Phần 2: Hiển thị nội dung chính (giữ nguyên) ---
        slideTitleEl.textContent = currentSlideData.title;
        slideImageEl.src = currentSlideData.image;
        slideNotesEl.innerHTML = currentSlideData.notes;

        // --- Phần 3: Xử lý bố cục 2 cột (giữ nguyên) ---
        const notesSection = document.querySelector('.notes-section');
        const termsColumn = document.getElementById('terms-column');
        const termsListEl = document.getElementById('slide-terms-content');
        termsListEl.innerHTML = '';
        const hasTerms = currentSlideData.terms && Object.keys(currentSlideData.terms).length > 0;
        if (hasTerms) {
            termsColumn.style.display = 'block';
            notesSection.classList.remove('single-column');
            for (const term in currentSlideData.terms) {
                const dt = document.createElement('dt'); dt.textContent = term;
                const dd = document.createElement('dd'); dd.textContent = currentSlideData.terms[term];
                termsListEl.appendChild(dt); termsListEl.appendChild(dd);
            }
        } else {
            termsColumn.style.display = 'none';
            notesSection.classList.add('single-column');
        }

        // --- Phần 4: Logic cho nút Trước/Sau ---
        // Nút "Trang trước"
        if (currentSlideIndex > 0) {
            prevBtn.disabled = false;
            const prevSlideId = allSlidesInSection[currentSlideIndex - 1].id;
            prevBtn.onclick = () => displaySlide(prevSlideId);
        } else {
            prevBtn.disabled = true; // Vô hiệu hóa nếu là slide đầu tiên
            prevBtn.onclick = null;
        }

        // Nút "Trang sau"
        if (currentSlideIndex < allSlidesInSection.length - 1) {
            nextBtn.disabled = false;
            const nextSlideId = allSlidesInSection[currentSlideIndex + 1].id;
            nextBtn.onclick = () => displaySlide(nextSlideId);
        } else {
            nextBtn.disabled = true; // Vô hiệu hóa nếu là slide cuối cùng
            nextBtn.onclick = null;
        }

        // --- Phần 5: Cập nhật mục lục (giữ nguyên) ---
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