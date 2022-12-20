import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {Link} from 'react-router-dom'


function ProductTop(props) {
  return (
    <div className='productTop'>
        <div className='container'>
          <div className='productTop__wrapper'>
            <div className='productTop__left'>
                <Link to="/"> <p className='home'><span>home</span> <KeyboardArrowRightIcon /></p></Link>
                <p className='type'><span>{props.type}</span> <KeyboardArrowRightIcon /></p>
                <p className='title'>{props.title}</p>
            </div>
            <div className='productTop__right'>
               <div className='arrow arrow__left' onClick={props.handleclickLeft}><KeyboardArrowLeftIcon />
                <Link to={`/product/${props.idPrev}`}> <div className='productChild product__prev'>
                    <img src={props.prevchildImg} />
                    <div className='prev__info'>
                      <h4>{props.prevchildTitle}</h4>
                      <p>
                         <span className='current__price'
                          style={{color: props.nexthasDiscount? '#ef3636' : '#FFC222'}}>${props.prevprice}</span>
                         {props.prevhasDiscount  && <span className='old__price'>${props.prevoldPrice}</span>}
                      </p>
                    </div>
                 </div>
               </Link>
               </div>
               <div className='arrow arrow__right' onClick={props.handleclickRight}><KeyboardArrowRightIcon />
               <Link to={`/product/${props.idNext}`}> <div className='productChild product__next'>
                  <img src={props.nextchildImg} />
                    <div className='next__info'>
                      <h4>{props.nextchildTitle}</h4>
                      <p>
                         <span className='current__price' 
                         style={{color: props.nexthasDiscount? '#ef3636' : '#FFC222'}}>${props.nextprice}</span>
                         {props.nexthasDiscount  && <span className='old__price'>${props.nextoldPrice}</span>}
                      </p>
                    </div>
                  </div>
                </Link>
               </div>
            </div>
         </div>
        </div> 
    </div>
  )
}

export default ProductTop