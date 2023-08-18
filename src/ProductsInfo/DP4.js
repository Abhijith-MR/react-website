import React, { useEffect, useState } from 'react';
import './DP1.css';
import myImage4 from '../Images/image4.png';
import D4 from '../Images/D4.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Search from '../Images/Search.png';
import Checkout from '../Components/Checkout';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function DP4() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const quantity = parseInt(queryParams.get('quantity'), 10) || 1;

  const productPrice = 900; // Replace this with your actual product price

  const estimatedCost = productPrice * quantity;



  const [activeTitle, setActiveTitle] = React.useState("Default");

  const handleTitleClick = (title) => {
    setActiveTitle(title);
  };


  if (activeTitle === undefined) {
    setActiveTitle("Default");
  }

  const Default = (
    <div className='Info'>
      <p>Ample space with good ceiling space and road connectivity with no disturbance. State of the arts security services and huge parking space and Rural connectivity. Good pallet sizes available for rent.</p>
    </div>
  );

  const details = (
    <div className='Info'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </div>
  );

  const amenities = (
    <div className='Info'>
      <h5><b>AMENITIES</b></h5>
      <ul>
        <li>24 Hour Access</li>
        <li>Canteen</li>
        <li>Crane Available</li>
        <li>Elevator</li>
        <li>Guard Room</li>
        <li>Insured Warehouse Building</li>
        <li>Local Labour Availability/ Accommodation</li>
        <li>Rain Water Harvesting</li>
        <li>VDF Flooring</li>
        <li>Wifi Connectivity</li>
      </ul>
    </div>
  );

  const reviews = (
    <div className='Info'>
      <h5>Minati Rawant, Alpha solutions</h5>
      <p>Rented a shared space for recently. Process was really convenient and flexible subscription plans. Transparency of equipment availability and CCTV was was extremely useful.</p>
    </div>
  );

  const [selectedDate, setSelectedDate] = useState(new Date());

  const redTextStyle = {
    color: 'red',
  };

  const openFacebookLoginPage = () => {
    window.open('https://www.facebook.com/login', '_blank');
  };

  const openGoogleLoginPage = () => {
    window.open('https://accounts.google.com/', '_blank');
  };

  const openTwitterLoginPage = () => {
    window.open('https://twitter.com/login', '_blank');
  };

  const openInstagramLoginPage = () => {
    window.open('https://www.instagram.com/accounts/login/', '_blank');
  };

  const openRSSLoginPage = () => {
    window.open('https://rss.com/', '_blank');
  };

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMinutes] = useState(0);
  const [secs, setSeconds] = useState(0);

  const deadline = "Auguast, 25, 2023"

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor(time / (1000 * 60 * 60) % 24))
    setMinutes(Math.floor((time / 1000 / 60) % 60))
    setSeconds(Math.floor((time / 1000) % 60))
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000)
    return () => clearInterval(interval)
  }, [])

  const [showCheckout, setShowCheckout] = useState(false);

  const handleBookNowClick = () => {
    setShowCheckout(true);
  };

  return (
    <div>

      {showCheckout ? (
        <Checkout />
      ) : (
        <div>

          <div className='Top'>
            <div className='TopLeft'>
              <h5>PRODUCT</h5>
            </div>
            <div className='TopRight'>
              <h5>HOME / PRODUCT</h5>
            </div>
          </div>
          <div className='Middle'>
            <div className='MiddleLeft'>
              <img className='Image' src={myImage4} alt="My Image" />
              <img className='Image' src={D4} alt="My Image" />
            </div>


            <div className='MiddleRight'>
              <h3>TEST</h3>
              <del>
                ₹5/Sqft/Day
              </del>
              <span style={redTextStyle}> 20% Off</span>
              <p><h4>₹2/sqft/day</h4></p>
              <p className='name'>Dedicated</p>
              <div className="dotted-line1"></div>
              <div className='DatePicker'>
                <div className='CheckIn'>
                  <label>From</label>
                  <DatePicker selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    className='custom-datepicker' />
                  <DateRangeIcon className='date-range-icon' />
                </div>
                <div className='CheckOut'>
                  <label>To</label>
                  <DatePicker selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    className='custom-datepicker' />
                  <DateRangeIcon className='date-range-icon' />
                </div>
              </div>
              <p className='title'>Estimated Costs</p>
              <p className='price'>₹{estimatedCost}</p>
              {!showCheckout && (
                <Link to='/Checkout'>
                  <Link to={`/Checkout?cardName=DP4&quantity=${quantity}`}>
                    <button className='btn' onClick={() => setShowCheckout(true)}>BOOK NOW</button>
                  </Link>
                </Link>
              )}
              <div className="dotted-line1"></div>
              <div className='Details'>
                <h5>Product Details</h5>
                <p>Test</p>
              </div>
              <div className="dotted-line2"></div>

              <h5>Share It</h5>
              <div className='iconsList'>
                <a className='iconSet' onClick={openFacebookLoginPage}><FacebookIcon /></a>
                <a className='iconSet' onClick={openGoogleLoginPage}><GoogleIcon /></a>
                <a className='iconSet' onClick={openTwitterLoginPage}><TwitterIcon /></a>
                <a className='iconSet' onClick={openInstagramLoginPage}><InstagramIcon /></a>
                <a className='iconSet' onClick={openRSSLoginPage}><RssFeedIcon /></a>
              </div>

              <div className="dotted-line3"></div>
              <div className='Time'>
                <h5>Time Reminder</h5>
                <p>
                  <div className='container'>

                    <div className='row'>
                      <div className='col-3'>
                        <h4>{days < 10 ? "0" + days : days}:</h4>
                        <span className='text'>Days</span>
                      </div>
                      <div className='col-3'>
                        <h4>{hours < 10 ? "0" + hours : hours}:</h4>
                        <span className='text'>Hours</span>
                      </div>
                      <div className='col-3'>
                        <h4>{mins < 10 ? "0" + mins : mins}:</h4>
                        <span className='text'>Minutes</span>
                      </div>
                      <div className='col-3'>
                        <h4>{secs < 10 ? "0" + secs : secs}</h4>
                        <span className='text'>Seconds</span>
                      </div>
                    </div>

                  </div>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className='Title-container'>
              <div
                onClick={() => handleTitleClick("DETAILS")}
                className={activeTitle === "DETAILS" ? "active" : ""}

              >
                <b>DETAILS</b>
              </div>
              <div
                onClick={() => handleTitleClick("AMENITIES")}
                className={activeTitle === "AMENITIES" ? "active" : ""}
              >
                <b>AMENITIES</b>
              </div>
              <div
                onClick={() => handleTitleClick("REVIEWS")}
                className={activeTitle === "REVIEWS" ? "active" : ""}
              >
                <b>REVIEWS</b>
              </div>
            </div>
            <div className='Line'></div>
            <div className='Bottom'>
              {activeTitle === "Default" && Default}
              {activeTitle === "DETAILS" && details}
              {activeTitle === "AMENITIES" && amenities}
              {activeTitle === "REVIEWS" && reviews}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};