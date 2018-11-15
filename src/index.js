document.addEventListener('DOMContentLoaded', () => {
  console.log('LOADED');
  const app = new App();
  app.attachEventListeners();
  app.adapter.fetchRestaurants().then(app.createRestaurants)
  // .then(app.adapter.fetchReviews().then(app.createReviews))
  
  // .then(app.adapter.fetchMeals().then(app.createMeals)); - this is no longer needed since meal instances are created in the restaurant constructor.
  // figure out serialization to link restaurants and meals
  // attach the fetchMeals to a then after the restaurants are created to ensure the restaurants exists prior to creating meals


}) //end DOMContentLoaded event listener
