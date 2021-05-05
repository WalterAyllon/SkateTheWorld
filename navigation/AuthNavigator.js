import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LogIn from '../screens/LogIn.js'
import SignUp from '../screens/SignUp.js'

const StackNavigator = createStackNavigator(
    {
        LogIn: {
            screen: LogIn,
            navigationOptions: {
                headerShown: false
            }
        },
        SignUp: {
            screen: SignUp
        }
    }
);

export default createAppContainer(StackNavigator);