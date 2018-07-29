import React from 'react';
import ItemContainer from './ItemContainer';
import Colors from './Color';


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
                     
                  (itemKey.indexOf('color') > -1) ? (
                     <Colors key={i} colors={ item[itemKey]} label={itemKey}/>
                  ) : (
                     <ItemContainer key={i} content={item[itemKey]} label={itemKey}/>
                  )
               ))}
            </section>
         )}
      </main>
   );
};

export default ItemDetail;
