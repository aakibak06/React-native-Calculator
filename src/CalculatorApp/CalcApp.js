import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Appearance } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { ThemContext } from './ContextApi';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const CalcApp = () => {
    const { theme } = useContext(ThemContext);
    const [input, setInput] = useState('0');
    const [bracketOpen, setBracketOpen] = useState(false)



    const handlePress = (val) => {

        if (val === 'AC') {
            setInput("0")
        }
        else if (val === '=') {
            try {
                setInput(eval(input))
            }
            catch (error) {
                setInput('FORMAT ERROR')
            }

        }
        else if (val === 'back') {
            setInput(input.slice(0, - 1))
        }
        else if (val === '()') {
            if (input == '0') {
                setInput('(')
                setBracketOpen(true)
            }
            else if (input.slice(-1) == '+' || input.slice(-1) == '-' || input.slice(-1) == '/' || input.slice(-1) == '*' || input.slice(-1) == '%' || input.slice(-1) == '.') {
                setInput(input + '(');
                setBracketOpen(true)
            }
            else {
                if (bracketOpen == true) {
                    setInput(input + ')');
                    setBracketOpen(false)
                } else {
                    setInput(input + '(');
                    setBracketOpen(true)
                }
            }
        }
        else {
            if (input == '0') {
                // if input not a number a to true hai 
                if (isNaN(val)) {
                    setInput(input + val)
                }
                else {
                    setInput(val)
                }
            }
            else if (isNaN(val)) {
                if (input.slice(-1) == '+' || input.slice(-1) == '-' || input.slice(-1) == '/' || input.slice(-1) == '*' || input.slice(-1) == '%' || input.slice(-1) == '.') {
                    setInput(input.slice(0, -1) + val)
                } else {
                    setInput(input + val)
                }
            }
            else {
                setInput(input + val)
            }
        }
    }
    return (
        <View style={{ flex: 1 }}>
            {/* <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 10 }}>CALCULATOR</Text> */}
            <StatusBar barStyle={theme === 'LIGHT' ? 'dark-content' : 'light-content'} backgroundColor={theme === 'LIGHT' ? '#dfe6e9' : 'black'} />
            <View style={{ backgroundColor: theme === 'LIGHT' ? '#dfe6e9' : 'black', flex: 1 }} >

                <ScrollView style={{ backgroundColor: 'white', margin: 10, borderRadius: 30, padding: 10, flex: 1.5, borderWidth: theme === 'LIGHT' ? 1 : null }}>
                    <Text style={{ fontSize: responsiveFontSize(5), textAlign: 'right' }}> {input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
                </ScrollView>

                <View style={{ flex: 2.5 }}>
                    {/* first row */}

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 30 }}>
                        <TouchableOpacity style={{ backgroundColor: "#686de0", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('AC')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), color: 'white', padding: 2 }}>AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#7ed6df", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('()')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }} >( )</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#7ed6df", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('%')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }}><Feather name='percent' size={33} /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#7ed6df", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('/')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }}><Feather name='divide' size={33} /></Text>
                        </TouchableOpacity>
                    </View>
                    {/* second row */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 10 }}>
                        <TouchableOpacity style={{ backgroundColor: "#f6e58d", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('7')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#f6e58d", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('8')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }} >8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#f6e58d", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('9')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#7ed6df", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('*')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }}><Entypo name='cross' size={35} /></Text>
                        </TouchableOpacity>
                    </View>
                    {/* third row */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 10 }}>
                        <TouchableOpacity style={{ backgroundColor: "#f6e58d", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('4')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#f6e58d", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('5')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }} >5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#f6e58d", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('6')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#7ed6df", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('-')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }}><Entypo name='minus' size={35} /></Text>
                        </TouchableOpacity>
                    </View>
                    {/* forth row */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 10 }}>
                        <TouchableOpacity style={{ backgroundColor: "#f6e58d", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('1')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#f6e58d", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('2')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }} >2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#f6e58d", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('3')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#7ed6df", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('+')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }}><Entypo name='plus' size={36} /></Text>
                        </TouchableOpacity>
                    </View>
                    {/* fifth row */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 10, marginBottom: 10 }}>
                        <TouchableOpacity style={{ backgroundColor: "#f6e58d", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('0')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#f6e58d", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('.')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }} ><Entypo name='dot-single' size={28} /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#f6e58d", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('back')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }}><Feather name='delete' size={33} /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#7ed6df", padding: 5, borderRadius: 50, width: 90, height: 90, justifyContent: 'center', alignItems: 'center' }} onPress={() => handlePress('=')}>
                            <Text style={{ fontSize: responsiveFontSize(3.5), padding: 3 }}><FontAwesome5 name='equals' size={28} /></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CalcApp

const styles = StyleSheet.create({})