const nav = () => {
    const header = document.querySelector(".js-header");
    const headerInner = document.querySelector(".js-header-inner");
    const btnOpen = document.querySelector(".js-btn-open");
    const btnClose = document.querySelector(".js-btn-close");

    const whiteSections = document.querySelectorAll('.js-white-section');

    btnOpen.addEventListener('click', () => {
        header.classList.add('active');
    });

    btnClose.addEventListener('click', () => {
        header.classList.remove('active');
    });

    addEventListener('scroll', () => {
        whiteSections.forEach((section) => {
            if(section.getBoundingClientRect().top <= headerInner.getBoundingClientRect().height) {
                header.classList.add('dark');
            } else {
                header.classList.remove('dark');
            }
        });
    });
}

export default nav;