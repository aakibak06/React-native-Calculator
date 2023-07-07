import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react';
import Logo from '../../assets/images/calculator.png'

const SplashScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }} >
            <StatusBar hidden={true} />

            <Image source={Logo} style={{ width: 250, height: 250, }} />
            {/* <Text style={{ color: '#b2bec3', fontSize: 40, marginTop: 30 }}>Loading...</Text> */}
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})