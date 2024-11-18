import React from 'react';
import { Button } from '@chakra-ui/react';

export default function RestartButton({ onRestart }) {
  return (
    <Button
      onClick={onRestart}
      size="xs"
      bg="black"
      color="white"
      _hover={{ bg: '#ffd700' }}
      _active={{ bg: 'gray.700' }}
      fontWeight="bold" 
       fontSize=".9em" 
    >Restart
    </Button>
  );
}

