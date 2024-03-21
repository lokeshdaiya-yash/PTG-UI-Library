import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';
import ViewMasterdata from '../../ViewMasterdata';

function Landing() {
  return (
    <div>
      <Header />
      
      <div style={{ border: '1px solid green', height: '100vh', width: '100%' }}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
