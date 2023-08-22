import {fireEvent, render,screen} from '@testing-library/react-native'
import LandingPage from '../src/screens/LandingPage'

const screenProps={
    navigation:{
        navigate:jest.fn()
    }
}

test('testing for navigation tobe couroselScreen',()=>{
    render(<LandingPage {...screenProps}/>)
    const startBtn = screen.getByTestId('startBtn')
    fireEvent.press(startBtn)
    expect(screenProps.navigation.navigate).toBeCalledWith('couroselScreen')
})