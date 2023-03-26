import React from 'react';
import { Button, Text, StyleSheet, View  } from 'react-native';
import { useAuthentication } from '../../../hooks/useAuthentication';

import { Container, Header, Text2 } from './styled';

export default function Login(){

  const { getAppleAuthentication, appleAuthAvailable } = useAuthentication();

  return (
    <Container>
        <Header>
        <Text2> Login </Text2>
            {
                appleAuthAvailable 
                ? getAppleAuthentication() 
                : <Text>Apple auth unavailable</Text>
            }
        </Header>
    </Container>
  )
}

