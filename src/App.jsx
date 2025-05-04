import React from 'react';
import SessionTimer from './components/SessionTimer';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SessionTimer />
    </div>
  );
}

export default App;
