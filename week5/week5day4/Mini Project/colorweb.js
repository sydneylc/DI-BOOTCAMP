const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0

document.querySelector(".score").textContent = score;

fetch("./data/cards.json")
.then((res)=> res.json())
.then((data) => {
    cards = [ ];
    shuffleCards();
    generateCards();
});


function shuffleCards() {
    let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex]; // Fix typo here
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
}

function generateCards() {
    for (let card of cards) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-name", card.name);
        // set data name to be equal to the name value we set in json file
        cardElement.innerHTML = `
        <div class="front">
            <img class="front-image" src="${card.image}">
        </div>
        <div class="back"></div>
        `;
        gridContainer.appendChild(cardElement);
        cardElement.addEventListener("click", flipCard);
    }
}

function flipCard() {
    if (lockBoard || this === firstCard || this.classList.contains('flipped')) return;

    this.classList.toggle("flipped");

    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        score++;
        document.querySelector(".score").textContent = score;
        lockBoard = true;

        checkforMatch();
    }
}


function checkforMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
       firstCard.classList.remove("flipped");
       secondCard.classList.remove("flipped");
       resetBoard();
    }, 1000);
}

function resetBoard() {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function restart() {
    resetBoard();
    shuffleCards();
    score = 0;
    document.querySelector(".score").textContent = score;
    gridContainer.innerHTML = "";
    generateCards();
}

const restartButton = document.querySelector('.restart-button');


function restart() {
 console.log('Restart button clicked! Restarting the game...');
alert("RESTARTING");
}
restartButton.addEventListener('click', restart);