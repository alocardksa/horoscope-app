import React from "react";
import { Box, Heading, Button, Stack } from "@chakra-ui/react";

export default function TimeframeSelection({ onSelectTimeframe }) {
  return (
    <Box
      mt="2em" // Margin top for the section
      textAlign="center" // Center-align text
    >
      <Heading
        as="h2"
        fontSize="1.5em" // Adjusted to make the heading more readable
        mb="1.3em" // Space below the heading
      >
        Please select a timeframe
      </Heading>

      <Stack
        direction="row" // Horizontal layout for buttons
        spacing={4} // Space between buttons
        justify="center" // Center-align buttons
      >
        {["yesterday", "today", "tomorrow"].map((timeframe) => (
          <Button
            key={timeframe}
            onClick={() => onSelectTimeframe(timeframe)}
            textTransform="uppercase" // Uppercase text
            bg="transparent" // Transparent background
            border="1px solid white" // Border styling
            borderRadius="8px" // Rounded button corners
            color="white" // White text
            px="6px" // Horizontal padding
            py="3px" // Vertical padding
            mt="6px" // Margin on top
            transition="background-color 0.3s ease" // Hover transition
            _hover={{ bg: "rgba(255, 255, 255, 0.2)" }} // Hover background color
            cursor="pointer" // Pointer cursor on hover
          >
            {timeframe}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
