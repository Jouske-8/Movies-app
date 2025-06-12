import React from 'react';
import { useLocation } from 'react-router-dom';
import MovieOnClick from '../Components/MovieOnClick';
import "../css/MovieOnClick.css";
import Home from '../Pages/Home';
import Favorites from './Favorites';
import Review from '../Components/Review';
import Reviews from './Reviews';

export default function Display({
  movie, setMovie,
  cardClicked, setCardClicked,
  reviewEvent, setReviewEvent,
  reviews, setReviews
}) {
  const location = useLocation().pathname;

  const handleReviewSubmit = (review) => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

    const existingIndex = storedReviews.findIndex(
      r => r.movieID.id === review.movieID.id
    );

    let updatedStoredReviews;

    if (existingIndex !== -1) {
      storedReviews[existingIndex] = review;
      updatedStoredReviews = storedReviews;
    } else {
      updatedStoredReviews = [...storedReviews, review];
    }

    localStorage.setItem("reviews", JSON.stringify(updatedStoredReviews));
    setReviews(updatedStoredReviews);
  };

  return (
    <div>
      {location === '/favorites' ? (
        <Favorites setMovie={setMovie} setCardClicked={setCardClicked} />
      ) : location === '/reviews' ? (
        <Reviews setMovie={setMovie} setCardClicked={setCardClicked} setReviewEvent={setReviewEvent} />
      ) : (
        <Home setMovie={setMovie} setCardClicked={setCardClicked} />
      )}

      {reviewEvent && (
        <Review
          onSubmit={handleReviewSubmit}
          setReviewEvent={setReviewEvent}
          movie={movie}
        />
      )}

      {cardClicked && (
        <MovieOnClick
          movie={movie}
          setCardClicked={setCardClicked}
          setReviewEvent={setReviewEvent}
        />
      )}
    </div>
  );
}
