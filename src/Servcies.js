import React from 'react';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';

function Servcies() {
  return (
    <div className='servcies'>
        <div className='servcies__bg__top'>
            <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/image5-h4.png' />
        </div> 
        <div className='servcies__container'>
            <div className='container'>
                <div className='servcies__content'>
                    <p className='alt__title'>Always Quality</p>
                    <h3 className='title'>Our Servcies</h3>
                    <div className='content__wrapper'>
                        <div className='ser__box'>
                            <div className='icon'><LunchDiningOutlinedIcon /></div>
                            <h4 className='title'>QUALITY FOODS</h4>
                            <p className='description'>Everything you order will be quickly delivered to your door.</p>
                        </div>
                        <div className='ser__box'>
                            <div className='icon'><FastfoodOutlinedIcon /></div>
                            <h4 className='title'>QUALITY FOODS</h4>
                            <p className='description'>Everything you order will be quickly delivered to your door.</p>
                        </div>
                        <div className='ser__box'>
                            <div className='icon'><DinnerDiningOutlinedIcon /></div>
                            <h4 className='title'>QUALITY FOODS</h4>
                            <p className='description'>Everything you order will be quickly delivered to your door.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='servcies__bg__bottom'>
            <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/image6-h4.png' />
        </div>
    </div>
  )
}

export default Servcies