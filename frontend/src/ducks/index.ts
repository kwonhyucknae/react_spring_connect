import { combineReducers } from 'redux'
import reduce, {dataState} from './reduce'

export interface RootState {
    dataState:String
}

export default combineReducers({
    reduce
})
