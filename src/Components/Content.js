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

            



        </div>

    );
}
