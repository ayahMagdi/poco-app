import React from 'react'

function Information() {
  return (
    <div className='information'>
        <div className='container'>
            <div className='information__wrapper'>
                <div className='information__box box__one'>
                    <div className='info'>
                        <h3 className='info__title'>Any day <br /> offers</h3>
                        <p className='info__description'>NEW PHENOMENON <br/> BURGER TASTE</p>
                        <p className='info__price'>$12.90</p>
                    </div>
                    <div className='image'>
                        <img className='box__bg' src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner1-2.png' />
                        <img className='box__img' src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner1-1.png' />
                    </div>
                </div>
                <div className='information__box box__two'>
                    <div className='info'>
                        <h3 className='info__title'>Other <br />flavors</h3>
                        <p className='info__description'>SAVE ROOM.<br/>WE MADE SALATS</p>
                        <p className='info__price'>$12.90</p>
                    </div>
                    <div className='image'>
                        <img className='box__bg' src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner2-1.png' />
                        <img className='box__img' src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner2-2.png' />
                    </div>
                </div>
                <div className='information__box box__three'>
                    <div className='info'>
                        <h3 className='info__title'>Find a Poco<br/>store<br/>near you</h3>
                        <p className='info__contact'>CONTACT US</p>
                    </div>
                    <div className='image'>
                        <img className='box__bg' src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner2-1.png' />
                        <img className='box__img' src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner3.png' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Information