import Swiper, { Navigation, Pagination, Autoplay, Parallax, EffectFade } from 'swiper';

const slider = () => {
    const homeBannerSwiper = new Swiper(".js-hb-swiper", {
        modules: [Pagination, Navigation, Autoplay, Parallax, EffectFade],
        spaceBetween: 100,
        slidesPerView: 1,
        loop: true,
        speed: 800,
        parallax: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".hb_pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

export default slider;