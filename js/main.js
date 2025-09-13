// Logic dùng chung cho các trang
document.addEventListener('DOMContentLoaded', () => {
    // Luôn kiểm tra xem element có tồn tại không trước khi thêm sự kiện
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const leftSidebar = document.getElementById('left-sidebar');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    if (hamburgerBtn && leftSidebar && overlay) {
        // Mở sidebar trái
        hamburgerBtn.addEventListener('click', () => {
            leftSidebar.classList.add('open');
            overlay.classList.add('active');
            body.classList.add('body-no-scroll');
        });

        // Đóng sidebar khi bấm vào overlay
        overlay.addEventListener('click', () => {
            leftSidebar.classList.remove('open');
            // Nếu có các sidebar khác thì cũng đóng
            document.querySelectorAll('.sidebar.open').forEach(sidebar => {
                sidebar.classList.remove('open');
            });
            overlay.classList.remove('active');
            body.classList.remove('body-no-scroll');
        });
    }
});