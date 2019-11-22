import React, { Component } from "react";
import { BrowserRouter as Router, Router, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Search from "./pages/Search";


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
