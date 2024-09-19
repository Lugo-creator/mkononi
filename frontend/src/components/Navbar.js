import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  window.addEventListener('resize', showButton);

  const handleAuthButtonClick = () => {
    if (isLoggedIn) {
      // Handle logout
      localStorage.setItem("isLoggedIn", "false");
      setIsLoggedIn(false); // Update state immediately
      navigate("/sign-in"); // Navigate immediately after updating state
    } else {
      // Handle sign-in
      navigate("/sign-in");
    }
  };

  // Watch for changes in local storage and update the state accordingly
  useEffect(() => {
    const handleStorageChange = () => {
      const loginStatus = localStorage.getItem("isLoggedIn");
      setIsLoggedIn(loginStatus === "true");
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup listener on unmount
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/generator' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='/images/skizalogo.png' alt='logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/gen' className='nav-links' onClick={closeMobileMenu}>
                Categories
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/generator' className='nav-links' onClick={closeMobileMenu}>
                Ranks
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/business' className='nav-links' onClick={closeMobileMenu}>
                Skiza for Business
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                <i className="far fa-user"></i>
                Sign In
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle='btn--outline' onClick={handleAuthButtonClick}>
              {isLoggedIn ? (
                <>
                  LOGOUT <i className="fa fa-sign-out"></i>
                </>
              ) : (
                <>
                  SIGN IN <i className="far fa-user"></i>
                </>
              )}
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
