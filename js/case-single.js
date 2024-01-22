document.addEventListener("DOMContentLoaded", () => {
    clientsSlider();
    makeValidation('form-leave-request2', ['name', 'phone', 'email', 'siteName']);
});
function clientsSlider() {
    new Swiper('.clients-js', {
        loop: true,
        navigation: {
            nextEl: ".gallery__button._next",
            prevEl: ".gallery__button._prev",
        },
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: false
            },
            1023: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
}