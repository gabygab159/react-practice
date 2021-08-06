import React, { useState } from "react";
import Counter from "./counter";

export default function Counters() {
  const [counters, setCounters] = useState([
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
    {
      id: 3,
      value: 0,
    },
  ]);

  return (
    <div>{[...counters.map((counter) => <Counter key={counters.id} />)]}</div>
  );
}
