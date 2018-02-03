import React from 'react';
import './homeListDetail.less'
import Nav from "../../components/Nav/Nav";
import ggx from '../../common/images/timg.jpg'
import footer from '../../components/FooterLogo/doban_bottom.jpg';


export default class Detail extends React.Component {
    render() {
        return <div className="detail">
            <Nav/>
            <div className="detailBanner">
                <span>下载豆瓣App</span>
                <p>每天看点好内容</p>
                <a href="">
                    <button>急速下载</button>
                </a>
                <a href="">
                    <button className="dk">打开</button>
                </a>
            </div>
            <div className="content">
                <h1>2017我买了这几双鞋</h1>
                <span>天上有个小星星</span>
                <span className="lz">2018-01-18：18:12:28</span>
                <br/>
                <span  className="ht">来自话题服装搭配</span>
                <br/>
                <div>为了我的鞋柜，我在认认真真的买买买</div>
                <p>我非常享受在实体店试鞋的感觉，兴奋和激动之情溢于言表，因为在挑选几双心仪已久的高跟鞋上脚之后，总会有失望或者有惊喜的情绪此起彼伏，而当我最终买下选中的the one以后，瞬间感觉拥有了全世界。“Standing on high heels, I can see the whole world. ” 去年忍不住的我又“集邮”了....</p>
                <img src={ggx} className="ggx"/>
   <img src={footer} className="footer"/>
                </div>
        </div>

    }
}