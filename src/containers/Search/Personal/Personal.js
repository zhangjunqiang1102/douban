import React from 'react'
import "./index.less"
import action from "../../../store/actions/session"

export default class Personal extends React.Component {
  render() {
    return <div className="page">
      <div className="personal ">
        <div className="bd clearfix" >
          <img src="https://img1.doubanio.com/icon/user_normal.jpg" className="jpg"/>
          <ul className="detail">
            <li className="basic-info">
              <span className="uid">Y</span>
              <span className="id">ID:173286249</span>
              <a href="">个人主页</a>
            </li>
            <li className="relationship">
              <a href="">关注 0</a>
              <a href="">被关注 0</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  }
}