import React, { useEffect } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import AppRoute from './routes/Route';
import { loadUser } from './reducers/useReducers'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    (async()=>{
      if(localStorage.getItem('user') !== null){
        let user = JSON.parse(localStorage.getItem('user') ?? '{}')
        dispatch(loadUser(user))
      }else if(Cookies.get('user') !== undefined){
        let user = JSON.parse(Cookies.get('user') ?? '{}')
        dispatch(loadUser(user))
      }
    })()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <AppRoute />
    </ChakraProvider>
  );
}

export default App;
