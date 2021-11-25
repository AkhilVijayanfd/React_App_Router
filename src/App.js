import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Form from "./Pages/Form/Form";
import "./App.css"

function App (){
    return(
        <div className="head">
            <h2> This is the page load first </h2>
            <Router>
                <div className="style">
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/details">About</Link>
                    </li>
                    <li>
                        <Link to="/formvalue">Form details</Link>
                    </li>
                </ul>
                </div> 
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/details"  component={About}/>
                    <Route path="/formvalue"  component={Form}/>
                </Switch>
            </Router>

        </div>
    );

};
export default App;