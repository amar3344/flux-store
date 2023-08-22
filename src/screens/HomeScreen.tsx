import { Text, View,SafeAreaView } from 'react-native'
import React, { Component } from 'react'

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text testID='homeScreen'>HomeScreen</Text>
      </SafeAreaView>
    )
  }
}

export default HomeScreen