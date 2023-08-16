import React, { Component } from 'react'

export class UserGreetings extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : true
    }
  }
  render() {
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome John Smith</div>
    // }
    // else{
    //     message = <div>Welcome User</div>
    // }
    // return (
    //     <div>
    //         {message}
    //     </div>
    // )

    return this.state.isLoggedIn && <div>Welcome John Smith</div>
  }
}

export default UserGreetings