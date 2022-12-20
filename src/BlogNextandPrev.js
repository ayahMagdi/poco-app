import React from 'react';
import {Link} from 'react-router-dom'

function BlogNextandPrev(props) {
  return (
    <div className='blognextprev'>
        <div className='blogprev'>
            <span>prev post</span>
            <Link to={`/blog/${props.prevtitle}`}>
                <h3 className='title'>{props.prevtitle}</h3>
            </Link>
        </div>
        <div className='blognext'>
            <span>next post</span>
            <Link to={`/blog/${props.nexttitle}`}>
                <h3 className='title'>{props.nexttitle}</h3>
            </Link>
        </div>
    </div>
  )
}

export default BlogNextandPrev