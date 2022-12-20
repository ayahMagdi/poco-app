import React from 'react';
import BlogBanner from './BlogBanner';
import BlogRecent from './BlogRecent';
import BlogTags from './BlogTags';
import SearchComponent from './SearchComponent';

function BlogContainerRight() {
  return (
    <div className='blogcontainerright'>
       <SearchComponent />
       <BlogRecent />
       <BlogTags />
       <div className='blogbanner'>
          <BlogBanner />
       </div>
    </div>
  )
}

export default BlogContainerRight