import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../../screens/Home";
import RemixIcon from 'react-native-remix-icon';
import Colors from '../../components/atoms/Colors';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
    const Color = Colors();
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: Color.primary.three,
            tabBarInactiveTintColor: Color.neutral.two,
            tabBarStyle: {
                backgroundColor: Color.neutral.one
            },
        }}>
            <Tab.Screen options={{
                tabBarIcon: ({focused, size, color}) => {
                return focused ? <RemixIcon name="home-fill" color={color} size={size}/> : <RemixIcon name="home-line" color={color} size={size}/>
            }}} name="Home" component={Home} />
            <Tab.Screen options={{
               tabBarIcon: ({focused, size, color}) => {
               return focused ? <RemixIcon name="history-line" color={color} size={size}/> : <RemixIcon name="history-line" color={color} size={size}/>
            }}} name="Card" component={Home} />
             <Tab.Screen options={{
                tabBarIcon: ({focused, size, color}) => {
                return focused ? <RemixIcon name="history-line" color={color} size={size}/> : <RemixIcon name="history-line" color={color} size={size}/>
            }}} name="History" component={Home} />
            <Tab.Screen options={{
                tabBarIcon: ({focused, size, color}) => {
                return focused ? <RemixIcon name="notification-3-fill" color={color} size={size}/> : <RemixIcon name="notification-3-line" color={color} size={size}/>
            }}} name="Notification" component={Home} />
            <Tab.Screen options={{
                tabBarIcon: ({focused, size, color}) => {
                return focused ? <RemixIcon name="user-4-fill" color={color} size={size}/> : <RemixIcon name="user-4-line" color={color} size={size}/>
            }}} name="Profile" component={Home} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation