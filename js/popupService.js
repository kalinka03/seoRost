function Popup(buttonOpen) {
    const modalWindow = document.getElementById(buttonOpen.dataset.attr);
    const buttonClose = modalWindow.querySelectorAll('.modal-close, .modal-bg, .modal__back-arrow');

    function open() {
        const form = modalWindow.querySelector('.js-focus');
        document.body.classList.add('no-scroll-popup');
        if (form) {
            setTimeout(() => form.focus(), 500);
        }
        modalWindow.classList.add('active');
    }

    function close() {
        modalWindow.classList.remove('active');
        document.body.classList.remove('no-scroll-popup');
    }

    function modalEventOpen() {
        buttonOpen.addEventListener('click', open);
    }

    function modalEventClose() {
        buttonClose.forEach(closeButton => closeButton.addEventListener('click', close));
    }

    modalEventOpen();
    modalEventClose();

    return {
        open,
        close
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const elementsLink = document.querySelectorAll('.modal-trigger');
    elementsLink.forEach(item => item.popupObject = Popup(item));
});