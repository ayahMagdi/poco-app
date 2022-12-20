import React, { useState } from 'react'
import Address from './address/Address';
import Header from './Header';
import Product from './Product';
import products from './dataProducts';
import ProductTop from './ProductTop';
import ProductInfo from './ProductInfo';
import Dish from './Dish';
import Footer from './Footer';
import BottomBadge from './BottomBadge';
import {useParams} from 'react-router-dom'

function ProductPage() {
  const {productId} = useParams()

  let info = products.find(function(e){return e.id == productId})
  const prevandnext = products.filter(function(e , index){return e.type == info.type})

  // console.log(products[6].type)
  let current = prevandnext.indexOf(info);

  const [currentIndex , setCurrentIndex] = useState(current);
  console.log(prevandnext.length - 1)
  
  const handleclickRight = currentIndex == prevandnext.length - 1 ? 
              () => setCurrentIndex(0) : () => setCurrentIndex(currentIndex + 1)
  const handleclickLeft = currentIndex == 0 ? 
              () => setCurrentIndex(prevandnext.length - 1) : () => setCurrentIndex(currentIndex - 1)
  
  const prevProuct = currentIndex == 0 ? prevandnext[prevandnext.length - 1] : prevandnext[currentIndex - 1]
  const nextProuct = currentIndex == prevandnext.length - 1 ? prevandnext[0] :  prevandnext[currentIndex + 1]
  // console.log(prevProuct)
    
    const relatedProducts = prevandnext.filter((e) => e.id !== productId)
    const related = relatedProducts.slice(0 , 4).map(function(el){
        return <Dish 
                    img={el.img}
                    hasDiscount={el.hasDiscount} 
                    title={el.title}
                    description={el.description}
                    oldPrice ={el.oldPrice}
                    price ={el.price}
                    id={el.id}
                    rating={el.rate}
                    default= "true"
               />
    })

  return (
    <div className='productpage'>
            <Address />
            <Header blackbg='true' />
            <ProductTop type={prevandnext[currentIndex].type} 
                        title={prevandnext[currentIndex].title}
                        current={currentIndex}
                        numproducts={prevandnext.length}
                        prevchildImg={prevProuct.img}
                        prevchildTitle={prevProuct.title}
                        prevhasDiscount={prevProuct.hasDiscount}
                        prevoldPrice={prevProuct.oldPrice}
                        prevprice={prevProuct.price}
                        nextchildImg={nextProuct.img}
                        nextchildTitle={nextProuct.title}
                        nexthasDiscount={nextProuct.hasDiscount}
                        nextoldPrice={nextProuct.oldPrice}
                        nextprice={nextProuct.price}
                        idPrev={prevProuct.id}
                        idNext={nextProuct.id}
                        handleclickRight={handleclickRight}
                        handleclickLeft={handleclickLeft}
             />
             <Product 
                img={prevandnext[currentIndex].img} 
                sale={prevandnext[currentIndex].sale} 
                title={prevandnext[currentIndex].title}
                description={prevandnext[currentIndex].description}
                price={prevandnext[currentIndex].price}
                oldPrice={prevandnext[currentIndex].oldPrice}
                hasDiscount={prevandnext[currentIndex].hasDiscount}
                rating={prevandnext[currentIndex].rate}
                type={prevandnext[currentIndex].type}
             />
             <ProductInfo />
             <div className='dish__container'>
               <div className='container'>
                  <h2>realted products</h2>
                  <div className='related__wrapper'>
                    {related}
                  </div>
               </div>
             </div>
             <Footer />
             <BottomBadge 
               img={info.img}
               title={info.title}
               price={info.price}
             />
    </div>
  )
}

export default ProductPage