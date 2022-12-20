import React from 'react'

function HotOffers() {
  return (
    <div className='hot__offers'>
        <div className='hot__offers__wrapper'>
            <h3 className='title'>join for hot offers</h3>
            <div className='hot__offers__input'>
                <input type="text" placeholder='enter email'/>
                <button>subscribe</button>
            </div>
            <p className='description'> I have read and agree to the Privacy Policy.</p>
        </div>
    </div>
  )
}

export default HotOffers