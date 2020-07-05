import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import {RootState} from "../index";
import {loadData} from "./action";
import axios from 'axios';

export const thunkSendMessage = (
): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const asyncResp = await exampleAPI()
    dispatch(
        loadData({
            mydata: asyncResp
        })
    )
}

async function exampleAPI() {
    const response = await axios.get(
        `/api/zz`
    );
    return response.data;
}