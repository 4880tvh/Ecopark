import React, { FunctionComponent } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../views/Welcome/Welcome';
import Home from '../views/Home/Home';

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} />
                {/* <Stack.Screen name="Home" component={Home} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;