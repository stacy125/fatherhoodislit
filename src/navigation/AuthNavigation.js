import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../screens/Signin';
import SignupScreen from '../screens/Signup';

const Stack = createStackNavigator();

const AuthNavigation = () => {

    return (
        <Stack.Navigator initialRouteName='Signup' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Signup' component={SignupScreen} />
            <Stack.Screen name='Signin' component={SigninScreen} />
        </Stack.Navigator>
    )
}




export default AuthNavigation;