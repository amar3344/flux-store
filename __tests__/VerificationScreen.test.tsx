import {fireEvent, render,screen} from '@testing-library/react-native'
import VerificationScreen from '../src/screens/VerificationScreen'

jest.mock('react-native-vector-icons/EvilIcons',()=>()=><></>)

jest.mock('react-native-responsive-dimensions',()=>({
    responsiveFontSize :jest.fn(),
  responsiveHeight :jest.fn(),
  responsiveWidth :jest.fn(),
})) 

const screenProps = {
    navigation:{
        navigate:jest.fn(),
        goBack:jest.fn()
    }
}

test('testing for goBack navigation',()=>{
    render(<VerificationScreen/>)
    const gobackBtn = screen.getByTestId('backBtn')
    fireEvent.press(gobackBtn)
    expect(screenProps.navigation.goBack).toBeCalled()
})

test('testing for goBack navigation',()=>{
    render(<VerificationScreen/>)
    const confirmBtn = screen.getByTestId('confirmBtn')
    fireEvent.press(confirmBtn)
    expect(screenProps.navigation.navigate).toBeCalledWith('verificationScreen')
})