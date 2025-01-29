import React, { useState } from "react";
import "./style.scss"; 

const DualRangeSlider = ({ min, max, setValue}) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);
    setValue({min: minValue, max: maxValue})
  };

  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
    setValue({min: minValue, max: maxValue})
  };


  return (
    <div className="dual-range-slider">
      <input
        type="range"
        min={min}
        max={max}
        value={minValue}
        onChange={handleMinChange}
        className="range-input"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxValue}
        onChange={handleMaxChange}
        className="range-input"
      />
      <div className="slider-track" style={{
        left: `${((minValue - min) / (max - min)) * 100}%`,
        width: `${((maxValue - minValue) / (max - min)) * 100}%`
      }}></div>
    </div>
  );
};

export default DualRangeSlider;