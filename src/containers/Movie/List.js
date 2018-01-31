import React from 'react';
import StarMark from "./StarMark";

export default class List extends React.Component {
    render() {
        let data=this.props.data
        console.log(data);
        return <div className="list-box">
            <div className="items">
                {data.map((item, ind) => {
                    return <a href="" key={ind}>
                        <img src={item.conImg}
                             alt=""/>
                        <span className="item-title">{item.itemName}</span>

                        <StarMark starts={item.starts} startsMins={item.startsMins} />

                    </a>
                })}


            </div>

        </div>
    }
}
