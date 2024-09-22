import React from 'react';
import { useState } from 'react';
import './App.css';
import { RainEffectCustom } from './rain';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(50);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setCount(value);
  };

  return (
    <div>
      <div className="title">RAINMAKER DEMO</div>
      <div className="slider-container">
        <input 
          type="range"
          value={count}
          onChange={handleSliderChange}
          min="0"
          max="1000"
        />
        <span className="count-display">{count}</span>
      </div>
      <RainEffectCustom className="rain-effect" count={count}/>
    </div>
  );
}

export default App;
