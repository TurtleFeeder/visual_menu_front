class Adapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1';
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
  }

  fetchRestaurants() {
      return this.get(`${this.baseUrl}/restaurants`);
  } //end fetchRestaurants fn

  fetchMeals() {
      return this.get(`${this.baseUrl}/meals`);
  } //end fetchMeals fn

  fetchReviews() {
      return this.get(`${this.baseUrl}/reviews`);
  } //end fetchRestaurants fn


  get(url) {
    return fetch(url).then(res => res.json());
  } // end get helper fn

  post(url, body) {
    return fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    }).then(res => res.json());
  } // end post helper fn

  postRestaurant(body){
    return this.post(`${this.baseUrl}/restaurants`, body);
  } // end postRestaurant fn

  postMeal(body){
    return this.post(`${this.baseUrl}/meals`, body);
  }



} //end Adapter class
