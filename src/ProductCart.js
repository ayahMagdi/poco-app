import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function ProductCart() {

    const [count , setCount] = useState(1);

    function decrease(){
        if(count < 2){
            return false
        }else{
            setCount(count - 1)
        }
    }

    function increase(){
        setCount(count + 1)
    }


  return (
    <div className='productCart'>
        <div className='number'>
            <button className='subtract' onClick={decrease}>-</button>
            <span>{count}</span>
            <button className='increase' onClick={increase}>+</button>
        </div>
        <div className='box'>
           <div className='cart'>
             <ShoppingBasketIcon />
              add to cart
           </div>
           <div className='wishlist'>
            <FavoriteIcon />
           </div>
        </div>
    </div>
  )
}

export default ProductCart