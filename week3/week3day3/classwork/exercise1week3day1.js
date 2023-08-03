

const DRIVER_AGE = 18;

let age = prompt("Please enter your age: ");

if(isNaN(age)) {
    alert("Please enter a valid age")
} else {
    if(age > DRIVER_AGE) {
        // console.log("Powering On. Enjoy the ride!")
        alert("Powering On. Enjoy the ride!");
    } else if ( age==DRIVER_AGE){
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
        alert("Ur a baby");
    }
    
}

// console.log(parseInt(age));
// if(isNaN(age)) {

// }

// if(age == DRIVER_AGE) {
//    alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// if(age < DRIVER_AGE) {
//     alert("Powering On. Enjoy the ride!");
// }
// else {
//     alert("Powering Enter A Valid Age!");
// }

// switch ("a") {
//     case "about";
//     alert("welcome to")
// }

// // let a = 1;
// // let b = 1;
// // let c = 3;
// // let d = 3;

// // if (! (a === b))


// let arr = []

// let obj = {
//     name: 'John',
//     email: 'john@gmail.com',
//     age: 18,
//     fav: ['Apple', 'Banana'],
//     address: {
//         city: 'Tel Aviv',
//         country: 'Israel'
//     }
//     calc: function()
// }
// console.log(user.name);
// console.log(user["email"]);
