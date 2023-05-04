//task 1
function count(){
    let num = 0;
    return function(n){
        return num +=n;
    };
};

let a = count();
console.log(a(2))
console.log(a(4))

//task 2 
const ShopManager = (function(){
    let balance = 1000;
    let beerCount = 100;
    let vineCount = 50;
    let pepsiCount = 80;
    let prices = {
        beer:30,
        vine:120,
        pepsi:15
    };
    function showBalance(){
        return balance;
    }
    function storage(){
        return `beer :${beerCount}, vine:${vineCount}, pepsi: ${pepsiCount}`
    }
    function sellBeer(n){
        if(n <= beerCount){
            beerCount = beerCount-n;
            balance = balance + (n*prices.beer);
            return `You order : ${n} bottle of beer, Total price is ${n*prices.beer}`
        }
        return `Error:Out of stock.Now available ${beerCount}`;
    }
    function sellVine(n){
        if(n <= vineCount){
            vineCount = vineCount-n;
            balance = balance + (n*prices.vine);
            return `You order : ${n} bottle of vine, Total price is ${n*prices.vine}`
        }
        return `Error:Out of stock.Now available ${vineCount}`;
    }
    function sellPepsi(n){
        if(n <= pepsiCount){
            pepsiCount = pepsiCount-n;
            balance = balance + (n*prices.pepsi);
            return `You order : ${n} bottle of pepsi, Total price is ${n*prices.pepsi}`
        }
        return `Error:Out of stock.Now available ${pepsiCount}`;
    }
    return {
        buyBeer:sellBeer,
        buyVine:sellVine,
        buyPepsi:sellPepsi,
        balance:showBalance,
        storage:storage
    }
}())

console.log(ShopManager.balance())
console.log(ShopManager.storage())
console.log(ShopManager.buyBeer(30))
console.log(ShopManager.buyVine(10))
console.log(ShopManager.buyPepsi(40))




