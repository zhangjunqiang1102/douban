import React from 'react';
import pic from './doban_bottom.jpg'
export default class FootLogo extends React.Component {
  render(){
    return <div style={{textAlign:"center"}}>
        <img src={pic} alt="" style={{width:"55%",paddingBottom:'1rem'}}/>
    </div>
  }
}
