import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Rating(props) {
  return (
    <div className='rating'>
        <ul>
          {Array(parseInt(props.rating)).fill().map((_ , i) => <li className='star star-fill'><StarIcon /></li>)}
          {Array(5 - parseInt(props.rating)).fill().map((_,i) => <li className='star'><StarBorderIcon /></li>)}
        </ul>
        {props.show == 'true' && <span>(5 customer reviews)</span>}
    </div>
  )
}

export default Rating