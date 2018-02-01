import React from 'react'
import './index.less'
import {connect} from 'react-redux';
import actions from '../../store/actions/group'



@connect(state => ({...state.group}), actions)
export default class Group extends React.Component {
    componentDidMount() {
        if(this.props.group.length===0){
            this.props.getGroupApi();
        }
    }
    render() {
        return <div className='group'>
            <h1>影视</h1>
            <ul className='group-list'>
                {this.props.group.map((item,index)=>{
                    return   <li key={index} className='group-li'>
                        <img  src={item.itemImg} alt="" className='group-img'/>
                        <p>{item.itemTitle}</p>
                        <i>{item.count}</i>
                        <span>{item.itemDetail}</span>
                    </li>
                })}
            </ul>
            <li className='more'>
                <a href="#">
                    更多相关小组
                </a>
            </li>
            <h1>读书</h1>
            <ul className='group-list'>
                {this.props.group.map((item,index)=>{
                    return   <li key={index} className='group-li'>
                        <img src={item.itemImg} alt="" className='group-img'/>
                        <p>{item.itemTitle}</p>
                        <i>{item.count}</i>
                        <span>{item.itemDetail}</span>
                    </li>
                })}
            </ul>
            <li className='more'>
                <a href="#">
                    更多相关小组
                </a>
            </li>
            <h1>音乐</h1>
            <ul className='group-list'>
                {this.props.group.map((item,index)=>{
                    return   <li key={index} className='group-li'>
                        <img src={item.itemImg} alt="" className='group-img'/>
                        <p>{item.itemTitle}</p>
                        <i>{item.count}</i>
                        <span>{item.itemDetail}</span>
                    </li>
                })}
            </ul>
            <li className='more'>
                <a href="#">
                    更多相关小组
                </a>
            </li>
            <h1>近期新租</h1>
            <ul className='group-list'>
                {this.props.group.map((item,index)=>{
                    return   <li key={index} className='group-li'>
                        <img src={item.itemImg} alt="" className='group-img'/>
                        <p>{item.itemTitle}</p>
                        <i>{item.count}</i>
                        <span>{item.itemDetail}</span>
                    </li>
                })}
            </ul>
            <li className='more'>
                <a href="#">
                    更多相关小组
                </a>
            </li>
            <h1>同城</h1>
            <ul className='group-list'>
                {this.props.group.map((item,index)=>{
                    return   <li key={index} className='group-li'>
                        <img src={item.itemImg} alt="" className='group-img'/>
                        <p>{item.itemTitle}</p>
                        <i>{item.count}</i>
                        <span>{item.itemDetail}</span>
                    </li>
                })}
            </ul>
            <li className='more'>
                <a href="#">
                    更多相关小组
                </a>
            </li>
            <h1>高校</h1>
            <ul className='group-list'>
                {this.props.group.map((item,index)=>{
                    return   <li key={index} className='group-li'>
                        <img src={item.itemImg} alt="" className='group-img'/>
                        <p>{item.itemTitle}</p>
                        <i>{item.count}</i>
                        <span>{item.itemDetail}</span>
                    </li>
                })}
            </ul>
            <li className='more'>
                <a href="#">
                    更多相关小组
                </a>
            </li>
            <h1>职场</h1>
            <ul className='group-list'>
                {this.props.group.map((item,index)=>{
                    return   <li key={index} className='group-li'>
                        <img src={item.itemImg} alt="" className='group-img'/>
                        <p>{item.itemTitle}</p>
                        <i>{item.count}</i>
                        <span>{item.itemDetail}</span>
                    </li>
                })}
            </ul>
            <li className='more'>
                <a href="#">
                    更多相关小组
                </a>
            </li>

            <div className='down-app'>
                <div className='info
                clearfix'>
                    <img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" width='48px'/>
                    <div className='info-content '>
                        <strong>豆瓣</strong>
                        <p>我们的精神角落</p>
                    </div>
                </div>
                <a href="https://www.douban.com/doubanapp/card/log?category=group_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_group_home%26direct_dl%3D1" className='a'>去 App Store 免费下载 iOS 客户端</a>
            </div>
        </div>


    }
}