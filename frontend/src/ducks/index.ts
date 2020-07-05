import { combineReducers } from 'redux'
import reduce, {dataState} from './reduce'
import { loadData } from "./mydata/reducer";


const rootReducer = combineReducers({
    loadData: loadData
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
