//Daily challenge 
const food = "The food is not that bad, I like it";
const wordNot = food.indexOf("not");
const wordBad = food.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  const modifiedFood = food.slice(0, wordNot) + "good" + food.slice(wordBad + 3);
  console.log(modifiedFood);
} else {
  console.log(food);
}
