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

// === CÁC HÀM HELPER CHO LOCALSTORAGE ===

// Hàm lấy tiến độ đã lưu cho một môn học cụ thể
function getProgress(courseId) {
    const progress = localStorage.getItem(`progress_${courseId}`);
    return progress ? JSON.parse(progress) : []; // Trả về mảng các slideId đã xem
}

// Hàm lưu tiến độ
function saveProgress(courseId, viewedSlides) {
    localStorage.setItem(`progress_${courseId}`, JSON.stringify(viewedSlides));
}

// Hàm lấy slide cuối cùng đã xem
function getLastViewedSlide(courseId) {
    return localStorage.getItem(`last_slide_${courseId}`);
}

// Hàm lưu slide cuối cùng đã xem
function saveLastViewedSlide(courseId, slideId) {
    localStorage.setItem(`last_slide_${courseId}`, slideId);
}

// THAY ĐỔI CÁC HÀM HELPER NÀY:
function getSavedWidth() {
    const width = localStorage.getItem('slide_width');
    return width ? parseInt(width) : 100; // Mặc định là 100 (%)
}

function saveWidth(widthPercentage) {
    localStorage.setItem('slide_width', widthPercentage);
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

        // === KHỞI TẠO LOGIC WIDTH (THAY THẾ CHO ZOOM) ===
        const sizeButtons = document.querySelectorAll('.zoom-btn'); // Giữ nguyên class cho tiện
        const slideImage = document.getElementById('slide-image');

        // Hàm áp dụng width và cập nhật UI
        function applyWidth(widthValue) {
            // 1. Áp dụng width (tính theo %) cho ảnh
            slideImage.style.width = `${widthValue}%`;

            // 2. Cập nhật trạng thái "active" cho các nút
            sizeButtons.forEach(btn => {
                if (parseInt(btn.dataset.zoom) === widthValue) { // Vẫn dùng data-zoom cho tiện
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            // 3. Lưu lựa chọn vào localStorage
            saveWidth(widthValue);
        }

        // Gán sự kiện click cho từng nút
        sizeButtons.forEach(button => {
            // Thay đổi data-zoom thành các giá trị %
            const widthValue = parseInt(button.textContent); // Lấy 50, 100, 150, 200 từ text
            button.addEventListener('click', () => {
                applyWidth(widthValue);
            });
        });

        // Áp dụng mức width đã lưu khi tải trang
        const initialWidth = getSavedWidth();
        applyWidth(initialWidth);



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

    function displaySlide(slideId, sectionIndex, courseId) {
    const prevBtn = document.getElementById('prev-slide-btn');
    const nextBtn = document.getElementById('next-slide-btn');
    const currentSection = courseSections[sectionIndex];
    if (!currentSection) return;
    const allSlidesInSection = currentSection.slides;
    const currentSlideIndex = allSlidesInSection.findIndex(s => s.id === slideId);
    if (currentSlideIndex === -1) return;
    const currentSlideData = allSlidesInSection[currentSlideIndex];

    // --- Hiển thị nội dung ---
    slideTitleEl.textContent = currentSlideData.title;
    slideImageEl.src = currentSlideData.image;
    slideNotesEl.innerHTML = currentSlideData.notes;

    // --- Xử lý bố cục 2 cột ---
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

    // --- Logic lưu trữ ---
    const uniqueSlideIdentifier = `${sectionIndex}-${slideId}`;
    saveLastViewedSlide(courseId, uniqueSlideIdentifier);
    let viewedSlides = getProgress(courseId);
    if (!viewedSlides.includes(uniqueSlideIdentifier)) {
        viewedSlides.push(uniqueSlideIdentifier);
        saveProgress(courseId, viewedSlides);
    }
    const viewedLi = document.querySelector(`.slide-list[data-section-index='${sectionIndex}'] li[data-id='${slideId}']`);
    if (viewedLi) {
        viewedLi.classList.add('viewed');
    }

    // --- Logic nút Trước/Sau ---
    if (currentSlideIndex > 0) {
        prevBtn.disabled = false;
        const prevSlide = allSlidesInSection[currentSlideIndex - 1];
        prevBtn.onclick = () => displaySlide(prevSlide.id, sectionIndex, courseId);
    } else {
        prevBtn.disabled = true;
    }
    if (currentSlideIndex < allSlidesInSection.length - 1) {
        nextBtn.disabled = false;
        const nextSlide = allSlidesInSection[currentSlideIndex + 1];
        nextBtn.onclick = () => displaySlide(nextSlide.id, sectionIndex, courseId);
    } else {
        nextBtn.disabled = true;
    }

    // --- Cập nhật mục lục ---
    document.querySelectorAll('#slide-navigation-container li').forEach(li => li.classList.remove('active'));
    const activeLi = document.querySelector(`.slide-list[data-section-index='${sectionIndex}'] li[data-id='${slideId}']`);
    if (activeLi) {
        activeLi.classList.add('active');
    }
}

    // **NÂNG CẤP: Hàm tạo mục lục có thể thu gọn/mở rộng**
    function generateSlideNavigation() {
        slideNavContainer.innerHTML = '';
        courseSections.forEach((section, sectionIndex) => { // Lấy ra sectionIndex
            const sectionTitle = document.createElement('h3');
            // ... (code tạo tiêu đề tuần giữ nguyên) ...

            const slideList = document.createElement('ul');
            slideList.className = 'slide-list';
            slideList.setAttribute('data-section-index', sectionIndex); // Thêm data attribute

            section.slides.forEach(slide => {
                const li = document.createElement('li');
                li.textContent = slide.title;
                li.setAttribute('data-id', slide.id);
                // Truyền cả slide.id và sectionIndex
                li.addEventListener('click', () => {
                    displaySlide(slide.id, sectionIndex, courseId);
                });
                slideList.appendChild(li);
            });


            // ---- LOGIC ĐÓNG/MỞ (ĐÃ SỬA) ----
            // 1. Thiết lập trạng thái ban đầu: Mở tuần đầu tiên, đóng các tuần còn lại
            if (sectionIndex === 0) { // SỬA 'index' THÀNH 'sectionIndex'
                sectionTitle.classList.add('expanded');
                slideList.style.display = 'block';
            } else {
                slideList.style.display = 'none';
            }

            // 2. Thêm sự kiện click vào tiêu đề tuần
            sectionTitle.addEventListener('click', function () {
                this.classList.toggle('expanded');
                const content = this.nextElementSibling;
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            });

        });
    }

    // --- KHỞI CHẠY (PHIÊN BẢN CUỐI) ---
    generateSlideNavigation();

const viewedSlides = getProgress(courseId);
viewedSlides.forEach(uniqueId => {
    // === BƯỚC KIỂM TRA AN TOÀN ===
    // Chỉ thực hiện nếu uniqueId là một chuỗi và chứa dấu '-'
    if (typeof uniqueId === 'string' && uniqueId.includes('-')) {
        const [sectionIndex, slideId] = uniqueId.split('-');
        const li = document.querySelector(`.slide-list[data-section-index='${sectionIndex}'] li[data-id='${slideId}']`);
        if (li) {
            li.classList.add('viewed');
        }
    }
    // Hàm chuyển tab (giữ nguyên)
function openTab(evt, tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}
});

