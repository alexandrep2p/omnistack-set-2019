import React, { useState } from 'react';
import api from './services/api'
import './App.css';

import { ReactComponent as Logo } from './assets/logo.svg';

function App() {

  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email)
  }

  return (
    <div className="container">
      <Logo />
      <div className="content">
        <p>Ofereça <b>spots</b> para programadores e encontre <b>talentos</b> para sua empresa.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            placeholder="john@domain.com"
            value={email}
            onChange={event => setEmail(event.target.value)} 
          />
          <button className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
