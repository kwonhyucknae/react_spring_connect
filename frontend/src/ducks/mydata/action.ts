import {LOAD_DATA, LoadDataActionTypes, MyData} from './types'

// TypeScript infers that this function is returning SendMessageAction
export function loadData(data: MyData): LoadDataActionTypes {
    return {
        type: LOAD_DATA,
        payload: data.mydata
    }
}