import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {Link} from 'react-router-dom'

function SectionTop(props) {
  return (
    <div className='sectionTop'>
        <div className='container'>
            <div className='sectionTop__wrapper'>
                <h2 className='sectionTop__wrapper__title'>{props.title}</h2>
                <div className='sectionTop__wrapper__desc'>
                    <Link to="/"> <p className='home'><span>home</span> <KeyboardArrowRightIcon /></p></Link>
                    <p className='title'>{props.title}</p>
                </div>
           </div> 
        </div>
    </div>
  )
}

export default SectionTop