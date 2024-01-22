


document.addEventListener("DOMContentLoaded", () => {
    let sliderClients = document.querySelector('.our-clients');
    if (sliderClients) {
        clientsSlider();
    }
    setupFormValidation('#form-leave-request');
    setupFormValidation('#form-leave-request2');
    setupFormValidation('#form-seo-promotion');
    setupFormValidation('#form-optimization-site');
    setupFormValidation('#form-online-store');
    setupFormValidation('#form-services-website');
    setupFormValidation('#form-business-website');

});

const setupFormValidation = (formId) => {
    const validation = new JustValidate(formId);

    const fields = ['.name', '.phone', '.email', '.site'];

    fields.forEach(field => {
        const rules = [
            { rule: 'required', errorMessage: 'Дані некоректні' },
        ];

        if (field === '.phone') {
            rules.push({ rule: 'minLength', value: 10, errorMessage: 'Не менше 10 символів' });
        }

        if (field === '.site') {
            rules.push({ rule: 'email', errorMessage: 'Дані некоректні' });
        } else {
            rules.push({ rule: 'email', errorMessage: 'Дані некоректні' });
        }

        validation.addField(field, rules);
    });
};
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
                 spaceBetween: 20
             },
             1023: {
                 slidesPerView: 3,
                 spaceBetween: 20
             },
             1199: {
                 slidesPerView: 4,
                 spaceBetween: 0
             }
         }
    });
}
