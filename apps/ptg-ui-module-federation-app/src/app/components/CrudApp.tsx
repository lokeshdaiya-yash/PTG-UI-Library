import styles from './app.module.scss';

import { useState, lazy, Suspense, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Route, Routes, Link } from 'react-router-dom';

import { addUser, deleteUser, updateUsername } from '../../Features/Users';
import { ShellComponent } from './ShellComponent';
import './CrudApp.css';

const Header = lazy(() => import('HeaderApp/Header'));
const Footer = lazy(() => import('HeaderApp/Footer'));

export const CrudApp = ({ finaldata }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state: any) => state.users.value);

  const [query, setQuery] = useState('');
  const [users, setUsers] = useState<any>([]);

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [newName, setNewName] = useState('');

  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.products);
      });
  }, []);

  return (
    <div className="wrapper">
      <div>
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
          <Footer />
        </Suspense>
      </div>
      <div>
        <h4> Hi {finaldata}</h4>
        <div>
          <h3
            style={{
              textAlign: 'center',
              color: 'darkviolet',
              fontFamily: 'fantasy',
              marginTop: '10px',
            }}
          >
            Product list
          </h3>
          <div className="container mt-3 mb-3">
            <table className="table table-bordered table table-light table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th> ID </th>
                  <th> Title </th>
                  <th> Price </th>
                  <th> Rating </th>
                  <th> Brand </th>
                  <th> Category </th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter(
                    (user) =>
                      user.title.toLowerCase().includes(query) ||
                      user.price.toString().includes(query) ||
                      user.rating.toString().includes(query) ||
                      user.brand.toLowerCase().includes(query) ||
                      user.category.toLowerCase().includes(query)
                  )
                  .map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.title}</td>
                      <td>{user.price}</td>
                      <td>{user.rating}</td>
                      <td>{user.brand}</td>
                      <td>{user.category}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

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
};
