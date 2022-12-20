import React from 'react';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';

function ContactInformation() {
  return (
    <div className='contactinformation'>
        <div className='container'>
            <div className='contact__title'>
                <h3 className='title'>Call us or visit place</h3>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='contact__boxs'>
                <div className='contact__box'>
                    <div className='icon'><PhoneAndroidOutlinedIcon /></div>
                    <h4 className='box__title'>Phone:</h4>
                    <p className='box__description'>
                        <span>+ 44 123 456 78 90</span>
                        <span>+ 844 123 444 77 88</span>
                    </p>
                </div>
                <div className='contact__box'>
                    <div className='icon'><PlaceOutlinedIcon /></div>
                    <h4 className='box__title'>Address</h4>
                    <p className='box__description'>
                        <span>Box 565, Pinney's Beach, Charlestown,</span>
                        <span>Nevis, West Indies, Caribbean</span>
                    </p>
                </div>
                <div className='contact__box'>
                    <div className='icon'><MarkunreadOutlinedIcon /></div>
                    <h4 className='box__title'>Email:</h4>
                    <p className='box__description'>
                        <span>contact@example.com</span>
                        <span>info@example.com</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInformation