// PART 1
// Output would be:
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// PART 2
// Display

function displayStudentInfo({ first, last }) {
    return `Your full name is ${first} ${last}`;
  }
  
  const fullName = displayStudentInfo({ first: 'Elie', last: 'Schoppik' });
  console.log(fullName);

// PART 3

const users = { user1: 18273, user2: 92833, user3: 90315 };

const userArray = Object.entries(users).map(([user, id]) => [user, id * 2]);

console.log(userArray);

// PART 4
// it seems it will display "object"? because it is a 'Person' object

//PART 5
// DOGS

class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  }

//PART 6
//1. is false
//2. is false
//3. 4, 5 and change the number property

class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  class Mamal extends Animal {
    constructor(name, type, color) {
      super(name, type, color);
    }
  
    sound(sound) {
      return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color} and ${sound}`;
    }
  }
  
  const farmerCow = new Mamal("Lily", "cow", "brown and white");
  const cowSound = farmerCow.sound("moos");
  
  console.log(cowSound);

