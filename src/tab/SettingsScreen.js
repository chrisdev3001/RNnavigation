import React, { Component } from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../index';
import { RVText } from '../core';

export class SettingsScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="Settings" isHome={true} navigation={this.props.navigation} />
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <RVText content="Settings!" />
                <TouchableOpacity
                    style={{marginTop: 20}}
                    onPress={() => this.props.navigation.navigate('SettingDetail')}
                >
                    <RVText content="Go settings detail" />
                </TouchableOpacity>        
            </View>
          </SafeAreaView>
        );
    }
}