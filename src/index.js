import React from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
// 配置路由的组件
import  {Provider} from 'react-redux'

import store from './store'
import Movie from "./containers/movie/Movie";
import Home from "./containers/Home/Home";
import Book from "./containers/Book/Book";
import Group from "./containers/group/Group";

import App from './containers/App'
import Radio from "./containers/Radio/Radio";
import Search from "./containers/Search/Search";
// import Nav from './components/Nav/Nav'

import App from "./containers/App";


import Search from './containers/Search/Search'

ReactDOM.render(
    <Provider store={store}>
        <App>
        <Router>
           <App>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path='/movie' component={Movie}/>
                <Route path='/book' component={Book}/>
                <Route path='/radio' component={Radio}/>
                <Route path='/group' component={Group}/>
                <Route path='/search' component={Search}/>
                <Redirect to="/"/>

            </Switch>
           </App>
        </Router>
        </App>
    </Provider>
    , window.root);
