class Review {
  constructor(data, mealObj) {
    this.id = data.id;
    this.username = data.username;
    this.content = data.content;
    this.rating= data.rating;
    this.meal = mealObj;
    Review.all.push(this);
  } // end Review constructor fn

  static findById(id) {
    return this.all.find(review => review.id === id);
  } // end findById class helper fn

  static renderRevs(array) {
    return array.map((rev) => {
      return rev.renderRLi();
    }).join('')
  } // end renderRevs class fn

  renderRLi() {
    return `<li data-Rid="${this.id}">
                <h4 data-content="username">${this.username}</h4>
                <p data-content="content">${this.content}</p>
                <p data-content="rating">${this.generateRatingStars()}</p>
            </li>`;
  } // end renderRLi fn

  oneUncheckedStar() {
    return `<span class="fa fa-star"></span>`;
  } // end unchecked rating star helper fn

  oneCheckedStar() {
    return `<span class="fa fa-star checked"></span>`;
  } // end checked rating star helper fn

  generateRatingStars() {
    let starHTMLarray = [];
    let fullStar = 5;
    let unchecked = 0;

    switch (this.rating) {
      case 1:
        unchecked = fullStar - 1;
        starHTMLarray.push(this.oneCheckedStar());
        for (let i = 0; i < unchecked; i++) {starHTMLarray.push(this.oneUncheckedStar());}
        return starHTMLarray.join('');
      case 2:
        unchecked = fullStar - 2;
        for (let i = 0; i < 2; i++) {starHTMLarray.push(this.oneCheckedStar());}
        for (let i = 0; i < unchecked; i++) {starHTMLarray.push(this.oneUncheckedStar());}
        return starHTMLarray.join('');
      case 3:
        unchecked = fullStar - 3;
        for (let i = 0; i < 3; i++) {starHTMLarray.push(this.oneCheckedStar());}
        for (let i = 0; i < unchecked; i++) {starHTMLarray.push(this.oneUncheckedStar());}
        return starHTMLarray.join('');
      case 4:
        unchecked = fullStar - 4;
        for (let i = 0; i < 4; i++) {starHTMLarray.push(this.oneCheckedStar());}
        for (let i = 0; i < unchecked; i++) {starHTMLarray.push(this.oneUncheckedStar());}
        return starHTMLarray.join('');
      case 5:
        for (let i = 0; i < 5; i++) {starHTMLarray.push(this.oneCheckedStar());}
        return starHTMLarray.join('');
    } // end switch stmt
  } // end generateRatingStars fn

} //end Review class

Review.all = [];
