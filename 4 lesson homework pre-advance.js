//task 1 

class Worker {
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days
    }

}

let ivan = new Worker("ivan", "log", 45, 15);
console.log(ivan.firstName);
console.log(ivan.secondName);
console.log(ivan.rate);
console.log(ivan.days);
console.log(ivan.getSalary());

let stepan = new Worker("Stepan", "Step", 60, 20)
stepan.getSalary();

let sum = stepan.getSalary() + ivan.getSalary();


//task2
class MyString {
    constructor(userText) {
        this.userText = userText;
    }
    reverse() {
        return this.userText.split("").reverse().join("");
    }
    ucFirst() {
        return this.userText.charAt(0).toUpperCase() + this.userText.slice(1)
    }
    ucWords() {
        let result = [];
        let arr = this.userText.split(" ");
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
        }
        return result.join(" ")
    }
}

//task3
class CoffeeMake{
    constructor(brand = "Delonghi"){
        this.brand = brand;
    }

    on(){
        return console.log("its ON")
    }
    off(){
        return console.log("its OFF")
    }

}

class SyphonCoffeeMachine extends CoffeeMake{
    constructor(brand,type="Syphon Coffee Machine"){
        super(brand);
        this.type = type;
    }

    dripping(){
        console.log(`${this.brand} type is ${this.type} and its dripping`)
    }
}

class EspressoMachine extends CoffeeMake{
    constructor(brand, type = "Espresso Machine"){
        super(brand);
        this.type = type;
    }
    heat(){
        console.log(`${this.brand} type is ${this.type} and its heat`)
    }
}

class ThermalCoffeeMaker extends CoffeeMake{
    constructor(brand, type = "Thermal Coffee Maker"){
        super(brand);
        this.type = type;
    }

    boil(){
        console.log(`${this.brand} type is ${this.type} and its boil`)
    }
}
