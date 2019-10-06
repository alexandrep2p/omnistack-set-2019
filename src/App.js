import React from 'react';
import './App.css';
import { ReactComponent as Logo } from './assets/logo.svg';

import Routes from './routes';

function App() {
  return (
    <div className="container">
      <Logo />
      <div className="content">
        <Routes/>
      </div>
    </div>
  );
}

export default App;
