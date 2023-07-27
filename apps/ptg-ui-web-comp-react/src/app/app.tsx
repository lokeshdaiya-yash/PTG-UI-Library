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
import { PtgHeader, PtgFooter } from '@ptg-ui/ptg-ui-web-components-react';
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
                <Route path="/ptg-ui-web-comp-react/buttons" element={<Buttons />} />
                <Route path="/ptg-ui-web-comp-react/modal" element={<Modal />} />
                <Route path="/ptg-ui-web-comp-react/radio" element={<Radio />} />
                <Route path="/ptg-ui-web-comp-react/table" element={<Table />} />
                <Route path="/ptg-ui-web-comp-react/checkbox" element={<Checkbox />} />
                <Route path="/ptg-ui-web-comp-react/textarea" element={<Textarea />} />
                <Route path="/ptg-ui-web-comp-react/loading" element={<Loading />} />
                <Route path="/ptg-ui-web-comp-react/toast" element={<Toast />} />
                <Route path="/ptg-ui-web-comp-react/calender" element={<Calender />} />
                <Route path="/ptg-ui-web-comp-react/accordion" element={<Accordion />} />
                <Route path="/ptg-ui-web-comp-react/input" element={<Input />} />
                <Route path="/ptg-ui-web-comp-react/alert" element={<Alert />} />
                <Route
                  path="/ptg-ui-web-comp-react/select-multiselect"
                  element={<SelectMultiselect />}
                />
                <Route
                  path="/ptg-ui-web-comp-react/indeterminate-checkbox"
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
