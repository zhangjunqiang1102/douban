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
        </div>

    }
}