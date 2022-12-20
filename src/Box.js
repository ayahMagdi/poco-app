import React from 'react';
import ElectricMopedOutlinedIcon from '@mui/icons-material/ElectricMopedOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';

function Box() {
  return (
    <div className='box__wrapper'>
        <div className='container'>
            <div className='section__bottom'>
                    <div className='content__box'>
                        <div className='icon'><ElectricMopedOutlinedIcon /></div>
                        <div className='info'>
                            <h3 className='title'>Free shipping</h3>
                            <p className='description'>Sign up for updates and get free shipping</p>
                        </div>
                    </div>
                    <div className='content__box'>
                        <div className='icon'><QueryBuilderOutlinedIcon /></div>
                        <div className='info'>
                            <h3 className='title'>30 Minutes Delivery</h3>
                            <p className='description'>Everything you order will be quickly delivered to your door.</p>
                        </div>
                    </div>
                    <div className='content__box'>
                        <div className='icon'><LocalPizzaOutlinedIcon /></div>
                        <div className='info'>
                            <h3 className='title'>Best Quality Guarantee</h3>
                            <p className='description'>Poco is an international chain of family restaurants.</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Box