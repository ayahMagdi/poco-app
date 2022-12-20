import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function EmptyCart(props) {
  return (
    <div className='emptyCart'>
        <div className='emptyCart__wrapper'>
            {props.type == "cart" && <AddShoppingCartIcon />}
            <p>Your {props.type} is currently empty. {props.type == "wishlist" && 
                <span><SentimentVeryDissatisfiedIcon /></span>}
            </p>
            <button>return to shop</button>
        </div>
    </div>
  )
}

export default EmptyCart