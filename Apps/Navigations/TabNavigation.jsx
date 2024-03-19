import React from 'react';
import { View, Text } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ExploreScreen from "../Screens/ExploreScreen";
import AddPostScreen from "../Screens/AddPostScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#e91e63",
        }}>
            <Tab.Screen name="home" component={HomeScreen}
                        options={{
                            tabBarLabel: "Home",
                            tabBarIcon: ({color, size}) => (
                                <AntDesign name="home" size={24} color={color} />
                            )
                        }}
            />
            <Tab.Screen name="explore" component={ExploreScreen}
                        options={{
                            tabBarLabel: "Explore",
                            tabBarIcon: ({color, size}) => (
                                <MaterialIcons name="travel-explore" size={24} color={color} />
                            )
                        }}
            />
            <Tab.Screen name="addpost" component={AddPostScreen}
                        options={{
                            tabBarLabel: "Add Post",
                            tabBarIcon: ({color, size}) => (
                                <MaterialIcons name="post-add" size={24} color={color} />
                            )
                        }}
            />
            <Tab.Screen name="profile" component={ProfileScreen}
                        options={{
                            tabBarLabel: "Profile",
                            tabBarIcon: ({color, size}) => (
                                <AntDesign name="user" size={24} color={color} />
                            )
                        }}
            />
        </Tab.Navigator>
    );
};
