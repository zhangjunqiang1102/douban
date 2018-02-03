import React from 'react'
import "./index.less"
import action from "../../../store/actions/session"

export default class Personal extends React.Component {
  render() {
    return <div className="page">
      <div className="personal ">
        <div className="bd clearfix" >
          <img src="https://img1.doubanio.com/icon/user_normal.jpg" className="jpg"/>
          <ul className="detail-2">
            <li className="basic-info">
              <span className="id">ID:173286249</span>
              <a href="javascript:;">个人主页</a>
            </li>
            <li className="relationship">
              <a href="javascript:;">关注 0</a>
              <a href="javascript:;">被关注 0</a>
            </li>
          </ul>
        </div>
      </div>
      <ul className="collection-2 clearfix">
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/091d828e06cc8fa88ad7be161becfea88e14cf1c/pics/card/favourite.png"/>
            <span>喜欢</span>
          </a>
        </li>
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/15be66dc7121d728f11cbf4e3ac674a0a68331ca/pics/card/diary.png"/>
            <span>日记</span>
          </a>
        </li>
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/1a4604b83e0d7e091c610fe662c9a50518188193/pics/card/album.png"/>
            <span>相册</span>
          </a>
        </li>
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/a827877341968d09f309b70646f409d9fe39a2f9/pics/card/broadcast.png"/>
            <span>我的广播</span>
          </a>
        </li>
        <li className="hr"></li>
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/7d8c1ccedee37780b29e790e311da66ac863cd7b/pics/card/movie.png"/>
            <span>电影 电视</span>
          </a>
        </li>
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/d0ffbee4f5ce5b59594dc53fad59c93cb3e8f646/pics/card/read.png"/>
            <span>读书</span>
          </a>
        </li>
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/d91d24876aaf5a441a4677a893a8d86068fbf5b1/pics/card/music.png"/>
            <span>音乐</span>
          </a>
        </li>
        <li className="item">
        <a href="javascript:;">
          <img src="https://img3.doubanio.com/f/talion/aaa90ee88850f7665f858011bd5ea3219fca0647/pics/card/dou list.png"/>
          <span>我的豆列</span>
        </a>
      </li>
        <li className="hr"></li>
        <li className="item">
          <a href="javascript:;">
            <img src="https://img3.doubanio.com/f/talion/175762b338bf0d1b64ca2f33f18469d3db1160ba/pics/card/activity.png"/>
            <span>同城活动</span>
          </a>
        </li>
      </ul>
    </div>
  }
}