import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import AddCartScreen from '../screens/AddCartScreen'
import Profile from '../screens/Profile'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { responsiveHeight as rh } from 'react-native-responsive-dimensions'

const Tabs = createBottomTabNavigator()
export class BottomTabs extends Component {
  render() {
    return (
      <Tabs.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'#000',
        // tabBarInactiveBackgroundColor:'rgba(230, 232, 236, 1)',
        tabBarShowLabel:false,
        tabBarStyle:{
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            // backgroundColor:'red',
            height:rh(10)
        }
      }}>
        <Tabs.Screen options={{
            tabBarIcon:({color,size})=>(
                <Octicons name="home" size={size} color={color}/>
            ),
        }} name="homeScreen" component={HomeScreen}/>
        <Tabs.Screen options={{
            tabBarIcon:({color,size})=>(
                <Feather name="search" size={size} color={color}/>
            ),
        }}
         name="SeacchScreen" component={SearchScreen}/>
        <Tabs.Screen options={{
            tabBarIcon:({color,size})=>(
                <SimpleLineIcons name="handbag" size={size} color={color}/>
            ),
        }} name="addtoCart" component={AddCartScreen}/>
        <Tabs.Screen options={{
            tabBarIcon:({color,size})=>(
                <AntDesign name="user" size={size} color={color}/>
            ),
        }} name="profile" component={Profile}/>
      </Tabs.Navigator>
    )
  }
}

export default BottomTabs