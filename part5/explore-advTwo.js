function outer() {
    let increment = 4;
    return () => {
        increment++;
        return increment;
        }
}

let increment = outer();

console.log(increment());
console.log(increment());