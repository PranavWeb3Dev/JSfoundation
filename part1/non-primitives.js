/* 
There are three Non Primitives in JS. Below is the list
1. Objects
2. Arrays
3. Functions
 */

// Objects

const obj1 = {
    empId: "1",
    userName: "Pranav",
    Email: "xyz@gmail.com",
};
console.log("Printing all the Object values : " + Object.values(obj1));

// Second Way To define the object in JS.

const obj2 = new Object(); // Defined the Object.

console.log('--------------------------------------');

console.log(Object.values(obj2)); // output: [](Array)

console.log('--------------------------------------');
/*
 Object.values(), Object.keys() and Object.entries() gives us the Array in return. As we know the Objects are not order in form and if we want data in order form at that time we use these methods. Actually these methods are built in methods of JS which gives list form but in JS the list is consider as Array so it returns the Array as output. We can use it in form handling.
 Question may asked in React interview why we use these methods and what is the difference between them and which one is efficient in terma of data feacthing.
*/

obj2.userId = 3;
obj2.user = "Pranav";
obj2.number = 9618971354;
obj2.email = "pranavsy149@gmail.com";

const userId = 3;

console.log("Showing only the Array Of Values: " + Object.values(obj2));
console.log("Showing only the Array Of Keys: " + Object.keys(obj2));
console.log("Showing keys and values pair in the form of Array: " + Object.entries(obj2));
console.log('--------------------------------------');
const userData = Object.values(obj2).filter((value) => {
    if (value == userId) {
        return value;
    }
})

console.log(`Value we have Filtered data from the obj2 is ${userData}`);
