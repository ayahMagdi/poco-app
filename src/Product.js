import React ,{useState} from 'react';
import products from './dataProducts';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {useParams , Link} from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { style } from '@mui/system';
import Quantity from './Quantity';
import Rating from './Rating';
import { useStateValue } from './stateProvider';

function Product(props) {

    const {productId} = useParams();
    const [{basket , wishlist}, dispatch] = useStateValue();

    function addToBasket(){
      dispatch({
       type: 'ADD_TO_BASKET',
       item: {
           id: props.id,
           img: props.img,
           title: props.title,
           description: props.description,
           price: props.price,
           hasDiscount: props.hasDiscount,
           rate: props.rate,
           oldPrice: props.oldPrice
       }
      })
   }

   function addToWishList(){
       dispatch({
        type: 'ADD_TO_WISHLIST',
        wish: {
            id: props.id,
            img: props.img,
            title: props.title,
            description: props.description,
            price: props.price,
            hasDiscount: props.hasDiscount,
            rate: props.rate,
            oldPrice: props.oldPrice
        }
       })
    }

  return (
    <div className='product'>
      <div className='container'>
        <div className='product__wrapper'>
          <div className='product__left'>
            <div className='main__img'>
              <img src={props.img}/>
              {props.hasDiscount && <span className='sale__badge'>sale!</span>}
            </div>
            <div className='alt__imgs'></div>
          </div>
          <div className='product__right'>
            <div className='product__info'>
              <h2>{props.title}</h2>
              <Rating rating={props.rating} />
              <p>{props.description}</p>
              <p className='price'><span className='current__price'>${props.price}</span>
                {props.hasDiscount && <span className='old__price'>${props.oldPrice}</span>}
              </p>
            </div>
            <div className='shopping__info'>
              <div className='productCart'>
                  <Quantity />
                  <div className='box'>
                    <div className='cart' onClick={addToBasket}>
                      <ShoppingBasketIcon />
                        add to cart
                    </div>
                    <div className='wishlist'>
                      <FavoriteIcon onClick={addToWishList} />
                    </div>
                  </div>
              </div>
            </div>
            <div className='shopping__type'>
               <p className='type'>category: <span>{props.type}</span></p>
               <div className='icons'>
                  share: <ul>
                    <li><FacebookOutlinedIcon /></li>
                    <li><TwitterIcon /></li>
                    <li><YouTubeIcon /></li>
                    <li><InstagramIcon /></li>
                    <li><LinkedInIcon /></li>
                    <li><PinterestIcon /></li>
                  </ul>
               </div> 
            </div>
            <div className='global__info'>
              <ul>
                <li>Free global shipping on all orders</li>
                <li>30 days easy returns if you change your mind</li>
                <li>Order before noon for same day dispatch</li>
              </ul>
            </div>
            <div className='check__info'>
              <p>Guaranteed Safe Checkout</p>
              <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/trust-symbols.png' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product