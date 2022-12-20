import React from 'react';
import Address from './address/Address';
import Header from './Header';
import SectionTop from './SectionTop';
import HistoryInfo from './HistoryInfo';
import History from './History';
import Footer from './Footer';

function HistoryPage() {
  return (
    <div className='historypage'>
        <Address />
        <Header />
        <SectionTop title="our history" />
        <HistoryInfo />
        <History />
        <Footer />
    </div>
  )
}

export default HistoryPage