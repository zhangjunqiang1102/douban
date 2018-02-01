import React from 'react';
import './index.less';
import FootLogo from "../../components/FooterLogo/FootLogo";
import {connect} from 'react-redux';
import actions from '../../store/actions/movie'
import List from "./List";

@connect(state => ({...state.movie}), actions)
export default class Movie extends React.Component {

    componentDidMount() {

        this.props.getMovieAPI()
    }

    render() {
        // console.log(this.props.hot);

        return <div>
            {this.props.hot.map((item, index) => {
                return (
                    <section key={index}>
                        <div className="title-box">
                            <h2>{item.title}</h2>
                            <a href="">更多</a>
                        </div>
                        <List data={item.moiveItems}/>

                    </section>
                )

            })}

            {/*发现好电影*/}
            <section>
                <div className="title-box">
                    <h2>发现好电影</h2>
                    <a href="">更多</a>
                </div>
                <div className="section-content">
                    <ul>
                        <li style={{"borderColor": "#4F9DED"}}><a href="https://m.douban.com/doulist/968362/"
                                                                  style={{"color": "#4F9DED"}}>同时入选IMDB250和豆瓣电影250的电影</a>
                        </li>
                        <li style={{"borderColor": "#42BD56"}}><a href="https://m.douban.com/doulist/16002/"
                                                                  style={{"color": "#42BD56"}}>带你进入不正常的世界</a></li>
                        <li style={{"borderColor": "#FFAC2D"}}><a href="https://m.douban.com/doulist/190343/"
                                                                  style={{"color": "#FFAC2D"}}>用电【影】来祭奠逝去的岁月</a></li>
                        <li style={{"borderColor": "#3BA94D"}}><a href="https://m.douban.com/doulist/1125971/"
                                                                  style={{"color": "#3BA94D"}}>女孩们的故事【电影】</a></li>
                        <li className="line"></li>
                        <li style={{"borderColor": "#42BD56"}}>
                            <a href="https://www.douban.com/doubanapp/dispatch?from=mdouban&amp;download=1&amp;model=B&amp;copy=1&amp;page=movie&amp;channel=card_find_movie&amp;uri=%2Fmovie%2Ftag"
                               style={{"color": "#42BD56"}}>
                                使用 App 【找电影】功能
                            </a>
                        </li>
                        <li style={{"borderColor": "#FF4055"}}><a href="https://m.douban.com/doulist/4253902/"
                                                                  style={{"color": "#FF4055"}}>科幻是未来的钥匙——科幻启示录【科幻题材】</a>
                        </li>
                        <li style={{"borderColor": "#FFC46C"}}><a href="https://m.douban.com/doulist/121326/"
                                                                  style={{"color": "#FFC46C"}}>美国生活面面观</a></li>
                        <li style={{"borderColor": "#2384E8"}}><a href="https://m.douban.com/doulist/37479562/"
                                                                  style={{"color": "#2384E8"}}>2015终极期待</a></li>
                        <li style={{"borderColor": "#CC3344"}}><a href="https://m.douban.com/doulist/458087/"
                                                                  style={{"color": "#CC3344"}}>经典韩国电影——收集100部</a></li>

                    </ul>
                </div>
            </section>

            <section>
                <div className="title-box">
                    <h2>分类浏览</h2>
                    <a href="">更多</a>
                </div>
                <ul className="type-list">
                    <li><a href="/movie/classic">经典<span></span></a></li>
                    <li><a href="/movie/underrated">冷门佳片<span></span></a></li>
                    <li><a href="/movie/doubantop">豆瓣高分<span></span></a></li>
                    <li><a href="/movie/action">动作<span></span></a></li>
                    <li><a href="/movie/comedy">喜剧<span></span></a></li>
                    <li><a href="/movie/love">爱情<span></span></a></li>
                    <li><a href="/movie/mystery">悬疑<span></span></a></li>
                    <li><a href="/movie/horror">恐怖<span></span></a></li>
                    <li><a href="/movie/scifi">科幻<span></span></a></li>
                    <li><a href="/movie/sweet">治愈<span></span></a></li>
                    <li><a href="/movie/artfilm">文艺<span></span></a></li>
                    <li><a href="/movie/youth">成长<span></span></a></li>
                    <li><a href="/movie/animation">动画<span></span></a></li>
                    <li><a href="/movie/chinese">华语<span></span></a></li>
                    <li><a href="/movie/western">欧美<span></span></a></li>
                    <li><a href="/movie/korean">韩国<span></span></a></li>
                    <li><a href="/movie/japanese">日本<span></span></a></li>
                    <li></li>
                </ul>
            </section>
            <FootLogo/>
        </div>
    }
}