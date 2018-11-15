class App {
  constructor() {
    this.adapter = new Adapter();

    this.createRestaurants = this.createRestaurants.bind(this);
    this.addRestaurants = this.addRestaurants.bind(this);
    this.handleSideBarClick = this.handleSideBarClick.bind(this);
    this.handleMenuDivHover = this.handleMenuDivHover.bind(this);
  }

  attachEventListeners() {
    document.querySelector('.sidenav').addEventListener('click', this.handleSideBarClick);
    document.querySelector('.menu').addEventListener('mouseover', this.handleMenuDivHover);
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

// don't need createMeals fn since the Restaurant constructor will create all the meals that's associated with it.
  // createMeals(meals) {
  //   meals.forEach(meal => {
  //     new Meal(meal);
  //   });
  // } // end createMeals fn

  handleSideBarClick(e) {
    if (e.target.dataset.id != undefined) {
      const rId = parseInt(e.target.dataset.id);
      const restaurant = Restaurant.findById(rId);
      document.querySelector('.restaurant-info').innerHTML = restaurant.renderInfo();
      document.querySelector('#menu-list').innerHTML = Meal.renderRMeals(restaurant.meals);
    }
  } // end handleSideBarClick fn

  handleMenuDivHover(e) {
    console.log(e.target)
    if (e.target.dataset.id != undefined) {
      console.log('in the if stmt!')
      const mId = parseInt(e.target.dataset.id);
      const meal = Meal.findByMId(mId);
      console.log(meal.imgurl)
      document.querySelector('#menu-card').innerHTML = meal.renderMealCard();
    }
  } // end handleSideBarClick fn

} // end App class
