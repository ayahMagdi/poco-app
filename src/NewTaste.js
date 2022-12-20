import React from 'react'

function NewTaste() {
  return (
    <div className='new__taste'>
        <div className='content__wrapper'>
            <div className='content__left'>
                <div className='overlay'></div>
                <div className='content'>
                   <h3 className='title'>Explore the new taste</h3>
                   <p className='description'>Enjoy our luscious dishes wherever you want</p>
                   <button>order now</button>
                </div>
            </div>
            <div className='content__right'>
              <div className='content__right__center'>
                    <div className='text__box'>
                        <div className='text__top'>
                            <h4 className='title'>Pizza Hut</h4>
                            <span className='price'>$4.95</span>
                        </div>
                        <div className='text__bottom'>
                            <p className='description'>Shrimp, Squid, Pineapple</p>
                        </div>
                    </div>
                    <div className='text__box'>
                        <div className='text__top'>
                            <h4 className='title'>Pepperoni Pizza</h4>
                            <span className='price'>$5.95</span>
                        </div>
                        <div className='text__bottom'>
                            <p className='description'>Shrimp, Squid, Pineapple</p>
                        </div>
                    </div>
                    <div className='text__box'>
                        <div className='text__top'>
                            <h4 className='title'>Apricot Chicken</h4>
                            <span className='price'>$5.65</span>
                        </div>
                        <div className='text__bottom'>
                            <p className='description'>Shrimp, Squid, Pineapple</p>
                        </div>
                    </div>
                    <div className='text__box'>
                        <div className='text__top'>
                            <h4 className='title'>Summer Pizza</h4>
                            <span className='price'>$8.95</span>
                        </div>
                        <div className='text__bottom'>
                            <p className='description'>Shrimp, Squid, Pineapple</p>
                        </div>
                    </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default NewTaste