//Prototype

let genricCar = {
    tyers: 4,
    lamps: 4,
    BreakType: "Disk"
};
let color = ["Blue", "White", "Black", "Red"];
let tata = {
    carType: "Elecytric",
    screen: "HD",
    cruseControl: true,
    drivingType: "4*4",
    // __proto__ : genricCar, // old way to access the prototype properties from one object to other
}
// console.log(tata.__proto__); // Old way to get the data from the prototype

// Below is the new way where we use Object.setPrototypeOf() and Object.getPrototypeOf() for fecth the values.

Object.setPrototypeOf(tata, genricCar);
// Object.setPrototypeOf(tata, color);

console.log(Object.getPrototypeOf(tata));



