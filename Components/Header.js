import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Header } from 'react-native-elements';

export function HeaderPin() {
    return (
        <View>
        <Header
       placement="left"
       backgroundColor = "black"
       leftComponent={{ icon: 'rowing', color: '#fff', fontSize:24 }}
       centerComponent={{ text: 'PinPoint', style: { color: '#fff', fontSize:24 } }}
     />
         </View>
       );
    
}

export default HeaderPin