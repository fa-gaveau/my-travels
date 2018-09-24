import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">my travels</h1>
        </header>
        <Quote
          quote="Destination : Africa"
          text="Country : Egypt"
          character="Distance : much kilometers"
          image="https://nsa39.casimages.com/img/2018/09/24/180924040640436268.jpg"
        />
        <Quote
          quote="Destination : America"
          text="Country : USA"
          character="Distance : much kilomter"
          image="https://nsa39.casimages.com/img/2018/09/24/180924040912845104.jpg"
        />
      </div>
    );
  }
}

export default App;