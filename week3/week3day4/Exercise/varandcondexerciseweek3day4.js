//Exercise 1
let x = 7;
let y = 3;
if (x>y) {
    console.log("x is bigger than y");
}
else if (x<y) {
    console.log("y is bigger than ");
}
else {
    console.log("x and y are equal");
}

//Exercise 2
//1.
const newDog = "Chihuahua";
//2.
const lettersOf = newDog.length;
console.log(lettersOf);
//3.
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog === "Chihuahua") {
    console.log("I love Chihuahuas, its my favorite dog breed");
} else {
    console.log("I dont care, I prefer cats WHICH IS TRUE ");

}

//Exercise 3
const theInput = prompt("Please enter a number");
const theNumber = Number(theInput);

if (!isNaN(theNumber)) {
    console.log("You put in:", theNumber); 
} else {
    console.log("Not valid bro. Please enter a number.");
}

if (theNumber % 2 === 0) {
    console.log(theNumber + "x is an even number");
} else {
    console.log(theNumber + "x is an odd number");
}

//Exercise 4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length === 0) {
    console.log("No one is online");
  } else if (users.length === 1) {
    console.log(users[0] + " is online");
  } else if (users.length === 2) {
    console.log(users[0] + " and " + users[1] + " are online");
  } else {
    console.log(users[0] + ", " + users[1] + " and " + (users.length - 2) + " more are online");
  }
  