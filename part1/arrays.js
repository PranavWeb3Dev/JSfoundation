// Arrays In Js

let arr1 = [];

console.log(`arr1 one is Array who has a type of ${typeof arr1}`);//String Interpolation

console.log("----------------------");

arr1[0] = 1;
arr1[1] = 2;
arr1[2] = "Pranav";

console.log("Arrays is having these values we have stored right now : " + arr1);

/* 
From the Above Array intiliztion we can say that in JS we can add any type of primatives which can't do it any other typed programming languages as there we need that sepcific primative types array and here also in JS array is actually considered as objects.
*/
console.log("----------------------");

// Some Of the methods we are using in the Array.

// If I want to push the one more element at the end of the array we use push() method

arr1.push("Yadav");

console.log(`Array of arr1 after pushing one element using push method : ${arr1}`);

console.log("----------------------");
// If we want to remove last element from array use the pop() method which returns that element from that.

let arr2 = ["one", "two", "three", "four", "five", 'six'];

console.log("Array of arr2 before performing the pop opration on it : " + arr2);

const popedElement = arr2.pop(); // Returns the removed element from array

console.log("Array of arr2 after perofrming the pop opertion on it : " + arr2 + "\nRemoved element from the arr2 is here : " + popedElement);