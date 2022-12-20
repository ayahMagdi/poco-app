import React from 'react';
import AboutLeft from './AboutLeft';
import AboutRight from './AboutRight';

function AboutSection(props) {
  return (
    <div className='aboutsection'>
       <div className='container'>
         <div className='about__wrapper'>
            <AboutLeft title={props.title} description={props.description} />
            <AboutRight img={props.img} altstyle={props.altstyle} />
         </div>
       </div>
    </div>
  )
}

export default AboutSection