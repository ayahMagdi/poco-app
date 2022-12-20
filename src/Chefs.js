import React from 'react';
// import chefsData from './chefsData';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

function Chefs(props) {
  return (
    <div className='chef' key={props.id}>
        <div className='chef__head'>
            <div className='overlay'></div>
            <div className='chef__img'><img src={props.img} /></div>
            <div className='chef__job'>{props.job}</div>
        </div>
        <div className='chef__body'>
            <h3 className='name'>{props.name}</h3>
            <p className='description'>Everything We Pizza, We Pizza With Love. Designer Fastfood.</p>
            <div className='chef__social'>
                <span><FacebookIcon /></span>
                <span><TwitterIcon /></span>
                <span><GoogleIcon /></span>
            </div>
        </div>
    </div>
  )
}

export default Chefs