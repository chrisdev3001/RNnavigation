import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../index';

export class SettingsScreen extends Component{
    render(){
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
}