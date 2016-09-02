class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.makers = [];
    this._createMarkerFromRestaurant = this._createMarkerFromRestaurant.bind(this);
    this._removeMarker = this.removeMarker.bind(this);
  }

  _createMarkerFromRestaurant (restaurant) {
    const pos = new google.maps.LatLng(restaurant.lat, restaurant.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      restaurantId: restaurant.id
    });
  }


  _removeMarker(marker) {
    marker.setMap(null);
  }
}

export default MarkerManager;
