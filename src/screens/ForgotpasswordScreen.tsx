import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export class ForgotpasswordScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <TouchableOpacity>
                        <EvilIcons name="chevron-left" size={50} color="#000" />
                    </TouchableOpacity>
                    <Text>Forgot Password?</Text>
                    <Text>Enter email associated with your account and we’ll send and email with intructions to reset your password</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default ForgotpasswordScreen