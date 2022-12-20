import React from 'react';
import Address from './address/Address';
import EmptyCart from './EmptyCart';
import Header from './Header';
import SectionTop from './SectionTop';
import Footer from './Footer';
import CartContent from './CartContent';

function Checkout() {
  return (
    <div className='checkout'>
        <Address />
        <Header blackbg='true' />
        <SectionTop title='cart' />
        <CartContent />
        <Footer />
    </div>
  )
}

export default Checkout