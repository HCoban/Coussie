class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.makers = [];
    this.createMarkerFromRestaurant = this.createMarkerFromRestaurant.bind(this);
  }

  createMarkerFromRestaurant (restaurant) {
    const pos = new google.maps.LatLng({lat: restaurant.lat, lng: restaurant.lng});
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      title: restaurant.name
    });
  }


}

export default MarkerManager;
