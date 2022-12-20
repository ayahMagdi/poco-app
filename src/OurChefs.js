import React from 'react';
import Headsection from './Headsection';
import Chefs from './Chefs';
import chefsData from './chefsData';

function OurChefs() {

  const chefsArray = chefsData.slice(0 , 3).map(e => 
       <Chefs
          id={e.id}
          img={e.img}
          job={e.job}
          name={e.name}
       />
    )

  return (
    <div className='our__chefs'>
        <div className='container'>
            <Headsection title='Our Talented Chefs' />
            <div className='chefs__wrapper'>
              {chefsArray}
            </div>
        </div>
    </div>
  )
}

export default OurChefs