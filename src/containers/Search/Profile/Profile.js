import React from 'react'
import "./index.less"

export default class Profile extends React.Component {
  render() {
    return <div className="wrapper">
      <h1>
        <a href="javascript:;">取消</a>
        登录豆瓣
      </h1>

      <div className="mobile-accounts">
        <div className="dialog">
          <div className="first">
            <input type="text" placeholder="邮箱 / 手机号 / 用户名"/>
          </div>
          <div className="form-pow">
            <input type="text" placeholder="密码"/>
          </div>
          <div className="submit-button">
            <input type="submit" value="登录"/>
          </div>
        </div>

        <div className="registered">
          <div className="login-btn">使用其他方式登录 & 找回密码</div>
          <div className="btn-wrapper">
            <a href="javascript:;">注册豆瓣帐号</a>
          </div>
        </div>
      </div>

    </div>

  }
}