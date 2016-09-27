import React from 'react';
import { Link } from 'react-router';
import RestaurantMap from './restaurant_map';
import ReviewShow from '../review/show';
import NewReviewFormContainer from '../review/form_container';
import ImageGallery from 'react-image-gallery';
import StarRatingComponent from 'react-star-rating-component';

class RestaurantShow extends React.Component {

  handlePlay() {
    this._imageGallery.play();
  }

  handlePause() {
    this._imageGallery.pause();
  }

  render () {

    let stars;
    if (this.props.restaurant.average_rating) {
      stars = <StarRatingComponent
          name="average-rating"
          editing={false}
          starCount={5}
          value={this.props.restaurant.average_rating}
          />;
    } else {
      stars = "";
    }

    let restaurant = this.props.restaurant || {};
    let reviewKeys = Object.keys(restaurant.reviews).sort ((a, b) => {
      return b - a;
    });

    let reviews = reviewKeys.map ((key) => {
      let review = restaurant.reviews[key];

      if (review.reviewer) {
        let currentUser;
        if (!this.props.currentUser) {
          currentUser = undefined
        } else {
          currentUser = this.props.currentUser
        }
        return (
          <ReviewShow key={key} deleteReview = {this.props.deleteReview} id={review.id} reviewerpic={review.pic}
            reviewer={review.reviewer} currentUser={currentUser}
            vote={review.vote} description={review.description}/>
        );
      } else {
        return (
          <ReviewShow key={key} vote={review.vote} description={review.description}/>
        );
      }
    });

    let mapAndMarker;
    if (restaurant.lat) {
      mapAndMarker = <RestaurantMap restaurant={restaurant}/>;
    } else {
      mapAndMarker = "";
    }

    let image_urls = Object.keys(this.props.restaurant.images).map (key => {
      return this.props.restaurant.images[key];
    });

    let images = [];

    image_urls.forEach (image_url => {
      images.push({original: image_url.image_url, thumbnail: image_url.image_url});
    });

    let newReview;
      newReview = <NewReviewFormContainer restaurantId={this.props.restaurantId}/>;
    let averageRating = this.props.restaurant.average_rating;

    let categoryTitle = `Ranked ${this.props.restaurant.ranking} in ${this.props.restaurant.category} Restaurants`;
    return (
      <div className="restaurant-show-container">
        <div className="restaurant-show">
          <div className="show-column-1">
            {mapAndMarker}
            <div className="restaurant-info">
              <h2>{this.props.restaurant.name}</h2>
              <div className="restaurant-stars">
                {stars}
              </div>
              <h3>{categoryTitle}</h3>
              <h3></h3>
              <h3>{this.props.restaurant.address}</h3>
              <h3>{this.props.restaurant.telephone}</h3>
            </div>
          </div>
          <div className="show-column-2">
            <ImageGallery
              ref={i => this._imageGallery = i}
              items = {images}
              slideInterval={2000}
              showBullets={true}
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
