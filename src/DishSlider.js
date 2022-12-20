// import { Slide } from '@mui/material';
import React from 'react';
import Slider from './Slider';
import Headsection from './Headsection';
import Imgsbg from './Imgsbg'

function DishSlider() {
  return (
    <div className='section__wrapper section__content-dish'>
        <div className='container'>
            <Headsection title='popular dishes' />
            <Slider />
            <Imgsbg />
        </div>
    </div>
  )
}

export default DishSlider