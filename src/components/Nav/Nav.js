import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.less'

import db from '../../common/images/db.png'
import '../../common/reset.less'
export default class Nav extends React.Component {

    render() {
        return <nav className="nav clearfix">
            <NavLink to={'/'} exact>
                <h1><img src={db}/></h1>
            </NavLink>
            <div className="all">
                <NavLink to={'/search'}>
                    <i className='iconfont icon-sousuofenlei' style={{color: "#00b600"}}></i>
                </NavLink>
                <NavLink to={'/group'}>
                    <span style={{color: "#2AB8CC"}}>小组</span>
                </NavLink>
                <NavLink to={'/radio'}>
                    <span style={{color: "#E4A813"}}>广播</span>

                </NavLink>
                <NavLink to={'/book'}>
                    <span style={{color: "#9F7860"}}>图书</span>
                </NavLink>
                <NavLink to={'/movie'}>
                    <span style={{color: "#2384E8"}}>电影</span>
                </NavLink>


            </div>
        </nav>
    }

}