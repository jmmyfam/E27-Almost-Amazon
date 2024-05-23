import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyAuthors = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#store', domString);
};

const showAuthors = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-outline-secondary btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
        <p class="card-text bold">${item.favorite ? '<span class="badge badge-info fav-badge"><i class="fa fa-star"  style="color: gold" aria-hidden="true"></i> <span class="fav">Favorite</span></span>' : '<br>'}</p>
        <hr>
        <i class="btn btn-outline-info  fas fa-eye data-tooltip" id="view-author-btn--${item.firebaseKey}" data-tooltip="View Author"></i>
        <i class="fas fa-edit btn btn-outline-warning data-tooltip" id="update-author--${item.firebaseKey}" data-tooltip="Edit Author"></i>
        <i class="btn btn-outline-danger fas fa-trash-alt data-tooltip" id="delete-author-btn--${item.firebaseKey}" data-tooltip="Delete Author"></i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showAuthors, emptyAuthors };
