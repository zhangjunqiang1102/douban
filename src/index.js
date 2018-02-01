import React from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
// 配置路由的组件
import {Provider} from 'react-redux'
import './common/reset.less'
import store from './store'
import Movie from "./containers/Movie/Movie";
import Home from "./containers/Home/Home";
import Book from "./containers/Book/Book";
import Group from "./containers/Group/Group";
import App from "./containers/App";
import Search from './containers/Search/Search'
import Detail from "./containers/Detail/Detail";
import Radio from "./containers/Radio/Radio";
import RadioDetail from "./containers/Radio/Detail";
import MDetail from "./containers/MDetail/MDetail";
import BDetail from "./containers/BDetail/BDetail";


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>

                    <Route path='/movie' exact={true} component={Movie}/>
                    <Route path="/movie/detail/:id" component={MDetail}/>
                    <Route path='/book' exact={true} component={Book}/>
                    <Route path='/book/detail/:id' component={BDetail}/>

                    <Route path='/group' component={Group}/>
                    <Route path='/radio' component={Radio}/>
                    <Route path='/count/detail/:id' component={RadioDetail}/>
                    <Route path='/search' component={Search}/>
                    <Route path="/detail/:id" component={MDetail}/>
                </Switch>
            </App>
        </Router>

    </Provider>
    , window.root);
