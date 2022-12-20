import React,{useState} from 'react';
import Address from './address/Address';
import Header from './Header';
import SectionTop from './SectionTop';
import ShopContainer from './ShopContainer';
import Footer from './Footer';

function ShopPage() {

  const [mainTitle , setMainTitle] = useState('')

  const sectionTitle = (title) => {
    setMainTitle(title)
  }


  return (
    <div className='shoppage'>
            <Address />
            <Header />
            <SectionTop title={mainTitle} />
            <ShopContainer setMainTitle={setMainTitle}/>
            <Footer />
    </div>
  )
}

export default ShopPage