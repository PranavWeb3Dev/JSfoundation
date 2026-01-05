let getInfo = info();

function info(){
    let obj = {
        name: "Pranav",
        number: 7249581499,
        dob: "14/09/1999",
    }
    return obj;
}

console.log(Object.entries(getInfo));

/*
This is called the function hosting where we have called the function before we have decleared the function and this will be work with the function declartion not with the function expression which we have created below is the funtion expression.
*/
/*
const getObj = funcExpression();

const funcExpression = function () {
    let obj2 = {
        name: "Siddhant",
        phone: 9518971354,
    }
    return obj2
}

Arrow Function is also get refernce error just like above
const getArrowObj = arrowFun();

const arrowFun = () => {
    return `This is the arrow function which is not hoisted the function`
}
 */
//ReferenceError: Cannot access 'funcExpression' before initialization