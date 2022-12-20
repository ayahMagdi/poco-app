import React,{useState} from 'react';
import StarIcon from '@mui/icons-material/Star';

function Form(props) {

    // console.log(props.rate)


  return (
    <div className='form__reviews'>
        <p>Your email address will not be published. Required fields are marked<span className='astrick'>*</span></p>
        <form>
            <div className='rating'>
                <label htmlFor='rating'>your rating<span className='astrick'>*</span></label>
                <div className='rate'>
                   {props.rateing}
                </div>
            </div>
            <div className='message'>
                <label htmlFor='review'>Your review<span className='astrick'>*</span></label>
                <textarea
                         id='review' 
                         name="message" 
                         onChange={props.handelChange}
                         value={props.message}
                />
            </div>
            <div className='user'>
                <div>                
                    <label htmlFor='name'>Name<span className='astrick'>*</span></label>
                    <input 
                        id='name' 
                        type='text' 
                        name="userName" 
                        onChange={props.handelChange}
                        value={props.name}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email<span className='astrick'>*</span></label>
                    <input 
                        id='email' 
                        type='email' 
                        name="email" 
                        onChange={props.handelChange}
                        value={props.email}
                    />
                </div>
            </div>
            <div className='check__box'>
                <input type='checkbox' name='check' id='check' />
                <label htmlFor='check'>Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <button onClick={props.submit}>submit</button>
        </form>
    </div>
  )
}

export default Form