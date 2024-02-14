const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    return(title, author, pages, read)
}

const book1 = new Book('Hp', "jk", "302", "no")
console.log(book1)

// function addBookToLibrary(){

// }



let add = document.getElementById("submit")
add.addEventListener('click' , () => {
    let newBook = new Book(title, author, pages, read)
    console.log(newBook)
    var newCard = document.createElement("div");
    newCard.classList.add('card');
    newCard.append(newBook)
    var cardSection = document.querySelector('cardContainer');
    cardSection.append(newCard);


  
})