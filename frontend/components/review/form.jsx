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
    this.setState({vote: 3, description: ""});
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
    if (name === "newVote") {
      this.setState({
        "vote": nextValue
      });
    }
  }

  render() {
    let reviewerPic;
    let reviewerDetails;
    let star;
    let description;
    let submit;

    if (this.props.currentUser) {
      reviewerPic = <img src={this.props.currentUser.picture_url}></img>;
      reviewerDetails = (
        <ul className="reviewer-details">
        <li>{this.props.currentUser.username}</li>
        <li>{this.props.currentUser.city}</li>
        </ul>
      );
      star = <StarRatingComponent name="newVote" value={this.state.vote} editing={true} onStarClick={this.onStarClick}/>;
      description = <textarea onChange={this.update("description")} value={this.state.description} cols="55" rows="10" placeholder="Please write your review here" className="input-description"></textarea>;
      submit = <input className="new-review-submit pointer" type="submit" value="Submit"></input>;
    } else {
      reviewerPic = <img src="https://res.cloudinary.com/dguiepgvw/image/upload/v1472687944/noun_138589_cc_rsfmug.png"></img>;
      reviewerDetails = "";
      star = <StarRatingComponent name="newVote" value={3} editing={false} />;
      description = <textarea value="" cols="55" rows="5" placeholder="Log in to write your first review" className="input-description" readOnly></textarea>;
      submit = "";
    }
    return (
      <div className="review-show">
        <div className="reviewer-info">
          <ul className="reviewer-pic">
            {reviewerPic}
          </ul>
          {reviewerDetails}
        </div>
        <div className="review-desc-container">
          <form className="-new-review-form" onSubmit={this.handleSubmit}>
            {star}
            <li className="description">
              {description}
            </li>
            {submit}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(NewReviewForm);
