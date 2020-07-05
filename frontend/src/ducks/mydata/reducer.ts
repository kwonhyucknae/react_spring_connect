import {
    LOAD_DATA, MyData, LoadDataActionTypes
} from './types'

const initialState: MyData = {
    mydata: ''
}

export function loadData(
    state = initialState,
    action: LoadDataActionTypes
): MyData {
    switch (action.type) {
        case LOAD_DATA:
            return {
                mydata: action.payload
            }
        default:
            return state
    }
}