import React, { Component } from "react";
import logo from "./logo.svg";

// components
import AutoCompletionBox from "./components/auto-completion-box";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AutoCompletionBox />
      </React.Fragment>
    );
  }
}

export default App;
