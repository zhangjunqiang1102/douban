import React from 'react';
import {Link} from 'react-router-dom';
import './index.less';
import Nav from "../../components/Nav/Nav";
import FootLogo from "../../components/FooterLogo/FootLogo";
import actions from '../../store/actions/radio';
import {connect} from "react-redux";

@connect(state => ({...state}), actions)
export default class Radio extends React.Component {
    constructor(){
        super();
        this.flag=-1;
    }

    componentDidMount() {
        if (this.props.radio.length === 0) {
            this.props.getRadioAPI();
        }
    }

    wrapShow = (e) => {
        this.flag*=-1;
        if(this.flag===1){
            this.wrap.style.visibility = 'visible';
            this.wrap.style.zIndex = 10;
            this.wrap.style.top = (e.clientY/100*2-1.5)+'rem';
        }
        if(this.flag===-1){
            this.wrap.style.visibility = 'hidden';
            this.wrap.style.zIndex = -100;
        }

    };
    dialogShow = (e) => {
        if (e.target.className.includes("dialog")) {
            this.dia.style.display = 'block'
        } else {
            this.dia.style.display = 'none'
        }
    };

    render() {
        return <div className="radio" onClick={this.dialogShow}>
            {/*登录发广播*/}
            <div className="radio-publish">
                <div className="radio-login clearfix">
                    <div className="radio-login-publish">
                        <img src="https://img1.doubanio.com/icon/user_normal.jpg" className="dialog"/>
                    </div>
                    <div className="radio-holder dialog">登录发广播</div>
                    <i className="iconfont icon-13 dialog"></i>
                    <i className="iconfont icon-wenbenbianji dialog"></i>
                </div>
            </div>

            {/*列表*/}
            <ul className="radio-lists">
                {this.props.radio.map((item, index) => {
                    let list = item.status;
                    return list.is_status_ad ? <li key={index} className="radio-lis">
                        <div className="radio-btn-dou">
                            <a href="https://m.douban.com/people/95805238/">
                                <img src="https://img3.doubanio.com/icon/up95805238-16.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="radio-desc">
                            <a href="https://m.douban.com/people/95805238/status/2095060547">
                                <div className="radio-doubanshuo">
                                    <strong>豆瓣 <span>说：</span></strong>
                                    <div className="radio-timer">{list.create_time}</div>
                                </div>
                            </a>
                        </div>
                        <div className="radio-content">
                            <div className="radio-title">
                                <a href={list.entities.length===2?list.entities[0].uri:null}>{list.entities.length===2?"#"+list.entities[0].title+"#":null}</a>
                                {list.text}
                                <a href={list.entities.length===2?list.entities[1].uri:list.entities[0].uri}> {list.entities.length===2?list.entities[1].title:list.entities[0].title}</a>
                            </div>
                            <div className="radio-cover">
                                <img src={list.images[0].normal.url || list.image[0].normal.url} alt=""/>
                            </div>
                            <div className="radio-info clearfix">
                                <div className="iconfont icon-dianzan dialog"> <span
                                    className="dialog">{list.like_count}</span></div>
                                <Link to={"/count/detail/"+list.id} className="iconfont icon-pinglun"> <span>{list.comments_count}</span></Link>
                                <div className="iconfont icon-shuaxin dialog"> <span
                                    className="dialog">{list.reshares_count}</span></div>
                                <div className="iconfont icon-more" onClick={(e)=>{this.wrapShow(e)}}></div>
                            </div>
                        </div>
                    </li> : <li key={index} className="radio-lis">
                        <div className="radio-btn-dou">
                            <a href="https://m.douban.com/people/95805238/"><img src="https://img3.doubanio.com/icon/up95805238-16.jpg" alt=""/></a>
                        </div>
                        <div className="radio-desc">
                            <a href="https://m.douban.com/people/95805238/status/2088996665">
                                <div className="radio-doubanshuo">
                                    <strong>豆瓣 <span>写了日记：</span></strong>
                                    <div className="radio-timer">{list.create_time}</div>
                                </div>
                            </a>
                        </div>
                        <div className="radio-diary">
                            <a href="https://www.douban.com/note/650948544/">
                                <div className="radio-diary-title">{list.card?list.card.title:"受苹果公司应用内支付新规的影响"}</div>
                                <div className={list.card && list.card.image ? "radio-diary-detail has-cover" : "radio-diary-detail"}>
                                    <div className="text">{list.card ? list.card.subtitle : list.text}</div>
                                    {list.card && list.card.image ?
                                        <div className="cover" style={{backgroundImage: `url(${list.card.image.large.url})`}}></div> : null}
                                </div>
                            </a>
                        </div>
                        <div className="radio-content">
                            <div className="radio-title"></div>
                            <div className="radio-cover"></div>
                            <div className="radio-info clearfix">
                                <div className="iconfont icon-dianzan dialog"> <span
                                    className="dialog">{list.like_count}</span></div>
                                <Link to={"/count/detail/"+list.id} className="iconfont icon-pinglun"> <span>{list.comments_count}</span></Link>
                                <div className="iconfont icon-shuaxin dialog"> <span
                                    className="dialog">{list.reshares_count}</span></div>
                                <div className="iconfont icon-more" onClick={(e)=>{this.wrapShow(e)}}></div>
                            </div>
                        </div>
                    </li>
                })}
            </ul>

            <div className="radio-wrapper-tip-off" ref={x => this.wrap = x}>
                <div className="radio-tip-off">
                    举报
                </div>
            </div>

            <div className="radio-wrapper-dialog" ref={x => this.dia = x}>
                <div className="radio-mask"></div>
                <div className="radio-dialog dialog">
                    <h2 className="dialog">继续操作需要登录豆瓣账号</h2>
                    <Link to='/login' className='btn btn-login'>登录</Link>
                    <a href="https://www.douban.com/doubanapp/card/get_app?from=mdouban&client_uri=douban%3A%2F%2Fdouban.com%2Ftimeline&model=B&copy=1&page=status&channel=card_popup_continue"
                       className='btn btn-open'>打开APP</a>
                    <a href="https://accounts.douban.com/register?source=mobile&redir=https%3A%2F%2Fm.douban.com%2Fstatus%2F"
                       className='btn btn-register'>注册豆瓣账号</a>
                </div>
            </div>

            <FootLogo/>
        </div>
    }
}