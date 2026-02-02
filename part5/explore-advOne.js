// Asynchronous Java Script

console.log("Hello From JS");

function sayBy() {
    console.log("By By After Execution of the code");
}

setTimeout(() => {
    sayBy();
}, 4000);

for (let i = 0; i < 10; i++){
    console.log(i);
}