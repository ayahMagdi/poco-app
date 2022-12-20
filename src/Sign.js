import React from 'react'

function Sign(props) {
  return (
    <div className={props.blackBg == 'true'? 'signIn blackBg' : 'signIn'}>
        <h3 className='title'>Sign in <span>Create an Account</span></h3>
        <form>
            <label htmlFor='name'>username or email <span className='astrick'>*</span></label>
            <input type="text" id='name' placeholder='username'/>
            <label htmlFor='password'>password <span className='astrick'>*</span></label>
            <input type="password" id='password' placeholder='password'/>
            <button>login</button>
        </form>
        <p>lost your password?</p>
    </div>
  )
}

export default Sign