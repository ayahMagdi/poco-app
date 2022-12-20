import React from 'react';
import Address from './address/Address';
import Header from './Header';
import SectionTop from './SectionTop';
import TeamContent from './TeamContent';
import Footer from './Footer';

function TeamPage() {
  return (
    <div className='teampage'>
        <Address />
        <Header />
        <SectionTop title="our team" />
        <TeamContent />
        <Footer />
    </div>
  )
}

export default TeamPage