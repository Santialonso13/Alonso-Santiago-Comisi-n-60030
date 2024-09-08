import {Flex, Text } from "@chakra-ui/react"; 
import { TbShoppingCartDollar } from "react-icons/tb";

export const CartWidget = () =>{ 
return(  
    <Flex alignItems={"center"} justifyContent={"center"} width={90}> 
        <TbShoppingCartDollar  size={25}/>
        <Text fontSize={"2rem"}> 0 </Text>
    </Flex>
    
);
} ; 

