import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup =() => {
    return(
        <div className='login'>
            <div className="login-container">
                <h1>Sign Up</h1>
                <div className="login-fileds">
                    <input type="text" placeholder='Your name' />
                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className="login-login">Already have an account? <span>Login Here</span></p>
           <div className="login-agree">
            <input type="checkbox" name='' id='' />
            <p> By continuing, I Agree to the terms of yse & privacy policy</p>
           </div>
            </div>

        </div>
    )
}
export default LoginSignup