import React, {Suspense, Component, lazy} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router";

const Home = lazy(() => import('./pages/Home') );
const About = lazy(() => import('./pages/About') );

function App() {
  return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </Switch>
        </Suspense>
      </div>
  );
}

export default App;
