import React from  'react'
import {NavLink} from 'react-router-dom'
import './index.less'
export default class Nav extends  React.Component{
    render(){
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        豆瓣
                    </a>
                    <div className='top'>
                    <NavLink to= {'/movie'}>电影</NavLink>
                    <NavLink to= {'/book'}>图书</NavLink>
                    <NavLink to= {'/radio'}>广播</NavLink>
                    <NavLink to= {'/group'}>小组</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    }
}