import React from 'react';
import './MovieRating.css'

const MovieRating = ({ rating }) => {
    const renderStars = () => {
    rating = rating / 2
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating - 0.5) {
            stars.push(<span key={i} className="star filled"><i class="bi bi-star-fill"></i></span>);
        } else if (i <= rating) {
            stars.push(<span key={i} className="star half"><i class="bi bi-star-half"></i></span>);
        } else {
            stars.push(<span key={i} className="star"><i class="bi bi-star"></i></span>);
        }
    }
    return stars;
    };

    return (
        <div className="movie-rating">
            {renderStars()}
        </div>
        );
};

export default MovieRating;