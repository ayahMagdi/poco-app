import React from 'react'

function Reservation() {
  return (
    <div className='reservation'>
        <div className='location'>
           <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
            </div></div>
        </div>
        <div className='reservation__form'>
          <div className='content'>
            <h3 className='alt__title'>Reservation</h3>
            <h2 className='title'>Book Your Table</h2>
            <form>
                <div className='form__row'>
                    <input type='text' placeholder='your name' name='name' />
                    <input type='email' placeholder='your email' name='email' />
                </div>
                <input type='text' placeholder='your phone'/>
                <div className='form__row'>
                    <input type='date' />
                    <input type='time' />
                </div>
                <input type='text' placeholder='1 People' />
                <button>book now</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Reservation