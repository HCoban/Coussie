import React from 'react';
import { Link } from 'react-router';
import RestaurantMap from './restaurant_map';
import ReviewShow from '../review/show';
import NewReviewFormContainer from '../review/form_container';
import ImageGallery from 'react-image-gallery';

class RestaurantShow extends React.Component {

  handlePlay() {
    this._imageGallery.play();
  }

  handlePause() {
    this._imageGallery.pause();
  }

  componentDidUpdate () {

  }

  render () {

    let restaurant = this.props.restaurant || {};

    let reviews = Object.keys(restaurant.reviews).map ((key) => {
      let review = restaurant.reviews[key];

      if (review.reviewer) {
        return (
          <ReviewShow key={key} reviewerpic={review.pic}
            reviewer={review.reviewer}
            vote={review.vote} description={review.description}/>
        );
      } else {
        return (
          <ReviewShow vote={review.vote} description={review.description}/>
        );
      }
    });

    debugger
    let image_urls = Object.keys(this.props.restaurant.images).map (key => {
      return this.props.restaurant.images[key];
    });

    let images = [];

    image_urls.forEach (image_url => {
      images.push({original: image_url.image_url, thumbnail: image_url.image_url});
    });

    let newReview;
    if (this.props.currentUser) {
      newReview = <NewReviewFormContainer restaurantId={this.props.restaurantId}/>;
    } else {
      newReview = "";
    }

    return (
      <div className="restaurant-show-container">
        <div className="restaurant-show">
          <div className="show-column-1">
            <RestaurantMap restaurant={restaurant}/>
            <div className="restaurant-info">
              <h2>{this.props.restaurant.name}</h2>
              <h3>{this.props.restaurant.address}</h3>
              <h3>{this.props.restaurant.telephone}</h3>
            </div>
          </div>
          <div className="show-column-2">
            <ImageGallery
              ref={i => this._imageGallery = i}
              items = {images}
              slideInterval={2000}
            />

          </div>
        </div>
        <div className="restaurant-review">
          <span>Reviews</span>
          {newReview}
          {reviews}
        </div>
      </div>
    );
  }
}

export default RestaurantShow;
