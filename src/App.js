import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from './components/Navigation';
import "./App.css";

function App() {
    return (
    <HashRouter>
        {/* Link to 가 있다면 Router 안에 넣어야 한다. */}
        <Navigation />
        {/* 2개의 props이며, path로 가면, component를 보여준다 */}
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
    </HashRouter>
    );
}


export default App;