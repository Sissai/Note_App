import React, { useState, useContext } from "react"
import { AuthContext } from "./Authv1/AuthContext";

const SignUp = () => {

  const [user, setUser] = useState({
    username:'',
    email:'',
    password:''
  })

  const {signup } = useContext(AuthContext);
 

  const submitHandler = async (e) => {
    signup(user.username, user.email, user.password);
  }

  return (
  <>
    <div className="sigup-container">
      <h1> Signup</h1>
      <form onSubmit={submitHandler}>
        <label>User Name</label>
        <input 
          type="text" 
          name='username' 
          placeholder="Enter user name"
          required
          onChange={(e) =>
            setUser((prev) => {
              return{
                ...prev,
                username: e.target.value,
              };
            })
          }/>
        
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
        <button type="submit">Signup</button>
      </form>

     
    </div>
  </>
  )
};

export default SignUp;
