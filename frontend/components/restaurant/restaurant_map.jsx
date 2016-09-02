import React from 'react';
import MarkerManager from '../../util/marker_manager';

class RestaurantMap extends React.Component {
  componentDidMount (){
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener(this.map, 'idle', () => {
      console.log('map state changed'); //for testing
    });
  }

  componentDidUpdate () {
    this.markerManager.updateMarkers(this.props.benches);
  }

  render () {
    return (
      <div id="map-container" ref="map">Map</div>
    );
  }
}

export default RestaurantMap;
