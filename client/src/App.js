import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Card />
      </div>
    );
  }
}

export default App;
