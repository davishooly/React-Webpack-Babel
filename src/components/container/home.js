import React, { Component } from "react";
import HomeView from "../view/homeView";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerButton: false
    };
  }

  render() {
    return <HomeView parent={this} />;
  }
}
export default HomeContainer;
