import React, { useState } from "react";
import Counter from "./counter";

export default function Counters() {
  const [counters, setCounters] = useState([
    {
      id: 1,
      value: 3,
    },
    {
      id: 2,
      value: 4,
    },
    {
      id: 3,
      value: 5,
    },
  ]);

  return (
    <div>
      {[
        ...counters.map((counter) => (
          <div>
            <h3>Title</h3>
            <Counter key={counter.id} value={counter.value} />
          </div>
        )),
      ]}
    </div>
  );
}
