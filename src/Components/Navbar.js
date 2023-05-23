import React, { useState, useEffect } from 'react'
import './Navbar.css'
import SettingsIcon from '@mui/icons-material/Settings';



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
    }, 2000); 
  };


  

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <div className="logo">
        <img className="logo-image" src="https://bizzrupt-warehouse-frontend-m9owt6fxk-gowdavishwajith-gmailcom.vercel.app/assets/images/icon/logo_final.png" alt="My Image" />
      </div>
      <div className="menu">
        <div className="item">RENT NOW</div>
        <div className="item">LIST WITH US</div>
        <div className="item">ONBOARD</div>
        <div className="item">BLOGS</div>
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

      </div>
    </div>
  )
}