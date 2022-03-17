import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignupScreen from '../screens/Signup';
import SigninScreen from '../screens/Signin';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EventScreen from '../screens/EventScreen';
import SavedEventScreen from '../screens/SavedEventsScreen';
import ContactScreen from '../screens/ContactScreen';
import CustomDrawerContent from "../navigation/Menu";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function SignupStack(props) {
    <Stack.Navigator initialRouteName='Signup' headerMode="screen">
        <Stack.Screen
            name='Signup'
            component={SignupScreen}
            options={{
                header: ({ navigation, scene }) => (
                    <Header
                        transparent
                        white
                        title="Signup"
                        navigation={navigation}
                        scene={scene}
                    />
                )
            }} />
    </Stack.Navigator>
}
function SigninStack(props) {
    <Stack.Navigator headerMode="screen">
        <Stack.Screen
            name='Signin'
            component={SigninScreen}
            options={{
                header: ({ navigation, scene }) => (
                    <Header
                        transparent
                        white
                        title="Signin"
                        navigation={navigation}
                        scene={scene}
                    />
                )
            }} />
    </Stack.Navigator>
}

function HomeStack(props) {
    return (
        <Stack.Navigator mode="card" headerMode="screen">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Welcome to FatherhoodIsLit" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }} />
        </Stack.Navigator>
    )}

function ProfileStack(props) {
    return (
        <Stack.Navigator mode="card" headerMode="screen">
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="My Account" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }} />
        </Stack.Navigator>
    )}

function EventStack(props) {
    return (
        <Stack.Navigator mode="card" headerMode="screen">
            <Stack.Screen
                name="Event"
                component={EventScreen}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Father and children Events" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }} />
        </Stack.Navigator>
    )
}

function SavedEventStack(props) {
    return (
        <Stack.Navigator mode="card" headerMode="screen">
            <Stack.Screen
                name="Event"
                component={SavedEventScreen}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="My Saved Father and children Events" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }} />
        </Stack.Navigator>
    )
}
function ContactStack(props) {
    return (
        <Stack.Navigator mode="card" headerMode="screen">
            <Stack.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Help" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }} />
        </Stack.Navigator>
    )
}

function AppStack(props) {
    return (
        <Drawer.Navigator
            style={{ flex: 1 }}
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerStyle={{
                backgroundColor: "white",
                width: width * 0.8
            }}
            drawerContentOptions={{
                activeTintcolor: "white",
                inactiveTintColor: "#000",
                activeBackgroundColor: "transparent",
                itemStyle: {
                    width: width * 0.75,
                    backgroundColor: "transparent",
                    paddingVertical: 16,
                    paddingHorizonal: 12,
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    overflow: "hidden"
                },
                labelStyle: {
                    fontSize: 18,
                    marginLeft: 12,
                    fontWeight: "normal"
                }
            }}
            initialRouteName="Signup"
        >
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Profile" component={ProfileStack} />
            <Drawer.Screen name="Signup" component={SignupStack} />
            <Drawer.Screen name="Signin" component={SigninStack} />
            <Drawer.Screen name="Event" component={EventStack} />
            <Drawer.Screen name="SavedEvent" component={SavedEventStack} />
            <Drawer.Screen name="Help" component={HelpStack} />
        </Drawer.Navigator>
    );
}