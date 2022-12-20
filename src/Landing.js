import React from 'react'

function Landing() {
  return (
    <div className='landing'>
        <div className='container'>
            <div className='landing__wrapper'>
               <div className='landing__left'>
                  <div className='box__wrapper'>
                    <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h1_think.png' />
                    <h4 className='landing__left__title'>
                        <span className='discount'>get up to</span>
                        <span className='text-color'>50%</span>
                        off
                    </h4>
                  </div>
               </div>
               <div className='landing__right'>
                 <div className='landing__right__alt'>
                    <p>hot fresh</p>
                    <div className='landing__imgs'>
                      <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h1_thunder-1.png' />
                      <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h1_thunder-2.png' />
                    </div>
                 </div>
                 <h3 className='landing__right__title'>hotdog</h3>
                 <button>order now</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Landing