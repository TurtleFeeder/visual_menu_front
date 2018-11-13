class Meal {
  constructor(data) {
    this.name = data.name;
    this.description = data.description;
    this.imgurl = data.imgurl;
    this.price = data.price;
    this.restaurant = Restaurant.findById(data.restaurant_id);
    // this.restaurant = data.restaurant_id;
    Meal.all.push(this);
  }


} // end Meal class

Meal.all = [];
