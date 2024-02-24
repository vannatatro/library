let myLibrary = [];

// Make book
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    return (title, author, pages, read)
}

// Add book to library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(new Book('A Tale of Two Cities', "Charles Dickens", "448", true))
addBookToLibrary(new Book ('The Little Prince', 'Antoine de Saint-Exupéry', "160", false))
addBookToLibrary(new Book ('The Catcher in the Rye', "J.D. Salinger", '234', false))

// Show dialog form button
const dialog = document.getElementById('dialog');
const addNewBookBtn = document.getElementById('dialogBtn')
addNewBookBtn.addEventListener('click', () => {
    dialog.showModal();
  });

// Cancel form button
let newBookForm = document.getElementById('newBookForm');
let cancelBtn = document.getElementById('cancelBtn')
cancelBtn.addEventListener('click', () => {
    newBookForm.reset()
    dialog.close()
})

// Get new book function
const getNewBook = () => {
    const inputTitle = document.querySelector('#title').value;
    const inputAuthor = document.querySelector('#author').value;
    const inputPage = document.querySelector('#pages').value;
    const inputRead = document.querySelector('#read').checked;
    addBookToLibrary (new Book(inputTitle, inputAuthor, inputPage, inputRead));
};

// Add new book via form on submit button click
let submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    getNewBook();
    newBookForm.reset();
    dialog.close();
    displayCards();
});

// Display cards
const displayCards = () => {
    const cardContainer = document.querySelector('.cardContainer');
    cardContainer.replaceChildren();
    let indexNum = 0
    for (const book of myLibrary) {
        const newCard = document.createElement('div')
        newCard.classList.add('card')
        newCard.setAttribute('data-index', `${indexNum}`)
        cardContainer.appendChild(newCard)

        // Create Card Elements + Add to New Card
        const newtitleText = document.createElement('p');
        newtitleText.textContent = 'Title: ' + book.title;
        const newauthorText = document.createElement('p');
        newauthorText.textContent = 'Author: ' + book.author;
        const newpageText = document.createElement('p');
        newpageText.textContent = 'Number of pages: ' + book.pages;
        const newreadText = document.createElement('p');
        let statusTxt = '';
        if (book.read) {
            statusTxt = 'Has been read';
        } if (book.read == false) {
            statusTxt = 'Has not been read';
        }
        newreadText.textContent = 'Status: ' + statusTxt;

        newCard.appendChild(newtitleText)
        newCard.appendChild(newauthorText)
        newCard.appendChild(newpageText)
        newCard.appendChild(newreadText)

        // Card buttons
            // Status button
        let btnDiv = document.createElement('div')
        btnDiv.classList.add('btnDiv')
        newCard.appendChild(btnDiv)
        const statusBtn = document.createElement('button')
        statusBtn.textContent = 'Change Status'
        statusBtn.classList.add('status')
        btnDiv.appendChild(statusBtn);
        statusBtn.addEventListener('click', () => {
            if (book.read) {
                book.read = false;
            } else {
                book.read = true;
            }
            displayCards()
        })
            // Remove button
        var rmvBtn = document.createElement('button')
        rmvBtn.classList.add('rmvBtn')
        rmvBtn.textContent = 'X'
        btnDiv.appendChild(rmvBtn)

        rmvBtn.addEventListener('click', () => {
            index = newCard.dataset.index;
            const rmv = myLibrary.splice(index, 1);
            displayCards()
        })
    indexNum++
    }
}
displayCards()