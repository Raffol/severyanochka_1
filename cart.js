let count = 0;
const priceElement = document.getElementById('item-cart__price');
const basePrice = parseFloat(priceElement.dataset.price);
const countLabel = document.getElementById("countLabel");
document.getElementById("item-cart__counter-reduce").onclick = function () {
    if (count > 0){
        count--;
        updateCartPrice();
    }
};
document.getElementById("item-cart__counter-increase").onclick = function () {
    count++;
    updateCartPrice();
}
function updateCartPrice() {
    countLabel.innerHTML = count;
    priceElement.innerHTML = (basePrice * count) + " P";
}

//Тумблер списания
document.getElementById('switch-btn').addEventListener('change', function () {
    if (this.checked){
        console.log('ON')
    }else{
        console.log('OFF');
    }
});

//Выделить всё и смена цвета
/*
const grayC = document.querySelector('.cart__select-cart, .');
grayC.addEventListener('click', function () {
   document.style.background = 'green';
});*/
const cartSelectCart = document.querySelector('.cart__select-cart');
cartSelectCart.addEventListener('click', function () {
    cartSelectCart.classList.toggle('active')
})