import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "./components/navbar";
import HeroSection from './components/hero_section';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <HeroSection />
      {/* Other components */}
    </ChakraProvider>
  );
};

export default App;
