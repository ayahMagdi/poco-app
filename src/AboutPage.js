import React from 'react';
import Address from './address/Address';
import Header from './Header';
import SectionTop from './SectionTop';
import AboutInfo from './AboutInfo';
import AboutVideo from './AboutVideo';
import AboutContainer from './AboutContainer';
import AltTestimonials from './AltTestimonials';
import AboutChefs from './AboutChefs';
import BannerInfo from './BannerInfo';
import Footer from './Footer';

function AboutPage() {

  return (
    <div className='aboutpage'>
        <Address />
        <Header />
        <SectionTop title='About Us' />
        <AboutInfo />
        <AboutVideo />
        <AboutContainer />
        <AltTestimonials />
        <AboutChefs />
        <BannerInfo default = 'false' />
        <Footer />
    </div>
  )
}

export default AboutPage