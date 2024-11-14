import React, { useState, useEffect } from "react";
import "./App.css";
import { getHoroscope, getSigns } from "./services/api";
import Header from "./components/Header";
import SignSelection from "./components/SignSelection";
import TimeframeSelection from "./components/TimeframeSelection";
import HoroscopeDisplay from "./components/HoroscopeDisplay";
import RestartButton from "./components/RestartButton";

function App() {
  const [signs, setSigns] = useState([]);
  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState(null);
  const [horoscope, setHoroscope] = useState("");

  useEffect(() => {
    getSigns().then(setSigns);
  }, []);

  useEffect(() => {
    if (selectedSign && selectedTimeframe) {
      getHoroscope(selectedSign, selectedTimeframe).then(setHoroscope);
    }
  }, [selectedSign, selectedTimeframe]);

  const restart = () => {
    setSelectedSign(null);
    setSelectedTimeframe(null);
    setHoroscope("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="black">
          <h2>Zodiac Signs</h2>
          <SignSelection signs={signs} onSelectSign={setSelectedSign} />
        </div>
        <div className="white">
          <div className="horoscope-app">
            <Header />
            {selectedSign && !selectedTimeframe && (
              <TimeframeSelection onSelectTimeframe={setSelectedTimeframe} />
            )}
            {selectedSign && selectedTimeframe && (
              <>
                <HoroscopeDisplay
                  selectedSign={selectedSign}
                  selectedTimeframe={selectedTimeframe}
                  horoscope={horoscope}
                />
                <RestartButton onRestart={restart} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
