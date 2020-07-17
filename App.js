import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomHeader, CustomDrawerContent } from './src';
import { HomeScreen, HomeScreenDetail, SettingsScreen, SettingsScreenDetail } from './src/tab';
import { NotificationsScreen } from './src/drawer';
import { LoginScreen, RegisterScreen } from './src/auth';
import { IMAGE } from './src/global/Image';


const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

const StackHome = createStackNavigator();

function HomeStack(){
  return(
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler}/>
    </StackHome.Navigator>
  )
}

const StackSetting = createStackNavigator();

function SettingStack(){
  return(
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler} />
      <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler} />
    </StackSetting.Navigator>
  )
}

function TabNavigator(){
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? IMAGE.ICON_HOME_BLACK
                : IMAGE.ICON_HOME;
            } else if (route.name === 'Settings') {
              iconName = focused 
                ? IMAGE.ICON_SETTINGS_BLACK
                : IMAGE.ICON_SETTINGS;
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{width: 20, height: 20}} resizeMode="contain" />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigation(){
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props => CustomDrawerContent(props)} >
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen name="HomeApp" component={DrawerNavigation} options={navOptionHandler} />
        <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
        <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}