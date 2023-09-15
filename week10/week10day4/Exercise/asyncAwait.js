async function fetchData() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      const objectStarWars = await response.json();
      console.log(objectStarWars.result);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();


  // EXERCISE TWO = AFTER SOLVING FOR THE TWO SECONDS AS ASKED THEN THE COMPUTER WILL LOG RESOLVED.