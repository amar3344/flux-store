import {render} from '@testing-library/react-native'
import MyDrawer from '../src/components/DrawerNavigation'

jest.mock('react-native-vector-icons/EvilIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/Feather',()=>()=><></>)
jest.mock('react-native-vector-icons/AntDesign',()=>()=><></>)
jest.mock('react-native-vector-icons/MaterialCommunityIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/SimpleLineIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/FontAwesome5',()=>()=><></>)
jest.mock('react-native-vector-icons/FontAwesome6',()=>()=><></>)
jest.mock('react-native-vector-icons/Octicons',()=>()=><></>)
jest.mock('react-native-vector-icons/EvilIcons',()=>()=><></>)

jest.mock('@react-navigation/drawer',()=>({
    createDrawerNavigator:()=>({
        Navigator:jest.fn(),
        Screen:jest.fn()
    })
}))

// const screenProps={
//     navigation: {
//         navigate: jest.fn()
//       }
// }

describe('BottomNavigation', () => {
    it('renders all the Tab.Screen components', () => {
        render(<MyDrawer/>);
    });
});