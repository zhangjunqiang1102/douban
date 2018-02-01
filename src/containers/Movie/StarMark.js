import React from 'react';

export default class StarMark extends React.Component {
    render() {
        let starts = this.props.starts;
        let startsMins = this.props.startsMins;
        let arr=[];
        if (!starts){
            arr.push('暂无评论')
        }else{
            for (let i = 1; i <= 5;i++) {

                if (starts>=i){
                    arr.push( <span className="rating-star rating-star-small-full" key={i}></span>)
                }else{
                    arr.push(<span className="rating-star rating-star-small-gray" key={i}></span>)
                }

            }
        }

        return <div className="item-rating">
            <div className="star-box">
                <span className="rating-stars">
                    {arr}
                    {/*<span className="rating-star rating-star-small-full"></span>*/}
                    {/*<span className="rating-star rating-star-small-full"></span>*/}
                    {/*<span className="rating-star rating-star-small-full"></span>*/}
                    {/*<span className="rating-star rating-star-small-gray"></span>*/}
                    {/*<span className="rating-star rating-star-small-gray"></span>*/}
                </span>
                <span>{startsMins}</span>
            </div>
        </div>
    }
}
