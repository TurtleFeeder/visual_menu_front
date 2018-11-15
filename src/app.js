class App {
  constructor() {
    this.adapter = new Adapter();

    this.createRestaurants = this.createRestaurants.bind(this);
    this.addRestaurants = this.addRestaurants.bind(this);
    this.handleSideBarClick = this.handleSideBarClick.bind(this);
    this.handleMenuDivHover = this.handleMenuDivHover.bind(this);
    this.handleNewRestaurantFormClick = this.handleNewRestaurantFormClick.bind(this);
    this.handleSpanClick = this.handleSpanClick.bind(this);
    this.handleClickOutsideForm = this.handleClickOutsideForm.bind(this);
  }

  // let modal = document.getElementById('myModal');
  // let span = document.getElementsByClassName("close")[0];
  // let btn = document.getElementById("myBtn");

  attachEventListeners() {
    document.querySelector('.sidenav').addEventListener('click', this.handleSideBarClick);


    document.querySelector('.menu').addEventListener('mouseover', this.handleMenuDivHover);

    document.querySelector('.new-restaurant-form').addEventListener('submit',this.handleNewRestaurantFormClick)
    document.getElementsByClassName("close")[0].addEventListener('click', this.handleSpanClick);
    window.addEventListener('click', this.handleClickOutsideForm);

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
      document.querySelector('#menu-list').innerHTML = Meal.renderRMeals(restaurant.meals);
    } else if (e.target.id == "myBtn") {
      let modal = document.getElementById('myModal');
      let span = document.getElementsByClassName("close")[0];
      let btn = document.getElementById("myBtn");
      modal.style.display = "block";


    }//create restaurant button
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

  handleNewRestaurantFormClick(e){
    e.preventDefault()
    let newResName = e.target.restaurantname.value
    let newResHours = e.target.restauranthours.value
    let newResLocation = e.target.restaurantlocation.value
    let newResPhone = e.target.restaurantphone.value
    debugger
    this.adapter.post()

  }

  handleSpanClick(e){
    document.getElementById('myModal').style.display = "none";
  } // When the user clicks on <span> (x), close the modal

  handleClickOutsideForm(e){
    if (e.target == document.getElementById('myModal')) {
          document.getElementById('myModal').style.display = "none";
    }
  }// When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //       modal.style.display = "none";
  //   }
  // } // When the user clicks anywhere outside of the modal, close it

} // end App class
