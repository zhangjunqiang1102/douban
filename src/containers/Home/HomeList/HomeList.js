import React from 'react';
import './HomeList.less'
import {Link} from 'react-router-dom'

export default class HomeList extends React.Component {
    render() {
        return <div className="list clearfix">
            <ul>
                {this.props.lists.map((item, index) => {
                    let {itemImg, itemTitle, itemDetail, itemSmall, aut, id} = item;
                    return <li className="feed-section" key={index}>
                        <Link to={{pathname: `/detail/${id}`, state: item}}>
                            <img src={itemImg}/>
                            <h3>{itemTitle}
                            </h3>
                            <p>{itemDetail}</p>
                            <div className="feed-auto">
                                <span className="by">by</span>
                                <span className="auto">{itemSmall}</span>
                                <span className="feed-label">{aut} </span>
                            </div>
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    }
}