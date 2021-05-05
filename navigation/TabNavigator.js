import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home.js'
import Search from '../screens/Search.js'
import Upload from '../screens/Upload.js'
import SavedPins from '../screens/SavedPins.js'
import Profile from '../screens/Profile.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator()

export default function mytabs(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={
                    ({route}) => ({
                        tabBarIcon: ({focused}) => {
                            let iconName;
                            if(route.name === 'Home') {
                                iconName = focused
                                ? 'home'
                                : 'home-outline';
                            }
                            else if(route.name === 'Search') {
                                iconName = focused
                                ? 'search'
                                : 'search-outline';
                            }
                            else if(route.name === 'Upload'){
                                iconName = focused
                                ? 'add-circle'
                                : 'add-circle-outline';
                            }
                            else if(route.name === 'Saved Pins'){
                                iconName = focused
                                ? 'pin'
                                : 'pin-outline';
                            }
                            else if(route.name === 'Profile'){
                                iconName = focused
                                ? 'person'
                                : 'person-outline';
                            }
                            return <Ionicons name = {iconName} size={28} color = "black" />;
                        },
                    })
                }
                tabBarOptions={{
                    showLabel: false
                }}
                >  
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Upload" component={Upload} />
                <Tab.Screen name="Saved Pins" component={SavedPins} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}