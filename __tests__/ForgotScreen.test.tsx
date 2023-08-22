import {fireEvent, render,screen} from '@testing-library/react-native'
import ForgotpasswordScreen from '../src/screens/ForgotpasswordScreen'

jest.mock('react-native-vector-icons/EvilIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/Feather',()=>()=><></>)
jest.mock('react-native-vector-icons/AntDesign',()=>()=><></>)

const screenProps = {
    navigation: {
      navigate: jest.fn(),
      goBack:jest.fn()
    },  
  };

test('Testing Navigations tobe goback',()=>{
    render(<ForgotpasswordScreen {...screenProps}/>)
    const backBtn = screen.getByTestId('backBtn')
    fireEvent.press(backBtn)
    expect(screenProps.navigation.goBack).toBeCalled()
})

test('testing Navigation toBe verificationScreen',()=>{
    render(<ForgotpasswordScreen {...screenProps}/>)
    const confirmBtn = screen.getByTestId('comfirmBtn')
    fireEvent.press(confirmBtn)
    expect(screenProps.navigation.navigate).toBeCalledWith('verificationScreen')
})
