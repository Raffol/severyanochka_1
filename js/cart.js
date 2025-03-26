
//Счётчик
let count = 0;
document.getElementById("item-cart__counter-reduce").onclick = function(){
    if (count <= 0 ){
        count = 0;
    }else{
        count -=1;
    }
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("item-cart__counter-increase").onclick = function(){
    count +=1;
    document.getElementById("countLabel").innerHTML = count;
}


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

//Выделить всё
button.addEventListener('click', function(){
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
        button.style.background="green"
    }else{
        button.style.background="transparent"
    }
});
// const button = document.getElementById('cart__select-mart');
document.addEventListener('click', function () {
    const button = document.getElementById('cart__select-cart');

    button.classList.toggle('active');
    if (button.classList.contains('active')){
        button.style.background = 'gray';
    }else{
        button.style.background = 'green';
    }
})
