import React from 'react';
import "../css/MovieOnClick.css";

export default function MovieOnClick({ movie, setCardClicked, setReviewEvent }) {
  const handleBackgroundClick = () => {
    setCardClicked(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleReviewClick = () => {
    setCardClicked(false);
    setReviewEvent(true);
    console.log('You Want to write a review');
  }

  const stars = Math.round(movie.vote_average / 2); // Convert 10-point rating to 5-star scale

  return (
    <div className='background-box' onClick={handleBackgroundClick}>
      <div className="movie-onclick-content">
        <div
          className='foreground-box'
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}
          onClick={stopPropagation}
        >
          <h1>{movie.title}</h1>

          {/* ⭐️ Dynamic Rating */}
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <span key={index}>{index < stars ? '⭐️' : ''}</span>
            ))}
          </div>

          <p>{movie.overview}</p>
          <button onClick={handleReviewClick}>Write Review</button>
        </div>
      </div>
    </div>
  );
}
