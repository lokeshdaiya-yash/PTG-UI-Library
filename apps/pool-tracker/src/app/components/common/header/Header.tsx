import './header.scss';
import Logo from '../../../../assets/images/yash-logo-new.svg';
import { NavLink } from 'react-router-dom';
import { PtgUiMultiSelectbox } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import { useNavigate } from 'react-router-dom';
export interface HeaderProps {}
export function Header({}: HeaderProps) {
  const navigate = useNavigate();
  const CONFIG_LIST = [
    { value: 'skills', label: 'skill', name: 'config' },
    { value: 'band', label: 'band', name: 'config' },
    { value: 'designation', label: 'designation', name: 'config' },
    { value: 'competency', label: 'competency', name: 'config' },
  ];
  const selectConfig = (e) => {
    const path = '/' + e[0].value;
    console.log('Select Values >>>>.', path);
    navigate(path);
  };

  return (
    <header className="navbar">
      <div>
        <NavLink to="/masterData">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <span>UI Pool Tracker</span>
      </div>
      <div>
        <NavLink to="/masterData">View Master data</NavLink>
        <NavLink to="/addMasterdata">Master data Entry</NavLink>
        <NavLink to="/chart">Chart/Graph</NavLink>
        <NavLink to="/poolProject">Pool Project</NavLink>
        <NavLink to="/historyPage">Resource History Page</NavLink>
        {/* <NavLink to="/viewSkills">View Skills</NavLink> */}
        <NavLink to="/designation">View Designation</NavLink>
        <NavLink to="/config">Config</NavLink>
        {/* <NavLink to="/editskill"> Edit Skills</NavLink> */}

        <PtgUiMultiSelectbox
          name="config"
          list={CONFIG_LIST}
          onSelect={selectConfig}
          showCheckbox={false}
          singleSelect={true}
          placeholder={'Config'}
        />
      </div>
    </header>
  );
}
export default Header;
