import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';


const RestaurantIndexItem = ({restaurant, router}) => {
  let reviewKeys = Object.keys(restaurant.reviews);
  let lastReviewIndex = reviewKeys[reviewKeys.length-1];
  let link = `/restaurants/${restaurant.id}`;
  let mainPic;
  if (restaurant.images) {
    let key = Object.keys(restaurant.images)[0];
    mainPic = restaurant.images[key].image_url;
  } else {
    mainPic = undefined;
  }

  let reviewDescription;
  if (restaurant.reviews[lastReviewIndex].description.length > 180) {
    reviewDescription = `${restaurant.reviews[lastReviewIndex].description.slice(0, 185)}...`;
  } else {
    reviewDescription = restaurant.reviews[lastReviewIndex].description;
  }
  return (
    <div className="restaurant-index-item">
      <div className="restaurant-index-pic-container">
        <Link to={link}><img className="restaurant-item-pic" src={ mainPic || restaurant.image_url} /></Link>

      </div>
      <div className="restaurant-item-info">
        <Link to={link} className="restaurant-item-name">{restaurant.name}</Link>
        <div className="restaurant-item-rating">
          <StarRatingComponent name="vote" editing={false} value={restaurant.average_rating}/>
        </div>
        <div className="restaurant-item-city">{restaurant.city}</div>
        <div className="restaurant-item-city">{restaurant.address}</div>
        <div className="review-container">
          <div className="reviewer-picture">
            <img src={restaurant.reviews[lastReviewIndex].pic}></img>
          </div>
          <div className="review">
            <p className="review-description">
              {reviewDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(RestaurantIndexItem);
