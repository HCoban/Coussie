import React from 'react';
import { Link } from 'react-router';
import RestaurantMap from './restaurant_map';
import ReviewShow from '../review/show';
import NewReviewFormContainer from '../review/form_container';
import ImageGallery from 'react-image-gallery';
import StarRatingComponent from 'react-star-rating-component';
import { Button } from 'react-bootstrap';

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
  }

  handlePlay() {
    this._imageGallery.play();
  }

  handlePause() {
    this._imageGallery.pause();
  }

  componentDidMount() {
    this.props.requestSingleRestaurant(this.props.params.restaurantId);
    this.loadMoreReviews()
  }

  renderRestaurantInfo() {
    const { restaurant } = this.props;
    const stars = restaurant.average_rating
    ? <StarRatingComponent
      name="average-rating"
      editing={false}
      starCount={5}
      value={restaurant.average_rating}
    />
    : null;

    return (
      <div className="restaurant-info">
        <h2>{restaurant.name}</h2>
        <div className="restaurant-stars">
          {stars}
        </div>
        {this.renderRanking()}
        <h3>{restaurant.address}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.telephone}</h3>
      </div>
    );
  }

  renderReviews() {
    const { reviews, deleteReview, currentUser, restaurant } = this.props;
    if (!reviews) {
      return null;
    }

    return (
      <div className="restaurant-review">
        <span>Reviews</span>
        <NewReviewFormContainer restaurantId={restaurant.id}/>
        { reviews.map ((review, key) => {
            return (
              <ReviewShow
                key={key}
                deleteReview ={deleteReview}
                currentUser={currentUser}
                review={review}
              />
            );
          })
        }
        <Button onClick={this.loadMoreReviews} bsStyle="primary">Load More</Button>
      </div>
    );
  }

  renderRanking() {
    const { restaurant } = this.props;
    if (!restaurant || !restaurant.ranking) {
      return null;
    }

    const text = `Ranked ${restaurant.ranking} in ${restaurant.category} Restaurants`;
    return (
      <h3>
        {text}
      </h3>
    );
  }

  renderImages() {
    const { restaurant } = this.props;
    if (!restaurant || !restaurant.images) {
      return null;
    }

    const images =
      Object.keys(restaurant.images).map (key => {
        let image = restaurant.images[key];
        return {
          original: image.image_url,
          thumbnail: image.image_url
        };
      });

    return (
      <ImageGallery
        ref={i => this._imageGallery = i}
        items = {images}
        slideInterval={2000}
        showBullets={true}
      />
    );
  }

  render () {
    const {
      restaurant
    } = this.props;

    const mapAndMarker = restaurant.lat
      ? <RestaurantMap restaurant={restaurant}/>
      : null;

    return (
      <div className="restaurant-show-container">
        <div className="restaurant-show">
          <div className="show-column-1">
            {mapAndMarker}
            {this.renderRestaurantInfo()}
          </div>
          <div className="show-column-2">
          {this.renderImages()}   
          </div>
        </div>
        {this.renderReviews()}
      </div>
    );
  }

  loadMoreReviews() {
    let currentPage = this.props.currentPage;
    this.props.requestMoreReviews(this.props.params.restaurantId, currentPage)
  }
}

export default RestaurantShow;
