import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';
import '../css/Home.css';
import { searchMovies, getPopularMovies } from '../services/api';

export default function Home({setMovie, setCardClicked}) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);

    const handleMovieClick = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;
        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }

        setSearchQuery('');
    };

    const openMovieModal = (movie) => {
        setMovie(movie);
        setCardClicked(true);
    };

    return (
        <div className='home'>
            <form onSubmit={handleMovieClick} className='search-form'>
                <input
                    type="text"
                    placeholder='Search for a movie...'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className='search-btn'>&#x1F50D;</button>
            </form>

            {error && <div className='error-message'>{error}</div>}

            {loading ? (
                <div className='loading'>Loading...</div>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onClick={() => openMovieModal(movie)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
