// PART 1
function playTheGame() {
 const gamePlay = confirm("Would you like to play the game?");  
 if (gamePlay === true) {
    alert("Time to play!");
    
   const enterNumber = Number(prompt("Enter a number between zero and ten!"))
    if (enterNumber == '' || isNaN(enterNumber) ==true) {
        alert("Sorry Not a number, Goodbye");
    } else if (enterNumber < 0 || enterNumber > 10) {
        alert("Sorry it's Not a Good Number!");

    } else { 
        const computerNumber = Math.floor(Math.random() * 11);
        compareNumbers(enterNumber, computerNumber);
    }

 }
 else {
    alert("No problem, Goodbye");
 }
}

playTheGame();

//PART TWO

function compareNumbers(enterNumber, computerNumber) {
    for(let i = 0; i <= chances; i++) {
        if (enterNumber == computerNumber) {
            alert("YOU ARE THE WINNER WOWWWWWW!");
            playTheGame;
        return;
        }
   if (i == chances - 1) {
    alert("Too many tries! The correct number was: " + computerNumber);
   } else if(enterNumber > computerNumber) {
    alert("Your number is bigger then the computer's guess again");
   } else if(enterNumber < computerNumber) {
enterNumber = prompt("Too small guess again!")
   }

}
}