import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function CustomHeader({title, isHome}){
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      <View style={{flex:1, justifyContent: 'center'}}>
          {
            isHome ?
              <TouchableOpacity onPress={()=> navigation.openDrawer()} >
                <Image style={{width: 30, height: 30, marginLeft: 5}}
                  source={require('./src/images/menu-abierto.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              :
              <TouchableOpacity 
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => navigation.goBack()}
              >
                <Image style={{width: 20, height: 20, marginLeft: 5}}
                  source={require('./src/images/back.png')}
                  resizeMode="contain"
                />
                <Text>Back</Text>
              </TouchableOpacity>
          }
      </View>

      <View style={{flex:1.5, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View style={{flex:1}}></View>
    </View>
  )
}

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home" isHome={true} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('HomeDetail')}
        >
          <Text>Go home detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function HomeScreenDetail() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home details"/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Detail!</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Settings" isHome={true}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settingss!</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('SettingDetail')}
        >
          <Text>Go settings detail</Text>
        </TouchableOpacity>        
      </View>
    </SafeAreaView>
  );
}

function SettingsScreenDetail() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Setting details"/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings detail!</Text>     
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Notifications"/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Notifications Screen!</Text>     
      </View>
    </SafeAreaView>
  );
}

function CustomDrawerContent(props){

  return(
    <SafeAreaView style={{flex: 1}} >
      <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('./src/images/profile.png')} 
          style={{height: 120, width: 120, borderRadius: 60 }}
        />
      </View>
      <ScrollView style={{marginLeft: 5}}>
        <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => props.navigation.navigate('MenuTab')}
          >
            <Text>Menu Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => props.navigation.navigate('Notifications')}
          >
            <Text>Notifications</Text>
          </TouchableOpacity>          
      </ScrollView>
    </SafeAreaView>
  )
}

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
                ? require('./src/images/home-black.png')
                : require('./src/images/home.png');
            } else if (route.name === 'Settings') {
              iconName = focused 
                ? require('./src/images/setting-black.png') 
                : require('./src/images/setting.png');
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

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props => CustomDrawerContent(props)} >
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}