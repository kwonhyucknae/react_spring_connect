import React from 'react';
import {Link} from "react-router-dom";
import loadComponents from '../components/loadComponents'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../ducks";
import {thunkSendMessage} from "../ducks/mydata/thunks";
const About = () => {

    const { mydata } = useSelector((state: RootState) => state.loadData);
    const dispatch = useDispatch();

    const onSubmitUsername = () => {
        dispatch(thunkSendMessage());
    };


    return (
        <div>
            <h2>
                어바웃z
            </h2>
        <ul>
    <li><Link to="/"></Link></li>

    </ul>

            <button onClick={onSubmitUsername}>버튼</button>
            <h1>{mydata}</h1>

    </div>
);
};

export default About;