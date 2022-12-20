import React from 'react';
import Header from './Header';
import MenuList from './MenuList';
import MainThree from './MainThree';
import AltSection from './AltSection';
import AltPopular from './AltPopular';
import AltBanner from './AltBanner';
import Popular from './Popular';
import RandomSection from './RandomSection';
import BannerImgs from './BannerImgs';
import AutoPlayMethods from './Testimonials';
import Latestnews from './Latestnews';
import BannerInfo from './BannerInfo';
import Footer from './Footer';
import Box from './Box'

function HomePageThree() {
  return (
    <div className='home__three'>
        <Header blackBg='true' />
        <MenuList greenBg='true' img='./bg2.png' />
        <MainThree />
        <AltSection />
        <Box />
        <AltPopular />
        <AltBanner />
        <Popular title='Our menu' default='false' defaultGrid='false' hide='true'/>
        <RandomSection />
        <BannerImgs />
        <AutoPlayMethods />
        <Latestnews />
        <BannerInfo default = 'true' />
        <Footer />
    </div>
  )
}

export default HomePageThree