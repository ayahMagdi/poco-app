import React from 'react';
import Address from './address/Address';
import Header from './Header';
import SectionTop from './SectionTop';
import BlogContainer from './BlogContainer';
import Footer from './Footer';

function BlogPageOne() {
  return (
    <div className='blogpage-1'>
        <Address />
        <Header />
        <SectionTop title='our blog' />
        <BlogContainer />
        <Footer />
    </div>
  )
}

export default BlogPageOne