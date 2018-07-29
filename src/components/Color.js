import React from 'react';

const Colors = ({ colors, label }) => {
   const arr = colors.split(',');
   return (
      <div className="item-container">
         <label> {label}</label>
         {arr.map((c, i) => (
            <span key={i} style={{ backgroundColor: c }}>
            </span>
         ))}
      </div>
   );
};

export default Colors;
