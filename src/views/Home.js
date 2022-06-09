import {
  Box,
  Text,
  Code,
  Button,
  Stack,
  Flex,
} from '@chakra-ui/react';
import { Logo } from '../Logo';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from '../reducers/useReducers'

export default function Home() {

  const dispatch = useDispatch()

  const changeName = ()=> {
    dispatch(updateName('Developer!'))
  }

  const { name } = useSelector((state)=>{
    return state
  })

  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Flex minH="100vh" p={3} alignItems='center' justifyContent='center'>
          <Stack spacing={8} justifyContent='center'>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              {`Welcome Back, ${name}`}
            </Text>
            <Text>
              Edit <Code fontSize="xl">src/views/Home.js</Code> and save to reload.
            </Text>
            <Box textAlign='center'>
              <Button onClick={()=>{changeName()}} variant='outline' colorScheme='teal' w='140px' h='45px' >
                Change Name
              </Button>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}