// import 'react-native-gesture-handler';
// import React from 'react';
// import { Provider as AuthProvider } from './src/context/EventContext';
// import AuthNavigation from './src/navigation/AuthNavigation';
// import TabNavigator from './src/navigation/TabNavigator';
// import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Block, GalioProvider } from "galio-framework";
// import { NavigationContainer } from '@react-navigation/native';
// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

import Screens from "./navigation/Screens";


// const StackNavigator = createNativetackNavigator(
//   {
//     Auth: AuthNavigation,
//     MainFlow: TabNavigator

//   },
//   {
//     initialRouteName: 'Auth',
//     defaultNavigationOptions: {
//       title: 'Fatherhood Is Lit'
//     }
//   })

//   const App = createNativeStackNavigator(StackNavigator)

// export default (StackNavigator) => {
//   return (
//     <AuthProvider>
//       <NavigationContainer>
//         <StackNavigator />
//       </NavigationContainer>
//     </AuthProvider>
//   );
// }

// import React from 'react';
// import { Text, View } from 'react-native';

// const HelloWorldApp = () => {
//   return (
//     <View style={{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center'
//     }}>
//       <Text>Hello, world!</Text>
//     </View>
//   );
// }

// export default HelloWorldApp;