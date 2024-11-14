import React from "react";

export default function TimeframeSelection({ onSelectTimeframe }) {
  return (
    <div className="timeframe-selection">
      <h2>Please select a timeframe</h2>
      <div className="timeframe-buttons">
        {["yesterday", "today", "tomorrow"].map((timeframe) => (
          <button
            className="timeframe-button"
            key={timeframe}
            onClick={() => onSelectTimeframe(timeframe)}
          >
            {timeframe}
          </button>
        ))}
      </div>
    </div>
  );
}
