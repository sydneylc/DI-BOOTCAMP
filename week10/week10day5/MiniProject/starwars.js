document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetchCharacter");
    const characterInfo = document.getElementById("characterInfo");
    const characterName = document.getElementById("characterName");
    const characterHeight = document.getElementById("characterHeight");
    const characterGender = document.getElementById("characterGender");
    const characterBirthYear = document.getElementById("characterBirthYear");
    const characterHomeWorld = document.getElementById("characterHomeWorld");
    const loading = document.getElementById("loading");
    const error = document.getElementById("error");

    fetchButton.addEventListener("click", () => {
        loading.classList.remove("hidden");
        characterInfo.classList.add("hidden");
        error.classList.add("hidden");

        
        const characterId = Math.floor(Math.random() * 83) + 1;

        const apiUrl = `https://www.swapi.tech/api/people/${characterId}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                characterName.textContent = data.result.properties.name;
                characterHeight.textContent = data.result.properties.height;
                characterGender.textContent = data.result.properties.gender;
                characterBirthYear.textContent = data.result.properties.birth_year;
                return fetch(data.result.properties.homeworld);
            })
            .then(response => response.json())
            .then(data => {
                characterHomeWorld.textContent = data.result.properties.name;
                loading.classList.add("hidden");
                characterInfo.classList.remove("hidden");
            })
            .catch(err => {
                console.error(err);
                loading.classList.add("hidden");
                error.classList.remove("hidden");
            });
    });
});
