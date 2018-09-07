import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// components
import AutoCompletionBox from "./components/auto-completion-box";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
        <AutoCompletionBox />
      </React.Fragment>
    );
  }
}

export default App;
