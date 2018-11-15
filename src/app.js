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
    this.handleNewMenuItemClick = this.handleNewMenuItemClick.bind(this);
    this.handleSpanClickMenuItemModal = this.handleSpanClickMenuItemModal.bind(this);
    this.handleClickOutsideMenuItemForm = this.handleClickOutsideMenuItemForm.bind(this);
    this.handleNewMenuItemFormSubmit = this.handleNewMenuItemFormSubmit.bind(this);
  }


  attachEventListeners() {
    document.querySelector('.sidenav').addEventListener('click', this.handleSideBarClick);


    document.querySelector('.menu').addEventListener('mouseover', this.handleMenuDivHover);

    document.querySelector('.new-restaurant-form').addEventListener('submit',this.handleNewRestaurantFormClick)
    document.getElementsByClassName("close")[0].addEventListener('click', this.handleSpanClick);
    window.addEventListener('click', this.handleClickOutsideForm);
    document.querySelector('.restaurant-info').addEventListener('click',this.handleNewMenuItemClick)
    document.getElementsByClassName("close")[1].addEventListener('click', this.handleSpanClickMenuItemModal);
    window.addEventListener('click', this.handleClickOutsideMenuItemForm);
    document.querySelector('.new-menu-item-form').addEventListener('submit',this.handleNewMenuItemFormSubmit)

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
  //
  // createReviews(reviews) {
  //   reviews.forEach(review => {
  //     new Review(review);
  //   });
  // } //end of createReviews

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


    }//if create restaurant button is clicked display modal
  } // end handleSideBarClick fn

  handleMenuDivHover(e) {
    if (e.target.dataset.id != undefined) {
      const mId = parseInt(e.target.dataset.id);
      const meal = Meal.findByMId(mId);
      document.querySelector('#menu-card').innerHTML = meal.renderMealCard();
    }
  } // end handleSideBarClick fn

  handleNewRestaurantFormClick(e){
    e.preventDefault()
    let newResName = e.target.restaurantname.value
    let newResHours = e.target.restauranthours.value
    let newResLocation = e.target.restaurantlocation.value
    let newResPhone = e.target.restaurantphone.value
    let newResObject = {name: newResName, hours: newResHours, location: newResLocation, phone: newResPhone}

    this.adapter.postRestaurant(newResObject).then((newRes)=> {
      newResObject = new Restaurant(newRes)
    document.getElementById('myModal').style.display = "none";
    document.querySelector('#restaurant-list').innerHTML += newResObject.renderLi()
    })

  }

  handleSpanClick(e){
    document.getElementById('myModal').style.display = "none";
  } // When the user clicks on <span> (x), close the modal for new Restaurant Form

  handleClickOutsideForm(e){
    if (e.target == document.getElementById('myModal')) {
          document.getElementById('myModal').style.display = "none";
    }
  }// When the user clicks anywhere outside of the modal, close it for new Restaurant Form

  handleNewMenuItemClick(e){
    if (e.target.className == "button addMenuItem"){
      let newMenuItemForm = document.querySelector(".new-menu-item-form");
      let menuItemModal = document.getElementById('myMenuItemModal');
      let restId = e.target.dataset.id
      newMenuItemForm.dataset.id = restId
      menuItemModal.style.display = "block";
    }
  }///displays new menu form modal

  handleSpanClickMenuItemModal(e){
    document.getElementById('myMenuItemModal').style.display = "none";
  } // When the user clicks on <span> (x), close the modal for new Menu Item Form

  handleClickOutsideMenuItemForm(e){
    if (e.target == document.getElementById('myMenuItemModal')) {
          document.getElementById('myMenuItemModal').style.display = "none";
    }
  }// When the user clicks anywhere outside of the modal, close it--- for new Menu form

  handleNewMenuItemFormSubmit(e){
    e.preventDefault()

    let newMenuItemName = e.target.menuitemname.value
    let newMenuItemPrice = e.target.menuitemprice.value
    let newMenuItemDescription = e.target.menuitemdescription.value
    let newMenuItemURL = e.target.menuitemimgurl.value
    let newMenuResId = parseInt(e.target.dataset.id)
    let restObj = Restaurant.findById(newMenuResId)
    let newMenuitemObject = {name: newMenuItemName, price: newMenuItemPrice, description: newMenuItemDescription, imgurl: newMenuItemURL, restaurant_id: newMenuResId}


    this.adapter.postMeal(newMenuitemObject).then((newMenuitem)=> {
      newMenuitemObject = new Meal(newMenuitem, restObj)
    document.getElementById('myMenuItemModal').style.display = "none";
    document.querySelector('#menu-list').innerHTML += newMenuitemObject.renderMLi()

    })
  }


} // end App class
