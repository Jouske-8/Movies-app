import React, { useState } from 'react';

const StarRating = ({ maxStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (n) => {
    setRating(n);
    if (onRatingChange) onRatingChange(n);
  };

  return (
    <div style={{ fontSize: '2rem' }}>
      {[...Array(maxStars)].map((_, i) => (
        <span
          key={i}
          onClick={() => handleStarClick(i + 1)}
          style={{
            cursor: 'pointer',
            color: i < rating ? 'rgb(255, 255, 0)' : 'grey',
            transition: 'color 0.2s ease',
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
