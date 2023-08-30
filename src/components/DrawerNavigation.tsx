import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchPage from '../screens/SearchPage';
import FilterScreen from '../screens/FilterScreen';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {
  responsiveWidth as rw,
  responsiveFontSize as rf,
  responsiveHeight as rh,
} from 'react-native-responsive-dimensions';
import { Component, ReactNode } from 'react';

interface IProps {
  navigation?: {
    navigate: (arg: string) => void
  }
}

const Drawer = createDrawerNavigator();

export class MyDrawer extends Component<IProps>{
  render(){
    return (
      <Drawer.Navigator 
      drawerContent={() => <FilterScreen />} screenOptions={{
        drawerType: 'front',
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
          borderBottomLeftRadius: 35,
          borderTopLeftRadius: 35,
        },
        drawerHideStatusBarOnOpen: true,
        headerStyle: {
          backgroundColor: 'green'
        }
      }}>
        <Drawer.Screen name="searchPage" component={SearchPage} />
      </Drawer.Navigator>
    );
    
  }
}

export default MyDrawer

const styles = StyleSheet.create({

  drawerStyle: {
    // backgroundColor:         "red",
    borderBottomRightRadius: 35,
    borderTopRightRadius:    35,
    overflow:'hidden',
    backgroundColor:'transparent'
},

  filterContainer: {
    backgroundColor: 'rgba(250, 250, 250, 1.15)',
    elevation: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: rw(18),
    height: rh(8),
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowColor: 'rgba(119, 126, 144, 1)',
  },
})