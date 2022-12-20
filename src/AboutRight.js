import React from 'react'

function AboutRight(props) {
  return (
    <div className={props.altstyle == 'false' ? 'aboutright' : 'aboutright order'}>
       <div className='about__bg'></div>
        <div className='main__img'><img src={props.img} /></div>
    </div>
  )
}

export default AboutRight