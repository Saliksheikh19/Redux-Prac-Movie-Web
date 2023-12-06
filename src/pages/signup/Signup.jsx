import { useState } from "react"

import "./signUp.css"

export default function Register() {
  const[username , setUserName] = useState("")
  const[email ,setEmail] = useState("")
  const[password , setPassword] = useState("")
  const[error , setError] = useState(false)
const registerHandler = async (e)=>{
e.preventDefault()


}
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={registerHandler}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." onChange={e=> setUserName(e.target.value)} />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..."  onChange={e=> setEmail(e.target.value)} />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..."  onChange={e=> setPassword(e.target.value)}/>
        <button className="registerButton" type="submit">Register</button>
      </form>
    
        <button className="registerLoginButton">Login</button>
        
       {error && <span>something went wrong!</span>}
     
    </div>
    )
}