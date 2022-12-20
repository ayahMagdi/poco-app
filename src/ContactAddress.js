import React from 'react'

function ContactAddress() {
  return (
    <div className='contactaddress'>
        <div className='container'>
            <div className='contactaddress__wrapper'>
                <div className='contactaddress__wrapper__location'>
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                    </div></div>
                </div>
                <div className='contactaddress__wrapper__form'>
                    <div className='form__title'>
                        <h3 className='title'>Send us a message</h3>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <form>
                        <input type='text' id="name" placeholder='your name' />
                        <input type='email' id="email" placeholder='your email' />
                        <input type='text' id="subject" placeholder='subject' />
                        <textarea placeholder='comment' />
                        <button className='button__btn'>submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactAddress