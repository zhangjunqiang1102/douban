import React from 'react';
import "./index.less"
import {NavLink} from 'react-router-dom';

export default class Search extends React.Component {
  render() {
    return <div className="search">
      <a href="javascript:;" className="close" onClick={()=>{this.props.history.goBack()}}>关闭</a>
      <form>
        <div>
          <input type="search" className="query"/>
        </div>
      </form>
      <ul>
        <li>
          <div>
            <NavLink to={'/movie'}>
              <strong>电影</strong>
              <span>影院热映</span>
            </NavLink>
            <a href="">
              <strong style={{color: "rgb(230, 70, 126)"}}>同城</strong>
              <span>周末活动</span>
            </a>
            <a href="">
              <strong style={{color: "rgb(159, 120, 96)"}}>阅读</strong>
              <span>电子书</span>
            </a>
            <NavLink to={'/radio'}>
              <strong style={{color: "rgb(225, 100, 77)"}}>广播</strong>
              <span>友邻动态</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <a href="">
              <strong style={{color: "rgb(122, 106, 219)"}}>电视</strong>
              <span>正在热播</span>
            </a>
            <NavLink to={'/group'}>
              <strong style={{color: "rgb(42, 184, 204)"}}>小组</strong>
              <span>志趣相投</span>
            </NavLink>
            <a href="">
              <strong style={{color: "rgb(87, 116, 197)"}}>游戏</strong>
              <span>虚拟世界</span>
            </a>
            <a href="">
              <strong style={{color: "rgb(64, 207, 169)"}}>FM</strong>
              <span>红心歌单</span>
            </a>
          </div>
        </li>
        <li>
          <div>
            <NavLink to={'/book'}>
              <strong style={{color: "rgb(159, 120, 96)"}}>图书</strong>
              <span>畅销排行</span>
            </NavLink>
            <a href="">
              <strong style={{color: "rgb(244, 143, 46)"}}>音乐</strong>
              <span>新碟榜</span>
            </a>
            <a href="">
              <strong style={{color: "rgb(89, 108, 221)"}}>应用</strong>
              <span>玩手机</span>
            </a>
            <a href="">
              <strong style={{color: "rgb(66, 189, 86)"}}>市场</strong>
              <span>购买原创</span>
            </a>
          </div>
        </li>
      </ul>
      <div className="navBottom">
        <NavLink to={'/login'}>
          <span>注册账号</span>
        </NavLink>
        <NavLink to={'/Profile'}>
          <span>登录豆瓣</span>
        </NavLink>
      </div>
    </div>
  }
}