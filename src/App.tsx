import React from "react";
import { useState } from "react";
import "./App.css";
import { RainEffect } from "rainmaker-react";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(800);
  const [wind, setWind] = useState<number>(0);
  const [fallSpeed, setFallSpeed] = useState<number>(10);
  const [jitterX, setJitterX] = useState<number>(0.1);
  const [dropletLength, setDropletLength] = useState<number>(3);
  const min = {
    count: 0,
    wind: -20,
    fallSpeed: 1,
    jitterX: 0,
    dropletLength: 1,
    dropletWidth: 1,
  };
  const max = {
    count: 2000,
    wind: 20,
    fallSpeed: 20,
    jitterX: 2,
    dropletLength: 10,
    dropletWidth: 10,
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
      case "fallSpeed": {
        setFallSpeed(value);
        break;
      }
      case "jitterX": {
        setJitterX(parseFloat(event.target.value));
        break;
      }
      case "dropletLength": {
        setDropletLength(value);
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
        <div className="option-entry">
          <span className="option-name">Speed: {fallSpeed}</span>
          <div className="option-slider">
            <span className="slider-label">{min["fallSpeed"]}</span>
            <input
              type="range"
              name="fallSpeed"
              value={fallSpeed}
              onChange={handleSliderChange}
              min={min["fallSpeed"]}
              max={max["fallSpeed"]}
            />
            <span className="slider-label">{max["fallSpeed"]}</span>
          </div>
        </div>
        <div className="option-entry">
          <span className="option-name">Jitter: {jitterX}</span>
          <div className="option-slider">
            <span className="slider-label">{min["jitterX"]}</span>
            <input
              type="range"
              name="jitterX"
              value={jitterX}
              onChange={handleSliderChange}
              min={min["jitterX"]}
              max={max["jitterX"]}
              step="0.1"
            />
            <span className="slider-label">{max["jitterX"]}</span>
          </div>
        </div>
        <div className="option-entry">
          <span className="option-name">Droplet Length: {dropletLength}</span>
          <div className="option-slider">
            <span className="slider-label">{min["dropletLength"]}</span>
            <input
              type="range"
              name="dropletLength"
              value={dropletLength}
              onChange={handleSliderChange}
              min={min["dropletLength"]}
              max={max["dropletLength"]}
            />
            <span className="slider-label">{max["dropletLength"]}</span>
          </div>
        </div>
      </div>
      <RainEffect
        className="rain-effect"
        count={count}
        wind={wind}
        fallSpeed={fallSpeed}
        jitterX={jitterX}
        dropletLength={dropletLength}
      />
    </div>
  );
};

export default App;
