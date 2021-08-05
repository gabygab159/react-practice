import React, {useState} from 'react'

export default function Counter() {
  const [state, setState] = useState({
    count: 0,
    imgUrl: 'https://picsum.photos/200',
    tags:['tag1', 'tag2', 'tag3']
  }) 
  function Change(){
    return state.count === 0 ? 'Zero' : state.count
  }

  function getClass(){
    let classes = 'badge m-2 badge-';
    classes += state.count === 0 ? 'warning' : 'primary';
    return classes
  }
  return(
    <React.Fragment>
      <img src={state.imgUrl} alt=""/>
      <span className={getClass()}>{ Change() }</span>
      <button className='btn btn-primary'>Increment</button>
      <ul><li>
      {state.tags.map(tag =><li key={tag}>{tag}</li>)}
      </li></ul>
    </React.Fragment>
  )
}
