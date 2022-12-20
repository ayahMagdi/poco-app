import React , {useState} from 'react';
import { useStateValue } from './stateProvider';

function BottomBadge(props) {

   const [scroll , setScroll] = useState(false);
   const [{basket}, dispatch] = useStateValue();

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

   const windowScroll = () => {
    const scrollValue = window.scrollY;
    const heightValue = document.body.scrollHeight;
    if(scrollValue >= 500 & scrollValue < heightValue - 800){
        setScroll(true)
    }else{
        setScroll(false)
    }
   }

    window.addEventListener('scroll' , windowScroll)


  return (
    <div className={`${scroll ? "bottomBadge show" : "bottomBadge"}`}>
        <div className='container'>
          <div className='content'> 
            <div className='bottomBadge__left'>
               <div className='image'>
                  <img src={props.img} />
               </div>
               <div className="info">
                 <h3><span>you're viewing:</span> {props.title}</h3>
                 <p>${props.price}</p>
               </div>
            </div>
            <div className='bottomBadge__right' onClick={addToBasket}>
                <button>add to basket</button>
            </div>
          </div> 
        </div>
    </div>
  )
}

export default BottomBadge