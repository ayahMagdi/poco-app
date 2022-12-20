import React from 'react'

function BannerInfo(props) {
  return (
    <div className={props.default == 'false' ? 'banner__info fullbanner' : 'banner__info'}>
        <div className='container'>
            <div className='content__wrapper'>
                <h4 className='alt__title'>We guarantee</h4>
                <h3 className='title'>30 Minutes Delivery!</h3>
                <p className='description'>If you’re having a meeting, working late at night and need an extra push. Let us know and we will be there</p>
                <button>make an order</button>
            </div>
        </div>
    </div>
  )
}

export default BannerInfo