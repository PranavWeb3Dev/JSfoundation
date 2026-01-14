/* 
Create a Logger service that is initialized with an application name.
Every log message should include the application name and a timestamp.
*/

function Logger(appName) {
    this.appName = appName;
}

Logger.prototype.log = function (message) {
    let timeStamp = new Date().toISOString();
    return `[${timeStamp}] [${this.appName}] ${message}`;
}

let userOne = new Logger("User-Services");

console.log(userOne.log("User has started his machine"));
console.log(userOne.log("user has logged in"));

/*
Extend the Logger service to support different log levels such as info, warning, and error.
Each log should clearly indicate its level.
*/
