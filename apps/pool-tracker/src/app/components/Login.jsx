import { PtgUiButton, PtgUiInput } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../service/api';

const defaultValue = {
   
    username: "",
    email: "",
    password: "",
   
  };


const Login = () => {
  
    const [user, setuser] = useState(defaultValue)
  const navigate = useNavigate();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setuser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const login = async () => {
    await loginUser(user);
    navigate('/masterData');
  };

  const signUp = async () => {
    navigate('/user');
  };


  return (
    <div className="ptg-table-addData">
      <h3>Login</h3>

      <label htmlFor="username"> User name </label>
      <PtgUiInput
        className={'w-100 form-control bg_0 '}
        type="text"
        name="username"
        id="username"
        value={user.username}
        onChange={(e) => onValueChange(e)}
      />

      <label htmlFor="password">Password </label>
      <PtgUiInput
        className={'w-100 form-control bg_0 '}
        type="text"
        name="password"
        id="password"
        value={user.password}
        onChange={(e) => onValueChange(e)}
      />


      <PtgUiButton
        className="w-100 mt-2"
        type="button"
        onClick={() => login()}
        // accessKey="s"
        aria-label="next"
        data-testid="next"
      > Login</PtgUiButton>

      <label htmlFor="email"> If not user? </label>
      <PtgUiButton
        className="w-100 mt-2"
        type="button"
        onClick={() => signUp()}
        // accessKey="s"
        aria-label="next"
        data-testid="next"
      >Register</PtgUiButton>
    </div>
  );
};

export default Login;
