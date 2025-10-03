// ==================
// CÁC HÀM HELPER TOÀN CỤC
// ==================

function loadComponent(filePath, elementId) {
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
function getProgress(courseId) {
    const progress = localStorage.getItem(`progress_${courseId}`);
    return progress ? JSON.parse(progress) : [];
}

function saveProgress(courseId, viewedSlides) {
    localStorage.setItem(`progress_${courseId}`, JSON.stringify(viewedSlides));
}

function getLastViewedSlide(courseId) {
    return localStorage.getItem(`last_slide_${courseId}`);
}

function saveLastViewedSlide(courseId, slideId) {
    localStorage.setItem(`last_slide_${courseId}`, slideId);
}

function getSavedWidth() {
    const width = localStorage.getItem('slide_width');
    return width ? parseInt(width) : 100;
}

function saveWidth(widthPercentage) {
    localStorage.setItem('slide_width', widthPercentage);
}


// ==================
// LOGIC CHÍNH CỦA TRANG MÔN HỌC
// ==================
document.addEventListener('DOMContentLoaded', () => {

    // --- TẢI CÁC THÀNH PHẦN ĐỘNG ---
    Promise.all([
        loadComponent('header.html', 'header-placeholder'),
        loadComponent('footer.html', 'footer-placeholder')
    ]).then(() => {
        // === KHỞI TẠO LOGIC SIDEBAR & WIDTH SAU KHI HEADER ĐÃ TẢI XONG ===

        // Logic Width
        const sizeButtons = document.querySelectorAll('.zoom-btn');
        const slideImage = document.getElementById('slide-image');

        function applyWidth(widthValue) {
            if (!slideImage) return;
            slideImage.style.width = `${widthValue}%`;
            sizeButtons.forEach(btn => {
                btn.classList.toggle('active', parseInt(btn.textContent) === widthValue);
            });
            saveWidth(widthValue);
        }

        sizeButtons.forEach(button => {
            const widthValue = parseInt(button.textContent);
            if (!isNaN(widthValue)) {
                button.addEventListener('click', () => applyWidth(widthValue));
            }
        });

        applyWidth(getSavedWidth());

        // Logic Sidebar
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const leftSidebar = document.getElementById('left-sidebar');
        const closeLeftSidebarBtn = document.getElementById('close-left-sidebar-btn');
        const toggleTocBtn = document.getElementById('toggle-toc-btn');
        const rightSidebar = document.querySelector('.slide-sidebar');
        const closeRightSidebarBtn = document.getElementById('close-right-sidebar-btn');
        const overlay = document.getElementById('overlay');
        const body = document.body;

        function closeAllSidebars() {
            leftSidebar.classList.remove('open');
            rightSidebar.classList.remove('open');
            overlay.classList.remove('active');
            body.classList.remove('body-no-scroll');
        }

        if (hamburgerBtn) hamburgerBtn.addEventListener('click', () => {
            leftSidebar.classList.add('open');
            overlay.classList.add('active');
            body.classList.add('body-no-scroll');
        });
        if (closeLeftSidebarBtn) closeLeftSidebarBtn.addEventListener('click', closeAllSidebars);
        if (toggleTocBtn) toggleTocBtn.addEventListener('click', () => {
            rightSidebar.classList.add('open');
            overlay.classList.add('active');
            body.classList.add('body-no-scroll');
        });
        if (closeRightSidebarBtn) closeRightSidebarBtn.addEventListener('click', closeAllSidebars);
        if (overlay) overlay.addEventListener('click', closeAllSidebars);

    }).catch(error => {
        console.error("Lỗi khi tải header hoặc footer:", error);
    });

    // --- KHỞI TẠO NỘI DUNG CHÍNH ---
    const courseId = getCourseIdFromURL();
    const currentCourseData = coursesData[courseId];
    if (!currentCourseData) {
        document.querySelector('.main-container').innerHTML = `<h1>Lỗi: Không tìm thấy môn học.</h1><p>Vui lòng quay lại <a href="index.html">trang chủ</a>.</p>`;
        return;
    }

    const courseSections = currentCourseData.sections;
    const slideNavContainer = document.getElementById('slide-navigation-container');
    const slideTitleEl = document.getElementById('slide-title');
    const slideImageEl = document.getElementById('slide-image');
    const slideNotesEl = document.getElementById('slide-notes-content');

    // --- CÁC HÀM CHỨC NĂNG ---
    function displaySlide(slideId, sectionIndex) {
        const prevBtn = document.getElementById('prev-slide-btn');
        const nextBtn = document.getElementById('next-slide-btn');
        const currentSection = courseSections[sectionIndex];
        if (!currentSection) return;
        const allSlidesInSection = currentSection.slides;
        const currentSlideIndex = allSlidesInSection.findIndex(s => s.id === slideId);
        if (currentSlideIndex === -1) return;
        const currentSlideData = allSlidesInSection[currentSlideIndex];

        slideTitleEl.textContent = currentSlideData.title;
        slideImageEl.src = currentSlideData.image;
        slideNotesEl.innerHTML = currentSlideData.notes;

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

        const uniqueSlideIdentifier = `${sectionIndex}-${slideId}`;
        saveLastViewedSlide(courseId, uniqueSlideIdentifier);
        let viewedSlides = getProgress(courseId);
        if (!viewedSlides.includes(uniqueSlideIdentifier)) {
            viewedSlides.push(uniqueSlideIdentifier);
            saveProgress(courseId, viewedSlides);
        }
        const viewedLi = document.querySelector(`.slide-list[data-section-index='${sectionIndex}'] li[data-id='${slideId}']`);
        if (viewedLi) viewedLi.classList.add('viewed');

        prevBtn.disabled = currentSlideIndex <= 0;
        if (!prevBtn.disabled) {
            const prevSlide = allSlidesInSection[currentSlideIndex - 1];
            prevBtn.onclick = () => displaySlide(prevSlide.id, sectionIndex);
        }
        nextBtn.disabled = currentSlideIndex >= allSlidesInSection.length - 1;
        if (!nextBtn.disabled) {
            const nextSlide = allSlidesInSection[currentSlideIndex + 1];
            nextBtn.onclick = () => displaySlide(nextSlide.id, sectionIndex);
        }

        document.querySelectorAll('#slide-navigation-container li').forEach(li => li.classList.remove('active'));
        const activeLi = document.querySelector(`.slide-list[data-section-index='${sectionIndex}'] li[data-id='${slideId}']`);
        if (activeLi) {
            activeLi.classList.add('active');

            // === DÒNG MÃ MỚI - TỰ ĐỘNG CUỘN ĐẾN MỤC ĐANG CHỌN ===
            activeLi.scrollIntoView({
                behavior: 'smooth', // Hiệu ứng cuộn mượt mà
                block: 'nearest'   // Cuộn đến vị trí gần nhất (trên hoặc dưới)
            });
        }
    }

    function generateSlideNavigation() {
        slideNavContainer.innerHTML = '';
        courseSections.forEach((section, sectionIndex) => {
            const sectionTitle = document.createElement('h3');
            sectionTitle.className = 'section-title';
            sectionTitle.textContent = section.title;
            slideNavContainer.appendChild(sectionTitle);

            const slideList = document.createElement('ul');
            slideList.className = 'slide-list';
            slideList.setAttribute('data-section-index', sectionIndex);
            section.slides.forEach(slide => {
                const li = document.createElement('li');
                li.textContent = slide.title;
                li.setAttribute('data-id', slide.id);
                li.addEventListener('click', () => displaySlide(slide.id, sectionIndex));
                slideList.appendChild(li);
            });
            slideNavContainer.appendChild(slideList);



            sectionTitle.addEventListener('click', function () {
                // 1. Thêm/xóa class 'expanded' để thay đổi icon +/-
                this.classList.toggle('expanded');

                // 2. Lấy danh sách slide (ul) ngay sau tiêu đề
                const content = this.nextElementSibling;

                // 3. Kích hoạt animation bằng cách thay đổi max-height
                if (content.style.maxHeight) {
                    // Nếu đang mở -> đóng lại
                    content.style.maxHeight = null;
                } else {
                    // Nếu đang đóng -> mở ra bằng cách set max-height bằng chiều cao thực của nó
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
    }

    // --- KHỞI CHẠY ---

    generateSlideNavigation();

    // Cập nhật dấu tích cho các slide đã xem
    const viewedSlides = getProgress(courseId);
    viewedSlides.forEach(uniqueId => {
        if (typeof uniqueId === 'string' && uniqueId.includes('-')) {
            const [sectionIndex, slideId] = uniqueId.split('-');
            const li = document.querySelector(`.slide-list[data-section-index='${sectionIndex}'] li[data-id='${slideId}']`);
            if (li) li.classList.add('viewed');
        }
    });

    // Quyết định slide và tuần nào sẽ được hiển thị
    let initialSectionIndex = 0;
    let initialSlideId = courseSections[0]?.slides[0]?.id;

    const lastViewedId = getLastViewedSlide(courseId);
    if (lastViewedId && lastViewedId.includes('-')) {
        const [sectionIndex, slideId] = lastViewedId.split('-');
        initialSectionIndex = parseInt(sectionIndex);
        initialSlideId = parseInt(slideId);
    }

    // === LOGIC MỚI: MỞ ĐÚNG TUẦN HỌC KHI TẢI TRANG ===
    // 1. Lấy tất cả các tiêu đề tuần
    const allSectionTitles = document.querySelectorAll('.section-title');

    // 2. Lặp qua tất cả các tuần để thiết lập trạng thái đóng/mở
    allSectionTitles.forEach((title, index) => {
        const content = title.nextElementSibling;
        if (index === initialSectionIndex) {
            // Mở tuần học chứa slide cuối cùng đã xem
            title.classList.add('expanded');
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            // Đóng tất cả các tuần khác
            title.classList.remove('expanded');
            content.style.maxHeight = null;
        }
    });

    // 3. Hiển thị slide cuối cùng
    if (initialSlideId !== undefined) {
        displaySlide(initialSlideId, initialSectionIndex);
    }
}); // <--- DẤU NGOẶC NHỌN VÀ NGOẶC ĐƠN ĐÓNG LẠI DOMCONTENTLOADED