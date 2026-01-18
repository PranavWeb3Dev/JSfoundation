// Inhertiance OOP

/* 
Here we use the consturctor methos in the clas to add the or assign the data
also we do add the method only in the class in JS.
*/


class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        return `${this.model} made by ${this.make}`;
    }

}

class Car extends Vehicle{
    driver() {
        return `Driver driving a ${this.model} model which created by ${this.model} `
    }
}

let carOne = new Car("Punch", "TATA");

/*
carOne is the object of the Car which also inherts all the methods from the Vehicle class as we are have used the extends keyword to inherit all the properties.
*/

// console.log(carOne.start());
// console.log(carOne.driver());

// Encapsulation

class Bank{
    $balance = 0; //  it will not access by any object directly.

    getBalance() {
        return `$ ${this.$balance}`;
    }

    totalAmount(value) {

        value += this.$balance;
        return value;
    }

}

let account = new Bank();

// console.log(account.getBalance());
// console.log(account.totalAmount(5000));

// Abstraction
class Employee{
    constructor(name, empId) {
        this.name = name;
        this.empId = empId;
    }
    getInfo() {
        return `The employee name is ${this.name} and his id is ${this.empId}`;
    }

}

// let employee = new Employee("Pranav", 123489);
// console.log(employee.getInfo());

// Polymorphism

class Bird{
    fly() {
        return `Bird can fly`;
    }
}
class Penguine extends Bird{
    fly() {
        return `Penguine can't fly`
    }
}

let bird = new Bird();
let penguine = new Penguine();
// console.log(bird.fly());
// console.log(penguine.fly());

// Static Method
/*
In this concept the static method only access with the Class and we can't access it using the object.
*/

class Calculator{
    static add(a, b) {
        return a + b;
    }
}

let cal = new Calculator();
// console.log(cal.add()); Error
// console.log(Calculator.add(3, 6));

// Geter and Setter

class Addition{
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    get addInfo() {
        return `This is the addition we have`;
    }
    set setAdd(add) {
        this.a = this.add + this.a;
    }
}
