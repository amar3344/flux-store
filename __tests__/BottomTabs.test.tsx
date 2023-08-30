import {render,screen} from '@testing-library/react-native'
import BottomTabs from '../src/components/BottomTabs'

jest.mock('react-native-vector-icons/EvilIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/Feather',()=>()=><></>)
jest.mock('react-native-vector-icons/AntDesign',()=>()=><></>)
jest.mock('react-native-vector-icons/MaterialCommunityIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/SimpleLineIcons',()=>()=><></>)
jest.mock('react-native-vector-icons/FontAwesome5',()=>()=><></>)
jest.mock('react-native-vector-icons/FontAwesome6',()=>()=><></>)
jest.mock('react-native-vector-icons/Octicons',()=>()=><></>)
jest.mock('react-native-vector-icons/EvilIcons',()=>()=><></>)


jest.mock("@react-navigation/bottom-tabs", () => {
    const { View } = require("react-native")
    return {
      createBottomTabNavigator: jest.fn(() => ({
        Navigator: (props: any) => {
          return <View {...props} />
        },
        Screen: (props: any) => {
          props.options.tabBarIcon({ focused: true })
          props.options.tabBarIcon({ focused: false })
          return <View {...props} />
        }
      })),
    }
  })

test('testing for bottomTabsComponent',()=>{
    render(<BottomTabs/>)
})