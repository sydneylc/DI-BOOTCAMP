const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

let x = moreFruits[0];
console.log(x);

let y = moreFruits[1];
console.log(y);


const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// fruits.shift()

let indx = fruits.indexOf("Banana");
console.log(indx);

fruits.splice(indx,1);

fruits.sort();

// fruits.push('Kiwi')

fruits[fruits.length] = 'Kiwi'

indx = fruits.indexOf('Apple');
// console.log(indx);
fruits.splice(indx,1);

fruits.reverse();

console.log(fruits);