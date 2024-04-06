import React from "react"
import './Register.css'

const Register = (props) => {
  return (
    <div  className="register-container">
        <h2>Register</h2>
        <div className="register-form">
            <form action="post" href='/register'>
                <label for='username'>Username </ label>
                <input type="text" name="username"/>
                <label for='password'>Password </label>
                <input type="password" name="password"/>

                <button type='submit' className="register-but">REGISTER</button>
            </form>
        </div>
            
      
        <div className="register-footer">
            <p>Already a user?</p>
            <button onClick='/signin'>SIGN IN</button>
        </div>
    </div>
  )
};

export default Register;
