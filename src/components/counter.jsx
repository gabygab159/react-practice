import React, { useState } from "react";

export default function Counter() {
  const [state, setState] = useState({
    imgUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2"],
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
      <img src={state.imgUrl} alt="" />
      <span className={getClass()}>{Change()}</span>
      <button onClick={handleIncrement} className="btn btn-primary">
        Increment
      </button>
      {renderTags()}
    </React.Fragment>
  );
}
