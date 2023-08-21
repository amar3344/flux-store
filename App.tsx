import { Text, View } from 'react-native'
import React, { Component } from 'react'
import LandingPage from './src/screens/LandingPage'
import Courosel from './src/components/Courosel'
import SignUpScreen from './src/screens/SignUpScreen'
import ForgotpasswordScreen from './src/screens/ForgotpasswordScreen'

export class App extends Component {
  render() {
    return (
      // <LandingPage/>
      // <Courosel/>
      // <SignUpScreen/>
      <ForgotpasswordScreen/>
    )
  }
}

export default App