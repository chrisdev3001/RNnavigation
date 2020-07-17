import * as React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

function CustomHeader({title}){
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      <View style={{flex:1, justifyContent: 'center'}}>
        <Image style={{width: 30, height: 30, marginLeft: 5}}
          source={require('./src/images/menu-abierto.png')}
          resizeMode="contain"
        />
      </View>
      <View style={{flex:1.5, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View style={{flex:1}}></View>
    </View>
  )
}

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home"/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Settings" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settingss!</Text>
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}