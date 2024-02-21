import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import EditMasterdata from './components/EditMasterdata';
import EditSkill from './components/EditSkill';
import AddSkill from './components/AddSkill';
import User from './components/User';
import Login from './components/Login';
import PageNotFound from './components/pageNotFound/PageNotFound';
import AddMasterdata from './components/addMasterData/AddMasterData';
import ViewDesignation from './components/designation/ViewDesignation';
import Config from './components/config/Config';
import AddDesignation from './components/designation/AddDesignation';
import ViewMasterdata from './components/viewMasterData/ViewMasterData';
import ViewSkills from './components/skills/ViewSkills';

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
          <Route path="/designation" element={<ViewDesignation />} />
          <Route path="/adddesignation" element={<AddDesignation />} />

          {/* Masterdata Routes*/}
          <Route path="/addMasterdata" element={<AddMasterdata />} />
          <Route path="/masterData" element={<ViewMasterdata />} />
          <Route path="/editMasterdata/:id" element={<EditMasterdata />} />

          {/* skills Routes*/}
          <Route path="/skills" element={<ViewSkills />} />
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
