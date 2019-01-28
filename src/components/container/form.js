import React, { Component } from "react";
import FormView from "../view/formView";

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
    return (
      <div>
        <FormView />
      </div>
    );
  }
}

export default FormComponent;
