import React from 'react'

function Banner() {
  return (
    <div className='banner'>
        <div className='banner__box bg__green'>
            <div className='banner__box__bg'>
                <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_shape-8.png'/>
            </div>
            <div className='banner__box__info'>
                <p className='alt__title'>fast food</p>
                <h3 className='title'>meals</h3>
                <p className='desc'>new phenomenon burger taste</p>
                <p className='price'>$19.90</p>
                <button className='btn'>order now</button>
            </div>
            <div className='banner__box__img'>
                <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h1_shape-2.png'/>
            </div>
        </div>
        <div className='banner__box bg__orange'>
            <div className='banner__box__bg'>
                <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_shape-8.png'/>
            </div>
            <div className='banner__box__info'>
                <p className='alt__title'>house</p>
                <h3 className='title'>burgers</h3>
                <p className='desc'>new phenomenon burger taste</p>
                <p className='price'>$12.90</p>
                <button className='btn'>order now</button>
            </div>
            <div className='banner__box__img'>
                <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h1_shape-3.png'/>
            </div>
        </div>
        <div className='banner__box bg__yellow'>
            <div className='banner__box__bg'>
                <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_shape-8.png'/>
            </div>
            <div className='banner__box__info'>
                <p className='alt__title'>hot fresh</p>
                <h3 className='title'>salats</h3>
                <p className='desc'>new phenomenon burger taste</p>
                <p className='price'>$10.90</p>
                <button className='btn'>order now</button>
            </div>
            <div className='banner__box__img'>
                <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h1_shape-4.png'/>
            </div>
        </div>
    </div>
  )
}

export default Banner