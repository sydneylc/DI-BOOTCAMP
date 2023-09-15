// DAILY CHALLENGE 1
//Returning Func Promise
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === 'string')) {
        const uppercasedWords = words.map(word => word.toUpperCase());
        resolve(uppercasedWords);
      } else {
        reject("All elements in the array should be strings");
      }
    });
  }
  
  //Sorting Them
  function sortWords(uppercasedWords) {
    return new Promise((resolve, reject) => {
      if (uppercasedWords.length > 4) {
        const sortedWords = uppercasedWords.sort();
        resolve(sortedWords);
      } else {
        reject("Array length should be greater than 4");
      }
    });
  }
  
  
  makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  
  makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));

    //DAILY CHALLENGE 2
//FROM INTERNET AND DI 

const morse = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  };
  
  // CONVERSION FUNC
  function toJs() {
    return new Promise((resolve, reject) => {
      try {
        if (Object.keys(morse).length === 0) {
          reject("Morse JavaScript object is empty");
        } else {
          resolve(morse);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  
  // TRANSLATE
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt("Enter a word or sentence:").toLowerCase();
      const morseTranslation = [];
  
      for (const char of userInput) {
        if (char in morseJS) {
          morseTranslation.push(morseJS[char]);
        } else {
          reject(`Character '${char}' doesn't exist in Morse code`);
          return;
        }
      }
  
      resolve(morseTranslation);
    });
  }
  
  // DISPLAY
  function joinWords(morseTranslation) {
    const morseText = morseTranslation.join(" ");
    document.body.textContent = morseText;
  }
  
  // CHAINING
  toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error));