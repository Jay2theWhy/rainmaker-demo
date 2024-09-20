import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RainEffect } from 'rainmaker-react';

const App: React.FC = () => {
  return (
    <div>
      <div className="title">RAINMAKER DEMO</div>
      <RainEffect className="rain-effect" />
    </div>
  );
}

export default App;
