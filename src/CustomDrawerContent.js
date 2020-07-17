import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';

export class CustomDrawerContent extends Component{
    render(props){
        return (
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
}