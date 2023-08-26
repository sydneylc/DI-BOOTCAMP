const quotes = [
    { id: 0, author: "Author 1", quote: "Quote 1" },
    { id: 1, author: "Author 2", quote: "Quote 2" },

];

let currentQuoteId = -1;

const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-btn");

generateButton.addEventListener("click", generateRandomQuote);

function generateRandomQuote() {
    let randomQuoteId = Math.floor(Math.random() * quotes.length);

    while (randomQuoteId === currentQuoteId) {
        randomQuoteId = Math.floor(Math.random() * quotes.length);
    }

    currentQuoteId = randomQuoteId;
    quoteElement.textContent = `"${quotes[randomQuoteId].quote}" - ${quotes[randomQuoteId].author}`;
}

const addQuoteForm = document.getElementById("add-quote-form");
const addQuoteButton = document.getElementById("add-quote-btn");
const charCountWithSpaceButton = document.getElementById("char-count-with-space");
const charCountNoSpaceButton = document.getElementById("char-count-no-space");
const wordCountButton = document.getElementById("word-count");
const likeButton = document.getElementById("like-btn");

addQuoteButton.addEventListener("click", addNewQuote);
charCountWithSpaceButton.addEventListener("click", countCharactersWithSpace);
charCountNoSpaceButton.addEventListener("click", countCharactersNoSpace);
wordCountButton.addEventListener("click", countWords);
likeButton.addEventListener("click", likeQuote);

function addNewQuote(event) {
    event.preventDefault();

    const newQuote = document.getElementById("quote-input").value;
    const newAuthor = document.getElementById("author-input").value;

    if (newQuote && newAuthor) {
        const newId = quotes.length;
        quotes.push({ id: newId, author: newAuthor, quote: newQuote });
        addQuoteForm.reset();
    }
}

function countCharactersWithSpace() {
    if (currentQuoteId !== -1) {
        const quoteText = quotes[currentQuoteId].quote;
        alert(`Character Count (with space): ${quoteText.length}`);
    }
}

function countCharactersNoSpace() {
    if (currentQuoteId !== -1) {
        const quoteText = quotes[currentQuoteId].quote;
        const characterCount = quoteText.replace(/\s/g, "").length;
        alert(`Character Count (no space): ${characterCount}`);
    }
}

function countWords() {
    if (currentQuoteId !== -1) {
        const quoteText = quotes[currentQuoteId].quote;
        const wordCount = quoteText.split(/\s+/).filter(Boolean).length;
        alert(`Word Count: ${wordCount}`);
    }
}

function likeQuote() {
    if (currentQuoteId !== -1) {
        if (!quotes[currentQuoteId].likes) {
            quotes[currentQuoteId].likes = 1;
        } else {
            quotes[currentQuoteId].likes++;
        }
    }
}

const filterForm = document.getElementById("filter-form");
const filterButton = document.getElementById("filter-btn");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

filterButton.addEventListener("click", filterQuotes);
prevButton.addEventListener("click", showPreviousQuote);
nextButton.addEventListener("click", showNextQuote);

function filterQuotes(event) {
    event.preventDefault();

    const authorToFilter = document.getElementById("author-filter").value;
    const filteredQuotes = quotes.filter(quote => quote.author === authorToFilter);

    if (filteredQuotes.length > 0) {
        currentQuoteId = 0;
        displayCurrentQuote();
    }
}

function showPreviousQuote() {
    if (currentQuoteId > 0) {
        currentQuoteId--;
        displayCurrentQuote();
    }
}

function showNextQuote() {
    if (currentQuoteId < quotes.length - 1) {
        currentQuoteId++;
        displayCurrentQuote();
    }
}

function displayCurrentQuote() {
    quoteElement.textContent = `"${quotes[currentQuoteId].quote}" - ${quotes[currentQuoteId].author}`;
}