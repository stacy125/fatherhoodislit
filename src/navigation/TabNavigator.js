import AddEventScreen from '../screens/AddEventScreen';
import EventScreen from '../screens/EventScreen';
import HelpScreen from '../screens/HelpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SavedEventsScreen from '../screens/SavedEventsScreen';
import HomeScreen from '../screens/HomeScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const TabNavigator = () => {

    const Tab = createMaterialTopTabNavigator();

    function MyTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Event" component={EventScreen} />
                <Tab.Screen name="AddEvent" component={AddEventScreen} />
                <Tab.Screen name="SavedEvent" component={SavedEventsScreen} />
                <Tab.Screen name="Help" component={HelpScreen} />
            </Tab.Navigator>
        );
    }

}

export default TabNavigator;