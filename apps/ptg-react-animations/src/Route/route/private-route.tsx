import { Navigate, useLocation } from 'react-router-dom';
import { authClass } from '../../app/auth/services/auth.service';
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const isAuthenticated = authClass.getToken();

  return (
    isAuthenticated
    ? children
    : <Navigate to="/login" state={{ from: location }} />
);
};
export default PrivateRoute;
