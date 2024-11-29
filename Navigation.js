import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home.js';
import Add from './Add.js';
import Edit from './Edit.js';
import Summary from "./Summary";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Add" component={Add} />
                <Stack.Screen name="Edit" component={Edit} />
                <Stack.Screen name="Summary" component={Summary} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
