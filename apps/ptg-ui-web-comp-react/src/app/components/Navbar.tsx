import { Link,useLocation} from 'react-router-dom';
import { NavbarData } from './NavbarData';
import './Navbar.scss';


function Navbar() {
  const selectedPath = useLocation().pathname;
  return (
<div className="sidebar">

<input id="toggle" type="checkbox" />

<div className="sidenav-container ">
<div className="sidenav">
  {
    /*-----Side navigation-----*/
    NavbarData.map((navItem,idx) => {
      return (
          <Link
            to={
              navItem.path
                ? navItem.path
                : '#'
            }
            className={`menu-item ${
              selectedPath === navItem.path
                ? 'active'
                : navItem.disabled !== false
                ? 'disabled'
                : ''
            }`}
          >
            <span className="menu-item-text">{navItem.title}</span>
          </Link>
       
      );
    })
  }
</div>
</div>
</div>
  );
}

export default Navbar;
