import React from 'react'
import "./index.less"
import action from "../../../store/actions/session"

export default class Personal extends React.Component {
  render() {
    return <div className="page">
      <div className="personal ">
        <div className="bd clearfix" >
          <img src="https://img1.doubanio.com/icon/user_normal.jpg" className="jpg"/>
          <ul className="detail-2">
            <li className="basic-info">
              <span className="id">ID:173286249</span>
              <a href="javascript:;">个人主页</a>
            </li>
            <li className="relationship">
              <a href="javascript:;">关注 0</a>
              <a href="javascript:;">被关注 0</a>
            </li>
          </ul>
        </div>
      </div>
      <ul className="collection-2 clearfix">
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/091d828e06cc8fa88ad7be161becfea88e14cf1c/pics/card/favourite.png"/>
            <span>喜欢</span>
          </a>
        </li>
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/091d828e06cc8fa88ad7be161becfea88e14cf1c/pics/card/favourite.png"/>
            <span>喜欢</span>
          </a>
        </li>
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/091d828e06cc8fa88ad7be161becfea88e14cf1c/pics/card/favourite.png"/>
            <span>喜欢</span>
          </a>
        </li>
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/091d828e06cc8fa88ad7be161becfea88e14cf1c/pics/card/favourite.png"/>
            <span>喜欢</span>
          </a>
        </li>
        <li className="hr"></li>
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/091d828e06cc8fa88ad7be161becfea88e14cf1c/pics/card/favourite.png"/>
            <span>喜欢</span>
          </a>
        </li>
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/091d828e06cc8fa88ad7be161becfea88e14cf1c/pics/card/favourite.png"/>
            <span>喜欢</span>
          </a>
        </li>
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/091d828e06cc8fa88ad7be161becfea88e14cf1c/pics/card/favourite.png"/>
            <span>喜欢</span>
          </a>
        </li>
        <li className="item">
        <a href="javascript:;">
          <img src="https://img3.doubanio.com/f/talion/091d828e06cc8fa88ad7be161becfea88e14cf1c/pics/card/favourite.png"/>
          <span>喜欢</span>
        </a>
      </li>
        <li className="hr"></li>
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/091d828e06cc8fa88ad7be161becfea88e14cf1c/pics/card/favourite.png"/>
            <span>喜欢</span>
          </a>
        </li>
      </ul>
    </div>
  }
}