import React from 'react';
import './load.less'
export default class Loading extends React.Component {
    render(){
        return(
            <div className='loading'>
                <div className='loader loader--audioWave'></div>
            </div>
        )
    }
}