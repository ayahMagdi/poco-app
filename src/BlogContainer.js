import React from 'react'
import BlogContainerLeft from './BlogContainerLeft';
import BlogContainerRight from './BlogContainerRight';

function BlogContainer() {

  const clip = false
  return (
    <div className='blogcontainer'>
       <div className='container'>
         <div className='blogcontainer__wrapper'>
           <BlogContainerLeft  clip={clip} />
           <BlogContainerRight />
         </div>
       </div>
    </div>
  )
}

export default BlogContainer