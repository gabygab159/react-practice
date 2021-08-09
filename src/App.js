import React from "react";
import Counters from "./components/counters";
import Nav from "./components/nav";

export default function App() {
  return (
    <React.Fragment>
      <Nav />
      <Counters />
    </React.Fragment>
  );
}
