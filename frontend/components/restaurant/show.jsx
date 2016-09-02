import React from 'react';
import { Link } from 'react-router';
import RestaurantMap from './restaurant_map';
import RestaurantDetail from './detail';

class RestaurantShow extends React.Component {
  componentDidMount () {
  }
  render () {
    return (
      <div className="restaurant-show">
        <div className="show-column-1">
          <RestaurantMap />
          <div className="restaurant-info">
            <h2>{this.props.restaurant.name}</h2>
            <h3>{this.props.restaurant.address}</h3>
            <h3>{this.props.restaurant.telephone}</h3>
          </div>
        </div>
        <div className="show-column-2">
          <img src="http://images.clipartpanda.com/restaurant-clipart-restaurant-building-clipart-great.jpg"></img>
          <img src="http://images.clipartpanda.com/restaurant-clipart-restaurant-building-clipart-great.jpg"></img>
        </div>
      </div>
    );
  }
}

export default RestaurantShow;
