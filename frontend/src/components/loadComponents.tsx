import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "../ducks";
import {thunkSendMessage} from "../ducks/mydata/thunks";

function loadComponents() {
    const { mydata } = useSelector((state: RootState) => state.loadData);
    const dispatch = useDispatch();

    const onSubmitUsername = () => {
        dispatch(thunkSendMessage());
    };

    return (
        <>
            <button onClick={onSubmitUsername}/>
            <h1>{mydata}</h1>
        </>
    );
}

export default loadComponents;