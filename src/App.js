import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetPost from './components/GetPost'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
      <GetPost />
    </div>
  );
}

export default App;
