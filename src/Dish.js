import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from './stateProvider';
// import AddedAlarm from './AddedAlarm';
import Rating from './Rating';
// import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

function Dish(props) {

    const [{basket , wishlist}, dispatch] = useStateValue();

    const handleStopClick = (e) => {
        e.preventDefault();
    }

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


    function clipText(text , n){
        return text?.length > n ? `${text.substr(0 , n-1)} ...` : text;
      } 


  return (
    <Link to={`/product/${props.id}`}>
        <div className={props.default === 'true' ? 'dishes__wrapper' : 'dishes__wrapper alt__styling'} key={props.id}>
          <div className={props.default === "false" ? 'dish_alt_bg' : ''}>
                <div className='dish__head'>
                    <img className='dish__img' src={props.img} />
                    {props.hasDiscount && <span className='sale__badge'>sale!</span>}
                    <div className='favorite__badge' onClick={handleStopClick} ><FavoriteIcon onClick={addToWishList} /></div>
                </div>
                <div className='dish__body'>
                    {props.rating >= 1 && <Rating rating={props.rating} show="false" /> }
                    <h4 className={props.rating >= 1 ? 'dish__title title-mr' : 'dish__title'}>{props.title}</h4>
                    <p className='dish__description'>{clipText(props.description , 65)}</p>
                    <div className='dish__info'>
                        <p className='dish__price'>
                            {props.hasDiscount  && <span className='old__price'>${props.oldPrice}</span>}
                            <span className='current__price'>${props.price}</span>
                        </p>
                        <div className='basket__badge' onClick={handleStopClick} >
                            <ShoppingBasketIcon onClick={addToBasket} />
                            {/* {basket.some((e) => e.id == props.id) && <AddedAlarm title={props.title} /> } */}
                        </div>
                    </div>
                </div>
          </div>
        </div>
    </Link>
  )
}

export default Dish