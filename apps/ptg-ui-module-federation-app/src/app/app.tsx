import styles from './app.module.scss';

import { useState, lazy, Suspense   } from 'react';

import { useSelector, useDispatch } from 'react-redux';

 

 

import { Route, Routes, Link } from 'react-router-dom';

import { addUser, deleteUser, updateUsername } from '../Features/Users';

 

const Header = lazy(() => import('../../../ptg-ui-module-federation-shell/src/app/Header.js'));
const Footer = lazy(() => import('../../../ptg-ui-module-federation-shell/src/app/Footer.js'));

 

export function App() {

  const dispatch = useDispatch();

  const userList = useSelector((state: any) => state.users.value);

 

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [newName, setNewName] = useState('');

  const [newEmail, setNewEmail] = useState('');

 

  return (

    <div>

      <Suspense fallback={<div>Loading Header...</div>}>

        <Header />
        <Footer/>

      </Suspense>

    <div className="container mt-4">

      <div className="container mt-3 mb-3">

        <input

          type="text"

          placeholder="Enter Name..."

          value={name}

          onChange={(event) => {

            setName(event.target.value);

          }}

        />

        <input

          type="email"

          className="ms-2"

          placeholder="Enter Email..."

          value={email}

          onChange={(event) => {

            setEmail(event.target.value);

          }}

        />

        <button

          className="btn btn-success ms-2"

          onClick={() => {

            dispatch(

              addUser({

                id: userList[userList.length - 1].id + 1,

                name,

                email,

              })

            );

            setEmail('');

            setName('');

          }}

        >

          Add User

        </button>

      </div>

      <div className="container mt-3 mb-3">

        <table className="table table-bordered table-hover">

          <thead>

            <tr>

              <th>ID</th>

              <th>User Name</th>

              <th>Email</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {userList.map((user, i) => {

              return (

                <tr key={i}>

                  <td>{user.id}</td>

                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td>

                    <input

                      type="text"

                      placeholder="Enter New Name..."

                      onChange={(event) => {

                        setNewName(event.target.value);

                      }}

                    />

                    <input

                      type="text"

                      placeholder="Enter New Email..."

                      onChange={(event) => {

                        setNewEmail(event.target.value);

                      }}

                    />

                    <button

                      className="btn btn-primary btn-sm me-4 ms-3"

                      onClick={() => {

                        dispatch(

                          updateUsername({

                            id: user.id,

                            name: newName,

                            email: newEmail,

                          })

                        );

                      }}

                    >

                      Update

                    </button>

                    <button

                      className="btn btn-danger btn-sm me-3"

                      onClick={() => {

                        dispatch(deleteUser({ id: user.id }));

                      }}

                    >

                      Delete

                    </button>

                  </td>

                </tr>

              );

            })}

          </tbody>

        </table>

      </div>

    </div>

 </div>

  );

}

 

export default App;