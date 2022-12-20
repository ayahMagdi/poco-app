import React from 'react'

function RandomSection() {
  return (
    <div className='randomSection'>
            <div className='overlay'></div>
            <div className='container'>
                <div className='content__wrapper'>
                    <div className='content__left'>
                        <div className='top__imgs'>
                            <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/logo-pizzaguy.png' />
                            <img className='mr' src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/vector6-h3.png' />
                        </div>
                        <div className='main__img'>
                            <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/image9-h4.png' />
                        </div>
                    </div>
                    <div className='content__right'>
                        <h4 className='alt__title'>Always Fresh</h4>
                        <h3 className='title'>Made Right. Make Delicious. Made Especially For You.</h3>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <button>order now</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default RandomSection