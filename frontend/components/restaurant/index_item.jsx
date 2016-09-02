import React from 'react';
import { withRouter } from 'react-router';

const RestaurantIndexItem = ({restaurant, router}) => {
  let stars = [];
  for (var i = 0; i < restaurant.average_rating; i++) {
    stars.push("*");
  }

  return (
    <li className="restaurant-index-item">
      <div className="restaurant-index-pic-container">
        <img className="restaurant-item-pic" src="http://images.clipartpanda.com/restaurant-clipart-restaurant-building-clipart-great.jpg"/>
      </div>
      <div className="restaurant-item-info">
        <div className="restaurant-item-name">{restaurant.name}</div>
        <div className="restaurant-item-rating">
          {stars}
        </div>
        <div className="restaurant-item-city">{restaurant.city}</div>
      </div>
    </li>
  );
};

export default withRouter(RestaurantIndexItem);
