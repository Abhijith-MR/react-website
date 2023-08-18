import React, { useState } from 'react';
import myImage1 from '../Images/image5.jpg';
import myImage2 from '../Images/image6.jpg';
import myImage3 from '../Images/image7.jpg';
import './Shared.css';
import SP1 from '../ProductsInfo/SP1';
import SP2 from '../ProductsInfo/SP2';
import SP3 from '../ProductsInfo/SP3';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import CachedIcon from '@mui/icons-material/Cached';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Compare from './Compare';



export default function Shared() {

  const [activeCard, setActiveCard] = useState(null);


  const handleCardClick = (cardName) => {
    setActiveCard(cardName);
  };

  const [showIcons, setShowIcons] = useState({
    SP1: false,
    SP2: false,
    SP3: false,
    SP4: false,
  });

  const handleMouseEnter = (cardName) => {
    setShowIcons((prevState) => ({ ...prevState, [cardName]: true }));
  };

  const handleMouseLeave = (cardName) => {
    setShowIcons((prevState) => ({ ...prevState, [cardName]: false }));
  };



  const [showPopupSP1, setShowPopupSP1] = useState(false);
  const [showPopupSP2, setShowPopupSP2] = useState(false);
  const [showPopupSP3, setShowPopupSP3] = useState(false);
  

  const handleSearchIconClickSP1 = () => {
    setShowPopupSP1(true);
  };
  const handleSearchIconClickSP2 = () => {
    setShowPopupSP2(true);
  };
  const handleSearchIconClickSP3 = () => {
    setShowPopupSP3(true);
  };
  
  const [showPopupSP1A, setShowPopupSP1A] = useState(false);
  const [showPopupSP2A, setShowPopupSP2A] = useState(false);
  const [showPopupSP3A, setShowPopupSP3A] = useState(false);
  

  const handleCachedIconClickSP1A = () => {
    setShowPopupSP1A(true);
  };
  const handleCachedIconClickSP2A = () => {
    setShowPopupSP2A(true);
  };
  const handleCachedIconClickSP3A = () => {
    setShowPopupSP3A(true);
  };



  const handleClosePopupSP1 = () => {
    setShowPopupSP1(false);
  };
  const handleClosePopupSP2 = () => {
    setShowPopupSP2(false);
  };
  const handleClosePopupSP3 = () => {
    setShowPopupSP3(false);
  };

  const handleClosePopupSP1A = () => {
    setShowPopupSP1A(false);
  };
  const handleClosePopupSP2A = () => {
    setShowPopupSP2A(false);
  };
  const handleClosePopupSP3A = () => {
    setShowPopupSP3A(false);
  };


  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleInputChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };


  const [showCompare, setShowCompare] = useState(false);

  const handleViewCompareList = () => {
    setShowCompare(true);
    setShowPopupSP1A(false);
    setShowPopupSP2A(false);
    setShowPopupSP3A(false); // Hide the popup when button is clicked
  };

  

  return (
    <Router>

      {showCompare ? <Compare /> :
        <div className='imageInfo'>
          {activeCard !== null ? (
            <>
              {activeCard === 'SP1' && <SP1 />}
              {activeCard === 'SP2' && <SP2 />}
              {activeCard === 'SP3' && <SP3 />}
            </>
          ) : (
            <>

              <div className='card1' onClick={() => handleCardClick('SP1')} onMouseEnter={() => handleMouseEnter('SP1') }

              >
                <Link to="/SP1">
                  <img src={myImage1} alt="My Image" />
                </Link>

                <div class='rating'>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                </div>
                <h6>Warehouse available at Bangalore</h6>
                <h4 className='Price'>
                  ₹7.20
                  <del>
                    ₹8.00
                  </del>
                </h4>

              </div>

              {showIcons.SP1 && (
                <div className="hoverIconsSP1" onMouseLeave={() => handleMouseLeave('SP1')}>
                  <span className="iconDP1" ><ShoppingCartIcon /></span>
                  <span className="iconDP1"><FavoriteIcon /></span>
                  <span className="iconDP1" onClick={handleSearchIconClickSP1} style={{ cursor: 'pointer' }}><SearchIcon /></span>
                  <span className="iconDP1" onClick={handleCachedIconClickSP1A} style={{ cursor: 'pointer' }}><CachedIcon /></span>
                </div>
              )}
              {showPopupSP1 && (
                <div className="popup" >
                  <div className='popup-content'>
                    <div className='Popup-left'>
                      <img src={myImage1} alt="My Image" />
                    </div>
                    <div className='Popup-right'>
                      <span className="close-btn" onClick={handleClosePopupSP1} ><CloseIcon /></span>
                      <h3>WAREHOUSE AVAILABLE AT BANGALOR</h3>
                      <p className='DP1Price'>₹8.00</p>
                      <div className="Popdotted-line1"></div>
                      <div className='PopDetails'>
                        <h5>Product Details</h5>
                        <p>Warehouse At Bangalore At cheaper price</p>
                      </div>
                      <div className="Popdotted-line2"></div>
                      <div className='PopQTY'>
                        <h5>Quantity</h5>
                      </div>
                      <div className="quantity-selector">
                        <button className="quantity-button" onClick={handleDecrease}>
                          <ChevronLeftIcon />
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          min="1"
                          value={quantity}
                          onChange={handleInputChange}
                        />
                        <button className="quantity-button" onClick={handleIncrease}>
                          <ChevronRightIcon />
                        </button>
                      </div>
                      <div className='DP1-buttons'>
                        <Link className='btnDP1'>ADD TO CART</Link>
                        <Link to={`/SP1?quantity=${quantity}`} className='btnDP1' onClick={() => handleCardClick('SP1')}>VIEW DETAIL</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}


            {showPopupSP1A && (
              <div className="popup" >
                <div className='Popup-left-right'>
                  <img src={myImage1} alt="My Image" />
                  <h5><span>&#10004;</span>Item Warehouse available at Bangalore successfully added to your Compare list</h5>
                  <Link to='/Comapare' className='Comparebtn' onClick={handleViewCompareList}>View Compare List</Link>
                </div>

                <span className="close-btn1" onClick={handleClosePopupSP1A} ><CloseIcon /></span>

              </div>
              )}




              <div className='card2' onClick={() => handleCardClick('SP2')} onMouseEnter={() => handleMouseEnter('SP2')}
              >
                <Link to="/SP2"><img src={myImage2} alt="My Image" /></Link>
                <div class='rating'>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                </div>
                <h6>A T warehouses</h6>
                <h4 className='Price'>
                  ₹13.50
                  <del>
                    ₹15.00
                  </del>
                </h4>
              </div>

              {showIcons.SP2 && (
                <div className="hoverIconsSP1" onMouseLeave={() => handleMouseLeave('SP2')}>
                  <span className="iconDP1" ><ShoppingCartIcon /></span>
                  <span className="iconDP1"><FavoriteIcon /></span>
                  <span className="iconDP1" onClick={handleSearchIconClickSP2} style={{ cursor: 'pointer' }}><SearchIcon /></span>
                  <span className="iconDP1" onClick={handleCachedIconClickSP2A} style={{ cursor: 'pointer' }}><CachedIcon /></span>
                </div>
              )}
              {showPopupSP2 && (
                <div className="popup" >
                  <div className='popup-content'>
                    <div className='Popup-left'>
                      <img src={myImage2} alt="My Image" />
                    </div>
                    <div className='Popup-right'>
                      <span className="close-btn" onClick={handleClosePopupSP2} ><CloseIcon /></span>
                      <h3>A T warehouses</h3>
                      <p className='DP1Price'>₹15.00</p>
                      <div className="Popdotted-line1"></div>
                      <div className='PopDetails'>
                        <h5>Product Details</h5>
                        <p>Here at A T warehouses, we are located near saka nake junction 2 Kms from the national highway. Palet sizes across multiple sizes are available.</p>
                      </div>
                      <div className="Popdotted-line2"></div>
                      <div className='PopQTY'>
                        <h5>Quantity</h5>
                      </div>
                      <div className="quantity-selector">
                        <button className="quantity-button" onClick={handleDecrease}>
                          <ChevronLeftIcon />
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          min="1"
                          value={quantity}
                          onChange={handleInputChange}
                        />
                        <button className="quantity-button" onClick={handleIncrease}>
                          <ChevronRightIcon />
                        </button>
                      </div>
                      <div className='DP1-buttons'>
                        <Link className='btnDP1'>ADD TO CART</Link>
                        <Link to={`/SP2?quantity=${quantity}`} className='btnDP1' onClick={() => handleCardClick('SP2')}>VIEW DETAIL</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {showPopupSP2A && (
                <div className="popup" >
                  <div className='Popup-left-right'>
                    <img src={myImage2} alt="My Image" />
                    <h5><span>&#10004;</span>Item A T warehousessuccessfully added to your Compare list</h5>
                    <Link to='/Comapare' className='Comparebtn' onClick={handleViewCompareList}>View Compare List</Link>
                  </div>

                  <span className="close-btn1" onClick={handleClosePopupSP2A} ><CloseIcon /></span>

                </div>
              )}









              <div className='card3' onClick={() => handleCardClick('SP3')} onMouseEnter={() => handleMouseEnter('SP3')}
              >
                <Link to="/SP3"><img src={myImage3} alt="My Image" /></Link>
                <div class='rating'>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                </div>
                <h6>Bizrupt Goa</h6>
                <h4 className='Price'>
                  ₹10.80
                  <del>
                    ₹12.00
                  </del>
                </h4>
              </div>

              {showIcons.SP3 && (
                <div className="hoverIconsSP1" onMouseLeave={() => handleMouseLeave('SP3')}>
                  <span className="iconDP1" ><ShoppingCartIcon /></span>
                  <span className="iconDP1"><FavoriteIcon /></span>
                  <span className="iconDP1" onClick={handleSearchIconClickSP3} style={{ cursor: 'pointer' }}><SearchIcon /></span>
                  <span className="iconDP1" onClick={handleCachedIconClickSP3A} style={{ cursor: 'pointer' }}><CachedIcon /></span>
                </div>
              )}
              {showPopupSP3 && (
                <div className="popup" >
                  <div className='popup-content'>
                    <div className='Popup-left'>
                      <img src={myImage3} alt="My Image" />
                    </div>
                    <div className='Popup-right'>
                      <span className="close-btn" onClick={handleClosePopupSP3} ><CloseIcon /></span>
                      <h3>BIZRUPT GOA</h3>
                      <p className='DP1Price'>₹12.00</p>
                      <div className="Popdotted-line1"></div>
                      <div className='PopDetails'>
                        <h5>Product Details</h5>
                        <p>Some cool decription. </p>
                      </div>
                      <div className="Popdotted-line2"></div>
                      <div className='PopQTY'>
                        <h5>Quantity</h5>
                      </div>
                      <div className="quantity-selector">
                        <button className="quantity-button" onClick={handleDecrease}>
                          <ChevronLeftIcon />
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          min="1"
                          value={quantity}
                          onChange={handleInputChange}
                        />
                        <button className="quantity-button" onClick={handleIncrease}>
                          <ChevronRightIcon />
                        </button>
                      </div>
                      <div className='DP1-buttons'>
                        <Link className='btnDP1'>ADD TO CART</Link>
                        <Link to={`/SP3?quantity=${quantity}`} className='btnDP1' onClick={() => handleCardClick('SP3')}>VIEW DETAIL</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {showPopupSP3A && (
                <div className="popup" >
                  <div className='Popup-left-right'>
                    <img src={myImage3} alt="My Image" />
                    <h5><span>&#10004;</span>Item Bizrupt Goasuccessfully added to your Compare list</h5>
                    <Link to='/Comapare' className='Comparebtn' onClick={handleViewCompareList}>View Compare List</Link>
                  </div>

                  <span className="close-btn1" onClick={handleClosePopupSP3A} ><CloseIcon /></span>

                </div>
              )}


            </>
          )}


        </div>
      }


    </Router>

  );
}
