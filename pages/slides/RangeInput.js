import React, { useState } from "react";

function RangeInput({ ischanged }) {
  const [firstSlider, setfirstSlider] = useState(1);

  return (
    <div className="rangeWrapWraper">
      <div className="rangeWrap">
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          value={firstSlider}
          onChange={(e) => {
            setfirstSlider(e.target.value);
            ischanged(true);
          }}
        />
      </div>
      <div className="currentRange">{firstSlider}%</div>
      <div className="mark mark-1">1%</div>
      <div className="mark mark-2">100%</div>
    </div>
  );
}

export default RangeInput;
