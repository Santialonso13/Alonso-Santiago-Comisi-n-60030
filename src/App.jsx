import {  ChakraProvider } from '@chakra-ui/react';  
import React from 'react';  
import { MainRouter } from './routes';
import { NavBar } from './components';

  






function App() {
  return ( 
    
    <ChakraProvider> 
     <MainRouter />
    </ChakraProvider>  

  
  );   
}

export default App;
