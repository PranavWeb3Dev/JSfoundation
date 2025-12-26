// Let and Var

// Number

let num1 = 100;
let num2 = 3;

console.log(num1);
console.log(num2);
// var num1 = 200;

/*console.log(num1); It will give error if we defined the variable with var and again assign it with let but it will not hsocase the error at first time when we run the code it shows the erro after that. Aftercomplation the error shows, if we degine the let variable first and assign the with var then if shows error before the code runs it can give the syntax error As we know the let is "Blocked-Space Variable" and var is "Global-Scoped" */

// Same var name with using the scope will not gibe the error 
// Var is Global scope and let is block space as we can se below.
var score = 90;

console.log(score);

{
    let score = 100;
    console.log("Value under the scope using let: " + score); // 100
}

console.log("Value outside the scope: " + score); // 90

// Strings

let str = "Pranav";

console.log(str[0]); // P One way to show the letter from string.
console.log(str); // "Pranav"
 


