import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../../../assets/images/yash-logo-new.svg';
import data from '../../../../assets/images/dashboard/data.png';
import config from '../../../../assets/images/dashboard/config.svg';
import designation from '../../../../assets/images/dashboard/designation.png';
import band from '../../../../assets/images/dashboard/band.png';
import competency from '../../../../assets/images/dashboard/competency.png';
import dashboard from '../../../../assets/images/dashboard/dashboard.png';
import poolHistory from '../../../../assets/images/dashboard/pool-history.svg';

import './Dashboard.scss';

function Dashboard() {
  return (
    <div className="layout">
      <div className="logo-area">
        <img className="yashlogo" src={Logo} alt="Logo" />
        <div className="heading">YASH POOL TRACKER PORTAL</div>
        <div className="content">
          The Pool tacking application is created to track the employee's status
          and their pool history along with their tagged client and interview
          details.
        </div>
        <div className="card-container">
          <NavLink to="/masterData">
            <div className="item-card">
              <img src={data} alt="item-card" />
              <p>Master Data</p>
            </div>
          </NavLink>

          <NavLink to="/config">
            <div className="item-card">
              <img src={config} alt="item-card" />
              <p>Config</p>
            </div>
          </NavLink>

          <NavLink to="/masterData">
            <div className="item-card">
              <img src={dashboard} alt="item-card" />
              <p>Dashboard</p>
            </div>
          </NavLink>

          <NavLink to="/config">
            <div className="item-card">
              <img src={poolHistory} alt="item-card" />
              <p>Pool History</p>
            </div>
          </NavLink>

          {/* <div className="item-card">
            <img src={designation} alt="item-card" />
            <p>Designation</p>
          </div>
          <div className="item-card">
            <img src={band} alt="item-card" />
            <p>Band</p>
          </div>
          <div className="item-card">
            <img src={competency} alt="item-card" />
            <p>Competency</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
