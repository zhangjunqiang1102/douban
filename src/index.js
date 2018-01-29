import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
// 配置路由的组件

import App from "./containers/App";
import Detail from "./containers/Detail/Detail";
// 组件分为容器组件和基础组件
import {Provider} from 'react-redux';
import store from './store'
import Login from "./containers/Login/Login";
import Reg from "./containers/Reg/Reg";
import ProtectRouter from "./ProtectRouter";





import sync from './SyncComponent';
let Home=sync(()=>import('./containers/Home/Home'));
let Profile =sync(()=>import('./containers/Profile/Profile'));
let Lesson =sync(()=>import('./containers/Lesson/Lesson'));


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch> {/*匹配path 匹配后渲染 并且不再继续渲染*/}
                    <Route path="/" exact={true} component={Home}/>
                    <ProtectRouter path='/lesson' component={Lesson}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/detail/:lessonId" component={Detail}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                </Switch>
            </App>
        </Router>
    </Provider>,window.root);
// @say
// class A {
//
//
// }
// function say(target) {
//     target.say='ss'
// }
//
// console.log(A.say);