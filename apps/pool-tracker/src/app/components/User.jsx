import { PtgUiButton, PtgUiInput } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import { stringify } from 'querystring';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../service/api';

const defaultValue = {
   
    username: "",
    email: "",
    password: "",
   
  };

const User = () => {
   
        const [user, setUser] = useState(defaultValue);
        const navigate = useNavigate();
      
        const onValueChange = (e) => {
          console.log(e.target.name, e.target.value);
          setUser({ ...user, [e.target.name]: e.target.value });
          console.log(user);
        };
      
        const addUserDetails = async () => {
          await addUser(user);
          localStorage.setItem("user", JSON.stringify(user))
          navigate("/masterData");
        };
  

  return (
    <div className='ptg-table-addData'>
        <h3>Register</h3>
     <label htmlFor="name">user  Name </label>
      <PtgUiInput
        
        type="text"
        name="username"
        id="inputUsername"
        value={user.username}
        onChange={(e) => onValueChange(e)}
      />

      <label htmlFor="email"> Email </label>
      <PtgUiInput
        className={'w-100 form-control bg_0 '}
        type="text"
        name="email"
        id="email"
        value={user.email}
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
        onClick={() => addUserDetails()}
        // accessKey="s"
        aria-label="next"
        data-testid="next"
      >
        Register
      </PtgUiButton>
      
      </div>
  )
}

export default User