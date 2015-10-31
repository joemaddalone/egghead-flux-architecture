import React from 'react'
import AppActions from '../../actions/app-actions'

class RemoveFromCart extends React.Component {
  constructor(){
    super();
  }
  handler() {
    AppActions.removeItem(this.props.index)
  }
  render(){
    return <button onClick={this.handler.bind(this)}>x</button>
  }
}

 export default RemoveFromCart;
