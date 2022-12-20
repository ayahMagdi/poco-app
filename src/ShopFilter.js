import React from 'react';
import Categories from './Categories';
import SearchComponent from './SearchComponent';
import ShopRange from './ShopRange';
import BestDishes from './BestDishes';

function ShopFilter(props) {
  return (
    <div className='shopfilter'>
      <Categories burger={props.burger} 
                  pasta={props.pasta} 
                  pizza={props.pizza} 
                  drink={props.drink} 
                  desert={props.desert} 
                  setFilterProducts={props.setFilterProducts} 
      />
      <SearchComponent />
      <BestDishes />
    </div>
  )
}

export default ShopFilter