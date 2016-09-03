import React from 'react';
import { Link } from 'react-router';
import RestaurantMap from './restaurant_map';
import ReviewShow from '../review/show';

class RestaurantShow extends React.Component {
  componentDidMount () {
    debugger
  }
  render () {
    let restaurant = this.props.restaurant;
    let reviews;
    if (this.props.restaurant.reviews) {
      reviews = <ReviewShow review={this.props.restaurant.review}/>;
    } else {
      reviews = "";
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
            <img src={this.props.restaurant.image_url}></img>
            <img src={this.props.restaurant.image_url}></img>
            <img src={this.props.restaurant.image_url}></img>
            <img src={this.props.restaurant.image_url}></img>
            <img src={this.props.restaurant.image_url}></img>
            <img src={this.props.restaurant.image_url}></img>
            <img src={this.props.restaurant.image_url}></img>
            <img src={this.props.restaurant.image_url}></img>
          </div>
        </div>
        <div className="restaurant-review">
          <span>Reviews</span>
          {reviews}
        </div>
      </div>
    );
  }
}

export default RestaurantShow;
