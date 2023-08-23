import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LandingPage from '../screens/LandingPage'
import Courosel from './Courosel'
import SignUpScreen from '../screens/SignUpScreen'
import ForgotpasswordScreen from '../screens/ForgotpasswordScreen'
import VerificationScreen from '../screens/VerificationScreen'
import NewPasswordScreen from '../screens/NewPasswordScreen'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

const Stack = createStackNavigator()

export class Navigations extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        {/* <Stack.Screen name="landingPage" component={LandingPage}/>
        <Stack.Screen name="couroselScreen" component={Courosel}/>
        <Stack.Screen name="createScreen" component={SignUpScreen}/>
        <Stack.Screen name="loginScreen" component={LoginScreen}/>
        <Stack.Screen name="forgotPasswordScreen" component={ForgotpasswordScreen}/>
        <Stack.Screen name="verificationScreen" component={VerificationScreen}/> */}
        {/* <Stack.Screen name="newPasswordScreen" component={NewPasswordScreen}/> */}
        <Stack.Screen name="homeScreen" component={HomeScreen}/>
        
      </Stack.Navigator>
    )
  }
}

export default Navigations