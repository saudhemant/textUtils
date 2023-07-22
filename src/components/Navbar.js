import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  const [btnTheme, setBtnTheme] = useState('dark');
  const modeSetter = (event) => {
    props.toggleMode();
    setBtnTheme(props.mode === 'light' ? 'light' : 'dark');
  }
  return (  
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-2 w-100`}>
        <a href="#" className="navbar-brand">
          {props.title}
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id='navbarContent'>
          <div className="navbar-nav ms-auto">
            {/* <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link> */}
            {/* <a href="/" className="nav-item nav-link">Home</a> */}
            {/* <a href="/about" className="nav-item nav-link">About</a> */}
            <div className="d-flex flex-row align-items-center">
              <div className="form-switch">
                <input 
                  type="checkbox" 
                  name="setMode"
                  className={`form-check-input bg-${props.mode}-subtle border border-${btnTheme}-subtle border-2`}
                  onClick={modeSetter}/>
              </div>
              <label
                className={`text-${btnTheme} me-2`}>
                  {props.mode.toUpperCase()} MODE
              </label>
            </div>
          </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'BRAND',
    mode: 'light'
}