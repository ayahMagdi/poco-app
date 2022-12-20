import React from 'react'

function Section() {
  return (
    <div className='section'>
        <div className='container'>
            <div className='section__wrapper'>
                <div className='section__wrapper__left'>
                    <div className='section__sale'>
                       <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/vector6-h3.png' />
                    </div>
                    <div className='section__content'>
                       <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h2_shape-2.png' />
                    </div>
                </div>
                <div className='section__wrapper__right'>
                    <h4 className='alt__title'>about our food</h4>
                    <h3 className='title'>From Texas with American Love</h3>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button>order now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section