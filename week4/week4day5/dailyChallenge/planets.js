var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];


var planetContainer = document.getElementById("planetContainer");


for (var i = 0; i < planets.length; i++) {
    var planetName = planets[i].toLowerCase(); 
    var planetDiv = document.createElement("div");
    

    planetDiv.classList.add("planet", planetName);
    
   planetDiv.textContent = planets[i];
    

    planetContainer.appendChild(planetDiv);
}