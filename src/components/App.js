import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomeContainer from "../components/container/home";
import FormContainer from "../components/container/form";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/form" component={FormContainer} />
            <Route component={FormContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
