import React from 'react';
import a from"../../../common/images/1.jpg"
import './HomeList.less'
export default class HomeList extends React.Component {
  render(){
    return <div className="list clearfix">
        <ul>
            {this.props.lists.map((item,index)=> {
                let {itemImg, itemTitle, itemDetail, itemSmall,aut} = item;
                return <li className="feed-section" key={index}>
                    <img src={itemImg}/>
                    <h3>{itemTitle}
                    </h3>
                    <p>{itemDetail}</p>
                    <div className="feed-auto">
                        <span className="by">by</span>
                        <span className="auto">{itemSmall}</span>
                        <span className="feed-label">{aut} </span>
                    </div>
                </li>
            })}

        </ul>
    </div>
  }
}