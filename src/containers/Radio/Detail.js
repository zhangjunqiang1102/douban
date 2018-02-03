import React from 'react';
import {Link} from 'react-router-dom';
import './index.less';
import Nav from "../../components/Nav/Nav";
import FootLogo from "../../components/FooterLogo/FootLogo";
import actions from '../../store/actions/radio';
import {connect} from "react-redux";

@connect(state => ({...state}), actions)
export default class RadioDetail extends React.Component {
    constructor() {
        super();
        this.flag = -1;
    }

    componentDidMount() {
        if (this.props.radio.length === 0) {
            this.props.getRadioAPI();
        }
    }

    wrapShow = (e) => {
        this.flag *= -1;
        if (this.flag === 1) {
            this.wrap.style.visibility = 'visible';
            this.wrap.style.zIndex = 10;
            this.wrap.style.top = (e.clientY / 100 * 2 - 1.5) + 'rem';
        }
        if (this.flag === -1) {
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
            <div className="radio-lists">
                {this.props.radio.map((item, index) => {
                    if (item.status.id === this.props.match.params.id) {
                        if(item.status.is_status_ad){
                            return <div key={index}>
                                <div  className="radio-lis">
                                    <div className="radio-btn-dou">
                                        <a href="https://m.douban.com/people/95805238/">
                                            <img src="https://img3.doubanio.com/icon/up95805238-16.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="radio-desc">
                                        <a href="https://m.douban.com/people/95805238/status/2095060547">
                                            <div className="radio-doubanshuo">
                                                <strong>豆瓣 <span>说：</span></strong>
                                                <div className="radio-timer">{item.status.create_time}</div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="radio-content detail">
                                        <div className="radio-title">
                                            <a href={item.status.entities.length === 2 ? item.status.entities[0].uri : null}>{item.status.entities.length === 2 ? "#" + item.status.entities[0].title + "#" : null}</a>
                                            {item.status.text}
                                            <a href={item.status.entities.length === 2 ? item.status.entities[1].uri : item.status.entities[0].uri}> {item.status.entities.length === 2 ? item.status.entities[1].title : item.status.entities[0].title}</a>
                                        </div>
                                        <div className="radio-cover">
                                            <img src={item.status.images[0].normal.url || item.status.image[0].normal.url}
                                                 alt=""/>
                                        </div>
                                        <div className="radio-info clearfix">
                                            <div className="iconfont icon-dianzan dialog"> <span
                                                className="dialog">{item.status.like_count}</span></div>
                                            <div className="iconfont icon-shuaxin dialog"> <span
                                                className="dialog">{item.status.reshares_count}</span></div>
                                            <div className="iconfont icon-more" onClick={(e) => {
                                                this.wrapShow(e)
                                            }}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="comment-title">回应 {item.comments.length}</h2>
                                <ul className="comment-lists">
                                    {item.comments.map((item,index)=>{
                                        return <li key={index} className="clearfix">
                                            <div className="desc">
                                                <a href={item.author.url}><img src={item.author.avatar}/></a>
                                                <div className="userInfo">
                                                    <strong>{item.author.name}</strong>
                                                    <div className="timestamp">{item.create_time}</div>
                                                </div>
                                                <div className="content">{item.text}</div>
                                            </div>
                                            <div className="iconfont icon-more" onClick={(e) => {this.wrapShow(e)}}></div>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        }
                        return <div key={index}>
                            <div  className="radio-lis">
                                <div className="radio-btn-dou">
                                    <a href="https://m.douban.com/people/95805238/">
                                        <img src="https://img3.doubanio.com/icon/up95805238-16.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="radio-desc">
                                    <a href="https://m.douban.com/people/95805238/status/2095060547">
                                        <div className="radio-doubanshuo">
                                            <strong>豆瓣 <span>写了日记：</span></strong>
                                            <div className="radio-timer">{item.status.create_time}</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="radio-diary detail">
                                    <div className="radio-title">
                                        <div className="radio-diary-title">
                                            {item.status.card?item.status.card.title:"受苹果公司应用内支付新规的影响"}
                                        </div>
                                    </div>
                                    <div className={item.status.card && item.status.card.image ? "radio-diary-detail has-cover" : "radio-diary-detail"}>
                                        <div className="text">{item.status.card ? item.status.card.subtitle : item.status.text}</div>
                                        {item.status.card && item.status.card.image ?
                                            <div className="cover" style={{backgroundImage: `url(${item.status.card.image.large.url})`}}></div> : null}
                                    </div>
                                </div>
                                <div className="radio-content detail">
                                    <div className="radio-info clearfix">
                                        <div className="iconfont icon-dianzan dialog"> <span
                                            className="dialog">{item.status.like_count}</span></div>
                                        <div className="iconfont icon-shuaxin dialog"> <span
                                            className="dialog">{item.status.reshares_count}</span></div>
                                        <div className="iconfont icon-more" onClick={(e) => {this.wrapShow(e)}}></div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="comment-title">回应 {item.comments.length}</h2>
                            <ul className="comment-lists">
                                {item.comments.map((item,index)=>{
                                    return <li key={index} className="clearfix">
                                        <div className="desc">
                                            <a href={item.author.url}><img src={item.author.avatar}/></a>
                                            <div className="userInfo">
                                                <strong>{item.author.name}</strong>
                                                <div className="timestamp">{item.create_time}</div>
                                            </div>
                                            <div className="content">{item.text}</div>
                                        </div>
                                        <div className="iconfont icon-more" onClick={(e) => {this.wrapShow(e)}}></div>
                                    </li>
                                })}
                            </ul>
                        </div>
                    }
                    return
                })}
            </div>
            <div className="radio-footer dialog">添加回应</div>
            <div className="radio-wrapper-tip-off" ref={x => this.wrap = x}>
                <div className="radio-tip-off">举报</div>
            </div>
            <div className="radio-wrapper-dialog" ref={x => this.dia = x}>
                <div className="radio-mask"></div>
                <div className="radio-dialog dialog">
                    <h2 className="dialog">继续操作需要登录豆瓣账号</h2>
                    <Link to="/login" className='btn btn-login'>登录</Link>
                    <a href="https://www.douban.com/doubanapp/card/get_app?from=mdouban&client_uri=douban%3A%2F%2Fdouban.com%2Ftimeline&model=B&copy=1&page=status&channel=card_popup_continue" className='btn btn-open'>打开APP</a>
                    <Link to='/profile' className='btn btn-register'>注册豆瓣账号</Link>
                </div>
            </div>
            <FootLogo/>
        </div>
    }
}