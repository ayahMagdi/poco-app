import React from 'react';
import Address from './address/Address';
import Header from './Header';
import Main from './Main';
import Menu from './Menu';
import Information from './Information';
import Popular from './Popular';
import Landing from './Landing';
import Toprecipes from './Toprecipes';
import AutoPlayMethods from './Testimonials';
import Banner from './Banner';
import Latestnews from './Latestnews';
import Footer from './Footer';

function HomePageOne() {
  return (
        <div className='homepage-1'>
            <Address />
            <Header />
            <Main />
            <Menu />
            <Information />
            <Popular title='Popular dishes' default='true' defaultGrid='true' hide='false' />
            <Landing />
            <Toprecipes />
            <AutoPlayMethods />
            <Banner />
            <Latestnews />
            <Footer />
       </div>
  )
}

export default HomePageOne