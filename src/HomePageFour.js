import React from 'react';
import Address from './address/Address';
import Header from './Header';
import MainFour from './MainFour';
import AboutInfo from './AboutInfo';
import NewTaste from './NewTaste';
import Servcies from './Servcies';
import Popular from './Popular';
import AltTestimonials from './AltTestimonials';
import OurChefs from './OurChefs';
import Reservation from './Reservation';
import Footer from './Footer';


function HomePageFour() {
  return (
    <div className='homepage-4'>
            <Address />
            <Header />
            <MainFour />
            <AboutInfo />
            <NewTaste />
            <Servcies />
            <Popular title='Popular dishes' default='true' defaultGrid='true' hide='false' />
            <AltTestimonials />
            <OurChefs />
            <Reservation />
            <Footer light='true' />
    </div>
  )
}

export default HomePageFour