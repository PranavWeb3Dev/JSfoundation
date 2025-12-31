/* 
There are around 6 loops in Js we use.
Loop List:
1. While Loop
2. do while loop
3. for loop
4. for/in loop
5. for/of loop
6. forEach loop
*/

// While Loop
console.log("------While Loop Starts---------");
/* 
1. Write a `While` loop that calculate the sum of all numbers from 1 to 5 and stores the result i variable named as `sum` 
*/

let i = 0;
let sum = 0;

while (i <= 5) {
    sum += i;
    i++;
}
console.log("The total sum is : " + sum);

/*
Write a `while` loop that counts down from 5 to 1 and stores the number ins array named as `countdown`.
*/

let countdown = []; // Array Initilizes
let j = 5;

while (j > 0) {
    countdown.push(j);
    j--;
}
console.log("Here is the new countdown array : " + countdown);

// Do While Loop
console.log("------Do While Loop Starts---------");
/*
Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"` store each tea type in an array named teaCollection
*/

// let teaCollection = [];
// let tea;
// do {
    
//     tea = prompt(`Enter the Tea type until you type "stop"`);
//     if (tea !== "stop") {
//         teaCollection.push(tea);
//     }

// }while(tea !== "stop")

// Above code will not run here on VS we need to use the browser for it.


