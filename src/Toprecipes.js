import React from 'react';
import dataProducts from './dataProducts';
import Topdish from './Topdish';
import Headsection from './Headsection';
import BlogBanner from './BlogBanner';

function Toprecipes() {

 const myData = dataProducts.filter(function(product){
    return product.rate >= 4
 })

 const topDishes = myData.slice(0 , 6).map(function(e){
    return <Topdish 
                  img={e.img} 
                  title={e.title} 
                  type={e.type} 
                  price={e.price} 
                  oldPrice= {e.oldPrice}
                  id={e.id}
                  show="true"
            />
 })

  return (
    <div className='toprecipes'>
        <div className='container'>
            <div className='toprecipes__wrapper'>
                <div className='toprecipes__dishes'>
                    <Headsection title="top recipes"/>
                    <div className='toprecipes__dishes__list'>
                        {topDishes}
                    </div>
                </div>
                <div className='toprecipes__info'>
                   <BlogBanner />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Toprecipes