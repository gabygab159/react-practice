import React, { useState } from "react";

export default function Counter(props) {
  const [state, setState] = useState({
    tags: [],
  });

  const [count, setCount] = useState(0);

  function renderTags() {
    if (state.tags.length === 0) return <p>'there are no tags'</p>;
    return (
      <ul>
        <li>
          {state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </li>
      </ul>
    );
  }
  function Change() {
    return count === 0 ? "Zero" : count;
  }

  function getClass() {
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  }

  function handleIncrement() {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <React.Fragment>
      {props.value}
      <span className={getClass()}>{Change()}</span>
      <button onClick={handleIncrement} className="btn btn-primary">
        Increment
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.countId)}
      >
        Delete
      </button>
      {renderTags()}
    </React.Fragment>
  );
}
