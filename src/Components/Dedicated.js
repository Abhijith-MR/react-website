import React, { useState } from 'react';
import myImage1 from '../Images/image1.jpg';
import myImage2 from '../Images/image2.jpg';
import myImage3 from '../Images/image3.jpg';
import myImage4 from '../Images/image4.png';
import './Dedicated.css';
import DP1 from '../ProductsInfo/DP1';
import DP2 from '../ProductsInfo/DP2';
import DP3 from '../ProductsInfo/DP3';
import DP4 from '../ProductsInfo/DP4';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import CachedIcon from '@mui/icons-material/Cached';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Compare from './Compare';






export default function Dedicated() {



  const [activeCard, setActiveCard] = useState(null);


  const handleCardClick = (cardName) => {
    setActiveCard(cardName);
  };

  const [showIcons, setShowIcons] = useState({
    DP1: false,
    DP2: false,
    DP3: false,
    DP4: false,
  });

  const handleMouseEnter = (cardName) => {
    setShowIcons((prevState) => ({ ...prevState, [cardName]: true }));
  };

  const handleMouseLeave = (cardName) => {
    setShowIcons((prevState) => ({ ...prevState, [cardName]: false }));
  };

  // const [showPopup, setShowPopup] = useState(false);

  // const handleSearchIconClick = () => {
  //   setShowPopup(true);
  // };

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  // const [showPopup1, setShowPopup1] = useState(false);

  // const handleCachedIconClick = () => {
  //   setShowPopup1(true);
  // };

  // const handleClosePopup1 = () => {
  //   setShowPopup1(false);
  // };

  const [showPopupDP1, setShowPopupDP1] = useState(false);
  const [showPopupDP2, setShowPopupDP2] = useState(false);
  const [showPopupDP3, setShowPopupDP3] = useState(false);
  const [showPopupDP4, setShowPopupDP4] = useState(false);

  const handleSearchIconClickDP1 = () => {
    setShowPopupDP1(true);
  };
  const handleSearchIconClickDP2 = () => {
    setShowPopupDP2(true);
  };
  const handleSearchIconClickDP3 = () => {
    setShowPopupDP3(true);
  };
  const handleSearchIconClickDP4 = () => {
    setShowPopupDP4(true);
  };

  const [showPopupDP1A, setShowPopupDP1A] = useState(false);
  const [showPopupDP2A, setShowPopupDP2A] = useState(false);
  const [showPopupDP3A, setShowPopupDP3A] = useState(false);
  const [showPopupDP4A, setShowPopupDP4A] = useState(false);

  const handleCachedIconClickDP1A = () => {
    setShowPopupDP1A(true);
  };
  const handleCachedIconClickDP2A = () => {
    setShowPopupDP2A(true);
  };
  const handleCachedIconClickDP3A = () => {
    setShowPopupDP3A(true);
  };
  const handleCachedIconClickDP4A = () => {
    setShowPopupDP4A(true);
  };


  const handleClosePopupDP1 = () => {
    setShowPopupDP1(false);
  };
  const handleClosePopupDP2 = () => {
    setShowPopupDP2(false);
  };
  const handleClosePopupDP3 = () => {
    setShowPopupDP3(false);
  };
  const handleClosePopupDP4 = () => {
    setShowPopupDP4(false);
  };

  const handleClosePopupDP1A = () => {
    setShowPopupDP1A(false);
  };
  const handleClosePopupDP2A = () => {
    setShowPopupDP2A(false);
  };
  const handleClosePopupDP3A = () => {
    setShowPopupDP3A(false);
  };
  const handleClosePopupDP4A = () => {
    setShowPopupDP4A(false);
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
    setShowPopupDP1A(false);
    setShowPopupDP2A(false);
    setShowPopupDP3A(false);
    setShowPopupDP4A(false); // Hide the popup when button is clicked
  };

  return (
    <Router>

      {showCompare ? <Compare /> :
        <div className='imageInfo'>
          {activeCard !== null ? (
            <>
              {activeCard === 'DP1' && <DP1 />}
              {activeCard === 'DP2' && <DP2 />}
              {activeCard === 'DP3' && <DP3 />}
              {activeCard === 'DP4' && <DP4 />}
            </>
          ) : (
            <>

              <div className='card1' onClick={() => handleCardClick('DP1')} onMouseEnter={() => handleMouseEnter('DP1')}

              >
                <Link to="/DP1">
                  <img src={myImage1} alt="My Image" />
                </Link>

                <div class='rating'>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                </div>
                <h6>Roysten cold storages facilities</h6>
                <h4 className='Price'>
                  ₹14.00
                  <del>
                    ₹14.80
                  </del>
                </h4>

              </div>

              {showIcons.DP1 && (
                <div className="hoverIconsDP1" onMouseLeave={() => handleMouseLeave('DP1')}>
                  <span className="iconDP1" ><ShoppingCartIcon /></span>
                  <span className="iconDP1"><FavoriteIcon /></span>
                  <span className="iconDP1" onClick={handleSearchIconClickDP1} style={{ cursor: 'pointer' }}><SearchIcon /></span>
                  <span className="iconDP1" onClick={handleCachedIconClickDP1A} style={{ cursor: 'pointer' }}><CachedIcon /></span>
                </div>
              )}
              {showPopupDP1 && (
                <div className="popup" >
                  <div className='popup-content'>
                    <div className='Popup-left'>
                      <img src={myImage1} alt="My Image" />
                    </div>
                    <div className='Popup-right'>
                      <span className="close-btn" onClick={handleClosePopupDP1} ><CloseIcon /></span>
                      <h3>ROYSTEN COLD STORAGES AND WAREHOUSES FACILITIES</h3>
                      <p className='DP1Price'>₹14.00</p>
                      <div className="Popdotted-line1"></div>
                      <div className='PopDetails'>
                        <h5>Product Details</h5>
                        <p>Here at roysten cold storages and warehouses facilities, we provide cold storages and warehousing option, Available for rent. Contact Us</p>
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
                          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                        />
                        <button className="quantity-button" onClick={handleIncrease}>
                          <ChevronRightIcon />
                        </button>
                      </div>
                      <div className='DP1-buttons'>
                        <Link className='btnDP1'>ADD TO CART</Link>
                        <Link to={`/DP1?quantity=${quantity}`} className='btnDP1' onClick={() => handleCardClick('DP1')}>VIEW DETAIL</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {showPopupDP1A && (
                <div className="popup" >
                  <div className='Popup-left-right'>
                    <img src={myImage1} alt="My Image" />
                    <h5><span>&#10004;</span>Item Roysten cold storages and warehouses facilitiessuccessfully added to your Compare list</h5>
                    <Link to='/Comapare' className='Comparebtn' onClick={handleViewCompareList}>View Compare List</Link>
                  </div>

                  <span className="close-btn1" onClick={handleClosePopupDP1A} ><CloseIcon /></span>

                </div>
              )}





              <div className='card2' onClick={() => handleCardClick('DP2')} onMouseEnter={() => handleMouseEnter('DP2')}
            >
                <Link to="/DP2"><img src={myImage2} alt="My Image" /></Link>
                <div class='rating'>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                </div>
                <h6>Patel warehouse</h6>
                <h4 className='Price'>
                  ₹18.00
                  <del>
                    ₹20.00
                  </del>
                </h4>
              </div>

              {showIcons.DP2 && (
                <div className="hoverIconsDP1" onMouseLeave={() => handleMouseLeave('DP2')}>
                  <span className="iconDP1" ><ShoppingCartIcon /></span>
                  <span className="iconDP1"><FavoriteIcon /></span>
                  <span className="iconDP1" onClick={handleSearchIconClickDP2} style={{ cursor: 'pointer' }}><SearchIcon /></span>
                  <span className="iconDP1" onClick={handleCachedIconClickDP2A} style={{ cursor: 'pointer' }}><CachedIcon /></span>
                </div>
              )}
              {showPopupDP2&& (
                <div className="popup" >
                  <div className='popup-content'>
                    <div className='Popup-left'>
                      <img src={myImage2} alt="My Image" />
                    </div>
                    <div className='Popup-right'>
                      <span className="close-btn" onClick={handleClosePopupDP2} ><CloseIcon /></span>
                      <h3>PATEL WAREHOUSE</h3>
                      <p className='DP1Price'>₹20.00</p>
                      <div className="Popdotted-line1"></div>
                      <div className='PopDetails'>
                        <h5>Product Details</h5>
                        <p>Here at, Patel warehouse, multiple spaces are available for rent.</p>
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
                        <Link to={`/DP2?quantity=${quantity}`}className='btnDP1' onClick={() => handleCardClick('DP2')}>VIEW DETAIL</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {showPopupDP2A && (
                <div className="popup" >
                  <div className='Popup-left-right'>
                    <img src={myImage2} alt="My Image" />
                    <h5><span>&#10004;</span>Item Patel warehousesuccessfully added to your Compare list</h5>
                    <Link to='/Comapare' className='Comparebtn' onClick={handleViewCompareList}>View Compare List</Link>
                  </div>

                  <span className="close-btn1" onClick={handleClosePopupDP2A} ><CloseIcon /></span>

                </div>
              )}









              <div className='card3' onClick={() => handleCardClick('DP3')} onMouseEnter={() => handleMouseEnter('DP3')}
                >
                <Link to="/DP3"><img src={myImage3} alt="My Image" /></Link>
                <div class='rating'>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                </div>
                <h6>Mirage hotel</h6>
                <h4 className='Price'>
                  ₹9.00
                  <del>
                    ₹10.00
                  </del>
                </h4>
              </div>

              {showIcons.DP3 && (
                <div className="hoverIconsDP1" onMouseLeave={() => handleMouseLeave('DP3')}>
                  <span className="iconDP1" ><ShoppingCartIcon /></span>
                  <span className="iconDP1"><FavoriteIcon /></span>
                  <span className="iconDP1" onClick={handleSearchIconClickDP3} style={{ cursor: 'pointer' }}><SearchIcon /></span>
                  <span className="iconDP1" onClick={handleCachedIconClickDP3A} style={{ cursor: 'pointer' }}><CachedIcon /></span>
                </div>
              )}
              {showPopupDP3 && (
                <div className="popup" >
                  <div className='popup-content'>
                    <div className='Popup-left'>
                      <img src={myImage3} alt="My Image" />
                    </div>
                    <div className='Popup-right'>
                      <span className="close-btn" onClick={handleClosePopupDP3} ><CloseIcon /></span>
                      <h3>MIRAGE HOTEL</h3>
                      <p className='DP1Price'>₹10.00</p>
                      <div className="Popdotted-line1"></div>
                      <div className='PopDetails'>
                        <h5>Product Details</h5>
                        <p>The 4-star Mirage Hotel is a modern property in Mumbai, about just over half a mile from Chatrapathi Shivaji International Airport. </p>
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
                        <Link to={`/DP3?quantity=${quantity}`} className='btnDP1' onClick={() => handleCardClick('DP3')}>VIEW DETAIL</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {showPopupDP3A && (
                <div className="popup" >
                  <div className='Popup-left-right'>
                    <img src={myImage3} alt="My Image" />
                    <h5><span>&#10004;</span>Item Patel warehousesuccessfully added to your Compare list</h5>
                    <Link to='/Comapare' className='Comparebtn' onClick={handleViewCompareList}>View Compare List</Link>
                  </div>

                  <span className="close-btn1" onClick={handleClosePopupDP3A} ><CloseIcon /></span>

                </div>
              )}





              <div className='card4' onClick={() => handleCardClick('DP4')} onMouseEnter={() => handleMouseEnter('DP4')}
                >
                <Link to="/DP4"><img src={myImage4} alt="My Image" /></Link>
                <div class='rating'>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                  <i class="fa fa-star" aria-hidden='true'></i>
                </div>
                <h6>Test</h6>
                <h4 className='Price'>
                  ₹14.60
                  <del>
                    ₹14.00
                  </del>
                </h4>
              </div>

              {showIcons.DP4 && (
                <div className="hoverIconsDP1" onMouseLeave={() => handleMouseLeave('DP4')}>
                  <span className="iconDP1" ><ShoppingCartIcon /></span>
                  <span className="iconDP1"><FavoriteIcon /></span>
                  <span className="iconDP1" onClick={handleSearchIconClickDP4} style={{ cursor: 'pointer' }}><SearchIcon /></span>
                  <span className="iconDP1" onClick={handleCachedIconClickDP4A} style={{ cursor: 'pointer' }}><CachedIcon /></span>
                </div>
              )}

              {showPopupDP4 && (
                <div className="popup" >
                  <div className='popup-content'>
                    <div className='Popup-left'>
                      <img src={myImage4} alt="My Image" />
                    </div>
                    <div className='Popup-right'>
                      <span className="close-btn" onClick={handleClosePopupDP4} ><CloseIcon /></span>
                      <h3>TEST</h3>
                      <p className='DP1Price'>₹10.00</p>
                      <div className="Popdotted-line1"></div>
                      <div className='PopDetails'>
                        <h5>Product Details</h5>
                        <p>Test</p>
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
                        <Link to={`/DP4?quantity=${quantity}`} className='btnDP1' onClick={() => handleCardClick('DP4')}>VIEW DETAIL</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {showPopupDP4A&& (
                <div className="popup" >
                  <div className='Popup-left-right'>
                    <img src={myImage4} alt="My Image" />
                    <h5><span>&#10004;</span>Item testsuccessfully added to your Compare list</h5>
                    <Link to='/Comapare' className='Comparebtn' onClick={handleViewCompareList}>View Compare List</Link>
                  </div>

                  <span className="close-btn1" onClick={handleClosePopupDP4A} ><CloseIcon /></span>

                </div>
              )}

            </>
          )}


        </div>
      }


    </Router>

  );
};
