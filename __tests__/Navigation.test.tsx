import {render} from '@testing-library/react-native'
import Navigations from '../src/components/Navigations'

jest.mock('react-native-vector-icons/EvilIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/Feather',()=>()=><></>)
jest.mock('react-native-vector-icons/AntDesign',()=>()=><></>)

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

test('rendering Navigations Screen',()=>{
    render(<Navigations/>)
})