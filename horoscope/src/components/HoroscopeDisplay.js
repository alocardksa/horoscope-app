import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function HoroscopeDisplay({
  selectedSign,
  selectedTimeframe,
  horoscope,
}) {
  return (
    <Box 
      mt="1.5em" // Matches the CSS for .horoscope-display margin-top
      color="#444" // Text color for the main container
    >
      <Heading 
        as="p" // Indicates this is an H2 heading
        fontSize="23px" // Adjust size to match your design
        mb="0.5em" // Space between heading and text
        color="white"
      >
        Your horoscope {selectedTimeframe}<br /> if you are under the sign of <br /> {selectedSign} is...
      </Heading>
      <Text 
        fontSize="1em" // Matches the .horoscope-text font-size
        lineHeight="1.5" // Matches the line-height
        color="#555" // Matches the .horoscope-text color
        mt="0.5em" // Matches the .horoscope-text margin-top
      >
        {horoscope}
      </Text>
    </Box>
  );
}
