import React from 'react';
import RestaurantIndexItem from './index_item';

class RestaurantIndex extends React.Component {
  constructor (props) {
    super(props);
  }
  render (){
    let restaurants = Object.keys(this.props.restaurants).map(key => {
      return (
        <RestaurantIndexItem restaurant={this.props.restaurants[key]} />
      );
    });
    return (
      <section className="restaurant-index">
        <ul>
          {restaurants}
        </ul>
      </section>
    );
  }
}

export default RestaurantIndex;
