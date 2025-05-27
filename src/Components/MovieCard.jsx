import React from 'react';
import "../css/MovieCard.css";

export default function MovieCard({ movie, onClick }) {
  function onClickFavorite(event) {
  event.stopPropagation();

  // Get favorites from localStorage or start with empty array
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Check if movie is already in favorites
  const alreadyFavorite = favorites.find(m => m.id === movie.id);

  let updatedFavorites;
  if (alreadyFavorite) {
    // Remove movie from favorites
    updatedFavorites = favorites.filter(m => m.id !== movie.id);
    console.log("Movie removed from favorites");
  } else {
    // Add movie to favorites
    updatedFavorites = [...favorites, movie];
    console.log("Movie added to favorites");
  }

  // Save updated favorites back to localStorage
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
}


  return (
    <div className="movie-card-wrapper">
      <div className="movie-card" onClick={onClick}>
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="movie-overlay">
            <button className='favorite-btn' onClick={onClickFavorite}>♥</button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </div>
  );
}
