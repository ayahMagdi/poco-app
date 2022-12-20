import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from './stateProvider';

function Topdish(props) {

  const [{basket}, dispatch] = useStateValue();

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

  return (
    <Link to={`/product/${props.id}`} className="top__dishes">
      <div className='top__dish' key={props.id}>
        <div className='top__dish__wrapper'>
            <div className='box__img'>
                <img src={props.img} />
            </div>
            <div className='box__info'>
                <h4>{props.title}</h4>
                {props.show == 'true' && <span className="dish__type">{props.type}</span>}
                <p>{props.sale  && <span>${props.oldPrice}</span>} ${props.price}</p>
            </div>
            {props.show == "true" && <div className='box__icon' onClick={handleStopClick}>
                <ShoppingBasketIcon onClick={addToBasket} />
             </div>
            }
        </div>
      </div>
   </Link>
  )
}

export default Topdish