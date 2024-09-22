import React from "react";
import { useState } from "react";
import "./App.css";
import { RainEffect } from "rainmaker-react";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(800);
  const [wind, setWind] = useState<number>(0);
  const min = {
    count: 0,
    wind: -20,
  };
  const max = {
    count: 2000,
    wind: 20,
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    switch (event.target.name) {
      case "count": {
        setCount(value);
        break;
      }
      case "wind": {
        setWind(value);
        break;
      }
    }
  };

  return (
    <div>
      <div className="title">RAINMAKER DEMO</div>
      <div className="options-container">
        <div className="option-entry">
          <span className="option-name">Intensity: {count}</span>
          <div className="option-slider">
            <span className="slider-label">{min["count"]}</span>
            <input
              type="range"
              name="count"
              value={count}
              onChange={handleSliderChange}
              min={min["count"]}
              max={max["count"]}
            />
            <span className="slider-label">{max["count"]}</span>
          </div>
        </div>
        <div className="option-entry">
          <span className="option-name">Wind: {wind}</span>
          <div className="option-slider">
            <span className="slider-label">{min["wind"]}</span>
            <input
              type="range"
              name="wind"
              value={wind}
              onChange={handleSliderChange}
              min={min["wind"]}
              max={max["wind"]}
            />
            <span className="slider-label">{max["wind"]}</span>
          </div>
        </div>
      </div>
      <RainEffect className="rain-effect" count={count} wind={wind} />
    </div>
  );
};

export default App;
