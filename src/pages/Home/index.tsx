import React from 'react';
import { useAuthentication } from '@hooks/useAuthentication';
// import Login from  '@pages/Authentication/Login/index'

import { Container, Header, Button, Text } from './styled';


export default function Home(){
  const { token, logout } = useAuthentication();

  return (
    <Container>
        <Header></Header>
        <Button onPress={logout}><Text>Sair</Text></Button>
        {/* {token ? <Button onPress={logout}><Text>Sair</Text></Button> : <Login/>} */}
        
    </Container>
  );
}