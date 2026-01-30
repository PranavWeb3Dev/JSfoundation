let menu = document.getElementById("menu");
let items = document.getElementsByClassName("item");
console.log(items);
let getArray = [].map.call(items, (item) => item.textContent);

console.log(getArray);