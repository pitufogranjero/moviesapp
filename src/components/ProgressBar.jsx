import React from 'react';
import './ProgressBar.css'

export const ProgressBar = ({ progress }) => {
    return (
    <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
        {progress}%
        </div>
    </div>
    );
};