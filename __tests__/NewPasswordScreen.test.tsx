import {fireEvent, render,screen} from '@testing-library/react-native'
import NewPasswordScreen from '../src/screens/NewPasswordScreen'

jest.mock('react-native-vector-icons/EvilIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/Feather',()=>()=><></>)

const screenProps = {
    navigation: {
      navigate: jest.fn(),
      goBack:jest.fn()
    },  
};


test('testing for backBtn',()=>{
    render(<NewPasswordScreen {...screenProps}/>)
    const backBtn = screen.getByTestId('backBtn')
    fireEvent.press(backBtn)
    expect(screenProps.navigation.goBack).toBeCalled()
})

test('testing for password input',()=>{
    render(<NewPasswordScreen {...screenProps}/>)
    const passwordEle = screen.getByTestId('password')
    fireEvent.changeText(passwordEle,"amar")
    expect(passwordEle.props.value).toBe('amar')
})

test('testing for confirmPassword input',()=>{
    render(<NewPasswordScreen {...screenProps}/>)
    const confirmPasswordEle = screen.getByTestId('confirmPassword')
    fireEvent.changeText(confirmPasswordEle,"amar")
    expect(confirmPasswordEle.props.value).toBe('amar')
})

test('testing for navigation home',()=>{
    render(<NewPasswordScreen {...screenProps}/>)
    const confirmBtn = screen.getByTestId('confirmBtn')
    fireEvent.press(confirmBtn)
    expect(screenProps.navigation.navigate).toBeCalledWith('homeScreen')
})