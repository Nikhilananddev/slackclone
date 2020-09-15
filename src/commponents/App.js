import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

function Home() {
  return <div>Home</div>;
}

function Some() {
  return <div>Some</div>;
}

import { SignIn } from "./";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/some" component={Some} />
        </Switch>
      </div>
    );
  }
}

export default App;
