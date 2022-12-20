import React from 'react';
import HomePageOne from './HomePageOne';
import HomePageTwo from './HomePageTwo';
import HomePageThree from './HomePageThree';
import HomePageFour from './HomePageFour';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import ProductPage from './ProductPage';
import Checkout from './Checkout';
import Wishlist from './Wishlist';
import MenuPage from './MenuPage';
import AboutPage from './AboutPage';
import ShopPage from './ShopPage';
import BlogPageOne from './BlogPageOne';
import BlogPageTwo from './BlogPageTwo';
import BlogSinglePage from './BlogSinglePage';
import ContactPage from './ContactPage';
import FaqPage from './FaqPage';
import Error from './Error';
import TeamPage from './TeamPage';
import HistoryPage from './HistoryPage';
import ScrollToTop from './ScrollToTop';

function App(){
    
    return(
        <Router>
            <ScrollToTop />
            <div className='app'>
              <Routes>
                <Route path="/" element={<HomePageOne />}></Route>
                <Route path="/home-2" element={<HomePageTwo />}></Route>
                <Route path="/home-3" element={<HomePageThree />}></Route>
                <Route path="/home-4" element={<HomePageFour />}></Route>
                <Route path="/menu" element={<MenuPage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/shop" element={<ShopPage />}></Route>
                <Route path="/contact" element={<ContactPage />}></Route>
                <Route path="/faq" element={<FaqPage />}></Route>
                <Route path="/blog-1" element={<BlogPageOne />}></Route>
                <Route path="/blog-2" element={<BlogPageTwo />}></Route>
                <Route path="*" element={<Error />}></Route>
                <Route path="/product/:productId" element={<ProductPage />}></Route>
                <Route path="/blog/:blogTitle" element={<BlogSinglePage />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                <Route path="/wishlist" element={<Wishlist />}></Route>
                <Route path="/team" element={<TeamPage />}></Route>
                <Route path="/history" element={<HistoryPage />}></Route>
              </Routes>
            </div>
        </Router>
    )
}



export default App;