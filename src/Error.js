import React from 'react';
import {Link} from 'react-router-dom'

function Error() {
  return (
    <div className='errorpage'>
        <h2>404 Page not found</h2>
        <Link to='/'>
           <button className='button__btn'>back to home</button>
        </Link>
    </div>
  )
}

export default Error