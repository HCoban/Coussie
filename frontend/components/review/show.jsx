import React from 'react';

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
        <li className="rating">{vote}</li>
        <li className="description">{description}</li>
      </div>
    </div>
  );
};


export default ReviewShow;
