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

// console.log(userOne.log("User has started his machine"));
// console.log(userOne.log("user has logged in"));

/*
Extend the Logger service to support different log levels such as info, warning, and error.
Each log should clearly indicate its level.
*/

function LoggerTwo(appName) {
    this.appName = appName;
}

LoggerTwo.prototype._format = function (level,message) {
    let timeStamp = new Date().toISOString();
    return `[${timeStamp}] [${this.appName}] [${level}] [${message}]`;
}

LoggerTwo.prototype.info = function (message) {
    return console.log(this._format("INFO", message));
}

LoggerTwo.prototype.warn = function (message) {
    return console.log(this._format("WARN", message));
}

LoggerTwo.prototype.erroe = function (message) {
    return console.log(this._format("ERROE", message));
}

let newUser = new LoggerTwo("User-Device");

// newUser.info("Welcome and You have successfully created your account!!!");
// newUser.warn("Are you sure to Delete you account!!!");
// newUser.erroe("User Doesn't exists here");

/*
Ensure that all Logger instances share the same logging methods instead of creating new methods for each instance.
*/

// Constructor function
function LoggerThree(appName) {
    this.appName = appName;
}

LoggerThree.prototype.loggedIn = function (message) {
    let timeStamp = new Date().toISOString();
    console.log(`[${timeStamp}] [${this.appName}] [${message}]`);
}

// let user1 = new LoggerThree("User-Device-One");
// user1.loggedIn(`Logged in`);
// let user2 = new LoggerThree("User-Device-Two");
// user2.loggedIn("Logged in");

/*
Modify the Logger service so that logs behave differently based on environment (development or production).
*/

function LoggerFour(environment) {
    this.environment = environment;
}

LoggerFour.prototype.error = function (message) {
    console.error(`[ERROR] [${this.environment}] [${message}]`);
    
}


LoggerFour.prototype.info = function (message) {
    if (this.environment === "Development") {
        console.log(`[INFO ][${this.environment}] [${message}]`);
    }
}

let dev = new LoggerFour("Development");
let prod = new LoggerFour("Production");

dev.info("Development level");
prod.error("Check the filled info!!!");