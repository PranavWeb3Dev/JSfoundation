function map(newFunc, a) {
    const result = new Array(a.length);
    console.log(typeof result);
    for (let i = 0; i < a.length; i++){
        result[i] = newFunc(a[i]);
    }
    return result;
}

const numbers = [0, 1, 2, 3, 4, 5];// Initialize Array
const cuboedArray = map((x) => {
    return x * x * x
}, numbers);
console.log(typeof cuboedArray);
console.log("The cubes of the 0 to 5 numbers is : ", cuboedArray);

