import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import EditMasterdata from './components/EditMasterdata';
import ViewMasterData from './components/viewMasterData/ViewMasterData';
import AddMasterdata from './components/AddMasterdata';
import Skills from './components/Skills';
import EditSkill from './components/EditSkill';
import AddSkill from './components/AddSkill';
import User from './components/User';
// import PrivateRout from './components/PrivateRout';
import Login from './components/Login';
import PageNotFound from './components/pageNotFound/PageNotFound';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<User />} />

          {/* <Route element={<PrivateRout />}> */}
          {/* Masterdata Routes*/}
          <Route path="/viewMasterData" element={<ViewMasterData />} />
          <Route path="/addMasterData" element={<AddMasterdata />} />
          <Route path="/edit/:id" element={<EditMasterdata />} />

          {/* skills Routes*/}
          <Route path="/skills" element={<Skills />} />
          <Route path="addSkill" element={<AddSkill />} />
          <Route path="/editskill/:id" element={<EditSkill />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
