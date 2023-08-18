import React from 'react';
import './Checkout.css';
import { useLocation } from 'react-router-dom';


export default function Checkout() {

    
    const cardPrices = {
        DP1: 1260,
        DP2: 1800,
        DP3: 900,
        DP4: 900,
        SP1: 720,
        SP2: 1350,
        SP3: 1080,
      };

      const location = useLocation();
      const queryParams = new URLSearchParams(location.search);
      const card = queryParams.get('cardName');
      const quantity = parseInt(queryParams.get('quantity'), 10) || 1;

    
      const productPrice = cardPrices[card] || 0;

      const estimatedCost = productPrice * quantity;
    

    return (
        <>
            <div className='TopCheckout'>
                <div className='TopLeft'>
                    <h5>CHECKOUT</h5>
                </div>
                <div className='TopRight'>
                    <h5>HOME / CHECKOUT</h5>
                </div>
            </div>
            <div className='Checkout-content'>
                <div className='Left'>
                    <h2>Billing Details</h2>
                    <div className='Row1'>
                        <div>
                            <h5>First Name</h5>
                            <input type="text" id="name" name="name" required></input>
                        </div>
                        <div>
                            <h5>Last Name</h5>
                            <input type="text" id="name" name="name" required></input>
                        </div>
                    </div>
                    <div className='Row2'>
                        <div>
                            <h5>Phone</h5>
                            <input type="number" id="number" name="number" required></input>
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input type="email" id="email" name="email" required></input>
                        </div>
                    </div>
                    <div className='Row3'>
                        <h5>Country</h5>
                        <select id="country" name="country" required>
                            <option value="" disabled selected>India</option>
                            <option value="usa">United States</option>
                            <option value="canada">Canada</option>
                            <option value="canada">Australia</option>
                        </select>
                    </div>
                    <div className='Row4'>
                        <div>
                            <h5>Address</h5>
                            <input type="adress" id="adress" name="adress" required></input>
                        </div>
                    </div>
                    <div className='Row5'>
                        <div>
                            <h5>Town / City</h5>
                            <input type="city" id="city" name="city" required></input>
                        </div>
                    </div>
                    <div className='Row6'>
                        <div>
                            <h5>State / Country</h5>
                            <input type="state" id="state" name="state" required></input>
                        </div>
                    </div>
                    <div className='Row7'>
                        <div>
                            <h5>Postal Code</h5>
                            <input type="number" id="code" name="code" required></input>
                        </div>
                    </div>
                    <div className='Row8'>
                        <div>
                            <input type="checkbox" id="account" name="account"></input><label for="account"> Create An Account?</label>
                        </div>

                    </div>

                </div>


                <div className='Right'>
                    <div className='Right-div'>
                        <h3>Product</h3>
                        <h3>Total</h3>
                    </div>
                    <div class="dotted-line"></div>
                    <div className='Price-Cal'>
                        Roysten cold storages and warehouses facilities × <b>{quantity}</b> = <b>₹{estimatedCost}</b>
                    </div>
                </div>
            </div>
        </>
    );
}
