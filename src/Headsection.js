import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Headsection(props) {
  return (
            <div className='section__head'>
                <h2>{props.title}</h2>
                <p>See all 
                <span className='see__all__icon'>
                    <KeyboardArrowRightIcon />
                </span>
                </p>
            </div>
        )
}

export default Headsection