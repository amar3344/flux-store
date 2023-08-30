import {fireEvent, render,screen} from '@testing-library/react-native'
import SearchScreen from '../src/screens/SearchScreen'

jest.mock('react-native-vector-icons/EvilIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/Feather',()=>()=><></>)
jest.mock('react-native-vector-icons/AntDesign',()=>()=><></>)
jest.mock('react-native-vector-icons/MaterialCommunityIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/SimpleLineIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/FontAwesome5',()=>()=><></>)
jest.mock('react-native-vector-icons/FontAwesome6',()=>()=><></>)
jest.mock('react-native-vector-icons/Octicons',()=>()=><></>)

const screenProps={
    navigation:{
        navigate:jest.fn()
    }
}

test('testing for button navigation',()=>{
    render(<SearchScreen {...screenProps}/>)
    const drawerBtn = screen.getByTestId('drawerBtn')
    fireEvent.press(drawerBtn)
    expect(screenProps.navigation.navigate).toBeCalledWith('drawerScreen')
})