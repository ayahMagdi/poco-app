import React from 'react'
import BlogNextandPrev from './BlogNextandPrev'
import News from './News'

function BlogSingleLeft(props) {
  return (
    <div className='blogsingleleft'>
        <News 
           img={props.img}
           title={props.title}
           name={props.name}
           show={props.show}
           date={props.date}
           id={props.id}
           fourP={props.fourP}
           description={props.description}
           moreInfo={props.moreInfo}
           thirdP={props.thirdP}
           quote={props.quote}
           full={props.full}
        />

        <BlogNextandPrev  
            prevtitle={props.prevtitle}
            nexttitle={props.nexttitle}
        />
    </div>
  )
}

export default BlogSingleLeft