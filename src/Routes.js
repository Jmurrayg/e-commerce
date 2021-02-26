import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './views/Home';
import Navbar from './components/Navbar.component';
import Signup from "./views/Signup";
import Login from "./views/Login";


export default function Routes(){
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </Router>
    )
}