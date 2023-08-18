import React, { useEffect } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import './ScrolltoTop.css';
import { animateScroll as scroll } from 'react-scroll';

export default function ScrolltoTop() {

    
        const handleScrollToTop = () => {
          scroll.scrollToTop({
            smooth: true,
            duration: 900, 
          });
        };
  return (
    <>
      <button id='topbtn' onClick={handleScrollToTop} ><KeyboardDoubleArrowUpIcon/></button>
    </>
  );
}
