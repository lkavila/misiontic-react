import React from 'react';

const GrowingSpinner = () => {
    return (
        <div
            className="spinner-grow text-secondary"
            role="status"
            style={{ width: '96px', height: '96px' }}
        >
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default GrowingSpinner;