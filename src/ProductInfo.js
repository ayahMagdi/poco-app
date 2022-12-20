import React , {useState} from 'react';
import ProductDescription from './ProductDescription';
import ProductReviews from './ProductReviews';

function ProductInfo() {

  const [activeOne , setActiveOne] = useState(true)
  const [activeTwo , setActiveTwo] = useState(false)

 
  function clickHandler(){
     setActiveOne(prev => !activeOne)
     setActiveTwo(prev => !activeTwo)
  }

  let datalength = document.getElementsByClassName('length')
  
  const [reviewsNum , setReviewsNum] = useState(0)

  // let commentsNum = 0;
  const getLength = (number) => {
     setReviewsNum(number)
  }

  // console.log(reviewsNum)

  // console.log(getLength)

  return (
    <div className='productInfo'>
        <div className='container'>
            <div className='wrapper__title'> 
              <div onClick={clickHandler} 
                   className={`${activeOne ? "productInfo__title active" : "productInfo__title"}`}>
                    description
              </div>
              <div onClick={clickHandler}  
                   className={`${activeTwo ? "productInfo__title active" : "productInfo__title"}`}>
                    reviews<span>({reviewsNum})</span>
              </div>
            </div>
            <ProductDescription 
               classes={`${activeOne ? "productDescription active" : "productDescription"}`}
            /> 
            <ProductReviews classes={`${activeTwo ? "productReviews active" : "productReviews"}`} getLength={getLength} />
        </div>
    </div>
  )
}

export default ProductInfo