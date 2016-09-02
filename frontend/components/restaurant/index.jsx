import React from 'react';

class RestaurantIndex extends React.Component {
  constructor (props) {
    super(props);
  }
  render (){
    let restaurants = Object.keys(this.props.restaurants).map(key => {
      return (
        <li key={key}>{this.props.restaurants[key].name}</li>
      );
    });
    debugger
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
