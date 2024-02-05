import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "./components/navbar";
import HeroSection from './components/hero_section';
import Project from './components/projects';


const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <HeroSection />
      <Project/>
    </ChakraProvider>
  );
};

export default App;
