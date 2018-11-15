class Review {
  constructor(data, mealObj) {
    this.id = data.id;
    this.username = data.username;
    this.content = data.content;
    this.rating= data.rating;
    this.meal = mealObj;

    Review.all.push(this);
  }

  static findById(id) {
    return this.all.find(review => review.id === id);
  } // end findById class helper fn

  renderRLi() {
    return `<li data-id="${this.id}">
                <h4 data-content="username">${this.username}</h4>
                <p data-content="content">${this.content}</p>
                <p data-content="rating">${this.rating}</p>
            </li>`;
  } // end renderRLi fn

  static renderRevs(array) {
    return array.map((rev) => {
      return rev.renderRLi();
    }).join('')
  }

  // renderRevs() {
  //   return `
  //   <h2 id="username">${this.username}</h2>
  //   <h4 id="content">${this.content}</h4>
  //   <h5 id="rating">${this.rating}</h5>
  //   `
  // } // end renderRevs fn

} //end Review class

Review.all = [];
