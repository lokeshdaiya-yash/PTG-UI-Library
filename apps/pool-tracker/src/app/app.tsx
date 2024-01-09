// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMasterdata from './components/AddMasterdata';
import EditMasterdata from './components/EditMasterdata';
// import NxWelcome from './nx-welcome';
import Nav from './components/Nav';
import ViewMasterdata from './components/ViewMasterdata';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="pool-tracker" /> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<ViewMasterdata />} />
          <Route path="/add" element={<AddMasterdata />} />
          <Route path="/all" element={<ViewMasterdata />} />
          <Route path="/edit/:id" element={<EditMasterdata/> } />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
