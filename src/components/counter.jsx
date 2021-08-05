import React, {useState} from 'react'

export default function Counter() {
  const [state, setState] = useState({
    count: 0
  }) 
  return(
    <React.Fragment>
      <span>{ state.count }</span>
      <button>Increment</button>
    </React.Fragment>
  )
}