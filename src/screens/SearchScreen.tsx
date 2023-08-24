import { Text, View, SafeAreaView, StyleSheet, TextInput, Platform } from 'react-native'
import React, { Component } from 'react'
import { DiscoverHeader } from '../components/common/HeaderSections'
import { responsiveWidth as rw, responsiveFontSize as rf, responsiveHeight as rh } from 'react-native-responsive-dimensions'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
export class SearchScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.discoverScreen}>
        <View style={{ marginHorizontal: rw(5) }}>
          <DiscoverHeader />
          <View style={styles.searchandFilter}>
            <View style={styles.searchContainer}>
              <Feather name="search" size={rh(3.5)} color={'rgba(190, 191, 196, 1)'} />
              <TextInput style={styles.inputStyles} placeholder='Search' placeholderTextColor={'rgba(119, 126, 144, 1)'} />
            </View>
            <View style={styles.filterContainer}>
              <FontAwesome6 name="sliders" size={rh(3.5)} color={'rgba(190, 191, 196, 1)'} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default SearchScreen

const styles = StyleSheet.create({

  inputStyles:{
    fontSize:rf(3),
    fontFamily:'Product Sans Medium',
    fontWeight:'400',
    color:'rgba(119, 126, 144, 1)',
    marginLeft:rw(2),
  },

  searchandFilter:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },

  filterContainer:{
    backgroundColor: 'rgba(250, 250, 250, 1.15)',
    elevation:5,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    width:rw(18),
    height:rh(8),
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.2,
    shadowColor:'rgba(119, 126, 144, 1)',
  },

  searchContainer: {
    backgroundColor: 'rgba(250, 250, 250, 1.15)',
    elevation: 5,
    borderRadius: 20,
    flexDirection:'row',
    alignItems:'center',
    width:rw(65),
    padding:15,
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.2,
    shadowColor:'rgba(119, 126, 144, 1)',

  },

  discoverScreen: {
    marginTop: Platform.OS === 'android' ? 0 : 0,
    backgroundColor: '#fff',
    flex: 1,
  }
})            