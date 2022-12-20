import React from 'react';
import dataProducts from './dataProducts';
import Rating from './Rating';
import {Link} from 'react-router-dom';

function BestDishes() {


  const myData = dataProducts.filter(function(product){
        return product.rate >= 4
  })
    


  return (
    <div className='bestdishes'>
       <h3 className='title'>best deals</h3>
       <div className='bestdishes__wrapper'>
         {myData.slice(0 , 3).map(e => 
            <Link to={`/${e.id}`}>
              <div className='best__container' key={e.id}>
                <div className='head'><img src={e.img} /></div>
                <div className='body'>
                  <Rating show="false" rating={e.rate} />
                  <h3 className='title'>{e.title}</h3>
                  <p className='price'>${e.price}</p>
                </div>
              </div>
            </Link>
         )}
       </div>
    </div>
  )
}

export default BestDishes