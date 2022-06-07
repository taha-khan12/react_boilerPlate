import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import AppRoute from './routes/Route';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoute />
    </ChakraProvider>
  );
}

export default App;
