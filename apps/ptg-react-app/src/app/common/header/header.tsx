/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * @since March 2022
 * @author Anmol mathur
 * @Updatedby Ahilyabai Netaji Pawar
 * @Updatedby Harsha Zalawa
 * @desc Header Component
 *
 */

import './header.scss';
import UserProfile from '../userprofile/UserProfile';
import MultiLang from '../multi-lang/multi-lang';
export interface HeaderProps {}
export function Header({}: HeaderProps) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="d-flex justify-content-between w-100 align-items-center mx-1">
          <label htmlFor="toggle" className="fa fa-bars" aria-hidden="true">
            <i className="hiddenContent">.</i>
          </label>
          <a className="navbar-brand logo px-2" href="#">
            <img
              src="assets/images/YashLogo.png"
              aria-label="logo"
              // alt="website logo"
              className="header-logo"
            />
          </a>
          <div className="d-flex">
            <MultiLang />
            <UserProfile />
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
