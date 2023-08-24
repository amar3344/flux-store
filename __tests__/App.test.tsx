/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-vector-icons/EvilIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/Feather',()=>()=><></>)
jest.mock('react-native-vector-icons/AntDesign',()=>()=><></>)

jest.mock('@react-navigation/native', () => {
  const actualNavigation = jest.requireActual('@react-navigation/native');
  const {View: MockView} = require('react-native');
  return {
    ...actualNavigation,
    NavigationContainer: () => <MockView />,
  };
});

jest.mock('@react-navigation/stack',()=>({
  createStackNavigator:()=>({
      Navigator:jest.fn(),
      Screen:jest.fn()
  })
}))

jest.mock('@react-native-firebase/auth',()=>{
  return{
    default:{
      auth:()=>jest.fn()
    }
  }
})

it('renders correctly', () => {
  renderer.create(<App />);
});
