
const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";

fetch(`6bc236fa8bd5e7e03f83fd8cea3eac74=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
     
    })
    .catch((error) => {
        console.error("Error fetching weather data:", error);
    });


if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
       
    });
} else {
// PLACES THIS GEOLOCATION STYLE NOT SUPPORTED
}

const deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach((button) => {
    button.addEventListener("click", function() {
        const card = this.parentElement;
        card.remove();
    });
});



