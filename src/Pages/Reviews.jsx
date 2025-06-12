import React, { useState, useEffect } from 'react';
import ReviewedMovieCard from '../Components/ReviewedMovieCard'; // make sure this component exists
import "../css/Favorites.css"; // reuse existing styling

export default function Reviews({ setMovie, setCardClicked, setReviewEvent }) {
  const [reviews, setReviews] = useState([]);

  // Load reviews from localStorage when component mounts
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(savedReviews);
  }, []);

  const handleEditReview = (review) => {
    // Trigger modal or form to edit this review
    setMovie(review.movie);           // set the selected movie
    setCardClicked(true);             // show the modal/card
    setReviewEvent(true);             // trigger the review editor
  };

  if (reviews.length === 0) {
    return (
      <div className='favorites-empty'>
        <h2>No Reviewed Movies</h2>
        <p>Once you review a movie, it will appear here</p>
      </div>
    );
  }
  console.log(reviews.length);
  return (
    <div className="movies-grid">
      {reviews.map((review, index) => (
        <ReviewedMovieCard
          key={index}
          movie={review.movieID}
          review={review}
          onEdit={handleEditReview}
        />
      ))}
    </div>
  );
}
