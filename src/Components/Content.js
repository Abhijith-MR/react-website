import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Content.css'
import Dedicated from './Dedicated';
import Shared from './Shared';
import Brand1 from '../Images/Brand1.png';
import Brand2 from '../Images/Brand2.png';
import Brand3 from '../Images/Brand3.png';
import Brand4 from '../Images/Brand4.png';
import Brand5 from '../Images/Brand5.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Search from '../Images/Search.png';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DP1 from '../ProductsInfo/DP1';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';






export default function Content() {

    const [currentTab, setCurrentTab] = useState('')


    const handleTab = (tabName) => {
        setCurrentTab(tabName)

    }


    function getActiveTab() {
        if (currentTab === 'dedicated') {
            return <Dedicated />
        } else if (currentTab === 'shared') {
            return <Shared />
        } else {
            return <div><Dedicated /></div>
        }
    }



    const [selectedDate, setSelectedDate] = useState(new Date());


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

    function handleLogoClick() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }


    return (
        <div>

            <div className='Loc-Date'>
                <div className='Location'>
                    <h4><b>Location</b></h4>
                    <p>Goa</p>
                </div>

                <div className='CheckIn'>
                    <label>Check-In:</label>
                    <DatePicker selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        className='custom-datepicker' />
                    <DateRangeIcon className='date-range-icon' />
                </div>
                <div className='CheckOut'>
                    <label>Check-Out:</label>
                    <DatePicker selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        className='custom-datepicker' />
                    <DateRangeIcon className='date-range-icon' />
                </div>
                <div className='Search'>
                    <img className='Srh' src={Search} alt="My Image" />
                </div>

            </div>

            <div className='contentHeader'>
                <h2>WAREHOUSE TYPES</h2>
            </div>
            <div className='title-inner'></div>



            <div className='contentTitle'>
                <div className='Info' onClick={() => { handleTab('dedicated') }} style={{ color: currentTab === 'dedicated' ? '#ff0000' : '#000000' }}>DEDICATED</div>
                <div className='Info' onClick={() => { handleTab('shared') }} style={{ color: currentTab === 'shared' ? '#ff0000' : '#000000' }}>SHARED</div>
            </div>
            {getActiveTab()}





            <div className='brands'>
                <img className='br' src={Brand1} alt="My Image" />
                <img className='br' src={Brand2} alt="My Image" />
                <img className='br' src={Brand3} alt="My Image" />
                <img className='br' src={Brand4} alt="My Image" />
                <img className='br' src={Brand5} alt="My Image" />
            </div>

            <div className='footer'>
                <div className='content'>
                    <img className="logo-image" src="https://bizzrupt-warehouse-frontend-m9owt6fxk-gowdavishwajith-gmailcom.vercel.app/assets/images/icon/logo_final.png" alt="My Image" onClick={handleLogoClick} />
                    <p>Enable manufacturers, buyers and sellers, retailers</p>
                    <p>of all sizes with most efficient warehousing needs,</p>
                    <div className='icons'>
                        <a className='icon1' onClick={openFacebookLoginPage}><FacebookIcon /></a>
                        <a className='icon1' onClick={openGoogleLoginPage}><GoogleIcon /></a>
                        <a className='icon1' onClick={openTwitterLoginPage}><TwitterIcon /></a>
                        <a className='icon1' onClick={openInstagramLoginPage}><InstagramIcon /></a>
                        <a className='icon1' onClick={openRSSLoginPage}><RssFeedIcon /></a>
                    </div>
                    <div className='conditions'>
                        <p> &#169; 2021-22 Bizrupt | Privacy | Terms | Sitemap | Company details</p>
                    </div>

                </div>
                
                    <div className='footer-content1'>
                        <h4>MY ACCOUNT</h4>
                        <p><a className='F1'>Personal Info</a></p>
                        <p><a className='F1'>My Bookings</a></p>
                        <p><a className='F1'>Privacy & Security</a></p>
                        <p><a className='F1'>Payments</a></p>
                    </div>


                <div className='footer-content2'>
                    <h4>SUPPORT</h4>
                    <p><a className='F2'>Space Square, Demo Store India 345-659</a></p>
                    <p><a className='F2'>Call Us: 123-456-7898</a></p>
                    <p><a className='F2'>Email Us: Support@Spacesquare.Tk</a></p>
                    <p><a className='F2'>Fax: 123456</a></p>
                </div>
            </div>



        </div>

    );
}
