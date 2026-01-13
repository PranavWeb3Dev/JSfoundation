// Constructor function

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let userOne = new Person("Pranav", 25);
let userTwo = Person("Ruturaj", 25);
console.log(userOne); //Person { name: 'Pranav', age: 25 }
console.log(userTwo); //undefined

/*
In the constructor function `"this"` keyword actually definded as the context of that specific  object and this keyword we use to access any of the data from the constructor function and to creatre the object and get the data from the constructor function we need to use create the `"new"` keyword as it will create every time new object and it is internally linkage with the `"this"` keyword.
*/

//Function under the Constructor function 
function Car(model, type) {
    this.model = model;
    this.type = type;
    this.getCarData = function() {
        return `The type is ${this.type} and model is ${this.model}`;
    }
}

let getCarOne = new Car("Nexon", "4*4");
console.log(getCarOne.getCarData());

// Prototype and Constructor Function
function Animal(name, speak) {
    this.name = name;
    this.speak = speak;
}

Animal.prototype.sound = function () {
    return `The sound of the ${this.name} is ${this.speak}`;
}

let dog = new Animal("Dog", "Bark");
console.log(dog.sound());

// Error in the Constructor Function
function TeaType(type) {
    if (!new.target) {
        throw new Error("Define the new keyword before");
    }
    this.type = type;
}

//let black = TeaType("Black Tea"); Gives Error as we have defined it.