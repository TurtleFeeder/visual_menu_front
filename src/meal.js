class Meal {
  constructor(data, restObj) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.imgurl = data.imgurl;
    this.price = data.price;
    this.restaurant = restObj;
    // this.restaurant.meals.push(this)
    // this.restaurant = data.restaurant_id;
    Meal.all.push(this);
  }

  renderMLi() {
    return `<li data-id="${this.id}">${this.name}</li>`;
  } // end renderMLi fn

  renderMealCard() {
    return ``
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
