import React from 'react';
import './GenreCapsules.css'

export function GenreCapsules({ genres }) {
    return (
        <div className="genre-capsules">
        {genres.map((genre) => (
            <span key={genre.id} className="genre-capsule">
                {genre.name}
            </span>
        ))}
        </div>
    );
    }
