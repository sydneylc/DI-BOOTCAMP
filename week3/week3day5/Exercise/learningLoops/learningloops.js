// Exercise 1: PART 1
// 1. removing Greg from the array
const people = ["Greg", "Mary", "Devon", "James"]
people.shift();
console.log(people);

// 2. removing James and replacing with Jason
people.splice(2,1);
console.log(people);
people.splice(2,1, "Jason");
console.log(people);

// 3. adding my name to the end of the array
people.push("Sydney");
console.log(people);

// 4. console.log Mary's index
console.log(people.indexOf("Mary"));

// 5. make a copy of people array using slice() with edits
console.log(people.slice(1,3));

// 6. index of "Foo" 
// console.log(indexOf("Foo"));
// gives -1 because the value is not found and that is what the method returns if the value is not found

// 7. creating variable "last" 
const last = people[3];
console.log(last);


// PART 2
// 1. looping and console logging
// 2. looping and breaking on Devon
console.log(people); // just checking in on console 

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
}}

// Exercise 2
// 1. creating colors
const colors = ["blue", "green", "red", "yellow", "orange"];

//2. looping and console logging
let favorite;
for (let i = 0; i < colors.length; i++) {
    const favorite = colors[i];
}

if (favorite === "blue")
    console.log("My #1 choice is blue");
    if (favorite === "green")
    
        console.log("My #2 choice is green");
        if (favorite === "red")
        
            console.log("My #3 choice is red");
            if (favorite === "yellow")
            {
                console.log("My #4 choice is yellow");
                if (favorite === "orange"){
                    console.log("My #1 choice is orange");
                
}
}

// Exercise 3

// let numeral; 
// while (true) {
//  numeral = prompt("Please enter a number:");
//   const nInput = Number(numeral);

//   if (typeof nInput === "number" && !isNaN(nInput)  && nInput >= 10 ) {
//     console.log("U R THE BEST MEOW MEOW KISS", nInput);
//     break;
//   }
//   alert("Please enter a number:");
// }

// Exercise 4
//1. copy + paste
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// 2. the number of floors
console.log("# of floors:", building.numberOfFloors);

// 3. the apartments on floor 1 and 3
let firstFloor = 3;
let thirdFloor = 9;
let falcon = (firstFloor += thirdFloor);
console.log("# of apartments on floor 1 and 3", falcon);

//4. name of the second tenant and the number of rooms he has in his apartment
console.log("Dan", dan[0,1]);

//5. sums of rent and possible increase!
const sarRent = building.numbersOfRoomsAndRent.sarah[1];
const davRent = building.numbersOfRoomsAndRent.david[1];
const danRent = building.numbersOfRoomsAndRent.dan[1];

const sumSarAndDavRent = sarRent + davRent;

if (sumSarAndDavRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent increased to be 1200");
} else {
    console.log("No change in Dan's rent");
}
console.log(building.numbersOfRoomsAndRent);

// Exercise 5
// 1. family
const family = {
    mom: "Felix",
    dad: "Vinny",
    daughter: "Molly",
    daughter: "Willie Moe",
};

// 2. key use
for (const key in family) {
    console.log(key);
}

//3. key + value use 
for (const key in family) {
    const value = family[key];
    console.log(value);
}

// Exercise 6
//1. rudolf
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };

  let christmas = '';
  for (const key in details) {
    christmas += details[key] + '';
  }

  console.log(christmas.trim());

//Exercise 7
// 1. names
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//2. society name 
let secretName = ''
for (const name of names) {
    secretName += name[J];
    secretName += name[P];
    secretName += name[S];
    secretName += name[A];
    secretName += name[B];
    secretName += name[K];
}
secretName = secretName.split('').sort().join('');

console.log(secretName);
