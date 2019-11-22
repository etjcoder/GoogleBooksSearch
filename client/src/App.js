import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Books} />
            {/* <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} /> */}
            <Route component={Books} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
