import React, { useState } from 'react';
import '../css/Review.css'; // ✅ Ensure this file contains your .movie-review-form styles
import StarRating from './StarRating';

export default function Review({ onSubmit, setReviewEvent, movie}) {
    const [rate, setRate] = useState(0);
    const handleBackgroundClick = () => {
        setReviewEvent(false);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const [reviewData, setReviewData] = useState({
        movieID: null,
        rate: 0,
        comment: '',
    });

    const handleChange = (e) => {
        setReviewData({ ...reviewData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // setReviewData({ ...reviewData, 'movieID': movie });
        onSubmit({ ...reviewData, movieID: movie });
        setReviewData({ movieID: null, rating: 0, comment: '' });
        setReviewEvent(false);
    };

    const handleRatingChange = (rating) => {
        // console.log('Selected rating:', rating);
        setRate(rating);
        setReviewData({ ...reviewData, 'rate': rating });
    };

    return (
        <div className='background-box' onClick={handleBackgroundClick}>

            <div
                onClick={(e) => e.stopPropagation()}
            >
                <form onSubmit={handleSubmit} className="movie-review-form">
                    <h2>Write a Review</h2>


                    <label>Rating (1-5)</label>
                    <StarRating onRatingChange={handleRatingChange} />
        
                    <label>Your Review</label>
                    <textarea
                        name="comment"
                        value={reviewData.comment}
                        onChange={handleChange}
                        placeholder="Share your thoughts..."
                    />

                    <button type="submit">Submit Review</button>
                </form>
            </div>
        </div>
    );
}
