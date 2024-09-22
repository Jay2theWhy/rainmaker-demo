import React from 'react';
import { useState } from 'react';
import './App.css';
import { RainEffect } from 'rainmaker-react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(50);
  const [wind, setWind] = useState<number>(0);

  const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setCount(value);
  };

  const handleWindChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 0);
    setWind(value);
  };

  return (
    <div>
      <div className="title">RAINMAKER DEMO</div>
      <div className="slider-container">
        <input 
          type="range"
          value={count}
          onChange={handleCountChange}
          min="0"
          max="1000"
        />
        <span className="count-display">{count}</span>
        <input 
          type="range"
          value={wind}
          onChange={handleWindChange}
          min="-10"
          max="10"
        />
        <span className="count-display">{wind}</span>
      </div>
      <RainEffect className="rain-effect" count={count} wind={wind}/>
    </div>
  );
}

export default App;
