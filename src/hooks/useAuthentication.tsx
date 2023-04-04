import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ReceiveScreen } from '../routes/NavigationRoutes';

import * as SecureStore from 'expo-secure-store';
import * as WebBrowser from 'expo-web-browser';
import * as AppleAuthentication from 'expo-apple-authentication';
import { ICredential } from '../interfaces/ICredential';

WebBrowser.maybeCompleteAuthSession();

function useAuthentication() {
  const navigation = useNavigation<ReceiveScreen>();

  const [appleAuthAvailable, setAppleAuthAvailable] = useState(false);
  const [token, setToken] = useState<ICredential>();

  useEffect(() => {
    const checkAvailable = async () => {
      const isAvailable = await AppleAuthentication.isAvailableAsync();
      setAppleAuthAvailable(isAvailable);

      if (isAvailable) {
        const credentialSecure = await SecureStore.getItemAsync('apple-credential-secure');
        setToken(JSON.parse(credentialSecure));
      }
    };

    checkAvailable();
  }, []);

  const getCredentialState = useCallback(async () => {
    const credentialState = await AppleAuthentication.getCredentialStateAsync(token.user);
    console.log(credentialState, 'return status of my authentication, i can validate the status on the documentation');
  }, []);

  const logout = useCallback(async () => {
    SecureStore.deleteItemAsync('apple-credentials-secure');
    setToken(undefined);
    navigation.navigate('Login');
  }, []);

  const appleAuthentication = useCallback(async () => {
    try {
      const credential: any = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      setToken(credential);
      SecureStore.setItemAsync('apple-credential-secure', JSON.stringify(credential));
      navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    getCredentialState,
    logout,
    appleAuthentication,
    AppleAuthentication,
    appleAuthAvailable,
    token,
  };
}

export { useAuthentication };
