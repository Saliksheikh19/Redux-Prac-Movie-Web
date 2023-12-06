import {  useRef } from "react";
import "./login.css";


export default function Login() {
 
  const passwordRef = useRef()
  const emailRef = useRef()
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
  
  }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." ref={emailRef}/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." ref={passwordRef} />
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
      </form>
        <button className="loginRegisterButton">Register</button>
       
    </div>
  );
}