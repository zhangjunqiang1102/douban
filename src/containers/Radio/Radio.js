import React from 'react'
import Nav from "../../components/Nav/Nav";
import './index.less';

export default class Radio extends React.Component {
    render() {
        return <div className="radio">
            {/*<Nav/>*/}

            {/*登录发广播*/}
            <div className="radio-publish">
                <div className="radio-login clearfix">
                    <div className="radio-login-publish">
                        <img src="https://img1.doubanio.com/icon/user_normal.jpg" alt=""/>
                    </div>
                    <div className="radio-holder">登录发广播</div>
                    <i className="iconfont icon-13"></i>
                    <i className="iconfont icon-wenbenbianji"></i>
                </div>
            </div>


            {/*列表*/}
            <ul className="radio-lists">
                {/*豆瓣说*/}
                <li>
                    <div className="radio-btn-dou">
                        <a href="https://m.douban.com/people/95805238/">
                            <img src="https://img3.doubanio.com/icon/up95805238-16.jpg" alt=""/>
                        </a>
                    </div>

                    <div className="radio-desc">
                        <a href="https://m.douban.com/people/95805238/status/2095060547">
                            <div className="radio-doubanshuo">
                                <strong>豆瓣 <span>说：</span></strong>
                                <div className="radio-timer">2018-01-12 17:16:00</div>
                            </div>
                        </a>
                    </div>

                    <div className="radio-content">
                        <div className="radio-title">
                            <a href="https://m.douban.com/hashtag/%E8%B1%86%E7%93%A32017%E5%B9%B4%E5%BA%A6%E7%94%B5%E5%BD%B1%E6%A6%9C%E5%8D%95">
                                #豆瓣2017年度电影榜单#
                            </a>
                            你的专业补片指南
                            <a href="https://movie.douban.com/annual/2017?source=dbbroadcast">https://douc.cc/3fg15n</a>
                        </div>
                        <div className="radio-cover">
                            <img src="https://img1.doubanio.com/view/status/m/public/10SqVw.jpg" alt=""/>
                        </div>
                        <div className="radio-info clearfix">
                            <div className="iconfont icon-dianzan"><span>147</span></div>
                            <div className="iconfont icon-pinglun"><span>19</span></div>
                            <div className="iconfont icon-shuaxin"><span>96</span></div>
                            <div className="iconfont icon-more"></div>
                        </div>
                    </div>

                </li>

                {/*豆瓣日志*/}
                <li>
                    <div className="radio-btn-dou">
                        <a href="https://m.douban.com/people/95805238/">
                            <img src="https://img3.doubanio.com/icon/up95805238-16.jpg" alt=""/>
                        </a>
                    </div>

                    <div className="radio-desc">
                        <a href="https://m.douban.com/people/95805238/status/2088996665">
                            <div className="radio-doubanshuo">
                                <strong>豆瓣 <span>写了日记：</span></strong>
                                <div className="radio-timer">2018-01-12 17:16:00</div>
                            </div>
                        </a>
                    </div>

                    <div className="radio-diary">
                        <a href="https://www.douban.com/note/650948544/">
                            <div className="radio-diary-title">
                                豆瓣·电影日历 widget 添加教程
                            </div>
                            <div className="radio-diary-detail has-cover">
                                <div className="text">如何把豆瓣电影日历装进手机，随身携带？舍不得撕、懒得每天撕一页怎么办？ 现在，你可以把豆瓣电影日历...</div>
                                <div className="cover"></div>
                            </div>
                        </a>
                    </div>

                    <div className="radio-content">
                        <div className="radio-title"></div>
                        <div className="radio-cover"></div>
                        <div className="radio-info clearfix">
                            <div className="iconfont icon-dianzan"><span>147</span></div>
                            <div className="iconfont icon-pinglun"><span>19</span></div>
                            <div className="iconfont icon-shuaxin"><span>96</span></div>
                            <div className="iconfont icon-more"></div>
                        </div>
                    </div>

                </li>
            </ul>

            <div className="radio-wrapper-tip-off">
                <div className="radio-tip-off">
                    举报
                </div>
            </div>

            <div className="radio-wrapper-dialog">
                <div className="radio-mask"></div>
                <div className="radio-dialog">
                    <h2>继续操作需要登录豆瓣账号</h2>
                    <a href="https://accounts.douban.com/login?source=mobile&redir=https%3A%2F%2Fm.douban.com%2Fstatus%2F" className='btn btn-login'>登录</a>
                    <a href="https://www.douban.com/doubanapp/card/get_app?from=mdouban&client_uri=douban%3A%2F%2Fdouban.com%2Ftimeline&model=B&copy=1&page=status&channel=card_popup_continue" className='btn btn-open'>打开APP</a>
                    <a href="https://accounts.douban.com/register?source=mobile&redir=https%3A%2F%2Fm.douban.com%2Fstatus%2F" className='btn btn-register'>注册豆瓣账号</a>
                </div>
            </div>

        </div>
    }
}