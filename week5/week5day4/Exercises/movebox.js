setTimeout(function() {
    alert("Hello World");
}, 2000);

var container = document.getElementById("container");

setTimeout(function() {
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);
}, 2000);

var container = document.getElementById("container");
var clearButton = document.getElementById("clear");
var paragraphCount = 0;
var interval;

interval = setInterval(function() {
    if (paragraphCount < 5) {
        var newParagraph = document.createElement("p");
        newParagraph.textContent = "Hello World";
        container.appendChild(newParagraph);
        paragraphCount++;
    } else {
        clearInterval(interval);
    }
}, 2000);

clearButton.addEventListener("click", function() {
    clearInterval(interval);
});