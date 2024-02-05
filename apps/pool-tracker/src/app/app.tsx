import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditMasterdata from './components/EditMasterdata';
// import NxWelcome from './nx-welcome';
import Nav from './components/Nav';
import ViewMasterdata from './components/ViewMasterdata';
import AddMasterdata from './components/AddMasterdata';
import Skills from './components/Skills';
import EditSkill from './components/EditSkill';
import AddSkill from './components/AddSkill';
import User from './components/User';
// import PrivateRout from './components/PrivateRout';
import Login from './components/Login';
import Chart from './components/Chart';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="pool-tracker" /> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/chart" element={<Chart />} />
          

          {/* <Route element={<PrivateRout />}> */}
          {/* Masterdata Routes*/}
          <Route path="/addMasterdata" element={<AddMasterdata />} />
          <Route path="/masterData" element={<ViewMasterdata />} />
          <Route path="/editMasterdata/:id" element={<EditMasterdata />} />

          {/* skills Routes*/}
          <Route path="/skills" element={<Skills />} />
          <Route path="/addSkill" element={<AddSkill />} />
          <Route path="/editskill/:id" element={<EditSkill />} />
          {/* </Route> */}
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
