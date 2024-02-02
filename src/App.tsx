import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "./components/navbar";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Navbar />
      {/* Other components */}
    </ChakraProvider>
  );
};

export default App;
