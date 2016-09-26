import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ReviewShow extends React.Component {
  constructor({id, deleteReview, reviewerpic, reviewer, currentUser, city, vote, description}) {
    super();
    this.id = id;
    this.reviewerpic = reviewerpic;
    this.reviewer = reviewer;
    this.currentUser = currentUser;
    this.city = city;
    this.vote = vote;
    this.description = description;
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteReview = deleteReview;
  }

  handleDelete(e) {
    e.preventDefault();
    this.deleteReview({review: this.id});
  }

  render() {
    let deleteButton = "";
    if (this.currentUser && this.reviewer === this.currentUser) {
      deleteButton = <input type="submit" value="Delete Review" className="delete-review" onClick={this.handleDelete} />;
    }
    return (
      <div className="review-show">
        <div className="reviewer-info">
          <ul className="reviewer-pic">
            <img src={this.reviewerpic}></img>
          </ul>
          <ul className="reviewer-details">
            <li>{this.reviewer}</li>
            <li>{this.city}</li>
          </ul>
        </div>
        <div className="review-desc-container">
          <StarRatingComponent name="vote" editing={false} starCount={5} value={this.vote}/>
          <li className="description">{this.description}</li>
          {deleteButton}
        </div>
      </div>
    );
  }
}


export default ReviewShow;
