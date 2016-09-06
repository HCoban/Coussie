import React from 'react';
import { hashHistory, withRouter } from 'react-router';
import StarRating from './star_rating';

class NewReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vote: 3, description: ""};
    this.navigateToRestaurantShow = this.navigateToRestaurantShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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
            <StarRating vote={this.state.vote} editing={true}/>
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
