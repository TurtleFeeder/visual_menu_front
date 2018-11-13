document.addEventListener('DOMContentLoaded', () => {
  console.log('LOADED');
  const app = new App();
  app.attachEventListeners();
  app.adapter.fetchRestaurants().then(app.createRestaurants);
  app.adapter.fetchMeals().then(app.createMeals);

}) //end DOMContentLoaded event listener
