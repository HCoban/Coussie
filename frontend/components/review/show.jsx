import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ReviewShow extends React.Component {
  constructor({review, deleteReview, currentUser}) {
    super();
    this.currentUser = currentUser;
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteReview = deleteReview;
    this.review = review;
  }

  handleDelete(e) {
    e.preventDefault();
    this.deleteReview({review: this.review.id});
  }

  render() {
    let deleteButton = "";
    if (this.currentUser && this.review.reviewer === this.currentUser.username) {
      deleteButton = <input type="submit" value="Delete Review" className="delete-review" onClick={this.handleDelete} />;
    }
    return (
      <div className="review-show">
        <div className="reviewer-info">
          <ul className="reviewer-pic">
            <img src={this.review.reviewerpic}></img>
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
  }
}


export default ReviewShow;
