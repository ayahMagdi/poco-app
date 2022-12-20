import React from 'react'

function Main() {
  return (
    <div className='main'>
        <div className='main__overlay'></div>
            <div className='container'>
               <div className='main__wrapper'>
                  <div className='main__row'>
                    <div className='main__column'>
                        <div className='main__element'>
                          <div className='main__element__info'>
                             <h1 className='main__title'>UNLIMITED <br />MEDIUM <span>PIZZAS</span></h1>
                             <h3 className='main__alt__title'>Medium 2-topping* pizza</h3>
                             <p className='main__description'>*Additional charge for premium toppings. Minimum of 2 required.</p>
                             <div className='main__order'>
                                <button className='main__btn'>order now</button>
                                <p className='main__price'>$12.99 <sup><span>$19.99</span></sup></p>
                             </div>
                          </div>
                        </div>
                        <div className='main__element image__left__left'>
                            <div className='main__element__image'>
                               <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h2_shape-4.png'/>
                            </div>
                        </div>
                        <div className='main__element image__left__right'>
                            <div className='main__element__image'>
                                <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h1_tomato.png' />
                            </div>
                        </div>
                    </div>
                    <div className='main__column'> 
                            <div className='main__element image__right__bg'>
                                <div className='main__element__image'>
                                    <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h1_shape-6.png'/>
                                </div>
                            </div>
                            <div className='main__element image__right__left'>
                                <div className='main__element__image'>
                                    <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h1_shape-5.png'/>
                                </div>
                            </div>
                            <div className='main__element image__right__center'>
                                <div className='main__element__image'>
                                    <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h1_pizza.png'/>
                                </div>
                            </div>
                            <div className='main__element image__right__right'>
                                <div className='main__element__image'>
                                    <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h2_shape-4.png'/>
                                </div>
                            </div>
                            <div className='main__element image__right__bottom'>
                                <div className='main__element__image'>
                                    <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h2_shape-5.png'/>
                                </div>
                            </div>
                    </div>
                  </div>
               </div>
            </div>
    </div>
  )
}

export default Main