import Logo from '../../../../assets/images/yash-logo-new.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { PtgUiMultiSelectbox } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import './header.scss';
export function Header() {
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
  return (
    <header className="navbar">
      <div>
        <NavLink to="/masterData">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <span className="app-name ml-20">UI Pool Tracker</span>
      </div>
      <div className="links">
        <NavLink to="/masterData">View Master data</NavLink>
        <NavLink to="/addMasterData">Master data Entry</NavLink>
        <NavLink to="/chart">Chart/Graph</NavLink>
        <NavLink to="/poolProject">Pool Project</NavLink>
        <NavLink to="/historyPage">Resource History Page</NavLink>
        {/* <NavLink to="/viewSkills">View Skills</NavLink> */}
        <NavLink to="/designation">View Designation</NavLink>
        <NavLink to="/config">Config</NavLink>
        <PtgUiMultiSelectbox
          name="config"
          list={CONFIG_LIST}
          onSelect={onSelect}
          showCheckbox={false}
          singleSelect={true}
        />
        {/* <NavLink to="/editskill"> Edit Skills</NavLink> */}
      </div>
    </header>
  );
}
export default Header;
