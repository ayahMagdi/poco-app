import React from 'react';
import { useParams , Link } from 'react-router-dom';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function News(props) {

 const {blogTitle} = useParams()
//  console.log(blogTitle)

  return (
         <div className='card' key={props.id}>
            <div className='card__head'>
                <img src={props.img} />
             </div>
             <div className='card__body'>                
                <p className='card__body__info'>
                    {props.show && <span className='category'>Uncategorized / </span>}
                        <span className='date'>{props.date} </span>
                        {props.show && <span className='author'> / posted by <span> {props.name} </span></span>}
                </p>
                <Link to= {`/blog/${props.title}`}><h2 className='card__body__title'>{props.title}</h2></Link>
                <p className='card__body__desc'>{props.description}</p>
                {props.full && <p className='card__body__desc'>{props.moreInfo}</p> }
                {props.full && <p className='card__body__desc'>{props.thirdP}</p>}
                {props.full && <p className='card__body__quote'><FormatQuoteIcon /> {props.quote}</p>}
                {props.full && <p className='card__body__desc'>{props.fourP}</p>}
                <button>read more</button>
            </div>
        </div>
  )
}

export default News