import React, { Component } from "react";
import { BrowserRouter as Router, Router, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/books" component={Books} />
            <Route component={Books} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
