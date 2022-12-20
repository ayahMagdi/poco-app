import React from 'react';
import Address from './address/Address';
import Footer from './Footer';
import Header from './Header';
import SectionTop from './SectionTop';
import WishlistContent from './WishlistContent';

function Wishlist() {
  return (
    <div className='wishlist'>
            <Address />
            <Header blackbg='true' />
            <SectionTop title="wishlist" />
            <WishlistContent />
            <Footer />
    </div>
  )
}

export default Wishlist