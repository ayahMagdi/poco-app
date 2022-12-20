import React from 'react';
import Chefs from './Chefs';
import chefsData from './chefsData';

function AboutChefs() {

  const chefsArray = chefsData.slice(0 , 3).map(e => 
    <Chefs
       id={e.id}
       img={e.img}
       job={e.job}
       name={e.name}
    />
 )

  return (
    <div className='aboutchefs__container'>
        <div className='container'>
            <h3 className='alt__title'>Always Quality</h3>
            <h4 className='title'>Our Talented Chefs</h4>
            <div className='chefs__wrapper'>
              {chefsArray}
            </div>
        </div>
    </div>
  )
}

export default AboutChefs