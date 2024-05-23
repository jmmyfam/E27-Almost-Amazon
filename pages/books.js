import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyBooks = () => {
  const domString = '<h1>No Books</h1>';
  renderToDOM('#store', domString);
};

const showBooks = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-outline-secondary btn-lg mb-4" id="add-book-btn">Add A Book</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
            <hr>
            <i class="btn btn-outline-info fas fa-eye data-tooltip" id="view-book-btn--${item.firebaseKey}" data-tooltip="View Book"></i>
            <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-outline-warning data-tooltip" data-tooltip="Edit Book"></i>
            <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-outline-danger fas fa-trash-alt data-tooltip" data-tooltip="Delete Book"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showBooks, emptyBooks };
