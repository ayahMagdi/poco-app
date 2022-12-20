import React from 'react'

function AboutLeft(props) {
  return (
    <div className='aboutleft'>
       <div className='leftcontainer'>
            <h3 className='alt__title'>Our Quaity</h3>
            <h2 className='title'>{props.title}</h2>
            <p className='description'>{props.description}</p>
            <button>order now</button>
       </div>
    </div>
  )
}

export default AboutLeft