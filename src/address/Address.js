import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

function Address() {
  return (
    <div className='address'>
       <div className='container'>
         <div className='address-wrapper'>
            <div className='address-left'>
            <div className='location'>
                <PhoneIphoneIcon />
                <p><span>call us:</span>+381 65 666 6666</p>
            </div>
            <div className='location'>
                <WhereToVoteOutlinedIcon />
                <p>71 Madison Ave</p>
            </div>
            </div>
            <div className='address-right'>
            <ul className='social-links'>
                <li><a href='#'><FacebookRoundedIcon /></a></li>
                <li><a href='#'><TwitterIcon /></a></li>
                <li><a href='#'><GoogleIcon /></a></li>
                <li><a href='#'><InstagramIcon /></a></li>
            </ul>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Address