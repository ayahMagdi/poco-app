import React, {useState} from 'react';
import {useStateValue} from './stateProvider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import Quantity from './Quantity';
import Rating from './Rating';

function CartContentLeft() {

  const [{basket , wishlist}, dispatch] = useStateValue()


  return (
    <div className='cartContentLeft'>
      {basket.map(e => (
        <div className='cartContentLeft__products' key={e.id}>
            <div className='image'>
                <img src={e.img} />
            </div>
            <div className='info'>
                <div className='product__info'>
                    <h2>{e.title}</h2>
                    {e.rate && <Rating rating={e.rate} />}
                    <p>{e.description}</p>
                    <p className='price'><span className='current__price'>${e.price}</span>
                        {e.hasDiscount && <span className='old__price'>${e.oldPrice}</span>}
                    </p>
                </div>
                <div className='shopping__info'>
                    <div className='productCart'>
                        <Quantity />
                        <div className='wishlist' onClick={() => dispatch({
                          type: 'ADD_TO_WISHLIST',
                          wish: {
                            id: e.id,
                            img: e.img,
                            title: e.title,
                            description: e.description,
                            price: e.price,
                            hasDiscount: e.hasDiscount,
                            rate: e.rate,
                            oldPrice: e.oldPrice
                           }
                        })}>
                           <FavoriteIcon />
                        </div>
                        <div className='remove' onClick={() => dispatch({
                            type: 'REMOVE_FROM_BASKET',
                            item: e
                        })}>
                        <DeleteIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default CartContentLeft