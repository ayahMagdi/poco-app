import React from 'react';
import Address from './address/Address';
import ContactInformation from './ContactInformation';
import Header from './Header';
import SectionTop from './SectionTop';
import ContactAddress from './ContactAddress';
import Footer from './Footer';

function ContactPage() {
  return (
    <div className='contactPage'>
       <Address />
       <Header />
       <SectionTop title='contact us' />
       <ContactInformation />
       <ContactAddress />
       <Footer />
    </div>
  )
}

export default ContactPage