const quantities = document.querySelectorAll('.item-cart__counter');

[...quantities].forEach(function (quantity) {
    const minusButton = quantity.querySelector('.item-cart__counter-reduce');
    const plusButton = quantity.querySelector('.item-cart__counter-increase');
    const inputField = quantity.querySelector('.item-cart__price');

    minusButton.addEventListener('click', function minusProduct() {
       const currentValue = Number(inputField.value);
        console.log(minusButton.value);
       if (currentValue > 0){
           inputField.value = currentValue - 1;
       }else{
           inputField.value = 0;
       }

    });
    plusButton.addEventListener('click', function plusProduct(){
        const currentValue = Number(inputField.value);
        inputField.value = currentValue + 1;
    });
})

//Тумблер списания
document.getElementById('switch-btn').addEventListener('change', function () {
    if (this.checked){
        console.log('ON')
    }else{
        console.log('OFF');
    }
});