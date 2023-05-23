import React from 'react';
import myImage1 from '../Images/image1.jpg';
import myImage2 from '../Images/image2.jpg';
import myImage3 from '../Images/image3.jpg';
import myImage4 from '../Images/image4.png';
import './Dedicated.css';



export default function Dedicated() {
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
        <h6>Roysten cold storages facilities</h6>
        <h4 className='Price'>
          ₹14.00
          <del>
            ₹14.80
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
        <h6>Patel warehouse</h6>
        <h4 className='Price'>
          ₹18.00
          <del>
            ₹20.00
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
        <h6>Mirage hotel</h6>
        <h4 className='Price'>
          ₹9.00
          <del>
            ₹10.00
          </del>
        </h4>
      </div>

      <div className='card4'>
        <img src={myImage4} alt="My Image" />
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

    </div>
  );
}
