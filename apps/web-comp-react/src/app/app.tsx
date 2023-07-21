import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Buttons from './pages/Buttons';
import Modal from './pages/Modal';
import Radio from './pages/Radio';
import Table from './pages/Table';
import Checkbox from './pages/Checkbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { PtgHeader, PtgFooter } from '@ptg-ui/web-components-react';
import Textarea from './pages/Textarea';
import Loading from './pages/Loading';
import Toast from './pages/Toast';
import Calender from './pages/calender';
import Accordion from './pages/Accordion';
import Input from './pages/Input';
import Alert from './pages/Alert';
import SelectMultiselect from './pages/SelectMultiselect';
import IndeterminateCheckbox from './pages/Indenterminate';

export function App() {
  return (
    <div className="wrapper">
      <PtgHeader header="Web Component"></PtgHeader>
      <div className="main">
        <div className="">
          <div className="side-nav-wrapper">
            <Navbar />
          </div>
          <div className="main-wrapper">
            <div className="main-conatiner">
              <Routes>
                <Route path="/" element={<Buttons />} />
                <Route path="/buttons" element={<Buttons />} />
                <Route path="/modal" element={<Modal />} />
                <Route path="/radio" element={<Radio />} />
                <Route path="/table" element={<Table />} />
                <Route path="/checkbox" element={<Checkbox />} />
                <Route path="/textarea" element={<Textarea />} />
                <Route path="/loading" element={<Loading />} />
                <Route path="/toast" element={<Toast />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/accordion" element={<Accordion />} />
                <Route path="/input" element={<Input />} />
                <Route path="/alert" element={<Alert />} />
                <Route
                  path="/select-multiselect"
                  element={<SelectMultiselect />}
                />
                <Route
                  path="/indeterminate-checkbox"
                  element={<IndeterminateCheckbox />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <PtgFooter footer="Copyright © 2022 Yash Technologies. All rights reserved."></PtgFooter>
    </div>
  );
}

export default App;
