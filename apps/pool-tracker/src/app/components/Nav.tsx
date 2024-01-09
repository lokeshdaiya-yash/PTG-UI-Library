import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className='navbar'>
      {/* <ul className="nav-ul">
        <li> */}
          <NavLink to="/all">View Master data</NavLink>
        {/* </li>
        <li> */}
          <NavLink to="/add"> Add Master data</NavLink>
        {/* </li>
      </ul> */}
    </header>
  );
};

export default Nav;
