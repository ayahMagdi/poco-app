import React from 'react';
import WishlistItems from './WishlistItems';
import {useStateValue} from './stateProvider';
import EmptyCart from './EmptyCart';

function WishlistContent() {

 const [{basket , wishlist}, dispatch] = useStateValue()

  return (
    <div className='wishlistContent'>
        <div className='container'>
            <div className='wishlistContent__wrapper'>
              {!wishlist.length ? (<EmptyCart type="wishlist" />) 
              : (<WishlistItems />)}
            </div>
        </div>
    </div>
  )
}

export default WishlistContent