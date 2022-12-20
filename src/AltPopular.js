import React from 'react';
import HeadSection from './Headsection';
import Dish from './Dish';
import dataProducts from './dataProducts';
import Imgsbg from './Imgsbg';

function AltPopular() {

  const dishes = dataProducts.slice(0 , 4).map(el => 
    <Dish 
        img={el.img}
        hasDiscount={el.hasDiscount} 
        title={el.title}
        description={el.description}
        oldPrice ={el.oldPrice}
        price ={el.price}
        key = {el.id}
        id={el.id}
        default= 'true'
    /> 
  )

  return (
    <div className='alt__popular'>
        <div className='container'>
          <HeadSection title='popular dishes' />
          <div className='dishes__content'>
             {dishes}
          </div>
          <Imgsbg />
        </div>
    </div>
  )
}

export default AltPopular