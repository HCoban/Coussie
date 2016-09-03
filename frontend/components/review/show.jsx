import React from 'react';

const ReviewShow = ({review}) => (
  <div className="review-show">
    <div className="reviewer-info">
      <ul className="reviwer-pic">
        <img src={review.reviewer.picture_url}></img>
      </ul>
      <ul className="reviewer-details">
        <li>{review.reviewer.username}</li>
        <li>{review.reviewer.city}</li>
      </ul>
    </div>
    <div className="review-desc-container">
      <li className="rating">{review.info.vote}</li>
      <li className="description">{review.info.description}</li>
    </div>
  </div>
);

export default ReviewShow;
