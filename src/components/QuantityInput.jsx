import React from "react";

export default function QuantityInput({ value, onChange, min = 1, max = 99 }) {
  const handleDecrease = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrease = () => {
    if (value < max) onChange(value + 1);
  };

  const handleInput = (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < min) val = min;
    if (val > max) val = max;
    onChange(val);
  };

  return (
    <div className="flex items-center bg-white rounded shadow-sm border border-gray-200 overflow-hidden w-32 mb-4">
      {/* Minus Button */}
      <button
        type="button"
        onClick={handleDecrease}
        className={`w-10 h-10 flex items-center justify-center relative border-r border-gray-200 focus:outline-none ${
          value <= min
            ? "text-gray-300 cursor-not-allowed"
            : "text-black hover:bg-gray-100 cursor-pointer"
        }`}
        aria-label="Decrease quantity"
        disabled={value <= min}
      >
        {/* Custom minus icon */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="block w-5 h-0.5 bg-black"></span>
        </span>
      </button>
      {/* Input */}
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleInput}
        className="w-14 h-10 text-center font-bold text-lg appearance-none no-spinner focus:outline-none"
        style={{
          MozAppearance: "textfield",
        }}
      />
      {/* Plus Button */}
      <button
        type="button"
        onClick={handleIncrease}
        className={`w-10 h-10 flex items-center justify-center relative border-l border-gray-200 focus:outline-none ${
          value >= max
            ? "text-gray-300 cursor-not-allowed"
            : "text-black hover:bg-gray-100 cursor-pointer"
        }`}
        aria-label="Increase quantity"
        disabled={value >= max}
      >
        {/* Custom plus icon */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="block w-5 h-0.5 bg-black"></span>
          <span className="block h-5 w-0.5 bg-black absolute"></span>
        </span>
      </button>
    </div>
  );
} 