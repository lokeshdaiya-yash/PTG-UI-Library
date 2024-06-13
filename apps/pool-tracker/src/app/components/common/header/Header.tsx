import { useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { PtgUiMultiSelectbox } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import Logo from '../../../../assets/images/yash-logo-new.svg';
import bg1 from '../../../../assets/images/sub-header/bg1.png';
import bg2 from '../../../../assets/images/sub-header/bg2.png';
import bg3 from '../../../../assets/images/sub-header/bg3.png';
import bg4 from '../../../../assets/images/sub-header/bg4.png';
import bg5 from '../../../../assets/images/sub-header/bg5.png';
import bg6 from '../../../../assets/images/sub-header/bg6.png';

import './header.scss';
export function Header() {
  let template;
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();

  let bgImage = '';
  let title = '';

  useEffect(() => {
    const renderSwitch = (pathName) => {
      switch (pathName) {
        case '/':
          bgImage = bg1;
          title = 'Master Data';
          return;
        case '/addMasterData':
          bgImage = bg2;
          title = 'Add Master Data';
          return;
        case '/config':
          bgImage = bg3;
          title = 'Configuration';
          return;
        default:
          return;
      }
    };
    renderSwitch(pathName);
  }, [pathName]);

  const bgStyle = {
    background: `url(${bg5})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '130px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
    fontWeigth: '600',
    color: '#fff',
  };

  const CONFIG_LIST = [
    { value: 'designation', label: 'Designation', name: 'config' },
    { value: 'skills', label: 'Skills', name: 'config' },
    { value: 'band', label: 'Band', name: 'config' },
    { value: 'competency', label: 'Competency', name: 'config' },
  ];
  const onSelect = (e) => {
    const path = '/' + e[0].value;
    navigate(path);
  };

  if (pathName !== '/') {
    template = (
      <>
        <header className="navbar">
          <div>
            <NavLink to="/">
              <img src={Logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="links">
            <NavLink to="/chart/bandchart">Chart/Graph</NavLink>
            {/* <NavLink to="/poolProject">Pool Project</NavLink> */}
            {/* <NavLink to="/historyPage">Resource History Page</NavLink> */}
            {/* <NavLink to="/designation">View Designation</NavLink> */}
            {/* <NavLink to="/config">Config</NavLink> */}
            {/* <PtgUiMultiSelectbox
              name="config"
              list={CONFIG_LIST}
              onSelect={onSelect}
              showCheckbox={false}
              singleSelect={true}
            /> */}
          </div>
          {/* <div className="navigation">
            <div className="userBx">
              <div className="imgBx"></div>
              <div className="menuToggle"></div>
            </div>
          </div> */}
        </header>
        <div style={bgStyle} className="sub-header">
          Master Data
        </div>
      </>
    );
  } else {
    template = null;
  }

  return template;
}
export default Header;
