import React, { useState, useEffect } from 'react';
import ReviewedMovieCard from '../Components/ReviewedMovieCard'; // make sure this component exists
import "../css/Favorites.css"; // reuse existing styling
import Review from '../Components/Review'; // make sure this component exists

export default function Reviews({ setMovie, setCardClicked, setReviewEvent }) {
  const [reviews, setReviews] = useState([]);

  // Load reviews from localStorage when component mounts
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(savedReviews);
  }, []);

  console.log({ setMovie, setCardClicked, setReviewEvent });
  const handleEditReview = (review) => {
    // Confirm what gets logged here:
    // console.log(review.movieID);

    setMovie(review.movieID);     // set the selected movie correctly
    setCardClicked(false);        // hide MovieOnClick if it's open
    setReviewEvent(true);         // open review modal for editing
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
