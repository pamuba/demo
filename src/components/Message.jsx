import React, { Component } from 'react'

export class Message extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'This is the state of the class',
    }
  }

  changeMessage = () => {
     this.setState({
        message:'This is the NEW state of the class'
     })
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>CLICK</button>
      </>
    )
  }
}

export default Message