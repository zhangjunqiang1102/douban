import React from 'react';
import "./index.less"

export default class Search extends React.Component {
  render(){
    return <div className="search">
      <a href="javascript:;" className="close">关闭</a>
      <form>
        <div>
          <input type="search" className="query"/>
        </div>
      </form>
      <ul>
        <li>
          <div>
            <a href="/movie">
              <strong>电影</strong>
              <span>影院热映</span>
            </a>
            <a href="#">
              <strong style={{color:"rgb(230, 70, 126)"}}>同城</strong>
              <span>周末活动</span>
            </a>
            <a href="/#">
              <strong style={{color:"rgb(159, 120, 96)"}}>阅读</strong>
              <span>电子书</span>
            </a>
            <a href="/status">
              <strong style={{color:"rgb(225, 100, 77)"}}>广播</strong>
              <span>友邻动态</span>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="/movie">
              <strong style={{color:"rgb(122, 106, 219)"}}>电视</strong>
              <span>正在热播</span>
            </a>
            <a href="#">
              <strong style={{color:"rgb(42, 184, 204)"}}>小组</strong>
              <span>志趣相投</span>
            </a>
            <a href="/#">
              <strong style={{color:"rgb(87, 116, 197)"}}>游戏</strong>
              <span>虚拟世界</span>
            </a>
            <a href="/status">
              <strong style={{color:"rgb(64, 207, 169)"}}>FM</strong>
              <span>红心歌单</span>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="/movie">
              <strong style={{color:"rgb(159, 120, 96)"}}>图书</strong>
              <span>畅销排行</span>
            </a>
            <a href="#">
              <strong style={{color:"rgb(244, 143, 46)"}}>音乐</strong>
              <span>新碟榜</span>
            </a>
            <a href="/#">
              <strong style={{color:"rgb(89, 108, 221)"}}>应用</strong>
              <span>玩手机</span>
            </a>
            <a href="/status">
              <strong style={{color:"rgb(66, 189, 86)"}}>市场</strong>
              <span>购买原创</span>
            </a>
          </div>
        </li>
      </ul>
      <div className="navBottom">
        <div className="nav-item">
          <a href="" className="toUser">Y</a>
          <a href="" className="toExit">退出豆瓣</a>
        </div>
        <div className="nav-item">
          <a href="" className="toPC">使用桌面版</a>
          <a href="" className="toAPP">使用豆瓣APP</a>
        </div>
      </div>
    </div>
  }
}