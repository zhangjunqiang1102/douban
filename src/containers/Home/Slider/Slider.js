import React from 'react';
import './slider.less'
import ReactSwipe from 'react-swipe';
export default class Slider extends React.Component {
    constructor(){
        super();
        this.state = {index:0}
    }
    render(){
        let opts = {continuous: true,auto:3000,callback:(index)=> {
                this.setState({index});
            }};
        return <div className="home-swiper">
            <ReactSwipe className="carousel" swipeOptions={opts}>
                {this.props.lists.map((item,index)=>(
                    <div key={index}>

                        <a href={item.url}>
                            <img src={item.itemImg}/>
                            <p>{item.itemTitle}</p>
                        </a>

                    </div>
                ))}
            </ReactSwipe>
            <div className="dots">
                {this.props.lists.map((item,index)=>(
                    <span key={index}className={this.state.index === index?'active':''}></span>
                ))}
            </div>
        </div>
    }
}
