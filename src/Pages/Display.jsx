import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import MovieOnClick from '../Components/MovieOnClick'
import "../css/MovieOnClick.css";
import Home from '../Pages/Home';
import Favorites from './Favorites';
import Review from '../Components/Review';
import Reviews from './Reviews';

export default function Display() {

  const [movie, setMovie] = useState(null);
  const [cardClicked, setCardClicked] = useState(false);
  const [reviewEvent, setReviewEvent] = useState(false);
  const [reviews, setReviews] = useState([]);
  const location = useLocation().pathname;

const handleReviewSubmit = (review) => {
  // Retrieve existing reviews from localStorage
  const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

  // Check if a review for this movie already exists
  const existingIndex = storedReviews.findIndex(
    r => r.movieID.id === review.movieID.id
  );

  let updatedStoredReviews;

  if (existingIndex !== -1) {
    // Replace existing review
    storedReviews[existingIndex] = review;
    updatedStoredReviews = storedReviews;
    // console.log("Updated review for:", review.movieID.title);
  } else {
    // Add new review
    updatedStoredReviews = [...storedReviews, review];
    // console.log("Added new review for:", review.movieID.title);
  }

  // Save to localStorage
  localStorage.setItem("reviews", JSON.stringify(updatedStoredReviews));

  // Update state
  // localStorage.removeItem("reviews"); 
  // console.log(updatedStoredReviews);
  setReviews(updatedStoredReviews);
};





  // console.log("reviewEvent:", reviewEvent);
  return (
    <div>
      {location === '/favorites' ? (
        <Favorites setMovie={setMovie} setCardClicked={setCardClicked} />
      ) : location === '/reviews' ? (
        <Reviews setMovie={setMovie} setCardClicked={setCardClicked} setReviewEvent={setReviewEvent} />
      ) : (
        <Home setMovie={setMovie} setCardClicked={setCardClicked} />
      )}


      {reviewEvent && <Review onSubmit={handleReviewSubmit} setReviewEvent={setReviewEvent} movie={movie} />}

      {cardClicked && <MovieOnClick movie={movie} setCardClicked={setCardClicked} setReviewEvent={setReviewEvent} />}
    </div>
  )
}
