import React,{ useEffect ,useState } from 'react';
import { useStateValue } from './stateProvider';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom';

function SideCart(props) {
 
 const [{basket}, dispatch] = useStateValue();
 
 const [total , setTotal] = useState()
 useEffect(()=>{
    setTotal( basket.reduce((acc , cur) => acc + Number(cur.price) * cur.qty , 0))
 }, [basket] )

  return (
    <div className={`${props.show ? 'sideCart show' : 'sideCart'}`} onClick={props.setShow}>
       <div className='content' onClick={props.handleClick}>
         <div className='content__head'>
            <h2>shopping cart</h2>
            <div className='close' onClick={props.setShow}>
                close <CloseIcon />
            </div>
         </div>
         <div className='content__products'>
            {!basket.length ? (<p className='cart__empty'>No products in the cart.</p>)
             : 
             (<div className='products__info'>
                <div className='products__wrapper'>
                    {basket.map((e) => (
                     <div className='cart__product' key={e.id}>
                        <div className='remove' onClick={() => dispatch({
                            type: 'REMOVE_FROM_BASKET',
                            item: e
                        })}><CloseIcon /></div>
                        <div className='image'><img src={e.img} /></div>
                        <div className='info'>
                            <h3 className='title'>{e.title}</h3>
                            <p className='price'>${e.price}</p>
                        </div>
                     </div>
                    ))}
                </div>
                <div className='details'>
                    <div className='details__total'>
                        <h3>subtotal:</h3>
                        <span>${total}</span>
                    </div>
                    <div className='details__checkout'>checkout</div>
                    <Link to="/checkout">
                       <div className='details__cart'>view cart</div>
                    </Link>
                </div>
             </div>)
            }
         </div>
       </div>
    </div>
  )
}

export default SideCart