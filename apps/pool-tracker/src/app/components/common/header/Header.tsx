import './header.scss';
import Logo from '../../../../assets/images/yash-logo-new.svg'
import { NavLink } from 'react-router-dom';
export interface HeaderProps { }
export function Header({ }: HeaderProps) {
  return (
    <header className='navbar'>
      <div>
        <NavLink to="/masterData"><img src={Logo} alt="Logo" /></NavLink>
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
      </div>
    </header>
  );
}
export default Header;
