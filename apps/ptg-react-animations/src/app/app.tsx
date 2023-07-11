/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc Routing for reusable components
 *
*/
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../app/common/layout/Layout';
import Object3d from './components/object3d/Object3d';
import Object3d1 from './components/object3d1/Object3d1';
import ObjectMove from './components/objectMove/ObjectMove';
export function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/*-----Public routes-----*/}
        {/* <Route path="/object3d" element={<Layout ><Object3d /></Layout>} />
        <Route path="/object3d1" element={<Layout><Object3d1 /></Layout> } />
        <Route path="/objectMove" element={<Layout><ObjectMove /></Layout> } /> */}
        {/*-----Layout in private routes-----*/}
        <Route path="*" element={<Layout ><Object3d /></Layout>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
