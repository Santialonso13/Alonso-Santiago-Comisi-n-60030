import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';  
import {CartWidget} from "../CartWidget"; 
import { Link } from 'react-router-dom'; 
import { useCategory } from '../../hooks/useCategory';


 export const NavBar = () => {  
  const { colorMode, toggleColorMode } = useColorMode(); 

  const {category} = useCategory(); 
  return( 
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box> 
            <Link to="/">S.A IMPORTACIONES</Link>

          </Box> 
          <Menu>

              <MenuButton as={Link} cursor="pointer" style={{marginLeft: 30}}>
                Categorias
              </MenuButton>
              <MenuList>
                {category.map((category) => (
                  <MenuItem key={category.slug}> <Link to={`/category/${category.slug}`}>{category.name}</Link>  </MenuItem>
                ))}
              </MenuList>
            </Menu>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}> 
              <CartWidget/>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Usuario</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Servicios</MenuItem>
                  <MenuItem>Mas Opciones </MenuItem>
                  <MenuItem>Cerrar Sesion </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );

}; 

