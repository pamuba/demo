import React from 'react'

//ALL the properties
export function Greet(props) {
  return (
    <>
        <h2>Hello {props.name} a.k.s {props.heroName}</h2>
        {props.children}
        {/* <input type="text"/> */}
    </>
  )
}

// export default Greet