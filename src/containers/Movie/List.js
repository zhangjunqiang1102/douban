import React from 'react';
import {Link} from 'react-router-dom';
import StarMark from "./StarMark";

export default class List extends React.Component {
    render() {
        let data=this.props.data
        console.log(data);
        return <div className="list-box">
            <div className="items">
                {data.map((item, ind) => {
                    return <Link to={{pathname:`/detail/${item.movieId}`,state:item}} key={ind}>
                        <img src={item.conImg}
                             alt=""/>
                        <span className="item-title">{item.itemName}</span>

                        <StarMark starts={item.starts} startsMins={item.startsMins} />

                    </Link>
                })}


            </div>

        </div>
    }
}
