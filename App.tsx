import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/index';
import AppProvider from './src/context/index';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </AppProvider>
  );
}


