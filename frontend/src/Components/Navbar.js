import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  const handlelogout = () =>{
    localStorage.removeItem('access')
  navigate('/Login')

  }
    return(
      <nav className="navbar navbar-expand-md navbar-dark position-fixed ">
        <div className="container-xxl">
          <Link className="navbar-brand" to="/">Best Schools</Link>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navDiv">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-md-flex justify-content-between" id="navDiv">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact Us</Link>
              </li>
              {
                localStorage.getItem('access')?<li className="nav-item">
                <Link className="nav-link" to="/Schools">Schools</Link>
              </li>:<li></li>
              }
          
            </ul>
            {!localStorage.getItem('access')?<ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link px-md-3" to="/Login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary" to="/Signup">Sign Up</Link>
              </li>
            </ul>: <Link onClick={handlelogout} className="nav-link px-md-3 text-white" to="/Login">Log Out</Link>}
          </div>
        </div>
      </nav>
    );
}
export default Navbar;