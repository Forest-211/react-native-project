import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    CardStyleInterpolators,
    createStackNavigator,
    HeaderStyleInterpolators,
    StackNavigationProp,
} from '@react-navigation/stack';
import { Platform, StyleSheet } from 'react-native';
import Counter from '../screens/counter';

export type RootStackParamList = {
    Counter: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

export default class Navigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    headerMode="float"
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyleInterpolator:
                            HeaderStyleInterpolators.forUIKit,
                        cardStyleInterpolator:
                            CardStyleInterpolators.forHorizontalIOS,
                        gestureEnabled: true, // 是否开启手势
                        gestureDirection: 'horizontal', // 手势方向
                        headerStyle: {
                            ...Platform.select({
                                android: {
                                    elevation: 0,
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                },
                                ios: {},
                            }),
                        },
                    }}>
                    <Stack.Screen
                        name="Counter"
                        component={Counter}
                        options={{ title: 'counter' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
