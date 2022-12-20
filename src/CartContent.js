import React,{useEffect , useState} from 'react';
import EmptyCart from './EmptyCart';
import {useStateValue} from './stateProvider';
import CartContentLeft from './CartContentLeft';
import CartContentRight from './CartContentRight';

function CartContent() {

  const [{basket}, dispatch] = useStateValue()
  const [total , setTotal] = useState()

  useEffect(()=>{
    setTotal( basket.reduce((acc , cur) => 
    acc + Number(cur.price) , 0))
  },[basket])

  return (
    <div className='cartContent'>
        <div className='container'>
           {!basket.length ? (<EmptyCart type='cart'/>) : (<div className='cartContent__wrapper'>
            <CartContentLeft />
            <CartContentRight total={total + 50 + 10} />
           </div>)}
        </div>
    </div>
  )
}

export default CartContent