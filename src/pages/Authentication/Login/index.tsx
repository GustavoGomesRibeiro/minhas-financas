import React from 'react';
import { useAuthentication } from '@hooks/useAuthentication';
import { StyleSheet } from 'react-native';
import Button2 from '@components/Button/index';

import { Container, Header, Text } from './styled';

export default function Login() {
  const { appleAuthAvailable, AppleAuthentication, appleAuthentication } = useAuthentication();

  const getAppleAuthentication = () => {
    return (
      <>
        <Button2 icon="email-fast">Sign in with E-mail</Button2>

        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={5}
          style={styles.button}
          onPress={appleAuthentication}
        />
      </>
    );
  };

  return (
    <Container>
      <Header>{appleAuthAvailable ? getAppleAuthentication() : <Text>Apple auth unavailable</Text>}</Header>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
  },
});
