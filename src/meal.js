class Meal {
  constructor(data, restObj) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.imgurl = data.imgurl;
    this.price = data.price;
    this.reviews = data.reviews.map((r) => new Review(r, this));
    this.restaurant = restObj;

    Meal.all.push(this);
  }

  renderMLi() {
    return `<li data-id="${this.id}" class="tablinks">${this.name}</li>`;
  } // end renderMLi fn

  renderMealCard() {
    return `  <img src="${this.imgurl}" style="width:70vh;height:40vh;">
              <h3>${this.name}</h3>
              <h5>Price: ${this.price}</h5>
              <p>${this.description}</p>
              <div class="rev">
                <ul id="menu-reviews">
                ${Review.renderRevs(this.reviews)}
                </ul>
              </div>
              `
  } // end renderMealCard fn

  static renderRMeals(array) {
    return array.map((meal) => {
      return meal.renderMLi();
    }).join('')
  }

  static findByMId(id) {
    return this.all.find(meal => meal.id === id);
  } // end findByMId class helper fn

} // end Meal class

Meal.all = [];
