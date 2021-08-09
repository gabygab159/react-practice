import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Counters from "./components/counters";
import UserData from "./components/userData";
import Nav from "./components/nav";

export default function App() {
  return (
    <React.Fragment>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Counters} />
          <Route exact path="/user" component={UserData} />

          <Route path="*" render={() => <h1>404 page not found</h1>} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
