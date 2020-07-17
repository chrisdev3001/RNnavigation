import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView } from 'react-native';

export class LoginScreen extends Component{
    render(){
        const navigation = useNavigation();
        return (
          <SafeAreaView style={{ flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Login Screen!</Text>
              <TouchableOpacity
                style={{marginTop: 20}}
                onPress={() => navigation.navigate('HomeApp')}
              >
                <Text>Login</Text>
              </TouchableOpacity>        
              <TouchableOpacity
                style={{marginTop: 20}}
                onPress={() => navigation.navigate('Register')}
              >
                <Text>Register</Text>
              </TouchableOpacity>          
            </View>
          </SafeAreaView>
        );
    }
}