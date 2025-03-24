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


//Тумблер списания
document.getElementById('switch-btn').addEventListener('change', function () {
    if (this.checked){
        console.log('ON')
    }else{
        console.log('OFF');
    }
});