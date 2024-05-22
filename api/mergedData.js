// api/mergedData.js
import { getAuthorBooks, getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

// TODO: Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleBook(firebaseKey).then((bookObject) => { // returns single book object
    getSingleAuthor(bookObject.author_id) // we nest this promise so that we can use the book object
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
});

const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey)
    .then((authorObject) => {
      getAuthorBooks(firebaseKey)
        .then((books) => {
          resolve({ authorObject, books });
        })
        .catch(reject);
    });
});

export { getBookDetails, getAuthorDetails };
