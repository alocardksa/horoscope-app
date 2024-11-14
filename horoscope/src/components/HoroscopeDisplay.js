import React from "react";

export default function HoroscopeDisplay({
  selectedSign,
  selectedTimeframe,
  horoscope
}) {
  return (
    <div className="horoscope-display">
      <h2>
        Your horoscope {selectedTimeframe} if you are under the sign of{" "}
        {selectedSign} is...
      </h2>
      <p className="horoscope-text">{horoscope}</p>
    </div>
  );
}
