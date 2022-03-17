import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Logo = () => {

    const Stack = createNativeStackNavigator();

    function LogoTitle() {
        return (
            <Image
                style={{ width: 50, height: 50 }}
                source={require('@expo/snack-static/react-native-logo.png')}
            />
        );
    }

    function StackScreen() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Logo
