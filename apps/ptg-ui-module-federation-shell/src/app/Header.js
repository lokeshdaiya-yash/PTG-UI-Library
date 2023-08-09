import React from 'react';
import './header.css';
import { Route, Routes, Link } from 'react-router-dom';



function Header() {
  return (
    <div class="header">
      <a href="#default" class="logo">
        Header Component
      </a>
      <div class="header-right">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        {/* <a href="Login.js" >login</a> */}
        
     
      </div>
    </div>
  );
}

export default Header;