import React from 'react';
import { Heading } from '@chakra-ui/react';

export default function Header() {
  return (
    <Heading 
      as="h1" 
      color="#ffd700" 
      fontSize="2em" 
      fontWeight="bold" 
      mb="1em"
    >
      The Horoscope App
    </Heading>
  );
}
