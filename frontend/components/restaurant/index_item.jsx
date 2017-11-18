import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';


const RestaurantIndexItem = ({restaurant, router}) => {
  let link = `/restaurants/${restaurant.id}`;
  let reviewDescription;
  if (restaurant.lastReview.description.length > 180) {
    reviewDescription = `${restaurant.lastReview.description.slice(0, 185)}...`;
  } else {
    reviewDescription = restaurant.lastReview.description;
  }
  return (
    <div className="restaurant-index-item">
      <div className="restaurant-index-pic-container">
        <Link to={link}><img className="restaurant-item-pic" src={ restaurant.image_url} /></Link>

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
            <img src={restaurant.lastReview.picture}></img>
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
