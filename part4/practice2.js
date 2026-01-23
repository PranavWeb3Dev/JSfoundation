// this keyword
"use strict"
// console.log(this === module.exports)

function greetThis() {
    
    function innerGreet() {
        console.log(`This is the ${this} when we use the strict mode for function scope`)
    }
    innerGreet();
}



greetThis();