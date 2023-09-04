import {
    Navigate
  } from 'react-router-dom';
import { authClass } from '../../app/auth/services/auth.service';

  const PublicRoute=({ children}:{children:JSX.Element})=> {

      let auth = authClass.getToken();
      console.log('props:',auth);
    return (
        auth
        ? <Navigate to='/calendar'/>
        : children

    );
  }

  export default PublicRoute;
