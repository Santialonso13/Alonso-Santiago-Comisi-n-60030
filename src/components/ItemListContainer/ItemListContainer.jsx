import { Box } from "@chakra-ui/react";

const ItemListContainer = ({greeting}) =>{ 
    return( 
        <Box width={"100%"} height={"80vh"} fontStyle={"italic"} display={"flex"} 
        justifyContent={"center"} fontFamily={"serif"} fontSize={"20px"}> 
            {greeting}
        </Box>
    )
} 

export default ItemListContainer;
