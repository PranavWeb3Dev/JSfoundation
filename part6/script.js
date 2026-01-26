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