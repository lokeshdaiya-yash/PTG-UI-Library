import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export const Register = ({ fn }) => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: '',
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

  console.log(input);

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('userdetails', JSON.stringify([...data, input]));
    fn(input.username);
    navigate('/');
  };

  return (
    <div className="wrapper mt-3 d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">Registration Form</h2>
        <form className="needs-validation">
          <div className="form-group was-validated mb-2">
            <label htmlFor="text" className="form-label">
              Enter Your Name
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              value={input.username}
              onChange={handleChange}
              className="form-control"
              required
            ></input>
            <div className="invalid-feedback">Please Enter Your Name</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={input.email}
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
              placeholder="Enter Password"
              value={input.password}
              onChange={handleChange}
              className="form-control"
              required
            ></input>
            <div className="invalid-feedback">Please Enter Password</div>
          </div>
          <button
            onClick={handleSubmit}
            className="btn btn-success block w-100 mt-2 mb-2"
          >
            Register{' '}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
