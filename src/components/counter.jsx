import React, {useState} from 'react'

export default function Counter() {
  const [state, setState] = useState({
    count: 1,
    imgUrl: 'https://picsum.photos/200'
  }) 
  function Change(){
    return state.count === 0 ? 'Zero' : state.count
  }
  return(
    <React.Fragment>
      <img src={state.imgUrl} alt=""/>
      <span className='badge badge-primary'>{ Change() }</span>
      <button>Increment</button>
    </React.Fragment>
  )
}
