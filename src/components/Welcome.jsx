import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    // this.props.tech = "AnglarJS"
    return (
      <div>This is a class Component using {this.props.tech}</div>
    )
  }
}

export default Welcome