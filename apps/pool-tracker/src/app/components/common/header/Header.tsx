import './header.scss';
import Logo from '../../../../assets/images/yash-logo-new.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import { PtgUiMultiSelectbox } from '@ptg-ui/libs/ptg-ui-react-lib/src';

export function Header() {
  const navigate = useNavigate();

  const config_LIST = [
    { value: 'designation', label: 'designation', name: 'config' },
    { value: 'skills', label: 'skills', name: 'config' },
    { value: 'band', label: 'band', name: 'config' },
    { value: 'competency', label: 'competency', name: 'config' },

  ];
  const onSelect = (e) => {
    const path = "/" + e[0].value;
    console.log('Select Values, onValueChange', e[0]);
    navigate(path);

  };
  return (
    <header className='navbar'>
      <div>
        <NavLink to="/masterData"><img src={Logo} alt="Logo" /></NavLink>
        <span>UI Pool Tracker</span>
      </div>
      <div>
        <NavLink to="/masterData">View Master Data</NavLink>
        <NavLink to="/addMasterData">Master Data Entry</NavLink>
        <NavLink to="/chart">Chart/Graph</NavLink>
        <NavLink to="/poolProject">Pool Project</NavLink>
        <NavLink to="/historyPage">Resource History Page</NavLink>
        {/* <NavLink to="/viewSkills">View Skills</NavLink> */}
        <NavLink to="/designation">View Designation</NavLink>
        <NavLink to="/config">Config</NavLink>
        <PtgUiMultiSelectbox
          name="skills"
          list={config_LIST}
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
