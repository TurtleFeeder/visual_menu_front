class Review {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.content = data.content;
    this.ratind= data.rating;
    this.meal = Meal.findById(data.meal_id);
    this.restaurant = restObj;
    Review.all.push(this);
  }

  static findById(id) {
    return this.all.find(review => review.id === id);
  } // end findById class helper fn

  renderLi() {
    return `<li data-id="${this.id}">${this.content}</li>`;
  } // end renderLi fn

  renderInfo() {
    return `
    <h2 id="username">${this.username}</h2>
    <h4 id="content">${this.content}</h4>
    <h5 id="rating">${this.rating}</h5>
    `
  }

} //end Review class

Review.all = [];
