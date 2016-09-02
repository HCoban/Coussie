import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';


const RestaurantIndexItem = ({restaurant, router}) => {
  let stars = [];
  for (var i = 0; i < restaurant.average_rating; i++) {
    stars.push("*");
  }
  let link = `/restaurants/${restaurant.id}`;
  return (
    <div className="restaurant-index-item">
      <div className="restaurant-index-pic-container">
        <img className="restaurant-item-pic" src={restaurant.image_url}/>
      </div>
      <div className="restaurant-item-info">
        <Link to={link} className="restaurant-item-name">{restaurant.name}</Link>
        <div className="restaurant-item-rating">
          {stars}
        </div>
        <div className="restaurant-item-city">{restaurant.city}</div>
        <div className="restaurant-item-city">{restaurant.address}</div>
        <div className="review-container">
          <div className="reviewer-picture">picture</div>
          <div className="review">placeholder for review</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(RestaurantIndexItem);
