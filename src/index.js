import React from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import './common/reset.less'

import store from './store'
import Movie from "./containers/Movie/Movie";
import Home from "./containers/Home/Home";
import Book from "./containers/Book/Book";
import Group from "./containers/Group/Group";
import App from "./containers/App";
import Search from './containers/Search/Search'
import Profile from "./containers/Search/Profile/Profile";
import Personal from "./containers/Search/Personal/Personal";

import Login from "./containers/Search/Login/Login";
import Radio from "./containers/Radio/Radio";
import RadioDetail from "./containers/Radio/Detail";
import MDetail from "./containers/MDetail/MDetail";
import BDetail from "./containers/BDetail/BDetail";
import HomeListDetail from "./containers/homeListDetail/homeListDetail";

// 配置路由的组件

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path='/group' component={Group}/>
                    <Route path='/search' component={Search}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/personal" component={Personal}/>
                    <Route path='/movie' exact={true} component={Movie}/>
                    <Route path="/movie/detail/:id" component={MDetail}/>
                    <Route path='/book' exact={true} component={Book}/>
                    <Route path='/book/detail/:id' component={BDetail}/>
                    <Route path='/radio' component={Radio}/>
                    <Route path='/count/detail/:id' component={RadioDetail}/>
                    <Route path="/detail/:homeId" component={HomeListDetail}/>
                    <Redirect to="/"/>
                </Switch>
            </App>
        </Router>
    </Provider>
    , window.root);

