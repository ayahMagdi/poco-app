import React from 'react'

function AddedAlarm(props) {
  return (
    <div className='addedAlarm'>
        <div className='container'>
            <div className='addedAlarm__wrapper'>
                <p><span>“{props.title}”</span> has been added to your cart.</p>
                <div>view cart</div>
            </div>
        </div>
    </div>
  )
}

export default AddedAlarm