import axios from 'axios';

const LOAD_DATAS_SUCCESS = 'reduce/LOAD_DATAS_SUCCESS'
const LOAD_DATAS_FAIL = 'reduce/LOAD_DATAS_FAIL'

const INIT_STATE = 'complexSchool/INIT_STATE'


export interface dataState {
    mydata: String,
}

const initialState: dataState = {
    mydata: "",
}

export default function reducer(state = initialState, action: any): dataState {
    switch (action.type) {
        case LOAD_DATAS_SUCCESS:
            return {...state,
                ...action.result,
            }
        case LOAD_DATAS_FAIL:
            return state
        case INIT_STATE:
            return initialState
        default:
            return state
    }
}

export function loadData(params:any) {
    return axios.get(`/zz`).then
}

export function initState() {
    return {
        type: INIT_STATE,
    }
}

