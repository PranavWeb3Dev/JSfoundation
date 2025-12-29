/*
Below are the Primitives in JS we have.
1. Number
2. String
3. BigInt
4. Boolean
5. Symbol
6. Undefined
7. Null
*/

// Number
console.log("Number Starts Here");

let num1 = 32;

console.log("Num1 is the = " + num1);
console.log("------------------------");
console.log("numw is the type of = " + typeof num1);

// Strings
console.log("------------------------");
console.log("String Starts Here");

let str = "I am String";
console.log(str);

console.log("------------------------");
let str1 = ` I am showing the number ${num1}`; // String Interpolation

console.log("Exapmle of the string interpolation = " + str1);

// Boolean
console.log("------------------------");
let isLoggedIn = false;

console.log(!isLoggedIn);
console.log("------------------------");
console.log("isLoggedIn is the type of " + typeof isLoggedIn );

console.log("------------------------");

// BigInt

let bigValue = 37453719937n; // This is the one way to define the BigInt.

let bigValue2 = BigInt(43437728930); // Sevonfway to define the BigInt without new operator.

console.log(bigValue + 'and' + bigValue2);
console.log("The Type of the Big Value One is : " + typeof bigValue + " and The Type of the Big Value Two is : " + typeof bigValue2);
console.log("------------------------");

//Symobol

let symOne = Symbol("Foo");
let symTwo = Symbol("Foo");

console.log("Checcking if the symOne and symTwo is same or different using the comparison of them " + (symOne == symTwo));

/*
Instade of the using the same Symbol("Foo") for the both the symOne and symTwo we are getting the False result because when we define the Symbol then it allocate the memory with the it's own reference so instead we are using the Symbol("Foo") for both of them we got two different references with two different memory locations. So we can say that the Symbol is uses same functions like object but the Symbol is primative type and the Object is non priitive type but we can make the symbol as object by using the 'object' method. Below is the example of it.
*/
console.log("------------------------");

const symToObj = Symbol("obj"); // Symbol Defined
const symObj = Object(symToObj); // Converted Symbol to Object using the Object method

console.log("Type of the symToObj is : " + typeof symToObj + " and Type of the symObj is : " + typeof symObj);

// Undefined

let name; // By default it is undefined because we have not defined
console.log("------------------------");
console.log(name);

// Null

let empty = null;  // Completly it is null not having the aloction on memory.

console.log("------------------------");

console.log(empty);

console.log("Type of the null is : " + typeof empty); // Object



