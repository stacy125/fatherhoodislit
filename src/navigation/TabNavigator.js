import { createTopTabNavigator } from 'react-navigation-stack';
import AddEventScreen from '../screens/AddEventScreen';
import EventScreen from '../screens/EventScreen';
import HelpScreen from '../screens/HelpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SavedEvents from '../screens/SavedEvents';
import HomeScreen from '../screens/HomeScreen';

const TabNavigator = createTopTabNavigator({
    Home: {
        screen: HomeScreen
    },

    Profile: {
        screen: ProfileScreen,
    },

    Events: {
        screen: EventScreen,
    },

    SavedEvents: {
        screen: SavedEvents,
    },

    AddEvent: {
        screen: AddEventScreen,
    },
    
    Help: {
        screen: HelpScreen,
    }
})

export default TabNavigator;