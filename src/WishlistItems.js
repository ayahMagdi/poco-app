import React from 'react';
import {useStateValue} from './stateProvider'

function WishlistItems() {
 
const [{basket , wishlist}, dispatch] = useStateValue()

const currentDate = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = months[currentDate.getMonth()]
const date = `${monthName} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
     <div className='wishlist__container'>
     <div className='content'>

     {wishlist.map(el => (
            <div className='wishlist__product' key={el.id}>
                <div className='wishlist__product__info'>
                    <div className='image'>
                        <img src={el.img} alt="dish-img" />
                    </div>
                    <div className='info'>
                        <h3 className='title'>{el.title}</h3>
                        <p className='price'>
                            {el.hasDiscount && <span className='old__price'>${el.oldPrice}</span>}
                            ${el.price}
                        </p>
                        <p className='date'>{date}</p>
                    </div>
                </div>
                <div className='wishlist__product__cart'>
                  <p className='in__stock'>in stock</p>
                  <p className='cart' onClick={() => {
                        dispatch({
                         type: 'ADD_TO_BASKET',
                         item: {
                             id: el.id,
                             img: el.img,
                             title: el.title,
                             description: el.description,
                             price: el.price,
                             hasDiscount: el.hasDiscount,
                             rate: el.rate,
                             oldPrice: el.oldPrice
                         }
                        })
                  }}>add to cart</p>
                </div>
            </div>
        ))}
     </div>
     <div className='wishlist__social'>
            <div className='social'>
                    <p>Share on:</p>
                    <span>facebook</span>
                    <span>twitter</span>
                    <span>pinterest</span>
                    <span>mail</span>
                </div>
            </div>
     </div>
  )
}

export default WishlistItems