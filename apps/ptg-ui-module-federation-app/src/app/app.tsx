import styles from './app.module.scss';
import { useState, lazy, Suspense   } from 'react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { Register } from './components/Register';
import Login from './components/Login';
import './App.css';
import { CrudApp } from './components/CrudApp';


export function App() {

  return (
      <div>
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/register" element={<Register />} />
        <Route path="/crudApp" element={<CrudApp />} />  
      </Routes>
    </div>
  );
}
export default App;