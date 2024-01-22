const intersectionObserverApi = (selector, method) => {
    const arr = document.querySelectorAll(selector);
    if ("IntersectionObserver" in window) {
        const intersection = new IntersectionObserver((data, lazyobserver) => {
            data.forEach(entry => {
                if (entry.isIntersecting) {
                    method();
                    lazyobserver.unobserve(document.querySelector(selector));
                }
            });
        }, {threshold: 0, rootMargin: '100px 0px 100px 0px'});

        arr.forEach(item => {
            intersection.observe(item);
        });
    } else {
        method();
    }
};

const imagesLazyLoad = () => {

    let config = {
        root: null,
        threshold: 0,
        rootMargin: '100px 0px 100px 0px',
    }

    const images = document.querySelectorAll('.lazy-image');
    if ('IntersectionObserver' in window) {
        const intersection = new IntersectionObserver((data, lazyobserver) => {
            data.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyobserver.unobserve(lazyImage);
                }
            })
        }, config);

        images.forEach((v) => {
            intersection.observe(v);
            v.classList.remove("lazy-image");
        })
    } else {
        for (var i = 0; i < images.length; i++) {
            var lazyImage = images[i];
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy-image");
        }
    }
}

const lazyLoadBackground = () => {
    const arr = document.querySelectorAll('.lazy-background');
    if ('IntersectionObserver' in window) {
        const intersectionBackground = new IntersectionObserver((data, lazyobserver) => {
            data.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyBackground = entry.target;
                    lazyobserver.unobserve(lazyBackground);
                }
            })
        });

        arr.forEach((v) => {
            intersectionBackground.observe(v);
            v.classList.remove("lazy-background");
        })
    } else {
        for (var i = 0; i < arr.length; i++) {
            var lazyBackground = arr[i];
            lazyBackground.classList.remove("lazy-background");
        }
    }
}
requestAnimationFrame(() => {
    intersectionObserverApi();
    lazyLoadBackground();
    imagesLazyLoad();
})