import './Rated.css';
import React from 'react';
export default function Rated(props) {
    const { imageSrc, spanText, paragraphText } = props;

    return (
        <div className="grid-container">
            <div className="grid-item">
                <img src={imageSrc} alt={spanText} />
                <div className="grid-item" id="grid_data">
                    <span>{spanText}</span><br />
                    <p>{paragraphText}</p>
                </div>
            </div>
        </div>
    );
} 
