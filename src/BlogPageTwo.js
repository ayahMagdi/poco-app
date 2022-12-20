import React from 'react';
import Address from './address/Address';
import BlogPageContent from './BlogPageContent'
import Header from './Header';
import SectionTop from './SectionTop';
import Footer from './Footer';


function BlogPageTwo() {
  return (
    <div className='blogpage-2'>
        <Address />
        <Header />
        <SectionTop title='our blog' />
        <BlogPageContent />
        <Footer />
    </div>
  )
}

export default BlogPageTwo