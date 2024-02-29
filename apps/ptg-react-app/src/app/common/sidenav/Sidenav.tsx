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
import { Accordion } from 'react-bootstrap';
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
            <Accordion  className="acc">
            <Accordion.Item eventKey="0">
              <Accordion.Header className={`acc-header ${!navItem.pages ? 'accordion-with-arrow' : ''}`}>
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
                    className={`icon ${navItem.icon} child-icon`}
                    // aria-hidden="true"
                  ></i>
                  <span className="menu-item-text">{t(navItem.label)}</span>
                </Link>
              </React.Fragment>

              </Accordion.Header>
                {navItem.pages?.map((childItem: any, cidx: number) => {
                  return(
                  <Accordion.Body className='acc-body'>
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
                       <i className={`icon  table-chart-icon ${childItem.icon}`}></i>
                       <span>{childItem.label}</span>
                    </Link> 
                  </Accordion.Body>
                )})}
                </Accordion.Item>
              </Accordion>
            );
          })
        }
      </div>
    </div>
    </div>
  );
}
export default Sidenav;
