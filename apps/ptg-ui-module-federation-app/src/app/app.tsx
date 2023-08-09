import styles from './app.module.scss';

import { useState, lazy, Suspense   } from 'react';


import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { Register } from './components/Register';
import Login from './components/Login';
import './App.css';
import { CrudApp } from './components/CrudApp';





export function App() {

  const [currentForm, setCurrentForm] = useState('login');
  

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
   <>
   
    
  <div className="App">
    {
      currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    }
  </div>

    <div>
    {/* <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          
        </ul>
      </div> */}

      
       
        
      <Routes>
        
      
        <Route path ="/CrudApp" element={<CrudApp/>}></Route>
        
      </Routes>
      
      

    

 </div>
</>
  );

}

export default App;