class Restaurant {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.hours = data.hours;
    this.location = data.location;
    this.phone = data.phone;
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

  meals() {
    //filter through all meals
    //does meal.restaurant.id == this.id
    return Meal.all.filter((meal)=> meal.restaurant.id === this.id);
  }

} //end Restaurant class

Restaurant.all = [];
