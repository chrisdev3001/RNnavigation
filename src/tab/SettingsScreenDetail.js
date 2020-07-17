import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { CustomHeader } from '../index';

export class SettingsScreenDetail extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1}}>
                <CustomHeader title="Setting details"/>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Settings detail!</Text>     
                </View>
            </SafeAreaView>
        );
    }
}