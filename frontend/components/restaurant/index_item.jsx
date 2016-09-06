import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import StarRating from '../review/form';


const RestaurantIndexItem = ({restaurant, router}) => {
  let reviewKeys = Object.keys(restaurant.reviews);
  let lastReviewIndex = reviewKeys[reviewKeys.length-1];
  let link = `/restaurants/${restaurant.id}`;
  return (
    <div className="restaurant-index-item">
      <div className="restaurant-index-pic-container">
        <img className="restaurant-item-pic" src={restaurant.image_url}/>
      </div>
      <div className="restaurant-item-info">
        <Link to={link} className="restaurant-item-name">{restaurant.name}</Link>
        <div className="restaurant-item-rating">
          <StarRating vote={restaurant.average_rating}/>
        </div>
        <div className="restaurant-item-city">{restaurant.city}</div>
        <div className="restaurant-item-city">{restaurant.address}</div>
        <div className="review-container">
          <div className="reviewer-picture">
            <img src={restaurant.reviews[lastReviewIndex].pic}></img>
          </div>
          <div className="review">
            <p className="review-description">
              {`${restaurant.reviews[lastReviewIndex].description.slice(0, 185)}...`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(RestaurantIndexItem);
