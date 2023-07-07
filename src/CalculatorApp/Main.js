import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CalcApp from './CalcApp'
import SplashScreen from './SplashScreen'
import { AppProvider } from './ContextApi'



const Main = () => {
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(false)
        }, 3000);
    }, [])

    return (
        <AppProvider>
            <View style={{ flex: 1 }}>
                {isLoaded ? <SplashScreen /> : <CalcApp />}

            </View>
        </AppProvider>
    )
}

export default Main

const styles = StyleSheet.create({})