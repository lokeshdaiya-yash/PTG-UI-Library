import React, { useState } from 'react';
import './header.css';

function Header({ handleChange }) {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  return (
    <div className="header" style={{ marginTop: 15 }}>
      <a href="#default" className="logo">
        Header Component
      </a>
      <div className="header-right">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact us</a>
        <a href="#about">Logout</a>

        <div>
          <br />
          <br />

          <input type="text" placeholder="Search..." onChange={handleChange} />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Header;
