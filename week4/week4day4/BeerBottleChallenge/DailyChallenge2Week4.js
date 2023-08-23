//99 BOTTLES OF BEER DAILY CHALLENGE
function generateLyrics(bottleCount) {
    for (let i = bottleCount; i > 0; i--) {
        const bottlesRemaining = i - 1;
        const plural = i === 1 ? "" : "s";
        const nextBottles = bottlesRemaining === 1 ? "it" : "them";

        console.log(`${i} bottle${plural} of beer on the wall`);
        console.log(`${i} bottle${plural} of beer`);
        console.log(`Take ${i === 1 ? "it" : i} down, pass ${nextBottles} around`);

        if (bottlesRemaining === 0) {
            console.log("No more bottles of beer on the wall");
        } else {
            console.log(`${bottlesRemaining} bottle${bottlesRemaining === 1 ? "" : "s"} of beer on the wall`);
        }

        console.log(""); // Add an empty line between verses
    }
}

const startingBottles = splice(prompt("Enter the number of bottles to start with:"));
generateLyrics(startingBottles);
