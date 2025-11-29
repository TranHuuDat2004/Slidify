
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
            const element = document.getElementById(elementId);
            if (element) element.innerHTML = data;
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
        // Logic cho các thành phần trong header/footer có thể được khởi tạo ở đây nếu cần
    }).catch(error => {
        console.error("Lỗi khi tải header hoặc footer:", error);
    });

    // --- KHỞI TẠO NỘI DUNG CHÍNH ---
    const courseId = getCourseIdFromURL();

    if (!courseId) {
        document.querySelector('.main-container').innerHTML = `<h1>Lỗi: Không có môn học nào được chọn.</h1><p>Vui lòng quay lại <a href="index.html">trang chủ</a>.</p>`;
        return;
    }

    // Tải dữ liệu JSON của môn học
    fetch(`js/${courseId}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok for ${courseId}.json`);
            }
            return response.json();
        })
        .then(currentCourseData => {
            // --- KHI DỮ LIỆU ĐÃ SẴN SÀNG, KHỞI TẠO PHẦN CÒN LẠI CỦA TRANG ---

            const courseSections = currentCourseData.sections;
            const slideNavContainer = document.getElementById('slide-navigation-container');
            const slideTitleEl = document.getElementById('slide-title');
            const slideImageEl = document.getElementById('slide-image');
            const slideNotesEl = document.getElementById('slide-notes-content');

            // --- CÁC HÀM CHỨC NĂNG ---
            // Hàm áp dụng mức zoom
            function applyZoom(zoomLevel) {
                slideImageEl.style.width = `${zoomLevel * 100}%`;
                saveWidth(zoomLevel * 100);

                // Cập nhật trạng thái active cho nút zoom
                document.querySelectorAll('.zoom-btn').forEach(btn => {
                    btn.classList.remove('active');
                    if (parseFloat(btn.dataset.zoom) === zoomLevel) {
                        btn.classList.add('active');
                    }
                });
            }

            // Gắn sự kiện cho các nút zoom
            document.querySelector('.zoom-controls').addEventListener('click', (event) => {
                const clickedButton = event.target.closest('.zoom-btn');
                if (clickedButton) {
                    const zoomLevel = parseFloat(clickedButton.dataset.zoom);
                    applyZoom(zoomLevel);
                }
            });

            // Áp dụng mức zoom đã lưu khi tải trang
            const initialZoomLevel = getSavedWidth() / 100;
            applyZoom(initialZoomLevel);
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
                    activeLi.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
                        this.classList.toggle('expanded');
                        const content = this.nextElementSibling;
                        if (content.style.maxHeight) {
                            content.style.maxHeight = null;
                        } else {
                            content.style.maxHeight = content.scrollHeight + "px";
                        }
                    });
                });
            }

            // --- KHỞI CHẠY ---
            generateSlideNavigation();

            const viewedSlides = getProgress(courseId);
            viewedSlides.forEach(uniqueId => {
                if (typeof uniqueId === 'string' && uniqueId.includes('-')) {
                    const [sectionIndex, slideId] = uniqueId.split('-');
                    const li = document.querySelector(`.slide-list[data-section-index='${sectionIndex}'] li[data-id='${slideId}']`);
                    if (li) li.classList.add('viewed');
                }
            });

            let initialSectionIndex = 0;
            let initialSlideId = courseSections[0]?.slides[0]?.id;

            const lastViewedId = getLastViewedSlide(courseId);
            if (lastViewedId && lastViewedId.includes('-')) {
                const [sectionIndex, slideId] = lastViewedId.split('-');
                initialSectionIndex = parseInt(sectionIndex);
                initialSlideId = parseInt(slideId);
            }

            const allSectionTitles = document.querySelectorAll('.section-title');
            allSectionTitles.forEach((title, index) => {
                const content = title.nextElementSibling;
                if (index === initialSectionIndex) {
                    title.classList.add('expanded');
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    title.classList.remove('expanded');
                    content.style.maxHeight = null;
                }
            });

            if (initialSlideId !== undefined) {
                displaySlide(initialSlideId, initialSectionIndex);
            }

        })
        .catch(error => {
            console.error('Lỗi khi tải hoặc xử lý dữ liệu môn học:', error);
            document.querySelector('.main-container').innerHTML = `<h1>Lỗi: Không tìm thấy dữ liệu cho môn học.</h1><p>Vui lòng quay lại <a href="index.html">trang chủ</a>.</p>`;
        });
});
