//DAILY CHALLENGE
const input = prompt("Enter several words separated by commas:");


const words = input.split(",").map(word => word.trim());


const longestWordLength = Math.max(...words.map(word => word.length));


const border = "*".repeat(longestWordLength + 4);

console.log(border);

for (const word of words) {
    const spaces = " ".repeat(longestWordLength - word.length);
    console.log(`* ${word}${spaces} *`);
}


console.log(border);