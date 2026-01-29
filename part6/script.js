// Example One
let text = document.getElementById("myParagraph").textContent;
let buttonText = document.getElementById("changeTextButton").textContent;
let isClicked = false;
document.getElementById("changeTextButton").addEventListener('click', function () {
    let getPara = document.getElementById('myParagraph');
    let getButton = document.getElementById('changeTextButton');
    if (!isClicked) {
        getPara.textContent = "Paragraph Changed...";
        getPara.style.color = "green";
        getButton.textContent = "Get Back";
    } else {
        getPara.innerHTML = text;
        getButton.textContent = buttonText;
        getPara.style.color = "#ffffff"
    }
    isClicked = !isClicked;
})

document.getElementById("highlightFirstCity").addEventListener('click', function () {
    let getList = document.getElementById("citiesList");
    if (!isClicked) {
        getList.firstElementChild.classList.add("highlight");
    } else {
        getList.firstElementChild.classList.remove("highlight")
    }
    isClicked = !isClicked;
});

document.getElementById("changeOrder").addEventListener("click", function () {
    let changeType = document.getElementById("coffeeType");
    changeType.textContent = "Espresso";

});
let shoppingItems = ["eggs", "cookies", "tea Powder", "vegitables"];
let addItem = 0;
document.getElementById("addNewItem").addEventListener("click", function () {
    let createListItem = document.createElement("li");
    createListItem.style.textTransform = "capitalize";
    createListItem.textContent = shoppingItems[addItem];
    document.getElementById("shoppingList").appendChild(createListItem);
    addItem++;
});

document.getElementById("removeLastTask").addEventListener('click', function () {
    let getListItems = document.getElementById("taskList");
        getListItems.lastElementChild.remove();
})

// Example 6
document.getElementById('clickMeButton').addEventListener('click', function () {
    let getInfo = document.getElementsByTagName("h2");
    for (let i = 0; i <= getInfo.length; i++){
        if (getInfo[i].textContent === "Event Handling in the DOM") {
            getInfo[i].textContent = "Changed the DOM"
        }
    }
})

// Example 7
document.getElementById("teaList").addEventListener('click', function (e) {
    console.log(e.target.textContent);

})

// Example 8
document.getElementById("feedbackForm").addEventListener('submit', function (e) {
    e.preventDefault();
    
    let getReview = document.getElementById("feedbackInput");
    let getLable = document.querySelector(`label[for="${getReview.id}"]`)
    let postReview = document.getElementById("feedbackDisplay");
    postReview.textContent = getLable.textContent + getReview.value;
})

//Example 9

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("domStatus").textContent = "DOM Loaded Completely";
})

//Example 10
let getToggel = document.getElementById("toggleHighlight");
getToggel.addEventListener('click', function (e) {
    e.preventDefault();
    let getPara = document.getElementById("descriptionText");
    getPara.classList.toggle("highlight");
    console.log("Hello From Toggel Button");
})

// Dark Theme and Light Theme

document.getElementById("toggelTheme").addEventListener('click', function(e){

    console.log("Hello")
    let getBody = document.getElementById('changeTheme');
    getBody.classList.toggle("lightTheme");
})