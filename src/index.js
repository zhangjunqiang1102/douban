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
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path='/movie' component={Movie}/>
                <Route path='/book' component={Book}/>
                <Route path='/group' component={Group}/>
            </Switch>
        </Router>
    </Provider>
    , window.root)
