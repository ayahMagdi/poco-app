import React , {useEffect, useState} from 'react';
import dataProducts from './dataProducts';
import Dish from './Dish';
import {Link} from 'react-router-dom'

function FinalProducts(props) {


   const finalProducts = props.arr.map(function(el){
     return <Dish 
              img={el.img}
              hasDiscount={el.hasDiscount} 
              title={el.title}
              description={el.description}
              oldPrice ={el.oldPrice}
              price ={el.price}
              key = {el.id}
              id={el.id}
              rating={el.rate}
              default={props.default}
            />
   })


  return (
     <>
        <div className={props.defaultGrid == 'true' ? 'popular__dishes__products' : 'popular__dishes__products alt__grid'}>
             {finalProducts}
         </div>
         <Link to='/shop'>
           {finalProducts.length >= 8 && <button className={props.hide == 'true' ? 'show-more-button button__btn hide' : 'show-more-button button__btn'}>all products</button>}
        </Link>
     </>
  )
}

export default FinalProducts