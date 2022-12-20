import React from 'react';
import Headsection from './Headsection';
import News from './News';
import dataBlog from './dataBlog';
// import { text } from '@fortawesome/fontawesome-svg-core';

function Latestnews(props) {

  const full = false
  const show = true

  function clip(str , n){
    return str?.length > n ? `${str.substr(0 , n-1)} ...` : str;
  }

  return (
    <div className='latestnews'>
      <div className='container'>
         <Headsection title="latest news" />
         <div className='latestnews__wrapper'>
           {dataBlog.slice(0,3).map(e => 
              <News img={e.img} 
                    title={e.title}
                    show={show}
                    full= {full}
                    id={e.id}
                    date={e.date}
                    description={clip(e.description , 100)}
                    name={e.name}
              />
            )}
         </div>
      </div>
    </div>
  )
}

export default Latestnews