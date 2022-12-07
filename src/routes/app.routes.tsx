import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateReminder from '../screens/createReminder';
import Home from '../screens/homePage';
import ViewReminder from '../screens/viewReminder';



const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="createReminder"
                component={CreateReminder}
            />
            <Screen
                name="viewReminder"
                component={ViewReminder}
            />
        </Navigator>
    )
}