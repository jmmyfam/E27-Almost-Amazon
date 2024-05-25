import { booksOnSale, getBooks, searchBooks } from '../api/bookData';
import { signOut } from '../utils/auth';
import { emptyBooks, showBooks } from '../pages/books';
import { getAuthors, getFavAuthors } from '../api/authorData';
import { showAuthors } from '../pages/authors';
// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale().then(showBooks);
  });

  // TODO: ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks().then(showBooks);
  });

  // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors().then(showAuthors);
  });

  // favorite authors
  document.querySelector('#fav-authors').addEventListener('click', () => {
    getFavAuthors().then(showAuthors);
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      searchBooks(searchValue).then((filteredBooks) => {
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
        if (filteredBooks.length === 0) {
          emptyBooks();
        // OTHERWISE SHOW THE STORE
        } else {
          showBooks(filteredBooks); // show filtered books
        }
      });

      document.querySelector('#search').value = ''; // clear the input field
    }
  });
};

export default navigationEvents;
