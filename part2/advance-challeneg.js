/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/

allTeas = ["green tea", "black tea", "chai", "oolong tea"]

selectedTeas = []; //Initialized the

for (let i = 0; i < allTeas.length; i++) {
    if (allTeas[i] === "chai" || allTeas === "Chai")
    {
        break; //Breaks loop 
    }
    selectedTeas.push(allTeas[i]);
}
console.log("All Selected Teas Are : ",selectedTeas);


/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let travelCitites = []; 
for (let i = 0; i < cities.length; i++){
    if (cities[i] === "Paris") {
        continue; // It skip these particular iteration and goes for another
    }
    travelCitites.push(cities[i]);
}
console.log("Visited cities are : ", travelCitites);

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
//Get of Featch the vaules in For---of loop
for (number of numbers) {
   if (number === 4) {
      break;
   }
   smallNumbers.push(number);
}
console.log("Small Number Are : ", smallNumbers);


/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/

let myFavTeas = ["chai", "green tea", "herbal tea", "black tea"];

let preferredTeas = [];

//Get of Featch the vaules in For---of loop
for (teas of myFavTeas) {
   if (teas === "herbal tea") {
      continue;
   }
   preferredTeas.push(teas);
}
console.log("My preffered teas are: ", preferredTeas);

/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

*/
 let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

let cityObj = {}; // Object Initiliztion
// For in fecths the keys from the object and we can access it values from it
for (cities in citiesPopulation) {
   if (cities === "Berlin") {
      break;
   }
   cityObj[cities] = citiesPopulation[cities];
   // It get keys     // get values
}

// console.log("New data added in the cityObj from citiesPopulation : ", cityObj);


/*
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

   */

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

let newWolrdCities = {}; // Initilizes the Object

for (cities in worldCities) {
   if (worldCities[cities] === 3000000) {
      continue;
   }
   newWolrdCities[cities] = worldCities[cities];
}

// console.log("List Of cities above 30 million with population are : ", newWolrdCities);


/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

let chaiList = ["earl grey", "green tea", "chai", "oolong tea"]

let availableTeas = [];

chaiList.forEach((chai) => {
   if (chai === "chai") {
      return;
   }
   availableTeas.push(chai);
})

// console.log("The available chias are: " + availableTeas);

//or We can do it like

// chaiList.forEach(function (chai) {
//    availableTeas.push(chai); // Second way
// })


/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

myListToVisit1 = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveleNewdCities = [];

myListToVisit1.forEach((newCities) => {
   if (newCities === "Sydney") {
      return;
   }
   traveleNewdCities.push(newCities);
})

console.log("Cities I want to travel are ", traveleNewdCities);

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

let newNumbers = [2, 5, 7, 9];

let doubledNumbers = [];

for (let i = 0; i < newNumbers.length; i++){
   if (newNumbers[i] === 7) {
      continue;
   }
   doubledNumbers.push(newNumbers[i] * 2);
}
console.log("Double numbers are : ", doubledNumbers)



/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let chaiNewList = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortChai = [];

for (chai of chaiNewList) {
   if (chai.length === 10) {
      break;
   }
   shortChai.push(chai);
}
console.log("The short teas are as follows : ", shortChai);



/*
Object.prototype.company = "Walstar";

const emp = { name: "Pranav" };

for (let key in emp) {
  console.log(key, emp[key]);
}

Object.prototype.newCompany = "xyz";

for (let key in emp) {
  console.log(key, emp[key]);
}
console.log(emp);

console.log(emp.hasOwnProperty("name"));

console.log(emp.hasOwnProperty("company"));

console.log(Object.prototype.hasOwnProperty("company"));
*/