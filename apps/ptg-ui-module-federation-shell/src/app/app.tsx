// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Footer from './Footer';
import Header from './Header';
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import './App.css';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <>
    <Header/>
    <Footer/>
 


  <div className="App">
    {
      currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    }
  </div>

      {/* <NxWelcome title="ptg-ui-module-federation-shell" /> */}
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>1
      {/* END: routes */}
    </>
  );
}

export default App;
