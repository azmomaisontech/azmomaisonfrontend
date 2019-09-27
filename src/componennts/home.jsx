import React, { Component } from "react";
import Body from "./body";
import Section from "./section";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Body />
        <Section />
      </div>
    );
  }
}

export default Home;
