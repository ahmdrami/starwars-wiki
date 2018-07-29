import React from 'react';


const ItemDetail = ({ item, path }) => {
   return (
      <main>
         {!item ? (
            <h1 className="title"> { path === 'paths' ? 'Star Wars Resources' : path } </h1>
         ) : (
            <section>
               <span className="subtitle"> { path }</span>
               <h1 className="title">{ item.name || item.title }</h1>
               {Object.keys(item)
               .filter(filterKey => filterKey !== 'name' )
               .map((itemKey, i) => (
                  <div className="item-container" key={i}>
                     <label> {itemKey} </label>
                     <span> {item[itemKey]} </span>
                  </div>
               ))}
            </section>
         )}
      </main>
   );
};

export default ItemDetail;
