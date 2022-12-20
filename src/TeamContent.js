import React from 'react';
import chefsData from './chefsData';
import Chefs from './Chefs';

function TeamContent() {
  return (
     <div className='teamcontent'>
        <div className='container'>
            <div className='teamcontent__wrapper'>
                {chefsData.map(e => 
                    <Chefs 
                        id={e.id}
                        img={e.img}
                        name={e.name}
                        job={e.job}
                    />
                )}
            </div>
        </div>
     </div>
  )
}

export default TeamContent