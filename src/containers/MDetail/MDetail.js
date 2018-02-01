import React from 'react'
import './index.less'
import {getHome} from '../../api/home';
import 'babel-polyfill';


export default class Book extends React.Component {
  constructor(){
    super();
    this.state = {movie:{}}
  }
  async componentWillMount(){
    let movie = this.props.location.state;
    console.log(movie);
    if(!movie){
      movie = await getHome(this.props.match.params.movieId);
    }
    this.setState({movie});
  }

  render() {
    return <div className="both">

      <div className="title">
        <h1>{this.state.movie.itemName}</h1>
        <div className="title_con clearfix">
          <div className="right ">
            <a href="#">
              <img src={this.state.movie.conImg} alt=""/>
            </a>
          </div>
          <div className="left">
            <p className="rating">
              <span className="rating-stars">
                <span className="rating-star rating-star-medium-full"> </span>

              </span>
              <strong>{this.state.movie.starts}</strong>
              <span>{this.state.movie.people}</span>
            </p>
            <p className="meta">
              {this.state.movie.notes}
            </p>
          </div>

        </div>
        <div className="subject_mark clearfix">
          <div className="mark_item ">
            <a href="javascript:;" className="item_left">
              <span>想看</span>
            </a>
            <a href="javascript:;" className="item_right">
              <span>看过</span>
            </a>
          </div>
        </div>
        <div className="subject-intro">
          <h2>移动迷宫3：死亡解药的剧情简介</h2>
          <div className="bd">
            <p>{this.state.movie.story}<a className="expand"
                                                                                       href="javascript:;">(展开)</a></p>
          </div>
        </div>
        <div className="tags">
          <p>查看更多豆瓣高分电影电视剧</p>
          <ul>
            <li>
              <a href="#">科幻</a>
            </li>
            <li>
              <a href="#">美国</a>
            </li>
            <li>
              <a href="#">动作</a>
            </li>
            <li>
              <a href="#">冒险</a>
            </li>
            <li>
              <a href="#">2018</a>
            </li>
            <li>
              <a href="#">反乌托邦</a>
            </li>
            <li>
              <a href="#">小说改编</a>
            </li>
            <li>
              <a href="#">悬疑</a>
            </li>
          </ul>
        </div>
        <div className="subject-pics">
          <h2>移动迷宫3：死亡解药的预告片(24)和图片(58)</h2>
          <div className="bd">
            <ul className="wx-preview clearfix">


              <li className="pic">
                <a href="#">
                  <img src="https://img3.doubanio.com/view/photo/lthumb/public/p2511051532.webp"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="subject-comments">
          <h2>移动迷宫3：死亡解药的短评(8019)</h2>
          <div className="pop clearfix">
            <ul>
              <li>
                <img src="https://img3.doubanio.com/icon/up62974457-11.jpg"/>

                <div className="pinglun">
                  <strong>瓦力</strong>
                  <span>6天前</span>
                  <p>1>2>3，场面比2升级了，迷宫？不存在的。槽点数量系列之最。请问：什么样的炸弹能瞬间炸塌百米高的城墙？什么样的人连人带车从百米高处坠落竟能毫发无伤？什么样的隔离玻璃一砸就碎？号称安保严密的据点被男主一行人轻易潜入且来去自如，结局混战毁一座城为救几十人死数万人，这是反乌托邦还是反人类？</p>
                  <div><span>530</span>
                    <i>...</i>
                  </div>
                </div>
              </li>
              <li>
                <img src="https://img3.doubanio.com/icon/up62974457-11.jpg"/>
                <div className="pinglun">
                  <strong>法兰西胶片</strong>
                  <span>3周前</span>
                  <p>1>2>3，场面比2升级了，迷宫？不存在的。槽点数量系列之最。请问：什么样的炸弹能瞬间炸塌百米高的城墙？什么样的人连人带车从百米高处坠落竟能毫发无伤？什么样的隔离玻璃一砸就碎？号称安保严密的据点被男主一行人轻易潜入且来去自如，结局混战毁一座城为救几十人死数万人，这是反乌托邦还是反人类？</p>
                  <div><span>530</span>
                    <i>...</i>
                  </div>
                </div>
              </li>
              <li>
                <img src="https://img3.doubanio.com/icon/up62974457-11.jpg"/>
                <div className="pinglun">
                  <strong>凌睿</strong>
                  <span>4天前</span>
                  <p>有人说本片没有迷宫，我表示严重不服：导演、编剧、主角、反派的脑回路不就是迷宫吗？只有入口没有出口，进去就出不来了。不到最后一刻你都不知道他们在想什么，看完了也不知道他们在想什么。</p>
                  <div><span>486</span>
                    <i>...</i>
                  </div>
                </div>
              </li>
              <li>
                <img src="https://img3.doubanio.com/icon/up62974457-11.jpg"/>
                <div className="pinglun">
                  <strong>fafa</strong>
                  <span>5天前</span>
                  <p>死人很牵强，Newt就差在那几分钟（其实一开始就可以给他打解药的吧！），Teresa更是眼看着再蹦一下就行了偏偏要站着等死？然后救孩子们的方式两回都是挂钩吊走，创意有限。结局的欢乐祥和气氛十分之莫名其妙，仔细想想好像并没有干成什么事，病毒还在蔓延，制药的人没了，男主拿着一管药能干啥？</p>
                  <div><span>475</span>
                    <i>...</i>
                  </div>
                </div>
              </li>
              <li className="pra"><a href="#">查看全部短评</a></li>


            </ul>


          </div>


        </div>


      </div>


    </div>
  }
}