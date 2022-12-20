import React from 'react'

function ShopResultsNumber(props) {
  return (
    <div className='resultsnumber'>
        <p>Showing 
            <span className='startnumber'>{props.start}</span>
            –<span className='endnumber'>{props.end}</span>
            of<span className='allprod'>{props.all}</span>
            results
        </p>
    </div>
  )
}

export default ShopResultsNumber