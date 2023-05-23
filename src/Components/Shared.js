import React from 'react';
import myImage1 from '../Images/image5.jpg';
import myImage2 from '../Images/image6.jpg';
import myImage3 from '../Images/image7.jpg';

import './Dedicated.css';

export default function Shared() {
  return (
    <div className='imageInfo'>
    <div className='card1'>
      <img src={myImage1} alt="My Image" />
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

    <div className='card2'>
      <img src={myImage2} alt="My Image" />
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

    <div className='card3'>
      <img src={myImage3} alt="My Image" />
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

  </div>
  );
}
