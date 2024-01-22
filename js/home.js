
document.addEventListener("DOMContentLoaded", () => {
    let sliderClients = document.querySelector('.our-clients');
    if (sliderClients) {
        clientsSlider();
    }
    makeValidation('form-leave-request', ['name', 'phone', 'email', 'siteName']);
    makeValidation('form-leave-request2', ['name', 'phone', 'email', 'siteName']);
    makeValidation('form-seo-promotion', ['name', 'phone', 'email', 'siteName']);
    makeValidation('form-optimization-site', ['name', 'phone', 'email', 'siteName']);
    makeValidation('form-online-store', ['name', 'phone', 'email', 'siteName']);
    makeValidation('form-services-website', ['name', 'phone', 'email', 'siteName']);
    makeValidation('form-business-website', ['name', 'phone', 'email', 'siteName']);
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
                 slidesPerView: 2,
                 spaceBetween: 0
             },
             1023: {
                 slidesPerView: 3,
                 spaceBetween: 20
             },
             1199: {
                 slidesPerView: 4,
                 spaceBetween: 26
             }
         }
    });
}
