import React from 'react';
import Address from './address/Address';
import Header from './Header';
import SectionTop from './SectionTop';
import FaqContent from './FaqContent';
import Footer from './Footer';

function FaqPage() {
  return (
    <div className='faqpage'>
          <Address />
          <Header />
          <SectionTop title='faq' />
          <FaqContent />
          <Footer />
    </div>
  )
}

export default FaqPage