import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Counters from "./components/counters";
import Nav from "./components/nav";

export default function App() {
  return (
    <React.Fragment>
      <Nav />
      <Router>
        <Route path="/" component={Counters} />
      </Router>
    </React.Fragment>
  );
}
