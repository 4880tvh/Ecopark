import React, { FunctionComponent } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../views/Welcome/Welcome';
import Home from '../views/Home/Home';
import { colors } from '../components/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
            >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'My home',
                        headerStyle: {
                            backgroundColor: colors.green,
                        },
                        headerTintColor: colors.green,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;