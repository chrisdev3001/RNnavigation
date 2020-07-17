import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';

export class CustomHeader extends Component{
    render(){
        return (
            <View style={{flexDirection: 'row', height: 50}}>
                <View style={{flex:1, justifyContent: 'center'}}>
                    {
                        isHome ?
                        <TouchableOpacity onPress={()=> navigation.openDrawer()} >
                            <Image 
                                style={{width: 30, height: 30, marginLeft: 5}}
                                source={require('./src/images/menu-abierto.png')}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity 
                            style={{flexDirection: 'row', alignItems: 'center'}}
                            onPress={() => navigation.goBack()}
                        >
                            <Image 
                                style={{width: 20, height: 20, marginLeft: 5}}
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
}