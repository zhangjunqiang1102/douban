import React from 'react'
import "./index.less"
import {connect} from "react-redux"
import action from "../../../store/actions/session"

@connect(state => ({...state.session}), action)
export default class Profile extends React.Component {

  componentWillUnmount(){
    this.props.clearMessage();
  }

  render() {
    return <div className="content">
      <ul className="content1">
        <h1 className="title-">欢迎加入豆瓣</h1>
        <li className="phone">
          <input type="text" placeholder="手机号 / 邮箱" id="username" ref={x => this.username = x}/>
        </li>
        <li className="pass">
          <input type="text" placeholder="密码 (最少6位)" id="password" ref={x => this.password = x}/>
        </li>
        <li className="name">
          <input type="text" placeholder="昵称"/>
        </li>
        <li className="opt-area">
          <div>
            {this.props.err === 1 ? <p style={{color: 'red'}}>{this.props.msg}</p> : null}
            {this.props.success.length ? <p style={{color: 'green'}}>{this.props.success}</p> : null}
          </div>
          <button className="jump" onClick={() => {
            this.props.toRegAPI(this.username.value, this.password.value, this.props.history);
          }}>下一步
          </button>
          <p>
            <span>点击「下一步」代表你已阅读并同意</span>
            <a className="agr" href="https://www.douban.com/about/agreement">用户使用协议</a>
          </p>
        </li>
      </ul>
    </div>
  }
}