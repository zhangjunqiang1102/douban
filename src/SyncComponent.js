import React from 'react';
export default function (fn) {
  return class HighOrderComponent extends React.Component{
    constructor(){
      super();
      this.state = {component:null}
    }
    async componentDidMount(){
      let {default:C} = await fn();
      this.setState({component:C});
    }
    render(){
      let C = this.state.component;
      return C?<C/>:null
    }
  }
}