import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import HoroscopeDisplay from "./components/HoroscopeDisplay";
import RestartButton from "./components/RestartButton";
import SignSelection from "./components/SignSelection";
import TimeframeSelection from "./components/TimeframeSelection";
import { getHoroscope, getSigns } from "./services/api";

function App () {
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
    <Flex height='100vh' direction={{ base: "column", md: "row" }}>
      {/* Left Panel: Zodiac Signs */}
      <Box
        width={{ base: "100%", md: "50%" }}
        backgroundColor='black'
        color='white'
        p={4}
        overflowY='auto'
      >
        <Heading as='h2' size='lg' textAlign='center' mb={4}>
          Zodiac Signs
        </Heading>
        <SignSelection signs={signs} onSelectSign={setSelectedSign} />
      </Box>

      {/* Right Panel: Horoscope Display */}
      <Box
        width={{ base: "100%", md: "70%" }}
        backgroundColor='whitesmoke'
        p={5}
        overflowY='auto'
      >
        <VStack
          spacing={6}
          maxWidth='600px'
          mx='auto'
          bg='black'
          p={6}
          borderRadius='lg'
          boxShadow='lg'
        >
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
        </VStack>
      </Box>
    </Flex>
  );
}

export default App;
