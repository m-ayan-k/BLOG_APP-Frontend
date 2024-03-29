import axios from 'axios';
import React, { useRef ,useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import "./login.css"

export default function Login() {
  const userRef=useRef();
  const passwordRef=useRef();

  const{dispatch,isFecthing}=useContext(Context);
  const handleSubmit=async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_STSRT"});
    try {
      const res=await axios.post("/auth/login",{
        username:userRef.current.value,
        password:passwordRef.current.value,
      });
      console.log(899);
      dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    } catch (error) {
      console.log(error.response.data);
      dispatch({type:"LOGIN_FAILURE"});
    }
  };
  return (
    <div className="login">
        <span className='loginTitle'>Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label >Username</label>
            <input type="text" className="loginInput" placeholder='Enter your username' 
              ref={userRef}
            />
            <label>Password</label>
            <input type="password" className="loginInput" placeholder='Enter your password....' 
               ref={passwordRef}
            />
            <button className="loginButton" type='submit' disabled={isFecthing}>Login</button>
        </form>
            <button className="loginRegisterButton">
              <Link className='link' to='/register'>Sign Up</Link>
            </button>
    </div>
  )
}
