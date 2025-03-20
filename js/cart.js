//Счётчик
let count = 0;
document.getElementById(".item-cart__counter-reduce").onclick = function() {
    count -= 1;
    document.getElementById("item-cart__counter-reduce").innerHTML = count;
}
document.getElementById(".item-cart__counter-increase").onclick = function() {
    count += 1;
    document.getElementById("item-cart__counter-increase").innerHTML = count;
}

//Тумблер списания
document.getElementById('switch-btn').addEventListener('change', function () {
    if (this.checked){
        console.log('ON')
    }else{
        console.log('OFF');
    }
});