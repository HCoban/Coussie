import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ReviewShow extends React.Component {
  constructor({review, deleteReview, currentUser}) {
    super();
    this.currentUser = currentUser;
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteReview = deleteReview;
    this.review = review;
    this.state = {visible: true};
  }

  handleDelete(e) {
    e.preventDefault();
    this.deleteReview({reviewId: this.review.id});
    this.setState({["visible"]: false});
  }


  render() {
    if (this.state.visible) {
      let deleteButton = "";
      if (this.currentUser && this.review.reviewer === this.currentUser.username) {
        deleteButton = <input type="submit" value="Delete Review" className="delete-review" onClick={this.handleDelete} />;
      }

      return (
        <div className="review-show">
          <div className="reviewer-info">
            <ul className="reviewer-pic">
              <img src={this.review.pic}></img>
            </ul>
            <ul className="reviewer-details">
              <li>{this.review.reviewer}</li>
              <li>{this.review.reviewer.city}</li>
              <li className="date" >{this.review.time_distance}</li>
            </ul>
          </div>
          <div className="review-desc-container">
            <StarRatingComponent name="vote" editing={false} starCount={5} value={this.review.vote}/>
            <li className="description">{this.review.description}</li>
            {deleteButton}
          </div>
        </div>
      );
    } else {
      return null;
    }

  }
}


export default ReviewShow;
