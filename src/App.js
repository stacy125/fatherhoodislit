import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createTopTabNavigator } from 'react-navigation-tabs'
import SignupScreen from './screens/Signup';
import SigninScreen from './screens/Signin'
import AddEventScreen from './screens/AddEventScreen';
import AddReviewScreen from './screens/AddReviewScreen';
import EventScreen from './screens/EventScreen';
import HelpScreen from './screens/HelpScreen';
import ProfileScreen from './screens/ProfileScreen';
import SavedEvents from './screens/SavedEvents';
import HomeScreen from './screens/HomeScreen';
import { Provider as AuthProvider } from './context/EventContext';
import { setNavigator } from './NavigationRef';

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


