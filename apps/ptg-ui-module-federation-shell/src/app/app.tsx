// eslint-disable-next-line @typescript-eslint/no-unused-vars

import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import React, { useState } from 'react';

import './App.css';

import Header from './Header';
import Footer from './Footer';

export function App() {
  const [query, setQuery] = useState('');

  return (
    <>
      <Header handleChange={(e) => setQuery(e.target.value)} />
      <Footer />
    </>
  );
}

export default App;
