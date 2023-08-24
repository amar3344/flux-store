import {render,screen} from '@testing-library/react-native'
import Courosel from '../src/components/Courosel'

test('testing for courosel component',()=>{
    jest.useFakeTimers()
    render(<Courosel/>)
    jest.advanceTimersByTime(3000)
})