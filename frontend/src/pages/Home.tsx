import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>
                홈
            </h2>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </div>
    );
};

export default Home;