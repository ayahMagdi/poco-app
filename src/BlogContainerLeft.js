import React from 'react';
import dataBlog from './dataBlog';
import PagenationBlog from './PagenationBlog';

function BlogContainerLeft(props) {
  
  const full = false;
  const show = true;

  return (
    <div className='blogcontainerleft'>
      <PagenationBlog data={dataBlog} full={full} show={show} clip={props.clip} cliptext={props.cliptext} />
    </div>
  )
}

export default BlogContainerLeft