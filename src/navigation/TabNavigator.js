import AddEventScreen from '../screens/AddEventScreen';
import EventScreen from '../screens/EventScreen';
import HelpScreen from '../screens/HelpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SavedEventsScreen from '../screens/SavedEventsScreen';
import HomeScreen from '../screens/HomeScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';



const TabNavigator = () => {

    const Tab = createMaterialTopTabNavigator();

    
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} options={{
                        title: 'My home', headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }} />
                    <Tab.Screen name="Profile" component={ProfileScreen} options={{
                        title: 'My Account', headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }} />
                    <Tab.Screen name="Event" component={EventScreen} options={{
                        title: 'Search Events', headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }} />
                    <Tab.Screen name="AddEvent" component={AddEventScreen} options={{
                        title: 'Add An Event', headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }} />
                    <Tab.Screen name="SavedEvent" component={SavedEventsScreen} options={{
                        title: 'Suggested Events', headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }} />
                    <Tab.Screen name="Help" component={HelpScreen} options={{
                        title: 'Help', headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }



export default TabNavigator;