class Restaurant {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.hours = data.hours;
    this.location = data.location;
    this.phone = data.phone;
    this.meals = data.meals.map((m) => new Meal(m, this));
    Restaurant.all.push(this);
  } // end Restaurant constructor fn

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
    <div align="right">
    <button class="button addMenuItem" data-id=${this.id}>Add Menu Item</button>
    </div>
    <br>
    `
  } // end renderInfo fn
} //end Restaurant class

Restaurant.all = [];
