import './Rated.css';
import React from 'react';


// export default function Rated() {
//     return (
//         <div className="grid-container">
//             <div className="grid-item">
//                 <img src={rate1} alt="Google Shopping" />
//                 <div className="grid-item" id="grid_data">
//                     <span>Google My Business</span><br />
//                     <p>Rated 4.8/5</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

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
