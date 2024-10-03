import {Flex, Text } from "@chakra-ui/react"; 
import { useContext } from "react";
import { BsMinecart } from "react-icons/bs";
import { CartContext } from "../../context";  
import { Link } from "react-router-dom";


export const CartWidget = () =>{  
    const {cartState} = useContext(CartContext);  
    const qtyTotalItems = cartState.reduce((acc,item)=> acc + item.qtyItem, 0); 
return(  
    <Link to ="/checkout"> 
         <Flex alignItems={"center"} justifyContent={"center"} width={90}> 
            <BsMinecart  size={25}/>
             <Text fontSize={"2rem"}>{qtyTotalItems}</Text>
         </Flex>
    
    </Link> 
);
} ; 

