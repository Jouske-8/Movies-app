import React, { useState, useEffect } from 'react';
import "../css/MovieCard.css";

export default function MovieCard({ movie, onClick }) {
  const [alreadyFavorite, setAlreadyFavorite] = useState(false);

  // Check if this movie is already in favorites on initial render
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some(m => m.id === movie.id);
    setAlreadyFavorite(isFavorite);
  }, [movie.id]);

  function onClickFavorite(event) {
    event.stopPropagation();

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.find(m => m.id === movie.id);

    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter(m => m.id !== movie.id);
      setAlreadyFavorite(false);
      console.log("Movie removed from favorites");
    } else {
      updatedFavorites = [...favorites, movie];
      setAlreadyFavorite(true);
      console.log("Movie added to favorites");
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  return (
    <div className="movie-card-wrapper">
      <div className="movie-card" onClick={onClick}>
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="movie-overlay">
            <button className='favorite-btn' onClick={onClickFavorite}>
              {alreadyFavorite ? '❤️' : '🤍'}
            </button>
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
