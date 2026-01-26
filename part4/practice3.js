"use strict"

function display() {
    if (this === undefined) {
        console.log("true");
    }
    function inner() {
        if (this === undefined) {
            console.log("true");
        }
        
    }
    inner(); 
}

display();

let obj = {
    name: "Pranav",
    joining: "04/03/2024",
    designation: "Team Leader",
    experience: 2
}

function getProfile() {
    console.log(`${this.designation} ${this.name} + who joined in ${this.joining}
    currently having a experience of ${this.experience} years`);
}

console.log(getProfile.apply(obj));

let arr = [1, 2, 3];
arr.length = 0;
console.log(arr);