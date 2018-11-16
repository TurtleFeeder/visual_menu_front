document.addEventListener('DOMContentLoaded', () => {
  console.log('LOADED');
  const app = new App();
  app.attachEventListeners();
  app.adapter.fetchRestaurants().then(app.createRestaurants)
  // the JSON data returned by the fetch provides nested array of meals and a nested array of reviews for each meal.
    // the restaurant constructor creates new instances of meals
    // the meal constructor creates new instances of reviews

}) //end DOMContentLoaded event listener
