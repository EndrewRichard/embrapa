import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/CustomTabBar";

import Catalogo from "../screens/Catalogo";
import Estado from "../screens/Estado";
import Favoritos from "../screens/Favoritos";
import Sobre from "../screens/Sobre";
import Tutorial from "../screens/Tutorial";



const Tab = createBottomTabNavigator();

export default() => (

    <Tab.Navigator tabBar={props=><CustomTabBar {...props}/>}>
        <Tab.Screen name='Catalogo' component={Catalogo} />
        <Tab.Screen name='Estado' component={Estado} />
        <Tab.Screen name='Favoritos' component={Favoritos} />
        <Tab.Screen name='Tutorial' component={Tutorial} />
        <Tab.Screen name='Sobre' component={Sobre} />
    </Tab.Navigator>


);