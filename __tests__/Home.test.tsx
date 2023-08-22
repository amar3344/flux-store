import {render,screen} from '@testing-library/react-native'
import HomeScreen from '../src/screens/HomeScreen'

test('testing for homeScreen',()=>{
    render(<HomeScreen/>)
    const homeScreeText = screen.getByTestId('homeScreen')
    expect(homeScreeText).toBeTruthy()
})