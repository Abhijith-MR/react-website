import './App.css';
import React, { useState, useNavigate } from 'react';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import DP1 from './ProductsInfo/DP1';
import Dedicated from './Components/Dedicated';
import MainComponent from './Components/MainComponet';
import Footer from './Components/Footer';
import ScrolltoTop from './Components/ScrolltoTop';
import Compare from './Components/Compare';
import SP1 from './ProductsInfo/SP1';
import Checkout from './Components/Checkout';



function App() {



  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

      <Content />
      <Footer />
      <ScrolltoTop />

      {/* <Checkout /> */}

      
      
   

    </div>
  );
}

export default App;