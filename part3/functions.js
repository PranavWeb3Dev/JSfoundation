/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/              //Placeholder
function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}
                        //Argument or Parameter which we pass
const teaOrder = makeTea("Green Tea");
console.log(teaOrder);

console.log("--------------------------");
/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

// function orderTea(teaType) {
//     function confirmOrder(teaType) {
//         return `Order confirmed for ${teaType}`
//     }
//    return confirmOrder(teaType);
// }

//2nd option

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`
    }
   return confirmOrder();
}

const confimation = orderTea("Black Tea");
console.log(confimation); 
console.log("--------------------------");

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

//1st way to write arrow function
// const calculateTotal = (price, quantity) => {
//     return price * quantity;
// }
// when we have one line of code for the arrow function then we can write it like below
const calculateTotal = (price, quantity) => price * quantity;
//As Explicitly returns the result no need to add return here

let totalCost = calculateTotal(299, 2);
console.log(`The total Cost of two tickets are ${totalCost}`);
console.log("--------------------------");


/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/
function processTeaOrder(teaFunch) {
    return teaFunch("earl grey"); // Returning a function from other function.
}

function makeTea(teaType) {
    return teaType;
}

const getRessult = processTeaOrder(makeTea);

console.log(`The tea we have added here is a type of ${getRessult}`);
console.log("--------------------------");
/*
This above concept we called it as the Higher order function or First class function when we take the function as the argument to the other function and also return the function from the other function and assign it to the normal variable. For example is the forEach method which actually performs the higher order funtion concept where we acutally create the function under the foEach method and return it's result to the variable. Another exmples are Map,Filter,Reduce.
*/

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/
function createTeaMaker() {
    return getTea("green tea");
}

function getTea(teaType) {
    return `Making ${teaType}`;
}

console.log(createTeaMaker());
