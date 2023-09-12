const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const apiUrl = "https://api.giphy.com/v1/gifs/random";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const gifContainer = document.getElementById("gif-container");
const deleteAllButton = document.getElementById("delete-all");

// RANDOM GIPHY
function fetchRandomGif(searchTerm) {
    fetch(`${apiUrl}?api_key=${apiKey}&tag=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
            const gifUrl = data.data.images.original.url;
            createGifElement(gifUrl, searchTerm);
        })
        .catch((error) => {
            console.error("Error fetching GIF:", error);
        });
}

// FUNC 4 GIPHY ELEMENT
function createGifElement(gifUrl, searchTerm) {
    const gifElement = document.createElement("div");
    gifElement.className = "gif-item";
    gifElement.innerHTML = `
        <img src="${gifUrl}" alt="${searchTerm} GIF">
        <button class="delete-button">Delete</button>
        <span class="category">${searchTerm}</span>
    `;
    gifContainer.appendChild(gifElement);


    const deleteButton = gifElement.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        gifContainer.removeChild(gifElement);
    });
}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
        fetchRandomGif(searchTerm);
        searchInput.value = "";
    }
});

// DELETE ALL BUTTON
deleteAllButton.addEventListener("click", () => {
    gifContainer.innerHTML = "";
});
