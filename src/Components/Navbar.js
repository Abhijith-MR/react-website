import React, { useState, useEffect } from 'react'
import './Navbar.css'
import SettingsIcon from '@mui/icons-material/Settings';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




export default function Navbar() {

  const [navbar, setNavbar] = useState(false)

  const changeBackgroundcolor = () => {
    if (window.scrollY >= 10) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackgroundcolor);


  const [showOptions, setShowOptions] = useState(false);

  let timeoutId;

  const handleIconHover = () => {
    setShowOptions(true);
  };

  const handleIconLeave = () => {
    timeoutId = setTimeout(() => {
      setShowOptions(false);
    }, 3000);
  };

  function handleListwithusClick() {
    window.open('https://www.bing.com/', '_blank');
  }

  function handleLogoClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }



  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <div className="logo">
        <img className="logo-image" src="https://bizzrupt-warehouse-frontend-m9owt6fxk-gowdavishwajith-gmailcom.vercel.app/assets/images/icon/logo_final.png" alt="My Image" onClick={handleLogoClick}/>
      </div>
      <nav className="menu">
        <Link className="item" to="/rent-now" target="_blank">RENT NOW</Link>
        <Link className="item" to="/list-with-us" onClick={handleListwithusClick} >LIST WITH US</Link>
        <Link className="item" to="/onboard" onClick={handleListwithusClick} >ONBOARD</Link>
        <Link className="item" to="/blogs" onClick={handleListwithusClick} >BLOGS</Link>
        <div className='Setting' onMouseEnter={handleIconHover}
          onMouseLeave={handleIconLeave}> <div><SettingsIcon /></div>
        </div>
        {showOptions && (
          <div className="options">
            <h4>Languages</h4>
            <p>English</p>
            <p>French</p>
            <p>German</p>
          </div>
        )}

      </nav>
    </div>
  )
}