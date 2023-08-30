import {render} from '@testing-library/react-native'
import { HomeHeader } from '../src/components/common/HeaderSections'

jest.mock('react-native-vector-icons/EvilIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/Feather',()=>()=><></>)
jest.mock('react-native-vector-icons/AntDesign',()=>()=><></>)
jest.mock('react-native-vector-icons/MaterialCommunityIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/SimpleLineIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/FontAwesome5',()=>()=><></>)
jest.mock('react-native-vector-icons/FontAwesome6',()=>()=><></>)
jest.mock('react-native-vector-icons/Octicons',()=>()=><></>)

test('testing for homeHeader',()=>{
    render(<HomeHeader/>)
})