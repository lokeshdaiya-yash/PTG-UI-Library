import Logo from '../../../../assets/images/yash-logo-new.svg';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { PtgUiMultiSelectbox } from '@ptg-ui/libs/ptg-ui-react-lib/src';

import './header.scss';
export function Header() {
  let template;
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();
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
      <header className="navbar">
        <div>
          <NavLink to="/masterData">
            <img src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="links">
          <NavLink to="/chart">Chart/Graph</NavLink>
          <NavLink to="/poolProject">Pool Project</NavLink>
          <NavLink to="/historyPage">Resource History Page</NavLink>
          <NavLink to="/designation">View Designation</NavLink>
          <NavLink to="/config">Config</NavLink>
          <PtgUiMultiSelectbox
            name="config"
            list={CONFIG_LIST}
            onSelect={onSelect}
            showCheckbox={false}
            singleSelect={true}
          />
        </div>
      </header>
    );
  } else {
    template = null;
  }

  return template;
}
export default Header;
