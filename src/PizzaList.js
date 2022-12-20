import React from 'react';
import dataProducts from './dataProducts';
import Dish from './Dish';
import Headsection from './Headsection';
import Imgsbg from './Imgsbg'

function PizzaList() {

 const dishesData = dataProducts.filter(function(e){
        return e.type === 'pizza'
   })

  return (
    <div className='pizza__list'>
        <div className='container'>
            <Headsection title="Pest pizza" />
            <div className='pizza_list__wrapper'>
                {dishesData.slice(0 , 8).map(el =>
                    <Dish           
                        img={el.img}
                        hasDiscount={el.hasDiscount} 
                        title={el.title}
                        description={el.description}
                        oldPrice ={el.oldPrice}
                        price ={el.price}
                        default="true"
                        id={el.id}
                    />
                )}
            </div>
            <Imgsbg />
        </div>
    </div>
  )
}

export default PizzaList