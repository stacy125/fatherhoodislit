import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AddEventScreen from './src/screens/AddEventScreen';
import AddReviewScreen from './src/screens/AddReviewScreen';
import EventScreen from './src/screens/EventScreen';
import HelpScreen from './src/screens/HelpScreen';
import Profile from './src/screens/ProfileScreen';
import SavedEvents from './src/screens/SavedEvents';
import WelcomeScreen from './src/screens/WelcomeScreen';


const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Event: EventScreen,
    AddEvent: AddEventScreen,
    Help: HelpScreen,
    Profile: Profile,
    SavedEvents: SavedEvents,
    AddReview: AddReviewScreen
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      title: 'Fatherhood Is Lit'
    }
  })

  const App = createAppContainer(navigator)

export default () => {
  return (
   <Provider>
     <App />
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
