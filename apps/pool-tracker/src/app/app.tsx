import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import EditMasterdata from './components/EditMasterdata';
import ViewMasterdata from './components/ViewMasterdata';
// import AddMasterdata from './components/AddMasterdata';

import EditSkill from './components/EditSkill';
import AddSkill from './components/AddSkill';
import User from './components/User';
// import PrivateRout from './components/PrivateRout';
import Login from './components/Login';
import PageNotFound from './components/pageNotFound/PageNotFound';
import AddMasterdata from './components/addMasterData/AddMasterData';
import Designation from './components/designation/designation';
import Config from './components/config/Config';
import AddDesignation from './components/designation/AddDesignation';
import EditDesignation from './components/designation/EditDesignation';
import Skill from './components/skill/Skill';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<User />} />

          {/* <Route element={<PrivateRout />}> */}
          <Route path="/config" element={<Config />} />
          <Route path="/designation" element={<Designation />} />
          <Route path="/adddesignation" element={<AddDesignation />} />
          <Route path="/editdesignation" element={<EditDesignation />} />

          {/* Masterdata Routes*/}
          <Route path="/addMasterdata" element={<AddMasterdata />} />
          <Route path="/masterData" element={<ViewMasterdata />} />
          <Route path="/editMasterdata/:id" element={<EditMasterdata />} />

          {/* skills Routes*/}
          <Route path="/skills" element={<Skill />} />
          <Route path="addSkill" element={<AddSkill />} />
          <Route path="/editskill/:id" element={<EditSkill />} />

          {/* </Route> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
