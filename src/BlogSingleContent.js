import React from 'react';
import BlogContainerRight from './BlogContainerRight';
import BlogSingleLeft from './BlogSingleLeft';

function BlogSingleContent(props) {
  return (
    <div className='blogsinglecontent'>
        <div className='container'>
            <div className='blogsinglecontent__wrapper'>
                <BlogSingleLeft 
                        img={props.img}
                        title={props.title}
                        description={props.description}
                        name={props.name}
                        show={props.show}
                        date={props.date}
                        id={props.id}
                        moreInfo={props.moreInfo}
                        thirdP={props.thirdP}
                        quote={props.quote}
                        full={props.full} 
                        fourP={props.fourP}
                        prevtitle={props.prevtitle}
                        nexttitle={props.nexttitle}
                />
                <BlogContainerRight/>
            </div>
        </div>
    </div>
  )
}

export default BlogSingleContent