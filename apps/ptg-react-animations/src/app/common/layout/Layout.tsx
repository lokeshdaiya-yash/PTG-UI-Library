/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc Layout and Routing for reusable components
*/
import { Suspense } from 'react';
import './Layout.scss';
import { useTranslation } from 'react-i18next';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../header/header';
import Sidenav from '../sidenav/Sidenav';
import Footer from '../footer/Footer';
import PrivateRoute from '../../../Route/route/private-route';
import PublicRoute from '../../../Route/route/public-route';
import routing from '../../../Route/route/routing';

export interface LayoutProps { }

export function Layout({ }: LayoutProps) {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      {/*--Import Header--*/}
      <Header />
      <div className="main">
        <div className="d-flex h-100">
          <div className="flex-shrink-1 side-nav-wrapper h-100">
            <Sidenav />
          </div>
          <div className="main-wrapper">
            <div className="main-conatiner">
              {/*--Start dynamic private routing--*/}
              <Routes>
                {routing.map((route: any, idx: number) => {
                  return (<Route key={idx} path={route.path} element={
                    <PublicRoute>
                      <Suspense fallback={<div className="tab-panel-placeholder">{t('LOADING')}</div>}>
                        <route.component />
                      </Suspense>
                    </PublicRoute>} />)
                })}
              {/* <Route path="*" element={<Navigate to="/calendar" />} /> */}
              </Routes>
              {/*--End dynamic private routing--*/}
            </div>
          </div>
        </div>
      </div>
      {/*--import Footer--*/}
      <Footer />
    </div>
  );
}
export default Layout;
