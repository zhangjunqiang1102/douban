import React from 'react'
import "./index.less"

export default class Login extends React.Component {
  render() {
    return <div className="content">
      <div className="content1">
        <h1 className="title-">欢迎加入豆瓣</h1>
        <div className="phone">
          <input type="text" placeholder="手机号 / 邮箱"/>
        </div>
        <div className="password">
          <input type="text" placeholder="密码 (最少6位)"/>
        </div>
        <div className="name">
          <input type="text" placeholder="昵称"/>
        </div>
        <div className="opt-area">
          <button>下一步</button>
          <p>
            <span>点击「下一步」代表你已阅读并同意</span>
            <a href="https://www.douban.com/about/agreement">用户使用协议</a>
          </p>
        </div>
      </div>
    </div>
  }
}