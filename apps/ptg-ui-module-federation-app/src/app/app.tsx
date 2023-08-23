import styles from './app.module.scss';

import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { Register } from './components/Register/Register';
import Login from './components/Login/Login';
import './App.css';
import { CrudApp } from './components/CrudApp';
import { useState } from 'react';

export function App() {
  const [mydata, setMydata] = useState();

  const getInput = (data: any) => {
    setMydata(data);
  };

  console.log(mydata);

  return (
    <div style={{ marginTop: 15 }}>
      <Routes>
        <Route path="/" element={<Login finaldata={mydata} />} />
        <Route path="/register" element={<Register fn={getInput} />} />
        <Route path="/crudApp" element={<CrudApp finaldata={mydata} />} />
      </Routes>
    </div>
  );
}
export default App;
