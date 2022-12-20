import React from 'react'

function AltBanner() {
  return (
    <div className='alt__banner'>
        <div className='container'>
           <div className='alt__banner__wrapper'>
           <div className='alt__banner__wrapper__left'>
                <div className='alt__content'>
                    <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_shape-7.png' />
                </div>
                <div className='main__content'>
                    <img className='main__img' src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h1_pizza.png' />
                    <img className='alt__img' src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h2_50.png' />
                </div>
            </div>
            <div className='alt__banner__wrapper__right'>
                <div className='alt__content'>
                    <img className='img__one' src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h2_shape-4.png' />
                    <img className='img__two' src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h2_pizza-1.png' />
                </div>
                <div className='content__text'>
                    <h4 className='alt__title'>super<span>delicious</span></h4>
                    <h3 className='title'>pizza</h3>
                    <p className='description'>Feel Hunger! Order Your Favouriate Food.</p>
                </div>
            </div>
           </div>
        </div>
        <div className='img__bottom'>
                  <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h2_shape-5.png' />
        </div>
    </div>
  )
}

export default AltBanner