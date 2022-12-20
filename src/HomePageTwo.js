import React from 'react';
import Address from './address/Address';
import Header from './Header';
import MainTwo from './MainTwo';
import Section from './Section';
import DeliveryBanner from './DeliveryBanner';
import DishSlider from './DishSlider';
import AutoPlayMethods from './Testimonials';
import Banner from './Banner';
import PizzaList from './PizzaList';
import Latestnews from './Latestnews';
import Footer from './Footer';
import AltBanner from './AltBanner';
import HotOffers from './HotOffers';

function HomePageTwo() {

  return (
    <div className='homepage-2'>    
        <Address />
        <Header />
        <MainTwo />
        <Section />
        <DeliveryBanner />
        <DishSlider />
        <AutoPlayMethods />
        <Banner />
        <PizzaList />
        <AltBanner />
        <Latestnews />
        <HotOffers />
        <Footer />
    </div>
  )
}

export default HomePageTwo