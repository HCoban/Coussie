import React from 'react';
import MarkerManager from '../../util/marker_manager';

class RestaurantMap extends React.Component {
  componentDidMount (){
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: this.props.restaurant.lat || 37.791535, lng: this.props.restaurant.lng ||-122.392840}, zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener(this.map, 'idle', () => {
    });

    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.createMarkerFromRestaurant(this.props.restaurant);
  }

  // componentDidUpdate() {
  //   this.map.setCenter({lat: this.props.restaurant.lat, lng: this.props.restaurant.lng})
  // }


  render () {
    return (
      <div id="map-container" ref="map">Map</div>
    );
  }
}

export default RestaurantMap;
