import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditMasterdata from './components/viewMasterData/EditMasterData';
import Login from './components/Login';
import PageNotFound from './components/pageNotFound/PageNotFound';
import AddMasterdata from './components/addMasterData/AddMasterData';
import ViewDesignation from './components/designation/ViewDesignation';
import Config from './components/config/Config';
import AddDesignation from './components/designation/AddDesignation';
import ViewSkills from './components/skills/ViewSkills';
import Chart from './components/chart/Chart';
import CompetancyChart from './components/chart/CompetancyChart';
import BandChart from './components/chart/BandChart';
import SkillChart from './components/chart/SkillChart';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Dashboard from './components/common/dashboard/Dashboard';
import ViewMasterData from './components/viewMasterData/ViewMasterData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewPoolProject from './components/project/ViewPoolProject';
import AddProject from './components/project/AddProject';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/user" element={<User />} /> */}

          {/* <Route element={<PrivateRout />}> */}
          <Route path="/config" element={<Config />} />
          <Route path="/designation" element={<ViewDesignation />} />
          <Route path="/adddesignation" element={<AddDesignation />} />

          {/* Masterdata Routes*/}
          <Route path="/masterData" element={<ViewMasterData />} />
          <Route path="/addMasterData" element={<AddMasterdata />} />
          <Route path="/addMasterData/:id" element={<AddMasterdata />} />
          <Route path="/editMasterData/:id" element={<EditMasterdata />} />
          {/* <Route path="/editMasterData/:id" element={<EditMasterData />} /> */}

          {/* skills Routes*/}
          <Route path="/skills" element={<ViewSkills />} />
           {/* <Route path="addSkill" element={<AddSkill />} />
          <Route path="/editskill/:id" element={<EditSkill />} /> */}
          <Route path="/projects" element={<ViewPoolProject />} />
          <Route path="/addProject" element={<AddProject />} />
          <Route path="/addProject/:id" element={<AddProject />} />
         

          {/* chart Routes*/}
          <Route path="/chart/" element={<Chart />}>
            <Route path="bandchart" element={<BandChart />} />
            <Route path="competancychart" element={<CompetancyChart />} />
            <Route path="skillchart" element={<SkillChart />} />
          </Route>

          {/* PageNotFound Routes*/}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
