// PART 1
function infoAboutMe() {
    console.log("I love to run");
}

infoAboutMe();

// PART 2
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("Your name is" + personName);
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// EXERCISE 2

//  TIPS
function calculateTip() {
    const billAmount = Number(prompt("How much is the bill, John?"))
    let tips
    if (billAmount < 50) tips = 0.2
    if (billAmount > 50 && billAmount < 200) tips = 0.15
    if (billAmount > 200) tips = 0.1

    const addedTip = billAmount * (1+ tips)

    console.log("Bill:", billAmount)
    console.log("Tip:", tips)
    console.log("The full amount with added tip: ", addedTip)
}

calculateTip();

// EXERCISE 3
function isDivisible() {
    let sum = 0;

    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log('Sum of numbers divisible by 23: ${sum}');
}

isDivisible();


// EXERCISE 4

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ["banana", "orange", "apple"];
console.log(shoppingList);

function myBill() {
    for (const item of shoppingList) {

        const quantityInStock = stock[item]
        
        if (quantityInStock > 0) {
        const price = prices[item]
        console. log("the price of", item, price)
        console. log("and we have this ")
        } else {
        alert("There is no", item, "in stock")
        
}
    }
}

myBill();

//EXERCISE 5 Messed up so was watching the video.

function changeEnough(itemPrice, amountOfChange) {

    const sum = calculateSum(amountOfChange)
    if (sum > itemPrice) {
    console.log("you can afford it")
    return true
    } else {
    console.log("you cannot afford it")
    return false
    }
    }

    function calculateSum (arr) {
        let sum = 0

        for (let i = 0;i < are.length;i++){
            let coinValue
            const numberofCoins = arr[i]
            if (i === 0){ coinValue = 0.25 }
            if (1 === 1){ coinValue = 0.10 }
            if (1 === 2){ coinValue = 0.05 }
            if (i === 3){ coinValue =-0.01 }
            console.log("we have", numberofCoins, "these coins have a value of", coinValue)
            sum = sum + numberofCoins * coinValue
        
        }
    console.log("you have", sum)

    return sum
    
    }

    changeEnough(4.25, [25, 20, 5, 0])

    // EXERCISE 6 I tried for a long time, this was 3 hours at least I did not have time.


hotelCost()

function hotelCost(){
let answer = "user answer"
while (Number (answer) == NaN) {
answer = prompt ("How many nights would you like to stay?")
}
const numberOfNights = Number(answer)
console.log("answer:", numberOfNights)
}
function isOnlyNumbers (str) {
const regex = new RegExp(/^[0-9]*$/)
return regex.test(str)
}

function isOnlyNumbers(str){
return regex.test (str)
}
function includesNumbers(str){
const regex = new RegExp(/\d/)
return regex.test(str)

function planeRideCost(){
let destination
while (destination == null)
prompt ("where are you going ?")
}

console.log("your destination is", destination)
if (destination ===
"London") return "183$"
if (destination ===
"Paris") return "220$"
return "300$"
}

function rentalcarCost(){
let answer
while (lisOnlyNumbers(answer)){
answer = prompt ("How many days would you like to rent the car?")
}
}

let discount = Number =
if (numberOfDays >= 10) discount = 0.05
const totalPricee: Number = dailyPrice * numberOfDays*- (1 - discount)
console.log(...data:
"totalPrice:", totalPrice)
return totalPrice
}
function totalVacationCost() : void {
const carPrice: Number = rentalCarCost()
const hotelPrice: Number = hotelCost()
const planePrice: "183$”| "220$" | "300$” = planeRideCost()

}

let carAnswer

let destination
=
while (! isOnlyNumbers(hotelAnswer)){
hotelAnswer = prompt ("How many nights would you like to stay?")
}
while (! isOnlyNumbers(carAnswer))(
carAnswer = prompt ("How many days would you like to rent the car?")
}
while (destination =="'|| includesNumbers (destination))-{
destination = prompt ("where are you going ?")
}
const carPrice = rentalCarCost(carAnswer)
const hotelPrice = hotelCost (hotelAnswer)
const planePrice = planeRideCost (destination)
console.log('hotelPrice:', hotelPrice)
console.log(' carPrice:’, carPrice)
console.log('planePrice:', planePrice)
const totalPrice = carPrice + hotelPrice + planePrice
console.log("total Price:”
, totalPrice)

function totalvacationcost()f
let hotelAnswer
let carAnswer
let destination
61

while (! isOnlyNumbers(hotelAnswer)){
hotelAnswer = prompt ("How many nights would you like to stay?")
}
while (! isOnlyNumbers(carAnswer)){
carAnswer = prompt ("How many days would you like to rent the car?")
}
while destination
==
"'. | | includesNumbers (destination)) {
destination = prompt ("where are you going ?"
const carPrice = rentalCarCost(carAnswer)

}
}