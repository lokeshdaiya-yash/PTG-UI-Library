import './header.scss';
import Logo from '../../../../assets/images/yash-logo-new.svg'
import { NavLink } from 'react-router-dom';
export function Header() {
  return (
    <header className='navbar'>
      <div>
        <NavLink to="/viewMasterData"><img src={Logo} alt="Logo" /></NavLink>
        <span>UI Pool Tracker</span>
      </div>
      <div>
        <NavLink to="/viewMasterData">View Master Data</NavLink>
        <NavLink to="/addMasterData">Master Data Entry</NavLink>
        <NavLink to="/chart">Chart/Graph</NavLink>
        <NavLink to="/poolProject">Pool Project</NavLink>
        <NavLink to="/history">Resource History Page</NavLink>
        <NavLink to="/viewSkills">View Skills</NavLink>
        {/* <NavLink to="/editskill"> Edit Skills</NavLink> */}
      </div>
    </header>
  );
}
export default Header;
