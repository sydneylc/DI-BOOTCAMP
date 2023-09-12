// DEFINITIONS
const apiUrl = "https://api.giphy.com/v1/gifs/search";
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const searchTerm = "sun";
const limit = 10;
const offset = 2;

// NEW REQUEST
const xhr = new XMLHttpRequest();

// GET REQUEST SETTING
xhr.open("GET", `${apiUrl}?q=${searchTerm}&limit=${limit}&offset=${offset}&api_key=${apiKey}`, true);

// CALLBACK FUNC
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
   
    const response = JSON.parse(xhr.responseText);
    
    // CONSOLING
    console.log(response);
  } else if (xhr.readyState === 4 && xhr.status !== 200) {

    console.error("Error fetching GIFs from Giphy API");
  }
};

// GET REQUEST
xhr.send();
