import { Text, View,StyleSheet, Platform, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { responsiveHeight } from 'react-native-responsive-dimensions'

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.homeScreenStyles}>
        <Text testID='homeScreen'>HomeScreen</Text>
      {/* <Feather name="bar-chart" color={"red"} size={20}/> */}
      </SafeAreaView>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  homeScreenStyles:{
    marginTop:Platform.OS === 'android' ? responsiveHeight(1.5):responsiveHeight(2)
  },
})