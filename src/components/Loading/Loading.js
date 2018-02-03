import React from 'react';
import './load.less'
import load from '../../common/images/loading_green.gif'
export default class Loading extends React.Component {
    render(){
        return(
            <div className='loading'>
                <img src={load} alt=""/>
            </div>
        )
    }
}
