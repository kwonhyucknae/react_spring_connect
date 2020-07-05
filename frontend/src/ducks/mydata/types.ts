export const LOAD_DATA = 'LOAD_DATA'

interface LoadDataAction {
    type: typeof LOAD_DATA
    payload: string
}

export interface MyData {
    mydata: string
}

export type LoadDataActionTypes = LoadDataAction