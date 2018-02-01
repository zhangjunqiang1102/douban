import React from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
// 配置路由的组件
import  {Provider} from 'react-redux'
import   './common/reset.less'

import store from './store'
import Movie from "./containers/Movie/Movie";
import Home from "./containers/Home/Home";
import Book from "./containers/Book/Book";
import Group from "./containers/Group/Group";
import App from "./containers/App";
import Search from './containers/Search/Search'
import Detail from "./containers/Detail/Detail";
import Radio from "./containers/Radio/Radio";
import Profile from "./containers/Search/Profile/Profile";
import Login from "./containers/Search/Login/Login";


ReactDOM.render(
    <Provider store={store}>
        <App>
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path='/movie' component={Movie}/>
                <Route path='/book' component={Book}/>
                <Route path="/detail" component={Detail}/>
                <Route path='/group' component={Group}/>
                <Route path='/radio' component={Radio}/>
                <Route path='/search' component={Search}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
        </App>
    </Provider>
    , window.root);
