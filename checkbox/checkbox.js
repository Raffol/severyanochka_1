document.addEventListener('DOMContentLoaded', function () {
    const cartSelectCart = document.querySelector('.cart__select-cart');
    cartSelectCart.addEventListener('click', function () {
        cartSelectCart.classList.toggle('active');
    });
});