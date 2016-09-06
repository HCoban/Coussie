import React from 'react';
import { hashHistory, withRouter } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

class NewReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vote: 3, description: ""};
    this.navigateToRestaurantShow = this.navigateToRestaurantShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview({review: {vote: this.state.vote, description: this.state.description, restaurant_id: this.props.restaurantId}});
    this.navigateToRestaurantShow();
  }

  navigateToRestaurantShow() {
    this.setState({
      ["description"]: ""
    });
    const restaurantUrl = `/restaurants/${this.props.restaurantId}`;
    this.props.router.push(restaurantUrl);
  }

  update(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({
      "vote": nextValue
    });
  }

  render() {
    return (
      <div className="review-show">
        <div className="reviewer-info">
          <ul className="reviewer-pic">
            <img src={this.props.currentUser.picture_url}></img>
          </ul>
          <ul className="reviewer-details">
            <li>{this.props.currentUser.username}</li>
            <li>{this.props.currentUser.city}</li>
          </ul>
        </div>
        <div className="review-desc-container">
          <form className="-new-review-form" onSubmit={this.handleSubmit}>
            <StarRatingComponent name="vote" value={this.state.vote} editing={true} onStarClick={this.onStarClick}/>
            <li className="description">
              <textarea onChange={this.update("description")} value={this.state.description} cols="55" rows="10" placeholder="your review here" className="input-description"></textarea>
            </li>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(NewReviewForm);
