import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RootStackParamList from './RootStackParamList/index';

import Home from '@pages/Home/index';
import Spending from '@pages/Spending/index';
import Login from '@pages/Authentication/Login/index';
import Expense from '@pages/Expense/index';
import Income from '@pages/Income/index';

const stackNavigator = createNativeStackNavigator<RootStackParamList>();
const stackTab = createBottomTabNavigator<RootStackParamList>();

const Tab = () => {
  return (
    <stackTab.Navigator>
      <stackTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => {
            return <Feather name="home" size={size} color={color} />;
          },
        }}
      />
      <stackTab.Screen
        name="Spending"
        component={Spending}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => {
            return <Feather name="bar-chart" size={size} color={color} />;
          },
        }}
      />
    </stackTab.Navigator>
  );
};

export default function userRoute() {
  return (
    <stackNavigator.Navigator>
      <stackNavigator.Screen name="Tab" component={Tab} options={{ headerShown: false }} />
      <stackNavigator.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <stackNavigator.Screen name="Expense" component={Expense} options={{ headerShown: false }} />
      <stackNavigator.Screen name="Income" component={Income} options={{ headerShown: false }} />
    </stackNavigator.Navigator>
  );
}
