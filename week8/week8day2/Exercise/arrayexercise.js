// PART 1
------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

// This first portion above creates two arrays 'fruits' and 'vegatables'

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// The .... joins the elements of the arrays to one another.

//The output would be the arrays of 'fruits' + 'vegatables'
// Meaning  ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

------2------
const country = "USA";
console.log([...country]);

// Made a string with USA
// Made it into an array using ......


------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// No bonus time.


//PART 2

//MAP METHOD
const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
  ];
  
  const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
  console.log(welcomeStudents);

  // output
  //["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

//FILTER METHOD

const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);


//PART 3
//REDUCE METHOD

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const combinedString = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);
console.log(combinedString);
//GREAT MOVIE GREATEST LINE CUZ YOU KNOW YOU ABOUTTA SEE THE BEST MOVIES EVERRRR


//PART 4 
//FILTER METHOD AGAIN

const students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
  ];
  
  const passedStudents = students.filter(student => student.isPassed);
  
  console.log(passedStudents);
  
