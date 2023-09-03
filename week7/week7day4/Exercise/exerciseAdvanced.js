//PART 1
//FIND SUM        IN END IT IS OUTPUT OF 7

const sum = (a, b) => a + b;
console.log(sum(3, 4));

//PART TWO
//DECLARE FUNCTION 

function kgToGrams(weightInKg) {
  return weightInKg * 1000;
}
console.log(kgToGrams(2));

const kgToGrams = function(weightInKg) {
  return weightInKg * 1000;
};
console.log(kgToGrams(2)); 


const kgToGrams = weightInKg => weightInKg * 1000;
console.log(kgToGrams(2)); 

//PART 3 FORTUNE TELLER

(function(numberOfChildren, partnerName, location, jobTitle) {
  const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;
  document.getElementById('fortune').textContent = sentence;
})(2, 'Alice', 'Paris', 'Web Developer');

//PART 4 
//WELCOME

(function(userName) {
  const navbar = document.querySelector('.navbar');
  const welcomeDiv = document.createElement('div');
  welcomeDiv.textContent = `Welcome, ${userName}`;
  navbar.appendChild(welcomeDiv);
})('John');

//JUICE BAR NESTING

function makeJuice(size) {
  function addIngredients(ingredient1, ingredient2, ingredient3) {
    console.log(`The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`);
  }

  addIngredients('apple', 'banana', 'orange');
}

makeJuice('medium');

function makeJuice(size) {
  const ingredients = [];

  function addIngredients(ingredient1, ingredient2, ingredient3) {
    ingredients.push(ingredient1, ingredient2, ingredient3);
  }

  function displayJuice() {
    console.log(`The client wants a ${size} juice, containing ${ingredients.join(', ')}`);
  }

  addIngredients('apple', 'banana', 'orange');
  addIngredients('strawberry', 'blueberry', 'mango');
  displayJuice();
}

makeJuice('large');