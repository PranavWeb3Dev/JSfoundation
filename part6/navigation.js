let isClicked = false;
let getMenu = document.getElementById("sub-menu");
  let showSubMenu = document.getElementById("sub-menus");
getMenu.addEventListener('click', function(e){
    e.preventDefault();//Prevents default begavior of the browser
    e.stopPropagation();
    if (!isClicked) {
        console.log("Menu Clicked")
        showSubMenu.style.display = "block";
    } else {
        showSubMenu.style.display = "none";
    }
    isClicked = !isClicked;
})
document.addEventListener('click', () => {
    showSubMenu.style.display = "none";
})