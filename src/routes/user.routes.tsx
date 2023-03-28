import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStackParamList from './RootStackParamList/index';

import Home from '@pages/Home/index';
import Login from '@pages/Authentication/Login/index';

const stackNavigator = createNativeStackNavigator<RootStackParamList>();

export default function userRoute() {
    
    return (
        <stackNavigator.Navigator>
            <stackNavigator.Screen name="Home" component={Home} options={{ headerShown: false}}/>
            <stackNavigator.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        </stackNavigator.Navigator>
    )
}