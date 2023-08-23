var allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://example.com/harry_potter.jpg",
        alreadyRead: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://example.com/great_gatsby.jpg",
        alreadyRead: false
    }
];


var table = document.createElement("table");


for (var i = 0; i < allBooks.length; i++) {
    var book = allBooks[i];


    var row = document.createElement("tr");


    var titleCell = document.createElement("td");
    titleCell.textContent = book.title + " written by " + book.author;

    var imageCell = document.createElement("td");
    var image = document.createElement("img");
    image.src = book.image;
    image.width = 100;
    imageCell.appendChild(image);


    if (book.alreadyRead) {
        titleCell.style.color = "red";
    }


    row.appendChild(titleCell);
    row.appendChild(imageCell);


    table.appendChild(row);
}


var listBooksDiv = document.querySelector(".listBooks");


listBooksDiv.appendChild(table);