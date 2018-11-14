document.addEventListener('DOMContentLoaded', () => {
  console.log('LOADED');
  const app = new App();
  app.attachEventListeners();
  app.adapter.fetchRestaurants().then(app.createRestaurants)
  // figure out serialization to link restaurants and meals
  // attach the fetchMeals to a then after the restaurants are created to ensure the restaurants exists prior to creating meals
  app.adapter.fetchMeals().then(app.createMeals);

}) //end DOMContentLoaded event listener
