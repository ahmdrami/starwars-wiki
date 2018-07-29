import React from 'react';
import './Spinner.css';

const Spinner = () => {
   return (
      <div className="spinner-container">
         <div className="spinner">
            <svg className="circular" viewBox="25 25 50 50">
               <circle
                  className="path"
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  strokeWidth="3"
                  strokeMiterlimit="10"
               />
            </svg>
         </div>
      </div>
   );
};


export default Spinner;