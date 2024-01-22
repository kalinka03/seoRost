document.addEventListener("DOMContentLoaded", () => {
    formCall()
    numberValidationEvent()
    headerFixed()
    if (window.innerWidth > 1023) {
        language()
    }
    mobileMenuOpen()
    mobileMenuClose()
});

const mobileMenuOpen = () => {

    document.querySelector('.mobile-menu__open').addEventListener('click', function () {
        let menu = document.querySelector('.header__mobile-block');
        menu.classList.add('open');
        document.body.classList.add('no-scroll-popup');
    });
}
const mobileMenuClose = () => {

    document.querySelector('.header__mobile-close').addEventListener('click', function () {
        let menu = document.querySelector('.header__mobile-block');
        menu.classList.remove('open');
        document.body.classList.remove('no-scroll-popup');
    });
}
const language = () => {

    let block = document.querySelector('.language-dropdown__button')
    let showList = document.querySelector('.language-dropdown__list')
    let arrow = document.querySelector('.language-dropdown')

    //
    // document.addEventListener('click', event => {
    //     let elem = document.querySelector('.language-dropdown')
    //     if (!elem.contains(event.target)) this.close()
    // })

    block.addEventListener('click', () => {
        showList.classList.toggle('show');
        arrow.classList.toggle('show');
    })

    function close() {
        showList.classList.remove('show')
        arrow.classList.remove('show');
    }


    const rootElement = document.querySelector('.header__language');
    const mainButton = rootElement.querySelector('.language-dropdown__button');
    const dropdownList = rootElement.querySelector('.language-dropdown__list');
    const dropdownItems = dropdownList.querySelectorAll('.language-dropdown__item');

    dropdownItems.forEach(item => {
        if (item.classList.contains('active')) {
            mainButton.textContent = item.textContent.trim();
        }

        item.addEventListener('click', () => {
            const languageName = item.textContent.trim();
            dropdownItems.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            mainButton.textContent = languageName;
            dropdownList.classList.toggle('show');
        });
    })
}
const headerFixed = () => {
    window.startWindowWidth = window.innerWidth;
    window.startWindowHeight = window.innerHeight;
    window.startOffsetTop = window.pageYOffset;
    window.startHeader = document.querySelector('.header').clientHeight;
    // if (window.innerWidth > 1023) {
        setupEventChangeHeightHeader();
    // }

    function setupEventChangeHeightHeader() {
        let headerTop = document.querySelector('.header');
        let lastScroll = 0;
        let arg = {
            headerHeight: window.startHeader,
            startWindowWidth: window.innerWidth,
            scrollPage: window.startOffsetTop,
        };
        setupEventScrollHeader();
        window.addEventListener("scroll", function () {
            setupEventScrollHeader();
        })

        function setupEventScrollHeader() {
            let headerH = arg.headerHeight;
            let hScroll = window.pageYOffset;
            // if (arg.startWindowWidth > 1023) {
                if (hScroll >= lastScroll && hScroll > headerH) {
                    headerTop.classList.remove('header-up');
                    headerTop.classList.add('header-down');
                } else {
                    if (hScroll + window.startWindowHeight < document.documentElement.scrollHeight) {
                        headerTop.classList.remove('header-down');
                        headerTop.classList.add('header-up');
                    }
                    if (hScroll < 200) {
                        headerTop.classList.remove('header-down');
                        headerTop.classList.remove('header-up');
                    }
                }
                lastScroll = hScroll;
            // }
        }
    }
}
const numberValidationEvent = () => {
    let inputAll = document.querySelectorAll('input[type=tel]')
    inputAll.forEach(item => {
        item.addEventListener('keypress', e => {
                if (!/[0-9\\+-]/.test(e.key))
                    e.preventDefault()
            }
        )
    })
}
const formCall = () => {
    const validation = new JustValidate('#form-call');
    validation
        .addField('.name', [
            {
                rule: 'required',
                errorMessage: 'Дані некоректні',
            },
        ])
        .addField('.phone', [
            {
                rule: 'required',
                errorMessage: 'Дані некоректні',
            },
            {
                rule: 'minLength',
                value: 10,
                errorMessage: 'Не менше 10 символів',
            },
        ])
        .addField('.email', [
            {
                rule: 'required',
                errorMessage: 'Дані некоректні',
            },
            {
                rule: 'email',
                errorMessage: 'Дані некоректні',
            },
        ])
}
