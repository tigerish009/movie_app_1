import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
    return (
    <HashRouter>
        {/* 2개의 props이며, path로 가면, component를 보여준다 */}
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
    </HashRouter>
    );
}


export default App;