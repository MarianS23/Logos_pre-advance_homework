
function CoffeeMake(brand = "Delonghi") {
    this.brand = brand;
}

CoffeeMake.prototype.on = function () {
    console.log(`${this.brand} is ON`)
}

CoffeeMake.prototype.off = function () {
    console.log(`${this.brand} is OFF`)
}





function Type1(brand, type = "Siphon Coffee Makers") {
    CoffeeMake.call(this, brand);
    this.type = type;
}

Type1.prototype = Object.create(CoffeeMake.prototype);
Type1.prototype.constuctor = Type1;

Type1.prototype.dripping = function(){
    console.log(`${this.brand} type is ${this.type} and its dripping`)
}

let drippingMachine = new Type1();
drippingMachine.on();
drippingMachine.off();
drippingMachine.dripping();




function Type2(brand, type = "Espresso machine") {
    CoffeeMake.call(this, brand);
    this.type = type;
}

Type2.prototype = Object.create(CoffeeMake.prototype);
Type2.prototype.constuctor = Type2;

Type2.prototype.heat = function(){
    console.log(`${this.brand} type is ${this.type} and its heat`)
}


let heatMachine = new Type2();
heatMachine.on();
heatMachine.off();
heatMachine.heat();



function Type3(brand, type = "Thermal Coffee Maker") {
    CoffeeMake.call(this, brand);
    this.type = type;
}

Type3.prototype = Object.create(CoffeeMake.prototype);
Type3.prototype.constuctor = Type3;

Type3.prototype.boil = function(){
    console.log(`${this.brand} type is ${this.type} and its boil`)
}

let boilMachine = new Type3();
boilMachine.on();
boilMachine.off();
boilMachine.boil();