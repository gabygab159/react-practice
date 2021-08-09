import React, { Component, useState } from "react";
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
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  const [user, setUser] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(true);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setUser(false);
  };

  return (
    <React.Fragment>
      <Nav />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Counters}
            handleLogin={handleLogin}
          />
          <PrivateRoute
            exact
            path="/user"
            handleLogout={handleLogout}
            component={UserData}
          />

          <Route path="*" render={() => <h1>404 page not found</h1>} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
