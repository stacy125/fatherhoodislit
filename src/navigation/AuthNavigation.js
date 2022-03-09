import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import SigninScreen from '../screens/Signin';
import SignupScreen from '../screens/Signup';

const AuthNavigation = createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
});

export default AuthNavigation;