import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';   

import Preload from '../screens/Preload';
import Menu from '../screens/Catalogo';
import MainTab from './MainTab';
import Catalogo from '../screens/Catalogo';
import Data from '../screens/Data';
import Modal from '../screens/Modal';

const Stack = createStackNavigator();

export default () => (

    <Stack.Navigator
        initialRouteName='Preload'
        screenOptions={
            {headerShown: false}
        }
        
    >
    

        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Catalogo" component={Catalogo} />
        <Stack.Screen name='MainTab' component={MainTab} />
        <Stack.Screen name="Data" component={Data} />
        <Stack.Screen name="Modal" component={Modal} />
  
    </Stack.Navigator>

);
