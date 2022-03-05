import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AddEvent from './src/screens/AddEventScreen';
import AddReview from './src/screens/AddReviewScreen';
import EventScreen from './src/screens/EventScreen';
import Help from './src/screens/HelpScreen';
import SavedEvents from './src/screens/SavedEvents';
import WelcomeScreen from './src/screens/WelcomeScreen';


const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Event: EventScreen,
    AddEvent: AddEvent,
    AddReview: AddReviewScreen,
    Help: HelpScreen,
    Profile: ProfileScreen,
    SavedEvents: SavedEvents
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
