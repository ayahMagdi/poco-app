import React from 'react'

function DeliveryBanner() {
  return (
    <div className='deliveryBanner'>
        <div className='container'>
            <div className='deliveryBanner__wrapper'>
                <div className='deliveryBanner__wrapper__left'>
                    <h4 className='title'>Choose what you want, select a pick up time</h4>
                    <p className='description'>
                    As well known and we are very busy all days advice you. advice you to call us of before arriving, so we can guarantee your seat.
                    </p>
                    <button>order now</button>
                </div>
                <div className='deliveryBanner__wrapper__center'>
                    <div className='alt__img'><img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h2_pizza-delivery.png' /></div>
                    <div className='content'><img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h2_shipper.png' /></div>
                </div>
                <div className='deliveryBanner__wrapper__right'>
                    <h4 className='title'>Earn points every time you order online</h4>
                    <p className='description'>
                    As well known and we are very busy all days advice you. advice you to call us of before arriving, so we can guarantee your seat.
                    </p>
                    <button>order now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeliveryBanner