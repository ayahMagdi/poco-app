import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Client(props) {

  return (
    <div className='client'>
        <div className='client__wrapper'>
            <div className='client__head'>
                <div className='client__head__info'>
                    <div className='client__img'>
                     <img src={props.img}/>
                     <div className='quote__icon'><FormatQuoteIcon /></div>
                    </div>
                    {props.top=='true' && <div className='client__personal'>
                        <h3 className='name'>{props.name}</h3>
                        <span className='job'>{props.job}</span>
                    </div>}
                </div>
                <div className='client__head__rating'>
                    <ul>
                        {Array(props.rating).fill().map((_ , i) => <li className='star star-fill'><StarIcon /></li>)}
                        {Array(5 - props.rating).fill().map((_ , i) => <li className='star'><StarBorderIcon /></li>)}
                    </ul>
                </div>
            </div>
            <div className='client__body'>
                <p className='content'>
                   {props.testimonial}
                </p>
                {props.bottom=='true' && <div className='client__personal'>
                   <h3 className='name'>{props.name}</h3>
                   <span className='job'>{props.job}</span>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Client