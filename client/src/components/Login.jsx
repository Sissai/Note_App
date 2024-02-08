import React, { useState, useContext } from "react"
import { AuthContext } from "./Authv1/AuthContext";

const Login = () => {

  const [user, setUser] = useState({
    username:'',
    email:'',
    password:''
  })

  const { login } = useContext(AuthContext);
 

  const submitHandler = async (e) => {
    e.preventDefault();
    login(user.email, user.password);
  }

  return (
  <>
    <div className="sigup-container">
      <h1> Login</h1>
      <form onSubmit={submitHandler}>
        
        <label>Email</label>
        <input 
          type="email" 
          name='email' 
          placeholder="Enter your email"
          required
          onChange={(e) =>
            setUser((prev) => {
              return{
                ...prev,
                email: e.target.value,
              };
            })
          }/>
        <label>Password</label>
        <input 
          type="password" 
            name='password' 
            placeholder="Enter your password"
            onChange={(e) =>
              setUser((prev) => {
                return{
                  ...prev,
                  password: e.target.value,
                };
              })
            }/>
        <button type="submit">Login</button>
      </form>

     
    </div>
  </>
  )
};

export default Login;
