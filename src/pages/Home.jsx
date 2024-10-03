import React from 'react'; 
import {ItemListContainer, Loader} from "../components";
import { useProducts } from '../hooks/useProducts';




export const Home = () => {  

const { products, loading} =useProducts('products'); 
   return  loading ? ( 
   <Loader />
   ):  
   (<ItemListContainer products={products} /> ); 

};
