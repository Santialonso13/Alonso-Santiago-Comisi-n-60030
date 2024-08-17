import {  ChakraProvider } from '@chakra-ui/react';  
import React from 'react';  
import NavBar from "./components/Navbar/NavBar";  
import ItemListContainer from './components/ItemListContainer/ItemListContainer';  
  




<assets />

function App() {
  return (
    <ChakraProvider> 
      <NavBar /> 
      <ItemListContainer  greeting="BIENVENIDO A LA TIENDA DE IMPORTACIONES MAS GRANDE DE CORDOBA "/>
    </ChakraProvider>  

  
  );   
}

export default App;
