import {Text, View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import React, {Component} from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight as rh,
  responsiveFontSize as rf,
  responsiveScreenWidth as rw,
} from 'react-native-responsive-dimensions';
import {colorsData, discountData, startsData} from '../components/common/DiscoverData';

export class FilterScreen extends Component {
  render() {
    return (
      <View style={{borderRadius:30,flex:1}}>
      <View style={{gap:rh(5),padding:rw(5)}}>
        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>Filter</Text>
          <FontAwesome6
            name="sliders"
            size={rh(3)}
            color={'rgba(51, 48, 46, 1)'}
          />
        </View>
        <View>
          <Text>Price</Text>
          <View></View>
        </View>
        <View>
          <Text>Color</Text>
          <View style={styles.colorContainers}>
            {colorsData.map(item => (
              <View key={item.color}
                style={{
                  height: rh(4),
                  width: rh(4),
                  borderRadius: rh(2),
                  backgroundColor: item.color,
                }}></View>
            ))}
          </View>
        </View>
        <View style={styles.colorContainers}>
          {startsData.map(item => (
            <View key={item}
              style={{
                backgroundColor: item === 5 ? '#000' : 'transparent',
                height: rh(6),
                width: rh(6),
                borderRadius: rh(3),
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <AntDesign
                name="star"
                color={item === 5 ? '#fff' : '#000'}
                size={rh(2)}
              />
              <Text
                style={{
                  fontSize: rf(2),
                  marginHorizontal: rw(1),
                  color: item === 5 ? '#fff' : '#000',
                }}>
                {item}
              </Text>
            </View>
          ))}
        </View>
        <View>
            <Text>Discount</Text>
            <View style={styles.discountContainer}>
                {discountData.map(item=>(
                    <View key={item} style={styles.eachItem}>
                        <Text style={styles.percentage}>{item}</Text>
                        <Text style={[styles.percentage,{marginHorizontal:rf(1.5),fontWeight:'600'}]}>X</Text>
                    </View>
                ))}
            </View>
        </View>
        <View style={[styles.discountContainer,{alignItems:'center',justifyContent:'space-between'}]}>
            <Text style={[styles.btnText,{color:'#000'}]}>Reset</Text>
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>Apply</Text>
            </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
}

export default FilterScreen;

const styles = StyleSheet.create({

  btnText: {
    color: '#fff',
    paddingHorizontal: rw(8),
    paddingVertical: rh(1.5),
    fontSize: rf(2.5),
    fontWeight: '400',
    letterSpacing:rf(0.1)

},

  btnContainer: {
    alignSelf: 'center',
    backgroundColor: 'rgba(45, 32, 28, 1)',
    borderRadius: 100,
},

    percentage:{
        color:'rgba(51, 48, 46, 1)',
        fontSize:rf(1.8),
        fontWeight:'500',
        fontFamily:'Nuntio',
    },

    eachItem:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        paddingHorizontal:rf(1),
        paddingVertical:rh(1.5),
        borderRadius:rf(3.5),
        margin:rf(1)
    },
    discountContainer:{
        flexWrap:'wrap',
        flexDirection:'row',
    },
  colorContainers: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap:'wrap',
  },

  filterText: {
    fontFamily: 'Product Snas',
    fontWeight: '500',
    fontSize: rf(3),
    color: 'rgba(51, 48, 46, 1)',
    letterSpacing: rf(0.1),
  },

  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'rgba(243, 243, 246, 1)',
    paddingBottom: rh(4),
  },
});
