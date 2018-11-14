class App {
  constructor() {
    this.adapter = new Adapter();

    this.createRestaurants = this.createRestaurants.bind(this);
    this.addRestaurants = this.addRestaurants.bind(this);
    this.handleSideBarClick = this.handleSideBarClick.bind(this);
  }

  attachEventListeners() {
    document.querySelector('.sidenav').addEventListener('click', this.handleSideBarClick);
  }

  createRestaurants(restaurants) {
    restaurants.forEach(restaurant => {
      new Restaurant(restaurant);
    });
    this.addRestaurants();
  } // end createRestaurants fn

  addRestaurants() {
    document.querySelector('#restaurant-list').innerHTML = '';
    Restaurant.all.forEach(
      restaurant => (document.querySelector('#restaurant-list').innerHTML += restaurant.renderLi())
    );
  } // end addRestaurants fn

  createMeals(meals) {
    meals.forEach(meal => {
      new Meal(meal);
    });
  } // end createMeals fn

  createReviews(reviews) {
    reviews.forEach(review => {
      new Review(review);
    });
  } //end of createReviews

  handleSideBarClick(e) {
    if (e.target.dataset.id != undefined) {
      const rId = parseInt(e.target.dataset.id);
      const restaurant = Restaurant.findById(rId);
      document.querySelector('.restaurant-info').innerHTML = restaurant.renderInfo();
      console.log(restaurant);
      console.log("serialized meals:", restaurant.meals);

      debugger
    }
  } // end handleSideBarClick fn

} // end App class
