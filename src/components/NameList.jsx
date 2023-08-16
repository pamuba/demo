import React, { Component } from 'react'

export class NameList extends Component {
  render() {
    const names = [
        {name:'Bruce', id:1}, 
        {name:'Clark',id:2},
        {name:'Diana', id:3}
    ]
    return (
      <div>
       {
         names.map(n => <h2 key={n.id}>{n.name}</h2>)
       }
      </div>
    )
  }
}

export default NameList