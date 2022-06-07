import {
  ChakraProvider,
  Box,
  Text,
  Code,
  Stack,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Flex minH="100vh" p={3} alignItems='center' justifyContent='center'>
          <Stack spacing={8} justifyContent='center'>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link to='/wasd'>Go To Error Page</Link>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
