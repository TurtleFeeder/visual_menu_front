class Restaurant {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.hours = data.hours;
    this.location = data.location;
    this.phone = data.phone;
    // debugger
    this.meals = data.meals.map((m) => new Meal(m, this));
    //this.meals = data.meals.map((meal) => new Meal(meal));
    //this.meal = data.meals;
    Restaurant.all.push(this);
  }

  static findById(id) {
    return this.all.find(restaurant => restaurant.id === id);
  } // end findById class helper fn

  renderLi() {
    return `<li data-id="${this.id}">${this.name}</li>`;
  } // end renderLi fn

  renderInfo() {
    return `
    <h2 id="name">${this.name}</h2>
    <h4 id="location">${this.location}</h4>
    <h5 id="hours">${this.hours}</h5>
    <h5 id="phone">${this.phone}</h5>
    `
  }

} //end Restaurant class

Restaurant.all = [];
