import React,{useState} from 'react';

function Quantity(props) {

 const [count , setCount] = useState(1);

  function decrease(){
        if(count < 2){
            return false
        }else{
            setCount(count - 1)
        }
    }
  
    function increase(){
        setCount(count + 1)
    }

  return (
    <div className='quantity'>
        <button className='subtract' onClick={decrease}>-</button>
        <span>{count}</span>
        <button className='increase' onClick={increase}>+</button>
    </div>
  )
}

export default Quantity