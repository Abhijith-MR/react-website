import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import './Footer.css'

export default function Footer() {

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
    <>
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
    </>
  );
}
