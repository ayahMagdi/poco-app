import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

function Comments(props) {

  // console.log(parseInt(props.rating))
  return (
    <div className='comments'>
          <div className='img'>
            <img src='https://picsum.photos/300/300' />
          </div>
          <div className='info'>
            <div className='clinet__rate'>
                <ul>
                    {Array(parseInt(props.rating)).fill().map((_ , i) => <li className='star star-fill'><StarIcon /></li>)}
                    {Array(5 - parseInt(props.rating)).fill().map((_ , i) => <li className='star'><StarBorderIcon /></li>)}
                </ul>
            </div>
             <div className='name'>
                <h3>{props.name}</h3>
                <p className='date'><span><AccessTimeFilledIcon /></span>{props.date}</p>
             </div>
             <p className='comment'>{props.comment}</p>
          </div>
    </div>
  )
}

export default Comments