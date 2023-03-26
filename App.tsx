import { StatusBar } from 'expo-status-bar';
import Login from './src/pages/Authentication/Login/index';
import AppProvider from './src/context/index';

export default function App() {
  return (
    <AppProvider>
      <Login/>
    </AppProvider>
  );
}


