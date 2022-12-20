import React,{useState} from 'react'

function MainTwo() {

    const [scroll , setScroll] = useState(false)

   const windowScroll = () => {
    const scrollValue = document.body.scrollTop;
    const heightValue = document.body.scrollHeight;
    if(scrollValue >= 100){
        setScroll(true)
    }else{
        setScroll(false)
    }
   }

    window.addEventListener('scroll' , windowScroll)

  return (
    <div className='mainTwo'>
        <div className='overlay'></div>
        <div className='container'>
            <div className='mainTwo__wrapper'>
            <div className='mainTwo__left'>
                <div className='main__element'>
                    <div className='main__element__info'>
                        <h1 className='main__title'>AMERICAN <br /> <span>BURGER</span></h1>
                        <h3 className='main__alt__title'>Medium 2-topping* pizza</h3>
                        <p className='main__description'>*Additional charge for premium toppings. Minimum of 2 required.</p>
                        <div className='main__order'>
                        <button className='main__btn'>order now</button>
                        <p className='main__price'>$12.99 <sup><span>$19.99</span></sup></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mainTwo__right'>
                <div className='altImg'>
                    <img className='onin__img' src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h2_shallot.png' />
                    <img className='green__img' src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h2_basil.png' />
                </div>
                <div className='right__content'>
                    <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h2_burger.png' />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MainTwo