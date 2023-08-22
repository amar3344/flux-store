import {fireEvent, render,screen} from '@testing-library/react-native'
import Courosel2 from '../src/screens/courosel/Courosel2'

jest.mock('react-native-responsive-dimensions',()=>({
    responsiveFontSize :jest.fn(),
  responsiveHeight :jest.fn(),
  responsiveWidth :jest.fn(),
})) 

const screenProps = {
    props:{
        navigation:{
            navigate:jest.fn()
        }
    },
    intervalId:1
}

test('testing for shopping navigation',()=>{
    render(<Courosel2 {...screenProps}/>)
    const shoppingBtn = screen.getByTestId('shoppingBtn2')
    // console.log("======>",shoppingBtn)
    fireEvent.press(shoppingBtn)
    expect(screenProps.props.navigation.navigate).toBeCalledWith('createScreen')
})