import {fireEvent, render, screen} from '@testing-library/react-native'
import SignUpScreen from '../src/screens/SignUpScreen'

jest.mock('react-native-vector-icons/EvilIcons',()=>()=><></>)

jest.mock('@react-native-firebase/auth',()=>()=>({
    createUserWithEmailAndPassword:jest.fn().mockImplementation((...args)=>Promise.resolve(args))
}))

const screenProps = {
    navigation: {
      navigate: jest.fn(),
    },  
};

test('testing for inputs in flatlist',()=>{
    render(<SignUpScreen/>)
    const textInputs = screen.getByTestId('input1')
    fireEvent.changeText(textInputs,"amar")
    // console.log("========>",textInputs)
    // expect(textInputs.props.).toBe('amar')
})

test('testing for navigation loginScreen',()=>{
    render(<SignUpScreen/>)
    const loginBtn = screen.getByTestId('loginBtn')
    fireEvent.press(loginBtn)
    expect(screenProps.navigation.navigate).toBeCalledWith('loginScreen')
})
