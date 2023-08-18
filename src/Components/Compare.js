import React from 'react';
import './Compare.css';

export default function Compare() {
    return (
        <div className='Compare-page'>
            <div className='Topheader'>
                <div className='Topleft'>
                    <h5>COMPARE</h5>
                </div>
                <div className='Topright'>
                    <h5>HOME / COMPARE</h5>
                </div>
            </div>
            <table className='Rows'>
                <tr>
                    <td>Action</td>
                </tr>
                <tr>
                    <td>Product Name</td>
                </tr>
                <tr>
                    <td>Product Image</td>
                </tr>
                <tr>
                    <td>Product Name</td>
                </tr>
                <tr>
                    <td>Product Description</td>
                </tr>
                <tr>
                    <td>Availablity</td>
                </tr>
            </table>
        </div>
    );
}
