import React from 'react';

const ReviewShow = ({review}) => (
  <div className="review-show">
    <div className="reviewer-info">
      <ul className="reviwer-pic">
        <img src={review.reviewer.picture_url}></img>
      </ul>
      <ul class="reviewer-details">
        <li>{review.reviewer.username}</li>
        <li>{review.reviewer.city}</li>
      </ul>
    </div>
    <div className="review-container">
      <li className="rating">{review.vote}</li>
      <li className="date">`Posted at: ${review.created_at.to_date}`</li>
      <li className="description">{review.description}</li>
    </div>
  </div>
);

export default ReviewShow;
