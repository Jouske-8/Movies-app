import React from 'react';
import "../css/MovieCard.css"; // reuse the same styles

export default function ReviewedMovieCard({ movie, review, onEdit }) {
  if (!movie) return null;

  return (
    <div className="movie-card-wrapper">
      <div className="movie-card">
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
          <div className="review-details">
            <p><strong>Rating:</strong> <div className="rating">
              {[...Array(5)].map((_, index) => (
                <span key={index}>{index < review.rate ? '⭐️' : ''}</span>
              ))}
            </div></p>
            <p><strong>Comment:</strong> {review.comment}</p>
          </div>
          <button className="edit-review-btn" onClick={() => onEdit(review)}>
            ✏️ Edit Review
          </button>
        </div>
      </div>
    </div>
  );
}
