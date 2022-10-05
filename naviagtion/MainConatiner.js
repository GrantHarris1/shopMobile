import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ToolsScreen from './screens/ToolsScreen';
import MaterialsScreen from './screens/MaterialsScreen';
import SignInScreen from './screens/SignInScreen';

//Screen Names
const homeName = 'Home';
const toolsName = 'Tools';
const materialsName = 'Materials';
const signinName = 'Sign In';


const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        

        
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name
                    if (rn == homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if ( rn === toolsName) {
                        iconName = focused ? 'hammer' : 'hammer-outline';
                    }  else if ( rn === materialsName) {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (rn === signinName) {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />

                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor:'grey',
                labelStyle: {paddingBottom: 10, fontSize: 10 },
                style: {padding: 10, height: 70}

            }}
            >
                <Tab.Screen name= {homeName} component={HomeScreen} />
                <Tab.Screen name= {toolsName} component={ToolsScreen} />
                <Tab.Screen name= {materialsName} component={MaterialsScreen} />
                <Tab.Screen name= {signinName} component={SignInScreen} />

            </Tab.Navigator>
        </NavigationContainer>
       
    )
}