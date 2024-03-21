import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import EditMasterdata from './components/viewMasterData/EditMasterData';
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
import Chart from './components/chart/Chart';
import CompetancyChart from './components/chart/CompetancyChart';
import BandChart from './components/chart/BandChart';
import SkillChart from './components/chart/SkillChart';

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
          {/* <Route path="/editMasterData/:id" element={<EditMasterData />} /> */}

          {/* skills Routes*/}
          <Route path="/skills" element={<ViewSkills />} />
          <Route path="addSkill" element={<AddSkill />} />
          <Route path="/editskill/:id" element={<EditSkill />} />

          {/* chart Routes*/}
          <Route path="/chart/" element={<Chart />} >
            <Route path="bandchart" element={<BandChart />} />
            <Route path="competancychart" element={<CompetancyChart />} />
            <Route path="skillchart" element={<SkillChart />} />
          </Route>

          {/* PageNotFound Routes*/}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
