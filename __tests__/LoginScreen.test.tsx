import {fireEvent, render,screen} from '@testing-library/react-native'
import LoginScreen from '../src/screens/LoginScreen'

jest.mock('react-native-vector-icons/EvilIcons',()=>()=><></>)

jest.mock('@react-native-firebase/auth',()=>()=>({
    signInWithEmailAndPassword:jest.fn().mockImplementation((...args)=>Promise.resolve(args))
}))

const screenProps = {
    navigation:{
        navigate:jest.fn()
    }
}

test('testing emailinput',()=>{
    render(<LoginScreen {...screenProps}/>)
    const emailInput = screen.getByTestId('emailInput')
    fireEvent.changeText(emailInput,"amar")
    // console.log("==========>",emailInput.props)
    expect(emailInput.props.value).toBe("amar")
})

test('testing password input',()=>{
    render(<LoginScreen {...screenProps}/>)
    const passwordText = screen.getByTestId('password')
    fireEvent.changeText(passwordText,"amar")
    expect(passwordText.props.value).toBe('amar')
})

test('testing navigation tobe createScreen',async()=>{
    render(<LoginScreen {...screenProps}/>)
    const signUpBtn = screen.getByTestId('signupBtn')
    await fireEvent.press(signUpBtn)
    expect(screenProps.navigation.navigate).toBeCalledWith('createScreen')
})

test('testing navigation toBe homeScreen',()=>{
    render(<LoginScreen {...screenProps}/>)
    const loginBtn = screen.getByTestId('loginBtn')
    fireEvent.press(loginBtn)
    expect(screenProps.navigation.navigate).toBeCalledWith('homeScreen')
})

