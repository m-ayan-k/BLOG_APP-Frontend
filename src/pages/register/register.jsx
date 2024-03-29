import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./register.css"
import axios from "axios"

export default function Register() {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(false);

  
  const handleSubmit=async (e)=>{
    setError(false);
    e.preventDefault();
    try {
      const res=await axios.post("/auth/register",{
        username,email,password
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="register">
        <span className='registerTitle'>Sign Up</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label >Username</label>
            <input type="text" className="registerInput" placeholder='Enter your username....' 
              onChange={e=>setUsername(e.target.value)}
            />
            <label >Email</label>
            <input type="email" className="registerInput" placeholder='you@example.com' 
              onChange={e=>setEmail(e.target.value)}
            />
            <label>Create a password</label>
            <input type="password" className="registerInput" placeholder='Password' 
              onChange={e=>setPassword(e.target.value)}
            />
            <button className="registerButton" type='submit'>Sign Up</button>
        </form>
            <button className="registerLoginButton">
              <Link className='link' to='/login'>Log In</Link>
            </button>
            {error && <span style={{color:"red",marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  )
}
