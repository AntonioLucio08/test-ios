import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/home";
import LoginScreen from "../screens/loginScreen";

const Stack = createStackNavigator();

export const NavigatorApp=()=> {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
    );
}
