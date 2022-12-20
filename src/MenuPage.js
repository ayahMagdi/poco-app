import React from 'react';
import Address from './address/Address';
import Header from './Header';
import SectionTop from './SectionTop';
import Popular from './Popular';
import NewTaste from './NewTaste';
import Box from './Box'
import Footer from './Footer';

function MenuPage() {
  return (
    <div className='menupage'>
        <Address />
        <Header />
        <SectionTop title='menu restaurant' />
        <Popular title='Menus Of The Day' default='false' defaultGrid='false' hide='true'/>
        <NewTaste />
        <Box />
        <Footer />
    </div>
  )
}

export default MenuPage