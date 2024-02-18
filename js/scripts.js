const heroSlider = new Swiper('.hero__slider_box', {

    slidesPerView: 'auto',
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
        nextEl: '.hero__slider_next',
        prevEl: '.hero__slider_prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.hero__slider_scrollbar',
        draggable: true,
    },
});

const catalogSlider = new Swiper('.catalog__slider', {

    slidesPerView: 'auto',
    spaceBetween: 0,
    // Navigation arrows
    navigation: {
        nextEl: '.catalog__slider_next',
        prevEl: '.catalog__slider_prev',
    },

    // And if we need scrollbar
    pagination: {
        el: '.catalog__slider_pag',
        clickable: true,
    },
});