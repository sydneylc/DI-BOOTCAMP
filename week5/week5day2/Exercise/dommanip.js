var allBoldItems;

function getBoldItems() {
   allBoldItems = document.querySelectorAll("p b");

}
function highlight() {
    for (var i = 0; i < allBoldItems.length; i++)
    allBoldItems[i].style.color = "blue";
}

function returnItems2Default() {
    for (var i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "black";
    }
}
var paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItems2Default);

getBoldItems();