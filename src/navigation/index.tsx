import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomTabNavigation";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false
                    }}>
                        <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation}/>
                    </Stack.Navigator>
                </NavigationContainer>
        </SafeAreaProvider>
    )
}
export default Navigation