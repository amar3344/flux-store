import { StatusBar, Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigations from './src/components/Navigations'

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="transparent" barStyle={'dark-content'}/>
        <Navigations/>
      </NavigationContainer>
    )
  }
}

export default App