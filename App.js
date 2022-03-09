import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createTopTabNavigator } from 'react-navigation-tabs'
import SignupScreen from './src/screens/Signup';
import SigninScreen from './src/screens/Signin'
import AddEventScreen from './src/screens/AddEventScreen';
import AddReviewScreen from './src/screens/AddReviewScreen';
import EventScreen from './src/screens/EventScreen';
import HelpScreen from './src/screens/HelpScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SavedEvents from './src/screens/SavedEvents';
import HomeScreen from './src/screens/HomeScreen';
import { Provider as AuthProvider } from './src/context/EventContext';
import { setNavigator } from './src/NavigationRef';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  // mainFlow: createTopTabNavigator({
  //   ListFlow: createStackNavigator({
  //     Home: HomeScreen,
  //   }),
  //   Profile: ProfileScreen,
  //   Events: EventScreen,
  //   Help: HelpScreen,
  // }),
});


const App = createAppContainer(switchNavigator)

export default () => {
  return (
   <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }}/>
   </AuthProvider>
  );
}


