import {
  Box,
  Text,
  Code,
  Button,
  Stack,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { Logo } from '../Logo';
import { useDispatch, useSelector } from 'react-redux';
import { updateName, fetchUserName, logout } from '../reducers/useReducers'

export default function Home() {

  const dispatch = useDispatch()

  const changeName = ()=> {
    dispatch(updateName({name: 'Developer!'}))
  }

  const internetName = ()=> {
    dispatch(fetchUserName())
  }

  const removeUser = ()=> {
    dispatch(logout())
  }

  const user = useSelector(state => state.value?.name);
 
  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Flex minH="100vh" p={3} alignItems='center' justifyContent='center'>
          <Stack spacing={8} justifyContent='center'>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              {`Welcome Back, ${user ?? 'User'}`}
            </Text>
            <Text>
              Edit <Code fontSize="xl">src/views/Home.js</Code> and save to reload.
            </Text>
            <HStack justify='center'>
              <Button onClick={()=>{changeName()}} variant='outline' colorScheme='teal' w='140px' h='45px' >
                Change Name
              </Button>
              <Button onClick={()=>{internetName()}} variant='outline' colorScheme='teal' w='140px' h='45px' >
                Internet User
              </Button>
              <Button onClick={()=>{removeUser()}} variant='outline' colorScheme='teal' w='140px' h='45px' >
                Remove User
              </Button>
            </HStack>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}