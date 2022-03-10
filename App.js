import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider as AuthProvider } from './src/context/EventContext';
import { setNavigator } from './src/NavigationRef';
import AuthNavigation from './src/navigation/AuthNavigation';
import TabNavigator from './src/navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

const switchNavigator = createSwitchNavigator({
  Auth: AuthNavigation,
  MainFlow: TabNavigator
});


const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <App ref={(navigator) => { setNavigator(navigator) }} />
      </AuthProvider>
    </NavigationContainer>
  );
}


