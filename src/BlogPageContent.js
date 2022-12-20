import React from 'react';
import BlogContainerLeft from './BlogContainerLeft';

function BlogPageContent() {

  const cliptext = true
  function clip(str , n){
    return str?.length > n ? `${str.substr(0 , n-1)} ...` : str;
  }

  return (
    <div className='blogpagecontent'>
        <div className='container'>
          <BlogContainerLeft cliptext={cliptext} clip={clip} />
        </div>
    </div>
  )
}

export default BlogPageContent