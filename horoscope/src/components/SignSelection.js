import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function SignSelection ({ signs, onSelectSign }) {
  return (
    <Flex
      flexWrap='wrap' // Flex wrapping
      justifyContent='space-evenly' // Even spacing between items
      pt='20px' // Padding on top
    >
      {signs.map(sign => (
        <Box
          key={sign}
          textAlign='center' // Centers text
          p='20px' // Inner padding
          m='20px' // Margin around the box
          w='100px' // Fixed width
          h='100px' // Fixed height
          borderRadius='20px' // Rounded corners
          display='flex' // Flex container
          flexDirection='column' // Flex direction column
          alignItems='center' // Align items to the center
          bg='rgba(255, 255, 255, 0.1)' // Background color
          transition='transform 0.3s ease' // Hover transition
          _hover={{ transform: "scale(1.05)" }} // Hover scaling
        >
          <Image
            src={`/images/${sign}.png`}
            alt={`${sign} icon`}
            borderRadius='full' // Circular image
            boxSize='100%' // Full width and height
            objectFit='cover' // Ensures the image fits inside the box
          />
          <Button
            onClick={() => onSelectSign(sign)}
            textTransform='uppercase' // Uppercase text
            bg='transparent' // Transparent background
            border='2px solid white' // Border styling
            borderRadius='8px' // Rounded button corners
            color='white' // White text
            px='8px' // Horizontal padding
            py='4px' // Vertical padding
            mt='10px' // Margin on top
            transition='background-color 0.3s ease' // Hover transition
            _hover={{ bg: "rgba(255, 255, 255, 0.2)" }} // Hover background color
            cursor='pointer' // Pointer cursor on hover
          >
            {sign}
          </Button>
        </Box>
      ))}
    </Flex>
  );
}
