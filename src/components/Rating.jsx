import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating, onRatingChange }) => {
  const [hover, setHover] = useState(null);

  const handleClick = (value) => {
    onRatingChange(value);
  };

  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={ratingValue}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            <i
              className="fa fa-star"
              style={{ color: ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" }}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            >
              ★
            </i>
          </label>
        );
      })}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired
};

export default Rating;
