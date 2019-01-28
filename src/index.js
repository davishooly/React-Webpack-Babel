import React, { Component } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import FormView from "./components/view/formView";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  // onHandleChange = event => {
  //   this.setState({});
  // };

  render() {
    console.log("here");

    return <FormView parent={this} />;
  }
}

ReactDOM.render(<FormComponent />, document.querySelector("#root"));
