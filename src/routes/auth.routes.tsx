import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStackParamList from './RootStackParamList/index';


import Login from '@pages/Authentication/Login/index';

const stackNavigator = createNativeStackNavigator<RootStackParamList>();

export default function AuthRoute() {
    
    return (
        <stackNavigator.Navigator>
            <stackNavigator.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        </stackNavigator.Navigator>
    )
}
