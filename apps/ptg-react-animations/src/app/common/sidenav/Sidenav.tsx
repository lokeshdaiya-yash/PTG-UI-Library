/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @uses Component for side navigation bar
 *
 */
import React from 'react';
import { NavigationData } from './Sidemenu';
import './Sidenav.scss';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// export interface SidenavProps {}
// {}: SidenavProps
export function Sidenav() {
  const selectedPath = useLocation().pathname;
  const { t } = useTranslation();
  return (
    <div className="sidebar">

      <input id="toggle" type="checkbox" />

   <div className="sidenav-container ">
      <div className="sidenav">
        {
          /*-----Side navigation-----*/
          NavigationData.map((navItem: any, idx: number) => {
            return (
              <React.Fragment key={idx}>
                {/*-----Parent navigation-----*/}
                <Link
                  to={
                    navItem.path && navItem.pages === undefined
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
                  <i
                    className={`icon ${navItem.icon}`}
                    // aria-hidden="true"
                  ></i>
                  <span className="menu-item-text">{t(navItem.label)}</span>
                </Link>
                {navItem.pages?.map((childItem: any, cidx: number) => {
                  return (
                    /*-----Child navigation-----*/
                    <Link
                      key={cidx}
                      to={
                        childItem.disabled !== undefined ? childItem.path : '#'
                      }
                      className={`menu-item child-item ${
                        selectedPath === childItem.path
                          ? 'active'
                          : childItem.disabled === false
                          ? ''
                          : 'disabled'
                      }`}
                    >
                      {/* <i className={`icon ${childItem.icon}`} aria-hidden="true"></i> */}
                      {childItem.label}
                    </Link>
                  );
                })}
              </React.Fragment>
            );
          })
        }
      </div>
    </div>
    </div>
  );
}
export default Sidenav;
