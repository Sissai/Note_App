import React from 'react'
import "./Signin.css";
function Signup() {
  return (
    <div className="register-container main">
      <h2>SignIn</h2>
      <div className="register-form">
        <form method="post" action="/register">
          <label for="username">Username </label>
          <input type="text" name="username" />
          <label for="password">Password </label>
          <input type="password" name="password" />

          <button type="submit" className="register-but">
            Signup
          </button>
        </form>
      </div>

      <div className="register-footer">
        <p>Don't have an Account?</p>
        <button onClick="/signin">SIGN UP AND REGISTER</button>
      </div>
    </div>
  );
}

export default Signup