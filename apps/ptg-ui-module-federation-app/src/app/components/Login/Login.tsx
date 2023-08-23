import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = ({ finaldata }) => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const k = e.target.id;
    const l = e.target.value;
    setInput(() => {
      return {
        ...input,
        [k]: l,
      };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem('userdetails');
    const { email, password } = input;

    if (getuserArr && getuserArr.length) {
      const userdata = JSON.parse(getuserArr);
      const userlogin = userdata.filter((v, i) => {
        return v.email === email && v.password === password;
      });

      if (userlogin.length === 0) {
        alert('invalid details');
      } else {
        alert(`User: ${finaldata} Login Succesfully`);

        localStorage.setItem('user_login', JSON.stringify(userlogin));

        navigate('/crudApp');
      }
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div className="wrapper mt-3 d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">Log in Form</h2>
        <form className="needs-validation">
          <div className="form-group was-validated mb-2">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              className="form-control"
              required
            ></input>
            <div className="invalid-feedback">Please Enter Email</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              className="form-control"
              required
            ></input>
            <div className="invalid-feedback">Please Enter Password</div>
          </div>
          <button
            onClick={handleLogin}
            className="btn btn-success block w-100 mt-2 mb-2"
          >
            Log In{' '}
          </button>
          <p className="mt-1 mb-2">Don't have Account</p>
          <button
            onClick={handleRegister}
            className="btn btn-success block w-100 mt-2 mb-2"
          >
            Register{' '}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
