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
import Profile from './views/Profile';
import {Cart} from './views/Cart';
import Provider from './components/Provider'
import SearchProvider from './components/SearchBar/searchProvider';
import Add from './views/Add';
import './styles/colors.css'
import SearchTextProvider from './components/SearchBar/searchTextProvider';


const Logout = () =>{
    window.localStorage.removeItem('token');
    return<Redirect to="/"/>;
}


export default function Routes(){
    return(
        <Provider>
            <SearchProvider>
                <SearchTextProvider>
                    <Router>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/signup" component={Signup}/>
                                <Route exact path="/login" component={Login}/>
                                <Route exact path="/logout" component={Logout}/>
                                    <Route exact path="/item/:idItem">
                                        <Item/>
                                    </Route>
                                <Route exact path="/cart" component={Cart}/>
                                <Route exact path="/profile" component={Profile}/>
                                <Route exact path="/add" component={Add}/>
                            </Switch>
                    </Router>
                </SearchTextProvider>
            </SearchProvider>
        </Provider>    
    )
}