import React, { useState } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./userAuthControl";

export function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useUserAuth();

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //Form Submit Handler
  const submitHandler = async (e) => {
    setFormErrors(validate(formValues));
    e.preventDefault();
    if (formValues.email && formValues.password) {
      try {
        await login(formValues.email, formValues.password);

        navigate("/card");
      } catch (err) {
        setFormErrors({ password: " password is incorrect" });
      }
    }
  };

  //Frontend Validation
  const validate = (values) => {
    const errors = {};

    const regex = /[A-Za-z][6]@.[a-z][3]./i;
    if (!values.email) {
      errors.email = "**Email is Required";
    } else if (regex.test(values.email)) {
      errors.email = "**this is not valid email format";
    }

    if (!values.password) {
      errors.password = "**Password is Required";
    } else if (values.password !== formValues.password) {
      errors.password = "**password is incorrect";
    }

    return errors;
  };
  return (
    <div className="container-fluid main">
      <div className="row justify-content-center align-items-center mx-auto shadow main_div">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 py-3 px-3">
          <div className="card shadow">
            <form className="loginform" onSubmit={submitHandler}>
              <h2 className="text-start p-2 underline">Login</h2>
              <div className="input_div">
                <label htmlFor="exampleInputEmail1">Email</label>
                <span style={{ color: "red" }}>&#42;</span>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p className="text-danger text-start p">{formErrors.email}</p>
              </div>

              <div className="input_div">
                <label htmlFor="exampleInputPassword1">Password</label>
                <span style={{ color: "red" }}>&#42;</span>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                />
                <p className="text-danger text-start p">
                  {formErrors.password}
                </p>
              </div>

              <div className="py-2 mx-3 mx-auto">
                Don't have an account click on{" "}
                <a href="/register" className="text-decoration-none">
                  Sign Up
                </a>
              </div>

              <button
                type="submit"
                className="btn w-100 loginbutton mb-3"
                id="LoginBtn"
              >
                LOG IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
