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
        const slideData = findSlideById(slideId);
        if (!slideData) {
            console.error("Không tìm thấy slide với ID:", slideId);
            return;
        }

        slideTitleEl.textContent = slideData.title;
        slideImageEl.src = slideData.image;
        slideNotesEl.textContent = slideData.notes;

        slideTermsEl.innerHTML = '';
        if (slideData.terms) {
            for (const term in slideData.terms) {
                const dt = document.createElement('dt');
                dt.textContent = term;
                const dd = document.createElement('dd');
                dd.textContent = slideData.terms[term];
                slideTermsEl.appendChild(dt);
                slideTermsEl.appendChild(dd);
            }
        }

        // Cập nhật trạng thái "active"
        document.querySelectorAll('#slide-navigation-container li').forEach(li => li.classList.remove('active'));
        const activeLi = document.querySelector(`#slide-navigation-container li[data-id='${slideId}']`);
        if (activeLi) {
            activeLi.classList.add('active');
        }
    }

    // **NÂNG CẤP: Hàm tạo mục lục theo từng tuần**
    function generateSlideNavigation() {
        slideNavContainer.innerHTML = ''; // Xóa mục lục cũ
        
        courseSections.forEach(section => {
            // Tạo tiêu đề cho tuần/phần
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