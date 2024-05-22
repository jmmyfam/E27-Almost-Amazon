// pages/viewAuthor.js

import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { getAuthorDetails } from '../api/mergedData';

const viewAuthor = (firebaseKey) => {
  clearDom();

  getAuthorDetails(firebaseKey)
    .then(({ authorObject, books }) => {
      let domString = `
        <div id='author-details'>
          <h1 style='color: white'>${authorObject.first_name} ${authorObject.last_name}</h1>
          <p style='color: white'>Email: ${authorObject.email}</p>
          <i class="fas fa-edit btn btn-info" id="update-author--${authorObject.firebaseKey}"></i>
          <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${authorObject.firebaseKey}"></i>
        </div>
        <hr>
        <div id='author-books'>`;

      books.forEach((book) => {
        domString += `
        <div class="author-books-container">
      <div class="author-books">
        <img class="card-img-top" src="${book.image}" alt="${book.title}">
        <div class="card-body">
          <h5 class="card-title" style="color: white">${book.title}</h5>
        </div>
      </div>
    </div>`;
      });

      domString += '</div>';
      renderToDOM('#view', domString);
    });
};

export default viewAuthor;
