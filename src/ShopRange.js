import React,{useState} from 'react'

function ShopRange() {

  return (
    <div className='shoprange'>
        <div className='title__parent'>
            <h3 className='title'>Filter by price</h3>
        </div>
        <div className='range__input'>
            <div className='range__slider'></div>
            <input className='rangeOne' type='range' min='0' max='20' step='1' />
            <input className='rangeTwo' type='range' min='0' max='20' step='1' />
        </div>
        <div className='range'>
            price: $<span className='min'>0</span>—$<span className='max'>0</span>
        </div>
    </div>
  )
}

export default ShopRange