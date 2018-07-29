import React from 'react';

const ItemContainer = ({ content, label }) => {
   return (
      <div className="item-container">
         <label> {label}</label>
         <span> {content} </span>
      </div>
   )
};

export default ItemContainer;
