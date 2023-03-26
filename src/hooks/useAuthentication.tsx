import { useState, useEffect, useCallback } from 'react';
import { Button, Text, StyleSheet, View  } from 'react-native';

import * as SecureStore from 'expo-secure-store';
import * as WebBrowser from 'expo-web-browser'
import * as AppleAuthentication from 'expo-apple-authentication';
import { ICredential } from '../interfaces/ICredential';


  WebBrowser.maybeCompleteAuthSession();

function useAuthentication() {
    const [appleAuthAvailable, setAppleAuthAvailable ] = useState(false);
    const [token, setToken] = useState<ICredential>();

    useEffect(() => {
        const checkAvailable = async () => {
          const isAvailable = await AppleAuthentication.isAvailableAsync();
          setAppleAuthAvailable(isAvailable);
    
          if (isAvailable)  {
            const credentialSecure = await SecureStore.getItemAsync('apple-credential-secure');
            setToken(JSON.parse(credentialSecure));
          }
        };
    
        checkAvailable();
    
    },[]);
    
    const getCredentialState = useCallback( async () => {
        const credentialState = await AppleAuthentication.getCredentialStateAsync(token.user)
        console.log(credentialState, 'return status of my authentication, i can validate the status on the documentation');
    }, []);
    
    const logout = async () => {
        SecureStore.deleteItemAsync('apple-credentials-secure');
        setToken(undefined);
    };
    
    const AppleAuthetication = useCallback(async () => {
          try {
            const credential: any = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            console.log(credential);
            setToken(credential);
            SecureStore.setItemAsync('apple-credential-secure', JSON.stringify(credential));
          } catch (e) {
            console.log(e);
          }
    }, []);
    
    const getAppleAuthentication = () => {
      if (!token) {
        return <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={styles.button}
        onPress={AppleAuthetication}
      />    
      } else {
        return (
          <View>
            <Button title='Logout' onPress={logout}/>
            <Button title='Get credential' onPress={getCredentialState}/>
          </View>
        )
      }
    }    

    return ({
        getAppleAuthentication,
        getCredentialState,
        logout,
        AppleAuthentication,
        appleAuthAvailable,
        token,
    })
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

export { useAuthentication }