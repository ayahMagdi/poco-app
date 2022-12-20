import React from 'react'

function CartContentRight(props) {
  return (
    <div className='cartContentRight'>
        <div className='promocode'>
            <div className='promocode__input'>
                <p className='promocode__p'>enter promo code</p>
                <input type="text" placeholder="promo code" />
                <button className='submit'>submit</button>
            </div>
            <div className='checkout__info'>
                <div className='shipping'>
                    <p>shipping cost</p>
                    <span>$50</span>
                </div>
                <div className='discount'>
                    <p>discount</p>
                    <span>-0</span>
                </div>
                <div className='tax'>
                    <p>tax</p>
                    <span>$10</span>
                </div>
                <div className='subtotal'>
                    <p>subtotal</p>
                    <span>${props.total}</span>
                </div>
            </div>
        </div>
        <button className='checkout'>checkout</button>
    </div>
  )
}

export default CartContentRight