import React from 'react';
import { NavLink } from 'react-router-dom';
import companyLogo from '../../assets/images/yash-logo-new.svg';

const Nav = () => {
  return (
    <header className="navbar">
      <NavLink to="/masterData">
        <img src={companyLogo} alt="BigCo Inc. logo" />
      </NavLink>
      <NavLink to="/addMasterData">Master data Entry</NavLink>
      <NavLink to="/masterData">View Master data</NavLink>
      <NavLink to="/chart">Chart/Graph</NavLink>
      <NavLink to="/poolProject"> Pool Project</NavLink>
      <NavLink to="/skills"> Resource History Page</NavLink>
      <NavLink to="/skills"> View Skills</NavLink>
      {/* <NavLink to="/editskill"> Edit Skills</NavLink> */}
    </header>
  );
};

export default Nav;