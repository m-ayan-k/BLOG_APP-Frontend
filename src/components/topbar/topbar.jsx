import { Link } from 'react-router-dom';
import React, { useContext } from 'react'
import "./topbar.css";
import { Context } from '../../context/Context';

export default function Topbar() {
  const {user,dispatch}=useContext(Context);
  const PF="http://localhost:5000/imgs/";
  const handlelogout=(e)=>{
    dispatch({type:"LOGOUT"});
  };
  return (
    <div className="top">
        <div className='topleft'>
          <i className="topicon fa-brands fa-square-facebook"></i>
          <i className="topicon fa-brands fa-square-twitter"></i>
          <i className="topicon fa-brands fa-square-pinterest"></i>
          <i className="topicon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topcenter'>
          <ul className='toplist'>
            <li className='toplistitem'>
              <Link to="/" className='link'>Home</Link>
            </li>
            <li className='toplistitem'><Link to="/about" className='link'>About</Link></li>
            <li className='toplistitem'><Link to="/contact" className='link'>Contact</Link></li>
            <li className='toplistitem'><Link to="/write" className='link'>Write</Link></li>
            {user && 
              <button className='toplistitem' onClick={handlelogout}>Logout</button>
            }
          </ul>
        </div>
        <div className='topright'>
          {user?(
            <Link to="/settings">
              <img className="topimage" 
              src={PF+user.profilePic}
              alt="" />
            </Link>
            
          ):(
            <div className='authbtn'>
              <Link to="/login" className='link'>
                <button className='loginbtn'>Log In</button>
              </Link>
              <Link to="/register" className='link'>
                <button className='signupbtn'>Sign Up</button>
              </Link>
            </div>
          )}
        </div>
    </div>
  )
}
