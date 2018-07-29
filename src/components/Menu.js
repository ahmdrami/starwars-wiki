import React from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import Spinner from './Spinner';
const Menu = ({ isFetching, menu, onClick }) => {
   const root = Array.isArray(menu);
   return (
      <aside>
         { isFetching ? (
             <Spinner />
         ) : !root ? (
            Object.keys(menu).map((link, i) => (
               <button className="button" key={i} onClick={() => onClick(link)}>
                  {link}
               </button>
            ))
         ) : (
            <div className="child-nav">
               <button className="button" onClick={() => onClick('back')}>
                  <img src={ arrowLeft } alt="Back button"/>
               </button>
               { menu.map((link, i) => (
                  <button
                     className="button"
                     key={i}
                     onClick={() => onClick(link)}
                  >
                     {link.name ? link.name : link.title}
                  </button>
               ))}

              
            </div>
         )}
      </aside>
   );
};

export default Menu;
