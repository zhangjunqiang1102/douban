import React from  'react'
import {connect} from "react-redux";
// import actions from '../../store/actions/slider'
import actions from '../../store/actions/actions'
import Nav from "../../components/Nav/Nav";
import Slider from "./Slider/Slider";
import HomeList from "./HomeList/HomeList";
import Loading from "../../components/Loading/Loading";
import {loadMore} from '../../common/utils'


@connect(state=>({...state.home}),actions)
export default class Home extends  React.Component{
    componentDidMount(){
        if(this.props.sliders.length===0){
            this.props.getSlidersHQ()
        }
        if(this.props.homeList.length===0){
            this.props.getHomeListHQ()
        }
        loadMore(this.ele, this.props.getHomeListHQ)

    }
    render(){
        return <div ref={x=>this.ele=x}>
            <Nav/>
            {this.props.sliders.length?<Slider lists={this.props.sliders}/>: <Loading/>}
            {this.props.homeList.length?<HomeList lists={this.props.homeList}/>: <Loading/>}

        </div>
    }
}