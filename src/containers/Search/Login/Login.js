import React from 'react'
import {Link} from "react-router-dom"
import "./index.less"
import {connect} from "react-redux"
import actions from "../../../store/actions/session";

@connect(state => ({...state.session}), actions)
export default class Login extends React.Component {

  componentWillUnmount(){
    this.props.clearMessage();
  }

  render() {
    return <div className="wrapper">
      <h1>
        <a href="javascript:;" onClick={() => {
          this.props.history.go(-2)
        }}>取消</a>
        登录豆瓣
      </h1>
      <div className="mobile-accounts">
        <ul className="dialog">
          <li className="first">
            <input type="text" placeholder="邮箱 / 手机号 / 用户名" id="username" ref={x => this.username = x}/>
          </li>
          <li className="form-pow">
            <input type="text" placeholder="密码" id="password" ref={x => this.password = x}/>
          </li>
          <li className="submit-button">
            <div>
              {/*如果有错误 显示错误信息 如果有成功信息显示成功信息*/}
              {this.props.err === 1 ? <p style={{color: 'red'}}>{this.props.msg}</p> : null}
              {this.props.success.length ? <p style={{color: 'green'}}>{this.props.success}</p> : null}
            </div>
            <input type="submit" value="登录" onClick={() => {
              this.props.toLoginAPI(this.username.value, this.password.value, this.props.history)
            }}/>
          </li>
        </ul>
        <li className="registered">
          <div className="btn-wrapper">
            <Link to={"/profile"}>注册豆瓣帐号</Link>
          </div>
        </li>
      </div>
    </div>
  }
}