import React, { useState, useEffect } from 'react';
import MovieCard from '../Components/MovieCard'; // import your MovieCard component
import "../css/Favorites.css";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when component mounts
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // You can define openMovieModal or pass it as a prop if needed
  function openMovieModal(movie) {
    alert(`Open modal for ${movie.title}`); // placeholder for actual modal logic
  }

  if (favorites.length === 0) {
    return (
      <div className='favorites-empty'>
        <h2>No Favorite Movies</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
      </div>
    );
  }

  return (
    <div className="movies-grid">
      {favorites.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => openMovieModal(movie)}
        />
      ))}
    </div>
  );
}
