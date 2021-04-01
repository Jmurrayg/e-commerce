import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Home from  './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import Item from './components/item';

const Logout = () =>{
    window.localStorage.removeItem('token');
    return<Redirect to="/"/>;
}


export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/logout" component={Logout}/>
                    <Route exact path="/item/:idItem">
                        <Item/>
                    </Route>
            </Switch>
        </Router>
    )
}