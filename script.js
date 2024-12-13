document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.extra-section');
    elements.forEach((el, index) => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.transition = 'opacity 1s';
            el.style.opacity = 1;
        }, index * 500);
    });
});