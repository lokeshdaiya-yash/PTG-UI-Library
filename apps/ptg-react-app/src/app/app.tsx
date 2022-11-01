/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc Routing for reusable components
 * 
*/
import { PtgUiLogin } from '../app/auth/login/Login';
import { PtgUiSignup } from '../app/auth/signup/signup';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './route/private-route';
import PublicRoute from './route/public-route';
import Layout from '../app/common/layout/Layout';
import PtgUiResetPassword from './auth/resetpassword/ResetPassword';

export function App() {
  return (
    <div>
      <Routes>
        {/*-----Public routes-----*/}
        <Route path="/login" element={<PublicRoute><PtgUiLogin /></PublicRoute>} />
        <Route path="/signup" element={<PtgUiSignup />} />
        <Route path="/reset-password" element={<PtgUiResetPassword />} />
        {/*-----Layout in private routes-----*/}
        <Route path="*" element={<PrivateRoute><Layout /></PrivateRoute>} />        
      </Routes>
    </div>
  );
}

export default App;
