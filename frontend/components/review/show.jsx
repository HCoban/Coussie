import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const ReviewShow = ({reviewerpic, reviewer, city, vote, description}) => {
  return (
    <div className="review-show">
      <div className="reviewer-info">
        <ul className="reviewer-pic">
          <img src={reviewerpic}></img>
        </ul>
        <ul className="reviewer-details">
          <li>{reviewer}</li>
          <li>{city}</li>
        </ul>
      </div>
      <div className="review-desc-container">
        <StarRatingComponent name="vote" editing={false} starCount={5} value={vote}/>
        <li className="description">{description}</li>
      </div>
    </div>
  );
};


export default ReviewShow;
