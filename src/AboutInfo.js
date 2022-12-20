import React from 'react';
import Imgsbg from './Imgsbg';

function AboutInfo() {
  return (
    <div className='about__info'>
        <div className='container'>
            <div className='content__wrapper'>
                <div className='content__left'>
                    <h4 className='alt__title'>Wellome!</h4>
                    <h3 className='title'>Best burger ideas & traditions from the whole world</h3>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <p className='description'>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.</p>
                    <button>order now</button>
                </div>
                <div className='content__right'>
                    <div className='imgs__left'><img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/image1-h4.jpg' /></div>
                    <div className='imgs__right'>
                        <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/image2-h4.jpg' />
                        <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/image3-h4.jpg' />
                    </div>
                </div>
            </div>
            <Imgsbg />
        </div>
    </div>
  )
}

export default AboutInfo